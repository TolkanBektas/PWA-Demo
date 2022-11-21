/*
 * Copyright (c) 2021, salesforce.com, inc.
 * All rights reserved.
 * SPDX-License-Identifier: BSD-3-Clause
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/BSD-3-Clause
 */
export default {
    baseStyle: {
        container: {},
        header: {
            display: 'flex',
            justifyContent: 'flex-end',
            alignItems: 'center',
            background: 'gray.100',
            padding: 4,
            borderBottom: '1px solid',
            borderBottomColor: 'gray.200',
            boxShadow: 'none'
        },
        headerText: {
            fontSize: 'md',
            lineHeight: 4,
            marginTop: 0,
            marginBottom: 0,
            marginRight: 3,
            cursor: 'pointer',
            fontWeight: 400
        },
        headerCloseIcon: {
            marginTop: 2,
            cursor: 'pointer'
        },
        drawerBody: {
            padding: 0
        },
        menuLink: {
            display: 'block',
            borderBottom: '1px solid',
            borderBottomColor: 'gray.100',
            paddingTop: 2,
            paddingBottom: 2,
            paddingLeft: 4,
            paddingRight: 4,
            color: 'gray.800',
            width: '100%',
            textAlign: 'left',
            lineHeight: 4
        },
        menuLinkWithSubMenu: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            _after: {
                display: 'inline-block',
                marginLeft: '0.255em',
                verticalAlign: '0.255em',
                content: '""',
                borderTop: '0.3em solid',
                borderTopColor: 'transparent',
                borderRight: 0,
                borderRightColor: 'transparent',
                borderBottom: '0.3em solid',
                borderBottomColor: 'transparent',
                borderLeft: '0.3em solid'
            }
        },
        headerBackText: {
            flex: 'auto',
            fontSize: 'md',
            lineHeight: 4,
            marginTop: 0,
            marginBottom: 0,
            paddingLeft: 4,
            position: 'relative',
            cursor: 'pointer',
            _before: {
                position: 'absolute',
                left: 0,
                top: 1,
                display: 'inline-block',
                marginLeft: '0.255em',
                verticalAlign: '0.255em',
                content: '""',
                borderTop: '0.3em solid',
                borderTopColor: 'transparent',
                borderRight: '0.3em solid',
                borderBottom: '0.3em solid',
                borderBottomColor: 'transparent',
                borderLeft: 0,
                borderLeftColor: 'transparent'
            }
        },
        signoutIcon: {
            width: 4,
            height: 4,
            cursor: 'pointer'
        }
    },
    parts: ['container, header, headerText', 'signoutIcon']
}