/*
 * Copyright (c) 2021, salesforce.com, inc.
 * All rights reserved.
 * SPDX-License-Identifier: BSD-3-Clause
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/BSD-3-Clause
 */
import React, {useState} from 'react'
import PropTypes from 'prop-types'
import {useIntl} from 'react-intl'
import {useMultiStyleConfig, Box, Flex, IconButton} from '@chakra-ui/react'

import useCustomer from '../../../commerce-api/hooks/useCustomer'

import Search from '../search'
import {HamburgerIcon, BrandLogoSmall, BrandLogoFull} from '../../icons'

import {noop} from '../../../utils/utils'
import useNavigation from '../../../hooks/use-navigation'
import LoadingSpinner from '../../loading-spinner'
import MiniCartHeader from '../mini-cart/mini-cart-sfra-header'
import {HideOnMobile} from '../../responsive'
import MyAccountMenu from '../my-account-menu'

/**
 * The header is the main source for accessing
 * navigation, search, basket, and other
 * important information and actions. It persists
 * on the top of your application and will
 * respond to changes in device size.
 *
 * To customize the styles, update the themes
 * in theme/components/project/header.js
 * @param  props
 * @param   {func} props.onMenuClick click event handler for menu button
 * @param   {func} props.onLogoClick click event handler for menu button
 * @param   {object} props.searchInputRef reference of the search input
 * @param   {func} props.onMyAccountClick click event handler for my account button
 * @param   {func} props.onMyCartClick click event handler for my cart button
 * @return  {React.ReactElement} - Header component
 */
const Header = ({
    children,
    onMenuClick = noop,
    onMyAccountClick = noop,
    onLogoClick = noop,
    onMyCartClick = noop,
    ...props
}) => {
    const intl = useIntl()
    const customer = useCustomer()
    const navigate = useNavigation()

    const [showLoading, setShowLoading] = useState(false)

    const styles = useMultiStyleConfig('Header')

    const onSignoutClick = async () => {
        setShowLoading(true)
        await customer.logout()
        navigate('/login')
        setShowLoading(false)
    }

    return (
        <Box {...styles.container} {...props}>
            <Box {...styles.content}>
                {showLoading && <LoadingSpinner wrapperStyles={{height: '100vh'}} />}

                <Flex
                    wrap="wrap"
                    height="4.375em"
                    justifyContent="space-between"
                    alignItems={['center']}
                >
                    <HideOnMobile>
                        <MyAccountMenu
                            onMyAccountClick={onMyAccountClick}
                            onSignoutClick={onSignoutClick}
                        />
                    </HideOnMobile>

                    <IconButton
                        aria-label={intl.formatMessage({
                            id: 'header.button.assistive_msg.menu',
                            defaultMessage: 'Menu'
                        })}
                        icon={<HamburgerIcon />}
                        variant="unstyled"
                        display={{lg: 'none'}}
                        {...styles.icons}
                        onClick={onMenuClick}
                    />
                    <IconButton
                        aria-label={intl.formatMessage({
                            id: 'header.button.assistive_msg.logo',
                            defaultMessage: 'Logo'
                        })}
                        icon={
                            <>
                                <BrandLogoFull
                                    display={{base: 'none', lg: 'block'}}
                                    width="auto"
                                    height="auto"
                                />
                                <BrandLogoSmall display={{lg: 'none'}} width="auto" height="auto" />
                            </>
                        }
                        {...styles.logoContainer}
                        variant="unstyled"
                        onClick={onLogoClick}
                    />

                    <Flex>
                        <Box {...styles.searchContainer}>
                            <Search
                                placeholder={intl.formatMessage({
                                    id: 'header.field.placeholder.search_for_products_sfra',
                                    defaultMessage: 'Search (keywords,etc)'
                                })}
                                {...styles.search}
                            />
                        </Box>

                        <MiniCartHeader onMyCartClick={onMyCartClick} />
                    </Flex>
                </Flex>
            </Box>

            <Box {...styles.content}>{children}</Box>

            <Box display={{sm: 'none'}}>
                <Search
                    placeholder={intl.formatMessage({
                        id: 'header.field.placeholder.search_for_products_sfra',
                        defaultMessage: 'Search (keywords,etc)'
                    })}
                    {...styles.search}
                />
            </Box>
        </Box>
    )
}

Header.propTypes = {
    children: PropTypes.node,
    onMenuClick: PropTypes.func,
    onLogoClick: PropTypes.func,
    onMyAccountClick: PropTypes.func,
    onMyCartClick: PropTypes.func,
    searchInputRef: PropTypes.oneOfType([
        PropTypes.func,
        PropTypes.shape({current: PropTypes.elementType})
    ])
}

export default Header