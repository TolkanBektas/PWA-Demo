/*
 * Copyright (c) 2021, salesforce.com, inc.
 * All rights reserved.
 * SPDX-License-Identifier: BSD-3-Clause
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/BSD-3-Clause
 */

import React, {useEffect, useState} from 'react'
import PropTypes from 'prop-types'
import {useIntl} from 'react-intl'

// Project Components
import NestedAccordion from '../../nested-accordion'

// Components
import {
    Box,
    Button,
    Center,
    Divider,
    Drawer,
    DrawerBody,
    DrawerContent,
    Fade,
    HStack,
    Flex,
    Spinner,
    Text,
    VStack,

    // Hooks
    useBreakpointValue,
    useMultiStyleConfig
} from '@chakra-ui/react'
import Link from '../../link'
// Icons
import {LocationIconSg, SignoutIcon, UserIcon} from '../../icons'

// Others
import {noop} from '../../../utils/utils'
import {categoryUrlBuilder} from '../../../utils/url'
import useCustomer from '../../../commerce-api/hooks/useCustomer'
import LoadingSpinner from '../../loading-spinner'

import useNavigation from '../../../hooks/use-navigation'
import Search from '../search'

const PHONE_DRAWER_SIZE = 'xs'
const TABLET_DRAWER_SIZE = 'lg'

const DrawerSeparator = () => (
    <Box>
        <Divider opacity="1" borderBottomWidth="5px" borderColor="borderSg4" />
    </Box>
)

// CUSTOMIZE YOUR NAVIGATION BY ALTERING THESE VALUES
const SIGN_IN_HREF = '/login'
const STORE_LOCATOR_HREF = '/store-locator'

/**
 * This is the navigation component used for mobile devices (phone and tablet). It's
 * main usage is to navigate from one category to the next, but also homes links to
 * support, log in and out actions, as support links.
 */
