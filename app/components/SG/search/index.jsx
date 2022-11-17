/*
 * Copyright (c) 2021, salesforce.com, inc.
 * All rights reserved.
 * SPDX-License-Identifier: BSD-3-Clause
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/BSD-3-Clause
 */
import React, {useRef, useState, useEffect} from 'react'
import PropTypes from 'prop-types'
import {
    Input,
    InputGroup,
    // New Right element import
    InputRightElement,
    Popover,
    PopoverTrigger,
    PopoverContent,
    Box,
    Flex,
    HStack,
    Spinner,
    IconButton
} from '@chakra-ui/react'
import SearchSuggestions from '../../search/partials/search-suggestions'
import {SearchIcon} from '../../icons'
import useSearchSuggestions from '../../../commerce-api/hooks/useSearchSuggestions'
import {boldString, getSessionJSONItem, setSessionJSONItem} from '../../../utils/utils'
import useNavigation from '../../../hooks/use-navigation'
import {HideOnDesktop, HideOnMobile} from '../../responsive'
import debounce from 'lodash/debounce'
import {RECENT_SEARCH_KEY, RECENT_SEARCH_LIMIT, RECENT_SEARCH_MIN_LENGTH} from '../../../constants'
import {
    productUrlBuilder,
    searchUrlBuilder,
    categoryUrlBuilder,
    contentUrlBuilder
} from '../../../utils/url'
import PopoverStyled from '../popover-styled'

const formatSuggestions = (searchSuggestions, input) => {
    return {
        categorySuggestions: searchSuggestions?.categorySuggestions?.categories?.map(
            (suggestion) => {
                return {
                    type: 'category',
                    id: suggestion.id,
                    link: categoryUrlBuilder({id: suggestion.id}),
                    name: suggestion.name,
                    parentName: suggestion.parentCategoryName
                }
            }
        ),
        productSuggestions: searchSuggestions?.searchProduct?.hits?.map((product) => {
            return {
                type: 'product',
                currency: product.currency,
                price: product.price,
                productId: product.productId,
                image: product?.image,
                name: product.productName,
                link: productUrlBuilder({id: product.productId})
            }
        }),
        phraseSuggestions: searchSuggestions?.productSuggestions?.suggestedPhrases?.map(
            (phrase) => {
                return {
                    type: 'phrase',
                    name: boldString(phrase.phrase, input),
                    link: searchUrlBuilder(phrase.phrase),
                    exactMatch: phrase.exactMatch
                }
            }
        ),
        customSuggestions: searchSuggestions?.customSuggestions?.suggestedPhrases?.map((phrase) => {
            return {
                type: 'phrase',
                name: phrase.phrase,
                link: searchUrlBuilder(phrase.phrase)
            }
        }),
        brandSuggestions: searchSuggestions?.brandSuggestions?.suggestedPhrases?.map((phrase) => {
            return {
                type: 'phrase',
                name: phrase.phrase,
                link: searchUrlBuilder(phrase.phrase)
            }
        }),
        contentSuggestions: searchSuggestions?.contentSuggestions?.content?.map((phrase) => {
            return {
                type: 'phrase',
                name: phrase.name,
                link: contentUrlBuilder(phrase.id)
            }
        })
    }
}

/**
 * The SearchInput component is a stylized
 * text input made specifically for use in
 * the application header.
 * @param  {object} props
 * @param  {object} ref reference to the input element
 * @return  {React.ReactElement} - SearchInput component
 */
