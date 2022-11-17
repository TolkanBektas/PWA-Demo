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

import Search from '../../search'
import {HamburgerIcon, SgLogo} from '../../icons'

import {noop} from '../../../utils/utils'
import useNavigation from '../../../hooks/use-navigation'
import LoadingSpinner from '../../loading-spinner'
import {HideOnMobile} from '../../responsive'
// import MyAccountMenu from '../../my-account-menu'
// import MiniCartHeader from '../mini-cart/mini-cart-header'
import StoreLocator from '../store-locator'

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
    // tracking if users enter the popover Content,
    // so we can decide whether to close the menu when users leave account icons

    const styles = useMultiStyleConfig('Header')

    const onSignoutClick = async () => {
        setShowLoading(true)
        await customer.logout()
        navigate('/login')
        setShowLoading(false)
    }

    return (
        <Box {...styles.container} {...props}>
            <Box {...styles.content} className="header-content">
                {showLoading && <LoadingSpinner wrapperStyles={{height: '100vh'}} />}
                <Flex
                    width="full"
                    alignItems={['baseline', 'baseline', 'baseline', 'center']}
                    mr={{base: 0, sm: 6, md: 8}}
                    className="flex-wrapper"
                    justify="space-between"
                >
                    <IconButton
                        aria-label={intl.formatMessage({
                            id: 'header.button.assistive_msg.menu',
                            defaultMessage: 'Menu'
                        })}
                        icon={<HamburgerIcon />}
                        variant="unstyled"
                        display={{lg: 'none'}}
                        // Sync logic from SG
                        _hover={{color: 'citrus'}}
                        {...styles.icons}
                        onClick={onMenuClick}
                    />
                    <Box width="auto" margin={{base: 'auto', sm: 'auto', md: '0'}}>
                        <IconButton
                            aria-label={intl.formatMessage({
                                id: 'header.button.assistive_msg.logo',
                                defaultMessage: 'Logo'
                            })}
                            icon={<SgLogo {...styles.logo} />}
                            variant="unstyled"
                            onClick={onLogoClick}
                        />
                    </Box>
                    <Box {...styles.searchContainer}>
                        <Search
                            {...styles.searchBox}
                            placeholder={intl.formatMessage({
                                id: 'header.field.placeholder.search_for_products_sitegenesis',
                                defaultMessage: 'Enter Keyword or Item No.'
                            })}
                        />
                    </Box>

                    <Box width="auto" display="flex">
                        <StoreLocator />

                        <HideOnMobile>
                            {/* <MyAccountMenu
                                onMyAccountClick={onMyAccountClick}
                                onSignoutClick={onSignoutClick}
                            /> */}
                        </HideOnMobile>

                        {/* <MiniCartHeader onMyCartClick={onMyCartClick} /> */}
                    </Box>
                </Flex>
            </Box>
            <Box {...styles.bodyContainer}>{children}</Box>
        </Box>
    )
}

Header.propTypes = {
    children: PropTypes.node,
    onMenuClick: PropTypes.func,
    onLogoClick: PropTypes.func,
    onMyAccountClick: PropTypes.func,
    onWishlistClick: PropTypes.func,
    onMyCartClick: PropTypes.func,
    searchInputRef: PropTypes.oneOfType([
        PropTypes.func,
        PropTypes.shape({current: PropTypes.elementType})
    ])
}

export default Header