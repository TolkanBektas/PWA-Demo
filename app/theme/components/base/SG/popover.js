/*
 * Copyright (c) 2021, salesforce.com, inc.
 * All rights reserved.
 * SPDX-License-Identifier: BSD-3-Clause
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/BSD-3-Clause
 */
export default {
    parts: ['popper'],
    baseStyle: {
        popper: {
            borderColor: 'grey3',
            borderRadius: 0
        }
    },
    variants: {
        small: {},
        normal: {
            popper: {
                width: '100%',
                borderRadius: 0
            },
            header: {
                textAlign: 'left',
                fontWeight: 700,
                borderBottom: 'none',
                fontSize: 18,
                px: 7,
                paddingTop: 6
            },
            footer: {
                textAlign: 'left',
                fontSize: 14,
                px: 3,
                borderTop: 'none'
            },
            content: {
                width: 286,
                borderRadius: 0
            },
            body: {
                py: 0,
                borderRadius: 0
            }
        },
        fullWidth: {
            popper: {
                width: '100%',
                maxWidth: '100%',
                top: '20px',
                right: 'auto',
                bottom: 'auto',
                left: '0',
                backgroundColor: 'white',
                borderColor: 'borderSg2',
                boxShadow: '0 2px 5px 0 #ccc',
                borderRadius: '5px'
            },
            content: {
                width: 'auto',
                borderRadius: '5px',
                boxShadow: '0 2px 5px 0 #ccc'
            }
        },
        fullWidthSearch: {
            popper: {
                width: '100%',
                maxWidth: '100%',
                borderRadius: 0,
                boxShadow: 'none',
                top: '0',
                right: 'auto',
                bottom: 'auto',
                left: '0'
            },
            content: {
                width: 'auto',
                borderRadius: 0,
                backgroundColor: 'white',
                borderColor: 'nobel',
                boxShadow: '0 3px 3px 0 rgb(0 0 0 / 25%)',
                fontSize: 12
            }
        }
    },
    defaultProps: {
        variant: 'normal'
    }
}