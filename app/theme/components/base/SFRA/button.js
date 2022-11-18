/*
 * Copyright (c) 2021, salesforce.com, inc.
 * All rights reserved.
 * SPDX-License-Identifier: BSD-3-Clause
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/BSD-3-Clause
 */
export default {
    baseStyle: {
        borderRadius: 'base'
    },
    variants: {
        solid: (props) =>
            props.colorScheme === 'blue'
                ? {
                      backgroundColor: 'blue.600',
                      color: 'white',
                      _hover: {bg: 'blue.700', _disabled: {bg: 'blue.300'}},
                      _active: {bg: 'blue.800'},
                      _disabled: {bg: 'blue.300'}
                  }
                : {},
        solidsfra: (props) =>
            props.colorScheme === 'blue'
                ? {
                      backgroundColor: 'primary',
                      color: 'white',
                      border: '1px solid',
                      borderColor: 'transparent',
                      _hover: {
                          bg: 'white',
                          borderColor: 'primary',
                          color: 'primary',
                          _disabled: {bg: 'blue.300'}
                      },
                      _active: {bg: 'primary'},
                      _disabled: {bg: 'blue.300'}
                  }
                : {},
        outline: (props) =>
            props.colorScheme === 'black'
                ? {color: 'gray.900', _hover: {bg: 'gray.50'}, borderColor: 'gray.200'}
                : {color: 'blue.600', _hover: {bg: 'gray.50'}},
        footer: {
            fontSize: 'sm',
            backgroundColor: 'gray.100',
            color: 'black',
            _hover: {bg: 'gray.200'},
            _active: {bg: 'gray.300'},
            paddingLeft: 3,
            paddingRight: 3
        },
        link: (props) => ({
            color: props.colorScheme === 'red' ? 'red.500' : 'blue.600',
            fontWeight: 'normal',
            minWidth: '1em',
            lineHeight: 4
        }),
        'menu-link': {
            color: 'black',
            justifyContent: 'flex-start',
            fontSize: 'sm',
            _hover: {bg: 'gray.50', textDecoration: 'none'},
            _activeLink: {
                bg: 'gray.50',
                textDecoration: 'none'
            }
        },
        'sfra-mini-cart': {
            color: 'white',
            backgroundColor: 'primary',
            justifyContent: 'center',
            fontSize: 'md',
            padding: 15,
            height: 'auto',
            paddingBottom: '10px',
            paddingTop: '10px',
            border: '1px solid',
            borderColor: 'transparent',
            _hover: {
                textDecoration: 'none',
                border: '1px solid',
                borderColor: 'primary',
                color: 'primary',
                backgroundColor: 'white'
            }
        },
        'header-navigation-menu-link': {
            color: 'black',
            justifyContent: 'flex-start',
            padding: 0,
            height: 'auto',
            fontWeight: 'normal',
            fontSize: 'sm',
            _hover: {textDecoration: 'underline'},
            _activeLink: {
                textDecoration: 'underline'
            }
        },
        'menu-link-mobile': {
            color: 'black',
            justifyContent: 'flex-start',
            fontSize: 'sm',
            _hover: {bg: 'gray.50', textDecoration: 'none'},
            _activeLink: {
                bg: 'gray.100',
                textDecoration: 'none'
            }
        },
        'search-link': {
            color: 'black',
            justifyContent: 'flex-start',
            fontSize: 'sm',
            _hover: {textDecoration: 'none'}
        },
        'ghost-sfra': {
            color: 'primary',
            border: '1px solid',
            borderColor: 'primary',
            _hover: {
                bg: 'primary',
                color: 'white'
            },
            _active: {bg: 'primary'},
            _disabled: {bg: 'blue.300'}
        },
        sfraMenuLink: {
            color: 'grey6',
            justifyContent: 'flex-start',
            fontSize: 'sm',
            padding: 15,
            paddingTop: 0,
            height: 'auto',
            paddingBottom: '10px',
            _hover: {textDecoration: 'underline'},
            _activeLink: {
                bg: 'gray.50',
                textDecoration: 'none'
            }
        }
    },
    sizes: {
        md: {
            height: 11,
            minWidth: 11
        }
    },
    defaultProps: {
        colorScheme: 'blue'
    }
}