const DrawerMenu = ({isOpen, onClose = noop, root}) => {
    const intl = useIntl()
    const customer = useCustomer()
    const navigate = useNavigation()
    const styles = useMultiStyleConfig('DrawerMenu', {isOpen, onClose, root})
    const drawerSize = useBreakpointValue({sm: PHONE_DRAWER_SIZE, md: TABLET_DRAWER_SIZE})
    const [showLoading, setShowLoading] = useState(false)
    const onSignoutClick = async () => {
        setShowLoading(true)
        await customer.logout()
        navigate('/login')
        setShowLoading(false)
    }
    // Added logic to close the drawer when we reach lg window size
    const isLg = useBreakpointValue({base: false, lg: true, fallback: false})

    useEffect(() => {
        if (isLg) {
            onClose()
        }
    }, [isLg, onClose])

    return (
        <Drawer
            blockScrollOnMount={false}
            // Stop autofocus when loaded
            autoFocus={false}
            isOpen={isOpen}
            onClose={onClose}
            placement="left"
            size={drawerSize}
        >
            <DrawerContent w={'50%'} maxW={'50%'}>
                {/* Main Content */}

                <DrawerBody>
                    {showLoading && <LoadingSpinner />}
                    <Box>
                        <Search
                            placeholder={intl.formatMessage({
                                id: 'header.field.placeholder.search_for_products_sitegenesis',
                                defaultMessage: 'Enter Keyword or Item No.'
                            })}
                            fullwidth
                            borderRadius={'0px'}
                            border={'0px'}
                            color={'white'}
                            backgroundColor={'#666666'}
                            iconColor={'#999999'}
                            _placeholderColor={'white'}
                            _focus={{
                                border: '2px solid white'
                            }}
                        />
                    </Box>
                    {/* Category Navigation */}
                    {root ? (
                        <Fade in={true}>
                            <NestedAccordion
                                item={root}
                                itemsKey="categories"
                                urlBuilder={categoryUrlBuilder}
                            />
                        </Fade>
                    ) : (
                        <Center p="8">
                            <Spinner size="xl" />
                        </Center>
                    )}

                    <DrawerSeparator />

                    {/* Application Actions */}
                    <VStack align="stretch" spacing={0} {...styles.actions} px={0}>
                        <Box padding="0.8em 1rem" borderBottom="1px solid" borderColor="borderSg3">
                            <Flex direction={'column'} color="white" fontSize="12px">
                                <Link to={STORE_LOCATOR_HREF}>
                                    <HStack>
                                        <LocationIconSg fill="white" {...styles.icon} />{' '}
                                        <Text>
                                            {intl.formatMessage({
                                                id: 'drawer_menu.link.store_locator',
                                                defaultMessage: 'Stores'
                                            })}
                                        </Text>
                                    </HStack>
                                </Link>
                            </Flex>
                        </Box>

                        <Box {...styles.actionsItem}>
                            {customer.isRegistered ? (
                                <NestedAccordion
                                    urlBuilder={(item, locale) => `/${locale}/account${item.path}`}
                                    itemsAfter={({depth}) =>
                                        depth === 1 && (
                                            <Button
                                                {...styles.signout}
                                                variant="unstyled"
                                                onClick={onSignoutClick}
                                            >
                                                <Flex align={'center'}>
                                                    <SignoutIcon boxSize={5} />
                                                    <Text {...styles.signoutText} as="span">
                                                        {intl.formatMessage({
                                                            id: 'drawer_menu.button.log_out',
                                                            defaultMessage: 'Log Out'
                                                        })}
                                                    </Text>
                                                </Flex>
                                            </Button>
                                        )
                                    }
                                    item={{
                                        id: 'root',
                                        items: [
                                            {
                                                id: 'my-account',
                                                name: intl.formatMessage({
                                                    id: 'drawer_menu.button.my_account',
                                                    defaultMessage: 'My Account'
                                                }),
                                                items: [
                                                    {
                                                        id: 'profile',
                                                        path: '',
                                                        name: intl.formatMessage({
                                                            id:
                                                                'drawer_menu.button.account_details',
                                                            defaultMessage: 'Account Details'
                                                        })
                                                    },
                                                    {
                                                        id: 'orders',
                                                        path: '/orders',
                                                        name: intl.formatMessage({
                                                            id: 'drawer_menu.button.order_history',
                                                            defaultMessage: 'Order History'
                                                        })
                                                    },
                                                    {
                                                        id: 'addresses',
                                                        path: '/addresses',
                                                        name: intl.formatMessage({
                                                            id: 'drawer_menu.button.addresses',
                                                            defaultMessage: 'Addresses'
                                                        })
                                                    },
                                                    {
                                                        id: 'payments',
                                                        path: '/payments',
                                                        name: intl.formatMessage({
                                                            id:
                                                                'drawer_menu.button.payment_methods',
                                                            defaultMessage: 'Payment Methods'
                                                        })
                                                    }
                                                ]
                                            }
                                        ]
                                    }}
                                />
                            ) : (
                                <Link to={SIGN_IN_HREF}>
                                    <HStack>
                                        <UserIcon {...styles.icon} />{' '}
                                        <Text>
                                            {intl.formatMessage({
                                                id: 'drawer_menu.link.sign_in',
                                                defaultMessage: 'Sign In'
                                            })}
                                        </Text>
                                    </HStack>
                                </Link>
                            )}
                        </Box>
                    </VStack>
                </DrawerBody>
            </DrawerContent>
        </Drawer>
    )
}

DrawerMenu.displayName = 'DrawerMenu'

DrawerMenu.propTypes = {
    /**
     * The root category in your commerce cloud back-end.
     */
    root: PropTypes.object,
    /**
     * The opened state of the drawer.
     */
    isOpen: PropTypes.bool,
    /**
     * Function called when the drawer is dismissed.
     */
    onClose: PropTypes.func,
    /**
     * Function called when the drawer logo is clicked.
     */
    onLogoClick: PropTypes.func
}

export default DrawerMenu