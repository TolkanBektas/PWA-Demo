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
                boxShadow: 'none',
                top: '0',
                right: 'auto',
                bottom: 'auto',
                left: '0'
            },
            content: {
                width: 'auto',
                borderRadius: '0.1875rem'
            }
        }
    },
    defaultProps: {
        variant: 'normal'
    }
}