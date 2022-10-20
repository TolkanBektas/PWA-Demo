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
        'sg-menu-link': {
            justifyContent: 'flex-start',
            padding: 15,
            color: 'citrus',
            paddingTop: 0,
            height: 'auto',
            paddingBottom: 0,
            fontSize: '1em',
            _hover: {textDecoration: 'underline'},
            _activeLink: {
                bg: 'gray.50',
                textDecoration: 'none'
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
        'button-sg': {
            marginTop: '0.5rem',
            backgroundColor: 'citrus',
            borderColor: 'borderSg',
            borderRadius: '2px',
            borderStyle: 'solid',
            borderWidth: '1px',
            color: 'white',
            cursor: 'pointer',
            display: 'inline-block',
            fontSize: '1.1em',
            padding: '0.5em 2em',
            textAlign: 'center',
            transition: 'all 0.3s ease',
            height: 'auto',
            fontWeight: 600,
            _hover: {
                bg: 'white',
                color: 'citrus'
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