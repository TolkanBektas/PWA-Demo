import React from 'react'
import PropTypes from 'prop-types'
import {Flex, Box, Text} from '@chakra-ui/react'
import {HideOnMobile} from '../../responsive'

const SearchTitle = ({title}) => {
    return (
        <Flex color={'grey4'} fontSize={'.875em'} paddingTop={'0.625em'}>
            <HideOnMobile>
                <Box marginRight=".85em" width="40px" />
            </HideOnMobile>
            <Text px={15} fontSize="sm">
                {title}
            </Text>
        </Flex>
    )
}

SearchTitle.propTypes = {
    title: PropTypes.string
}

export default SearchTitle