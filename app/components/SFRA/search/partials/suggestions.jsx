/*
 * Copyright (c) 2021, salesforce.com, inc.
 * All rights reserved.
 * SPDX-License-Identifier: BSD-3-Clause
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/BSD-3-Clause
 */
import React from 'react'
import PropTypes from 'prop-types'
import {Text, Button, Stack, Box, Image, Divider} from '@chakra-ui/react'
import {HideOnMobile} from '../../../../components/responsive'
import {RECENT_SEARCH_SUGGESTION_LIMIT} from '../../../../constants'
import SearchTitle from '../../../SFRA/search-title'

const Suggestions = ({suggestions, closeAndNavigate, title, subtitle}) => {
    if (!suggestions || suggestions[0].exactMatch) {
        return null
    }
    return (
        <Stack spacing={0} data-testid="sf-suggestion">
            <Box>
                <Divider />
                <SearchTitle title={title} />
                <Box py="0.313em">
                    {suggestions.map(
                        (suggestion, idx) =>
                            idx < RECENT_SEARCH_SUGGESTION_LIMIT && (
                                <Button
                                    width="full"
                                    onMouseDown={() => closeAndNavigate(suggestion.link)}
                                    fontSize={'md'}
                                    key={idx}
                                    marginTop={0}
                                    variant="sfraMenuLink"
                                >
                                    <HideOnMobile>
                                        <Box marginRight=".85em" width="40px">
                                            {suggestion.image && (
                                                <Image
                                                    borderRadius="1.25em"
                                                    border="0.063em solid rgba(0,0,0,.3)"
                                                    boxSize="40px"
                                                    alt={suggestion.image.alt}
                                                    src={suggestion.image.disBaseLink}
                                                />
                                            )}
                                        </Box>
                                    </HideOnMobile>

                                    <Text
                                        fontWeight="400"
                                        dangerouslySetInnerHTML={{__html: suggestion.name}}
                                        textDecoration={'none'}
                                        overflow="hidden"
                                        textOverflow="ellipsis"
                                        whiteSpace="nowrap;"
                                    />
                                    {suggestion.parentName && suggestion.parentName != 'root' && (
                                        <Text
                                            fontWeight="400"
                                            overflow="hidden"
                                            textOverflow="ellipsis"
                                            whiteSpace="nowrap;"
                                            color={'grey4'}
                                            textDecoration={'inherit'}
                                            textDecorationColor={'white'}
                                            as={'span'}
                                        >
                                            &nbsp;{subtitle} {suggestion.parentName}
                                        </Text>
                                    )}
                                </Button>
                            )
                    )}
                </Box>
            </Box>
        </Stack>
    )
}

Suggestions.propTypes = {
    suggestions: PropTypes.array,
    closeAndNavigate: PropTypes.func,
    title: PropTypes.string,
    subtitle: PropTypes.string
}

export default Suggestions