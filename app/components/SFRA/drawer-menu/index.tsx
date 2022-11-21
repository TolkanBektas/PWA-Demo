import React from 'react'
import useCustomer from '../../../commerce-api/hooks/useCustomer'
import {useIntl} from 'react-intl'
import PropTypes from 'prop-types'
import {HideOnDesktop} from '../../responsive'
import {noop} from '../../../utils/utils'
import {CloseIcon, SignoutIcon} from '../../icons'
import {FormattedMessage} from 'react-intl'
import {categoryUrlBuilder} from '../../../utils/url'
import {Link as RouteLink} from 'react-router-dom'
import Link from '../../link'

// Components
import {
    Text,
    Drawer,
    DrawerBody,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    useTheme,
    Button,
    useDisclosure
} from '@chakra-ui/react'

const DrawerMenuItem = ({category, closeDrawer, isHeading}) => {
    const theme = useTheme()
    const {baseStyle} = theme.components.SfraDrawerMenu
    const {isOpen, onOpen, onClose} = useDisclosure()
    const customer = useCustomer()

    const closeAll = () => {
        onClose()
        closeDrawer()
    }
    const handleLogout = () => {
        closeAll()
        customer.logout()
    }

    return (
        <>
            {category.categories ? (
                <>
                    {isHeading ? (
                        <Link
                            as={RouteLink}
                            to={category.url ?? categoryUrlBuilder(category)}
                            {...baseStyle.menuLink}
                            fontWeight="bold"
                        >
                            {category.id === 'account' && (
                                <SignoutIcon {...baseStyle.signoutIcon} />
                            )}
                            {category.name}
                        </Link>
                    ) : (
                        <Button
                            onClick={onOpen}
                            variant="link"
                            {...baseStyle.menuLink}
                            {...baseStyle.menuLinkWithSubMenu}
                        >
                            <Text as="span">
                                {category.id === 'account' && (
                                    <SignoutIcon {...baseStyle.signoutIcon} />
                                )}
                                {category.name}
                            </Text>
                        </Button>
                    )}

                    <Drawer isOpen={isOpen} onClose={onClose} placement="left">
                        <DrawerContent>
                            <DrawerHeader {...baseStyle.header}>
                                <Text {...baseStyle.headerBackText} onClick={onClose}>
                                    <FormattedMessage defaultMessage="Back" id="drawer_menu.back" />
                                </Text>
                                <Text {...baseStyle.headerText} onClick={closeAll}>
                                    <FormattedMessage
                                        defaultMessage="Close"
                                        id="drawer_menu.close"
                                    />
                                </Text>
                                <CloseIcon
                                    boxSize={4}
                                    {...baseStyle.headerCloseIcon}
                                    onClick={closeAll}
                                />
                            </DrawerHeader>
                            <DrawerBody {...baseStyle.drawerBody}>
                                <DrawerMenuItem
                                    key={category.id}
                                    category={category}
                                    isHeading={true}
                                />
                                {category.categories.map((category) => (
                                    <DrawerMenuItem
                                        key={category.id}
                                        category={category}
                                        closeDrawer={closeAll}
                                    />
                                ))}
                            </DrawerBody>
                        </DrawerContent>
                    </Drawer>
                </>
            ) : (
                <Link
                    as={RouteLink}
                    to={category.url ?? categoryUrlBuilder(category)}
                    {...baseStyle.menuLink}
                    onClick={category.id === 'logout' ? handleLogout : noop}
                >
                    {category.name}
                </Link>
            )}
        </>
    )
}

DrawerMenuItem.propTypes = {
    category: PropTypes.object.isRequired,
    closeDrawer: PropTypes.func,
    isHeading: PropTypes.bool
}

const DrawerMenu = ({isOpen, onClose = noop, root}) => {
    const customer = useCustomer()
    const intl = useIntl()
    const theme = useTheme()
    console.log("thema", theme.components)
    const {baseStyle} = theme.components.SfraDrawerMenu
    const closeAll = onClose

    // setup login/logout to mimic category structure
    const loginCategory = customer.isRegistered
        ? {
              id: 'account',
              name: customer.firstName,
              icon: <SignoutIcon />,
              categories: [
                  {
                      id: 'account',
                      name: intl.formatMessage({
                          id: 'header.button.go.to.account',
                          defaultMessage: 'Account'
                      }),
                      url: '/account',
                      icon: <SignoutIcon {...baseStyle.signoutIcon} />
                  },
                  {
                      id: 'logout',
                      name: intl.formatMessage({
                          id: 'header.button.go.to.logout',
                          defaultMessage: 'Logout'
                      }),
                      url: '/logout',
                      icon: <SignoutIcon {...baseStyle.signoutIcon} />
                  }
              ]
          }
        : {
              id: 'login',
              name: intl.formatMessage({id: 'header.button.go.to.login', defaultMessage: 'Login'}),
              url: '/login',
              icon: <SignoutIcon />
          }

    return (
        <HideOnDesktop>
            <Drawer isOpen={isOpen} onClose={onClose} placement="left">
                <DrawerOverlay>
                    <DrawerContent>
                        <DrawerHeader {...baseStyle.header}>
                            <Text {...baseStyle.headerText} onClick={onClose}>
                                <FormattedMessage defaultMessage="Close" id="drawer_menu.close" />
                            </Text>
                            <CloseIcon
                                boxSize={4}
                                {...baseStyle.headerCloseIcon}
                                onClick={onClose}
                            />
                        </DrawerHeader>
                        <DrawerBody {...baseStyle.drawerBody}>
                            {root.categories.map((category) => (
                                <DrawerMenuItem
                                    key={category.id}
                                    closeDrawer={closeAll}
                                    category={category}
                                />
                            ))}
                            <DrawerMenuItem closeDrawer={closeAll} category={loginCategory} />
                        </DrawerBody>
                    </DrawerContent>
                </DrawerOverlay>
            </Drawer>
        </HideOnDesktop>
    )
}

export default DrawerMenu

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
    onClose: PropTypes.func
}