import React, {useRef} from 'react'
import {useIntl} from 'react-intl'
import PropTypes from 'prop-types'

import {noop} from '../../../utils/utils'
import useCustomer from '../../../commerce-api/hooks/useCustomer'
import Link from '../../link'
import {
    Box,
    useMultiStyleConfig,
    Flex,
    Button,
    Text,
    Stack,
    useDisclosure,
    Popover,
    PopoverTrigger,
    PopoverContent,
    PopoverBody,
    useMediaQuery
} from '@chakra-ui/react'

import {ChevronDownIcon, SignoutIcon} from '../../icons'

import {headerNavLinks, headerMessages} from '../../../theme/components/base/SFRA/constant'

const ENTER_KEY = 'Enter'

/**
 * Section component used on content pages like home page.
 * This component helps with creating a consistent layout and
 * consistent typography styles for section headings.
 */
const MyAccountMenu = ({onMyAccountClick = noop, onSignoutClick = noop}) => {
    const {isOpen, onClose, onOpen} = useDisclosure()
    const [isDesktop] = useMediaQuery('(min-width: 992px)')
    const intl = useIntl()
    const styles = useMultiStyleConfig('Header')
    const customer = useCustomer()

    const hasEnterPopoverContent = useRef()

    const handleIconsMouseLeave = () => {
        // don't close the menu if users enter the popover content
        setTimeout(() => {
            if (!hasEnterPopoverContent.current) onClose()
        }, 100)
    }

    return (
        <Box position="relative">
            <Popover
                isLazy
                arrowSize={15}
                isOpen={isOpen}
                onClose={onClose}
                onOpen={onOpen}
                variant="fullWidth"
            >
                <PopoverTrigger>
                    <Button
                        {...styles.accountIcon}
                        tabIndex={0}
                        onMouseOver={isDesktop ? onOpen : noop}
                        onKeyDown={(e) => {
                            e.key === ENTER_KEY ? onMyAccountClick() : noop
                        }}
                        onMouseLeave={handleIconsMouseLeave}
                        variant="link"
                        color="grey9"
                        _hover={{color: 'grey4Hover', textDecoration: 'underline'}}
                        _active={{color: 'grey4Hover', textDecoration: 'underline'}}
                        onClick={onMyAccountClick}
                        aria-label={intl.formatMessage({
                            id: 'header.button.assistive_msg.my_account',
                            defaultMessage: 'My account'
                        })}
                    >
                        <SignoutIcon boxSize={4} marginRight={0.5} />
                        <Flex alignItems="center" padding={customer.isRegistered ? 3 : 0}>
                            <Text>
                                {customer.isRegistered
                                    ? customer.firstName
                                    : intl.formatMessage({
                                          id: 'header.button.go.to.login',
                                          defaultMessage: 'Login'
                                      })}
                            </Text>

                            {customer.isRegistered && (
                                <ChevronDownIcon aria-label="My account trigger" />
                            )}
                        </Flex>
                    </Button>
                </PopoverTrigger>

                {customer.isRegistered && (
                    <PopoverContent
                        width="100%"
                        {...styles.popoverContent}
                        padding={3.5}
                        onMouseLeave={() => {
                            hasEnterPopoverContent.current = false
                            onClose()
                        }}
                        onMouseOver={() => {
                            hasEnterPopoverContent.current = true
                        }}
                    >
                        <PopoverBody width="100%" padding={0}>
                            <Stack
                                width="100%"
                                spacing={0}
                                as="nav"
                                data-testid="account-detail-nav"
                            >
                                {headerNavLinks.map((link) => {
                                    return (
                                        <Button
                                            key={link.name}
                                            as={Link}
                                            to={`/account${link.path}`}
                                            variant="header-navigation-menu-link"
                                        >
                                            {intl.formatMessage(headerMessages[link.name])}
                                        </Button>
                                    )
                                })}
                                <Button
                                    onClick={onSignoutClick}
                                    variant="header-navigation-menu-link"
                                >
                                    <Flex>
                                        <Text as="span" {...styles.signoutText}>
                                            {intl.formatMessage({
                                                defaultMessage: 'Logout',
                                                id: 'header.popover.action.log_out'
                                            })}
                                        </Text>
                                    </Flex>
                                </Button>
                            </Stack>
                        </PopoverBody>
                    </PopoverContent>
                )}
            </Popover>
        </Box>
    )
}

MyAccountMenu.displayName = 'MyAccountMenu'

MyAccountMenu.propTypes = {
    onMyAccountClick: PropTypes.func,
    onSignoutClick: PropTypes.func
}

export default MyAccountMenu