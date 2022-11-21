/*
 * Copyright (c) 2021, salesforce.com, inc.
 * All rights reserved.
 * SPDX-License-Identifier: BSD-3-Clause
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/BSD-3-Clause
 */
const colors = {
    transparent: 'transparent',
    current: 'currentColor',
    black: '#000000',
    white: '#FFFFFF',
    blueSfra: '#0070d2',
    greenSfra: '#008827',

    primary: '#00a1e0',
    redSfra: '#c00',
    success: '#008827',
    danger: '#c00',
    lightBlue: '#7ed0ee',

    grey1: '#f9f9f9',
    grey2: '#eee',
    grey3: '#ccc',
    grey4: '#999',
    grey5: '#666',
    grey6: '#444',
    grey7: '#222',
    grey8: '#333',
    grey9: '#212529',
    greyTransparent1: 'rgba(0, 0, 0, 0.65)',
    greyTransparent2: 'rgba(0, 0, 0, 0.25)',

    grey4Hover: '#1e1e1e',

    // Not SFRA colors below

    whiteAlpha: {
        50: 'rgba(255, 255, 255, 0.04)',
        100: 'rgba(255, 255, 255, 0.06)',
        200: 'rgba(255, 255, 255, 0.08)',
        300: 'rgba(255, 255, 255, 0.16)',
        400: 'rgba(255, 255, 255, 0.24)',
        500: 'rgba(255, 255, 255, 0.36)',
        600: 'rgba(255, 255, 255, 0.48)',
        700: 'rgba(255, 255, 255, 0.64)',
        800: 'rgba(255, 255, 255, 0.80)',
        900: 'rgba(255, 255, 255, 0.92)'
    },

    blackAlpha: {
        50: 'rgba(0, 0, 0, 0.04)',
        100: 'rgba(0, 0, 0, 0.06)',
        200: 'rgba(0, 0, 0, 0.08)',
        300: 'rgba(0, 0, 0, 0.16)',
        400: 'rgba(0, 0, 0, 0.24)',
        500: 'rgba(0, 0, 0, 0.36)',
        600: 'rgba(0, 0, 0, 0.48)',
        700: 'rgba(0, 0, 0, 0.64)',
        800: 'rgba(0, 0, 0, 0.80)',
        900: 'rgba(0, 0, 0, 0.92)'
    },

    gray: {
        50: '#F3F3F3',
        100: '#E5E5E5',
        200: '#C9C9C9',
        300: '#AEAEAE',
        400: '#A0A0A0',
        500: '#939393',
        600: '#747474',
        700: '#5C5C5C',
        800: '#444444',
        900: '#181818'
    },

    red: {
        50: '#FEF1EE',
        100: '#FEDED8',
        200: '#FEB8AB',
        300: '#FE8F7D',
        400: '#FE7765',
        500: '#FE5C4C',
        600: '#EA001E',
        700: '#BA0517',
        800: '#8E030F',
        900: '#640103'
    },

    orange: {
        50: '#FEF1ED',
        100: '#FFDED5',
        200: '#FEB9A5',
        300: '#FF906E',
        400: '#FF784F',
        500: '#FF5D2D',
        600: '#D83A00',
        700: '#AA3001',
        800: '#7E2600',
        900: '#541D01'
    },

    yellow: {
        50: '#FBF3E0',
        100: '#F9E3B6',
        200: '#FCC003',
        300: '#E4A201',
        400: '#D79304',
        500: '#CA8501',
        600: '#A86403',
        700: '#8C4B02',
        800: '#6F3400',
        900: '#4F2100'
    },

    green: {
        50: '#EBF7E6',
        100: '#CDEFC4',
        200: '#91DB8B',
        300: '#45C65A',
        400: '#41B658',
        500: '#3BA755',
        600: '#2E844A',
        700: '#22683E',
        800: '#194E31',
        900: '#0E3522'
    },

    teal: {
        50: '#DEF9F3',
        100: '#ACF3E4',
        200: '#04E1CB',
        300: '#01C3B3',
        400: '#03B4A7',
        500: '#06A59A',
        600: '#0B827C',
        700: '#056764',
        800: '#024D4C',
        900: '#023434'
    },

    blue: {
        50: '#EEF4FF',
        100: '#D8E6FE',
        200: '#AACBFF',
        300: '#78B0FD',
        400: '#57A3FD',
        500: '#1B96FF',
        600: '#0176D3',
        700: '#0B5CAB',
        800: '#014486',
        900: '#032D60'
    },

    cyan: {
        50: '#EAF5FE%',
        100: '#CFE9FE',
        200: '#90D0FE',
        300: '#1AB9FF',
        400: '#08ABED',
        500: '#0D9DDA',
        600: '#107CAD',
        700: '#05628A',
        800: '#084968',
        900: '#023248'
    },

    purple: {
        50: '#F6F2FB',
        100: '#ECE1F9',
        200: '#D78FF5',
        300: '#C29EF1',
        400: '#B78DEF',
        500: '#AD7BEE',
        600: '#9050E9',
        700: '#7526E3',
        800: '#5A1BA9',
        900: '#401075'
    },

    pink: {
        50: '#F9F0FF',
        100: '#F2DEFE',
        200: '#E5B9FE',
        300: '#D892FE',
        400: '#D17DFE',
        500: '#CB65FF',
        600: '#BA01FF',
        700: '#9602C7',
        800: '#730394',
        900: '#520066'
    }
}

export default colors