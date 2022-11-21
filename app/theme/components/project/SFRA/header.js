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
            backgroundColor: 'white'
        },
        content: {
            maxWidth: ['container.xxl', 'container.xxl', 'container.lg', 'container.xxl'],
            marginLeft: 'auto',
            marginRight: 'auto',
            paddingLeft: 15,
            paddingRight: 15
        },
        searchContainer: {
            width: ['full', 'full', 'full', 60],
            marginRight: [0, 0, 0, 4],
            marginBottom: [1, 1, 2, 0],
            display: ['none', 'flex', 'flex', 'flex']
        },
        logoContainer: {
            width: ['4em', '4em', '4em', '14.125em'],
            marginLeft: ['-2em', '-2em', '-2em', '-7.0625em'],
            paddingTop: 0,
            position: 'absolute',
            left: '50%',
            textAlign: 'center'
        },
        bodyContainer: {
            flex: '1'
        },
        logo: {
            width: [8, 8, 8, 12],
            height: [6, 6, 6, 8]
        },
        icons: {
            marginBottom: [1, 1, 2, 0]
        },
        accountIcon: {
            height: 11,
            display: ['none', 'none', 'none', 'block'],
            cursor: 'pointer',
            alignSelf: ['self-start', 'self-start', 'self-start', 'auto'],
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
