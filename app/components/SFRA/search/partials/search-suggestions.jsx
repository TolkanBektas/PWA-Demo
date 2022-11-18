/*
 * Copyright (c) 2021, salesforce.com, inc.
 * All rights reserved.
 * SPDX-License-Identifier: BSD-3-Clause
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/BSD-3-Clause
 */
import React, {Fragment} from 'react'
import PropTypes from 'prop-types'
import {css} from '@emotion/react'
import {Box} from '@chakra-ui/react'
import RecentSearches from './recent-searches'
import Suggestions from './suggestions'
import {useIntl} from 'react-intl'

const SearchSuggestions = ({recentSearches, searchSuggestions, closeAndNavigate}) => {
    const intl = useIntl()

    return (
        <Box css={componentCss}>
            {searchSuggestions && (
                <Box marginBottom="1rem">
                    <Fragment>
                        <Suggestions
                            closeAndNavigate={closeAndNavigate}
                            suggestions={searchSuggestions?.phraseSuggestions}
                            title={intl.formatMessage({
                                defaultMessage: 'Do you mean?',
                                id: 'header.suggestion.do_you_mean'
                            })}
                        />

                        <Suggestions
                            suggestions={searchSuggestions.productSuggestions}
                            closeAndNavigate={closeAndNavigate}
                            title={intl.formatMessage({
                                defaultMessage: 'Products',
                                id: 'header.suggestion.products'
                            })}
                        />

                        <Suggestions
                            closeAndNavigate={closeAndNavigate}
                            suggestions={searchSuggestions?.categorySuggestions}
                            title={intl.formatMessage({
                                defaultMessage: 'Categories',
                                id: 'header.suggestion.categories'
                            })}
                            subtitle={intl.formatMessage({
                                defaultMessage: 'in',
                                id: 'header.suggestion.in'
                            })}
                        />

                        <RecentSearches
                            recentSearches={recentSearches}
                            closeAndNavigate={closeAndNavigate}
                            title={intl.formatMessage({
                                defaultMessage: 'Recent Searches',
                                id: 'recent_searches.heading.recent_searches'
                            })}
                        />

                        {/* Popular Suggestion missing */}
                        <Suggestions
                            suggestions={searchSuggestions.brandSuggestions}
                            closeAndNavigate={closeAndNavigate}
                            title={intl.formatMessage({
                                defaultMessage: 'Brand',
                                id: 'header.suggestion.Brand'
                            })}
                        />

                        <Suggestions
                            suggestions={searchSuggestions.contentSuggestions}
                            closeAndNavigate={closeAndNavigate}
                            title={intl.formatMessage({
                                defaultMessage: 'Content',
                                id: 'header.suggestion.content'
                            })}
                        />
                    </Fragment>
                </Box>
            )}
        </Box>
    )
}

SearchSuggestions.propTypes = {
    recentSearches: PropTypes.array,
    searchSuggestions: PropTypes.object,
    closeAndNavigate: PropTypes.func
}

const componentCss = css`
& > div > div:first-child {
    hr {
        display: none
    }
 }
}
`

export default SearchSuggestions