const Search = (props) => {
    const {fullwidth, iconColor, _placeholderColor} = props

    const navigate = useNavigation()
    const searchSuggestion = useSearchSuggestions()
    const searchInputRef = useRef()
    const [isOpen, setIsOpen] = useState(false)
    const recentSearches = getSessionJSONItem(RECENT_SEARCH_KEY)
    const searchSuggestions = formatSuggestions(
        searchSuggestion.results,
        searchInputRef?.current?.value
    )

    // check if popover should open if we have suggestions
    useEffect(() => {
        shouldOpenPopover()
    }, [searchSuggestions])

    // Want to make sure we clear the suggestions when we are deleting characters
    useEffect(() => {
        if (searchInputRef?.current?.value <= 2) {
            searchSuggestion.clearSuggestedSearch()
        }
    }, [searchInputRef?.current?.value])

    const searchSuggestionsAvailable =
        searchSuggestions &&
        (searchSuggestions?.categorySuggestions?.length ||
            searchSuggestions?.phraseSuggestions?.length)

    const saveRecentSearch = (searchText) => {
        // Get recent searches or an empty array if undefined.
        let searches = getSessionJSONItem(RECENT_SEARCH_KEY) || []

        // Check if term is already in the saved searches
        searches = searches.filter(
            (savedSearchTerm) => searchText.toLowerCase() !== savedSearchTerm.toLowerCase()
        )

        // Create a new array consisting of the search text and up to 4 other resent searches.
        // I'm assuming the order is newest to oldest.
        searches = [searchText, ...searches].slice(0, RECENT_SEARCH_LIMIT)

        // Replace the save resent search with the updated value.
        setSessionJSONItem(RECENT_SEARCH_KEY, searches)
    }

    const debouncedSearch = debounce((input) => searchSuggestion.getSearchSuggestions(input), 300)

    const onSearchChange = async (e) => {
        const input = e.target.value
        if (input.length >= RECENT_SEARCH_MIN_LENGTH) {
            debouncedSearch(input)
        }
    }

    const clearInput = () => {
        searchInputRef.current.blur()
        searchSuggestion.clearSuggestedSearch()
        setIsOpen(false)
    }

    const onSubmitSearch = (e) => {
        e.preventDefault()
        // Avoid blank spaces to be searched
        let searchText = searchInputRef.current.value.trim()
        // Avoid empty string searches
        if (searchText.length < 1) {
            return
        }
        saveRecentSearch(searchText)
        clearInput()
        navigate(searchUrlBuilder(searchText))
    }

    const closeAndNavigate = (link) => {
        if (!link) {
            clearInput()
            setIsOpen(false)
        } else {
            clearInput()
            setIsOpen(false)
            navigate(link)
        }
    }

    const shouldOpenPopover = () => {
        // As per design we only want to show the popover if the input is focused and we have recent searches saved
        // or we have search suggestions available and have inputed some text (empty text in this scenario should show recent searches)
        if (
            document.activeElement.id === 'search-input' &&
            searchInputRef.current.value.length >= RECENT_SEARCH_MIN_LENGTH &&
            searchSuggestionsAvailable &&
            searchInputRef.current.value.length > 0
        ) {
            setIsOpen(true)
        } else {
            setIsOpen(false)
        }
    }

    const onSearchInputChange = (e) => {
        onSearchChange(e)
        shouldOpenPopover()
    }

    const searchSuggestionsSmall =
        searchSuggestions?.categorySuggestions === undefined &&
        searchSuggestions?.brandSuggestions === undefined &&
        searchSuggestions?.contentSuggestions === undefined &&
        searchSuggestions?.customSuggestions === undefined

    return (
        <Box width={fullwidth ? '100%' : {md: '300px', base: 'auto'}} position={'relative'}>
            <Popover
                isOpen={isOpen}
                isLazy
                initialFocusRef={searchInputRef}
                variant="fullWidthSearch"
            >
                <PopoverTrigger>
                    <form onSubmit={onSubmitSearch}>
                        <HStack>
                            <InputGroup>
                                {/* Changed the element to right from left, added styles to
                                    the placeholder and removed the variant since we want to use
                                    the default one ("outlined")
                                */}
                                <Input
                                    autoComplete="off"
                                    id="search-input"
                                    onChange={(e) => onSearchInputChange(e)}
                                    onFocus={() => shouldOpenPopover()}
                                    onBlur={() => setIsOpen(false)}
                                    type="search"
                                    ref={searchInputRef}
                                    {...props}
                                    _placeholder={{color: _placeholderColor || 'darkgray'}}
                                />
                                {/* New Right element */}
                                <InputRightElement onSubmit={onSubmitSearch}>
                                    <IconButton
                                        color={iconColor || 'grey'}
                                        _hover={{color: 'citrus'}}
                                        icon={<SearchIcon />}
                                        variant="unstyled"
                                        type="submit"
                                    />
                                </InputRightElement>
                            </InputGroup>
                        </HStack>
                    </form>
                </PopoverTrigger>

                <HideOnMobile>
                    <PopoverStyled>
                        <PopoverContent
                            padding={0}
                            width={searchSuggestionsSmall ? '100%' : '175%'}
                            marginLeft={searchSuggestionsSmall ? '0' : '-75%'}
                            data-testid="sf-suggestion-popover"
                        >
                            <SearchSuggestions
                                closeAndNavigate={closeAndNavigate}
                                recentSearches={recentSearches}
                                searchSuggestions={searchSuggestions}
                                searchSuggestionsSmall={searchSuggestionsSmall}
                            />
                        </PopoverContent>
                    </PopoverStyled>
                </HideOnMobile>
            </Popover>
            <HideOnDesktop>
                <Flex
                    display={isOpen || searchInputRef?.value?.length > 0 ? 'block' : 'none'}
                    postion="absolute"
                    background="white"
                    left={0}
                    right={0}
                    height="100vh"
                >
                    {searchSuggestion.isLoading ? (
                        <Spinner
                            position="absolute"
                            top="50%"
                            left="50%"
                            opacity={0.85}
                            color="blue.600"
                            zIndex="9999"
                            margin="-25px 0 0 -25px"
                        />
                    ) : (
                        <SearchSuggestions
                            closeAndNavigate={closeAndNavigate}
                            recentSearches={recentSearches}
                            searchSuggestions={searchSuggestions}
                        />
                    )}
                </Flex>
            </HideOnDesktop>
        </Box>
    )
}

Search.displayName = 'SearchInput'

Search.propTypes = {
    fullwidth: PropTypes.bool,
    iconColor: PropTypes.string,
    _placeholderColor: PropTypes.string
}

export default Search