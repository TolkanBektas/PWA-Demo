/*
 * Copyright (c) 2021, salesforce.com, inc.
 * All rights reserved.
 * SPDX-License-Identifier: BSD-3-Clause
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/BSD-3-Clause
 */
import React from 'react'
import PropTypes from 'prop-types'
import {Text, Button, Box, Flex, Divider} from '@chakra-ui/react'
import {HideOnMobile} from '../../../../components/responsive'

import {searchUrlBuilder} from '../../../../utils/url'
import SearchTitle from '../../../SFRA/search-title'

const RecentSearches = ({recentSearches, closeAndNavigate, title}) => {
    return (
        <Box>
            {recentSearches?.length > 0 && (
                <Box>
                    <Divider />

                    <SearchTitle title={title} />

                    <Box>
                        {recentSearches.map((recentSearch, idx) => (
                            <Flex key={idx}>
                                <HideOnMobile>
                                    <Box marginRight="0.85em" width="40px" />
                                </HideOnMobile>
                                <Button
                                    width="full"
                                    role="button"
                                    name="recent-search"
                                    fontSize={'md'}
                                    onMouseDown={() => {
                                        closeAndNavigate(searchUrlBuilder(recentSearch))
                                    }}
                                    variant="sfraMenuLink"
                                >
                                    <Text
                                        fontWeight="400"
                                        overflow="hidden"
                                        textOverflow="ellipsis"
                                        whiteSpace="nowrap;"
                                    >
                                        {recentSearch}
                                    </Text>
                                </Button>
                            </Flex>
                        ))}
                    </Box>
                </Box>
            )}
        </Box>
    )
}

RecentSearches.propTypes = {
    recentSearches: PropTypes.array,
    closeAndNavigate: PropTypes.func,
    title: PropTypes.string
}

export default RecentSearches