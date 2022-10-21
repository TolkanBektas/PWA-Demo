/*
 * Copyright (c) 2021, salesforce.com, inc.
 * All rights reserved.
 * SPDX-License-Identifier: BSD-3-Clause
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/BSD-3-Clause
 */
export default {
    baseStyle: {
        container: {
            height: 'full',
            minWidth: 'xs',
            width: 'full',
            boxShadow: 'base',
            backgroundColor: 'white'
        },
        content: {
            maxWidth: 'container.xxxl',
            marginLeft: 'auto',
            marginRight: 'auto',
            paddingLeft: [4, 4, 6, 8],
            paddingRight: [4, 4, 6, 8],
            paddingTop: [1, 1, 2, 4],
            paddingBottom: [3, 3, 2, 4]
        },
        searchContainer: {
            marginRight: [0, 0, 0, 4],
            marginBottom: [1, 1, 2, 0],
            border: '1px solid #ced4da',
            borderRadius: '10px',
            display: ['none', 'none', 'flex', 'flex'],
            height: [0, 10, 10],
            width: [0, 350, 350]
        },
        searchBox: {
            backgroundColor: 'transparent',
            _hover: {bg: 'transparent'},
            height: [0, 10, 10],
            width: [0, 350, 350],
            _focus: {
                border: '2px solid black'
            },
            marginBottom: '50px'
        },
        bodyContainer: {
            flex: '1'
        },
        logo: {
            width: [48, 48, 48, 56],
            height: [10, 10, 10, 12],
            alignSelf: ['center', 'center', 'self-start', 'self-start'],
            marginBottom: [0, 0, 2, 0]
        },
        icons: {
            marginBottom: [1, 1, 2, 0],
            marginTop: [2, 1, 1, 0]
        },
        accountIcon: {
            cursor: 'pointer',
            alignSelf: ['self-start', 'self-start', 'self-start', 'auto'],
            height: [0, 12, 12, 12],
            marginTop: [0, 0, 13, 0],
            display: ['none', 'none', 'flex', 'flex'],
            _focus: {
                boxShadow: 'outline'
            },
            _focusVisible: {
                outline: 0
            }
        },
        arrowDown: {
            height: 11,
            marginRight: 0,
            alignSelf: ['self-start', 'self-start', 'self-start', 'auto'],
            cursor: 'pointer',
            _focus: {
                boxShadow: 'outline'
            },
            _focusVisible: {
                outline: 0
            },
            display: ['none', 'none', 'none', 'block']
        },
        signout: {
            width: '100%',
            borderRadius: '4px',
            height: 11,
            padding: 4,
            py: 3,
            marginTop: 1,
            _hover: {
                background: 'gray.50'
            }
        },
        signoutText: {
            fontSize: 'sm',
            fontWeight: 'normal'
        },
        signoutIcon: {
            marginRight: 2
        }
    },
    parts: ['container', 'content', 'searchContainer', 'bodyContainer', 'logo', 'icons', 'signout']
}
