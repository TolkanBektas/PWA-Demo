import React from 'react'
import {useIntl} from 'react-intl'
import PropTypes from 'prop-types'

import {noop} from '../../../utils/utils'
import useCustomer from '../../../commerce-api/hooks/useCustomer'
import Link from '../../link'
import {
    Box,
    useMultiStyleConfig,
    Button,
    Text,
    Stack,
    useDisclosure,
    Popover,
    PopoverTrigger,
    PopoverContent,
    PopoverBody
} from '@chakra-ui/react'

import {UserIconSg} from '../../icons'

import {headerNavLinks, headerMessages} from '../../../pages/account/SG/constant'

/**
 * Section component used on content pages like home page.
 * This component helps with creating a consistent layout and
 * consistent typography styles for section headings.
 */
const MyAccountMenu = ({onSignoutClick = noop}) => {
    const {isOpen, onClose, onOpen} = useDisclosure()
    const intl = useIntl()
    const styles = useMultiStyleConfig('Header')
    const customer = useCustomer()

    return (
        <Box position="relative">
            <Popover
                isLazy
                arrowSize={15}
                isOpen={isOpen}
                onClose={onClose}
                onOpen={onOpen}
                variant="fullWidth"
                trigger="click"
            >
                <PopoverTrigger>
                    <Button
                        {...styles.accountIcon}
                        tabIndex={0}
                        variant="link"
                        color="grey9"
                        _hover={{color: 'grey4Hover', textDecoration: 'underline'}}
                        _active={{color: 'grey4Hover', textDecoration: 'underline'}}
                        aria-label={intl.formatMessage({
                            id: 'header.button.assistive_msg.my_account',
                            defaultMessage: 'My account'
                        })}
                    >
                        <UserIconSg
                            boxSize={7}
                            fill="nobel"
                            transition=".5s ease"
                            _hover={{fill: 'citrus'}}
                            marginRight={0.5}
                        />
                    </Button>
                </PopoverTrigger>

                <PopoverContent width="100%" {...styles.popoverContent} padding={3} fontSize="12px">
                    <PopoverBody width="100%" padding={0}>
                        <Text
                            as="h3"
                            textAlign="center"
                            textTransform="uppercase"
                            paddingBottom="0.7em"
                        >
                            {customer.isRegistered
                                ? customer.firstName + ' ' + customer.lastName
                                : intl.formatMessage({
                                      defaultMessage: 'Login / Register',
                                      id: 'header.popover.action.login_register'
                                  })}
                        </Text>

                        {customer.isRegistered ? (
                            <Stack
                                width="100%"
                                spacing={0}
                                as="nav"
                                data-testid="account-detail-nav"
                                alignItems="center"
                            >
                                {headerNavLinks.map((link) => {
                                    return (
                                        <Link
                                            key={link.name}
                                            as={Link}
                                            to={`/account${link.path}`}
                                            variant="link-nav-sg"
                                        >
                                            {intl.formatMessage(headerMessages[link.name])}
                                        </Link>
                                    )
                                })}
                                <Button
                                    onClick={onSignoutClick}
                                    variant="button-sg"
                                    textTransform="uppercase"
                                    marginBottom="0.5em"
                                >
                                    {intl.formatMessage({
                                        defaultMessage: 'Logout',
                                        id: 'header.popover.action.log_out'
                                    })}
                                </Button>
                            </Stack>
                        ) : (
                            <Stack
                                width="100%"
                                spacing={0}
                                as="nav"
                                data-testid="account-detail-nav"
                                alignItems="center"
                            >
                                <Link to={`/login`} variant="link-nav-sg">
                                    {intl.formatMessage({
                                        defaultMessage: 'Login',
                                        id: 'header.popover.action.login'
                                    })}
                                </Link>
                                <Link to={`/registration`} variant="link-nav-sg">
                                    {intl.formatMessage({
                                        defaultMessage: 'Register',
                                        id: 'header.popover.action.register'
                                    })}
                                </Link>
                            </Stack>
                        )}
                    </PopoverBody>
                </PopoverContent>
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