import React from 'react'
import {Box, IconButton, useMultiStyleConfig} from '@chakra-ui/react'
import {useIntl} from 'react-intl'
import {StoreLocatorIcon} from '../../icons'

/**
 * Store locator icon
 */
const StoreLocator = () => {
    const intl = useIntl()
    const styles = useMultiStyleConfig('Header')

    return (
        <Box>
            <IconButton
                aria-label={intl.formatMessage({
                    id: 'header.button.assistive_msg.my_cart',
                    defaultMessage: 'Store locator'
                })}
                tabIndex={0}
                icon={
                    <>
                        <StoreLocatorIcon {...styles.storeLocatorIcon} />
                    </>
                }
                variant="unstyled"
            />
        </Box>
    )
}

export default StoreLocator