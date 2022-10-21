import React from 'react'
import PropTypes from 'prop-types'

// Components
import {Box, HStack, useRadio, useRadioGroup} from '@chakra-ui/react'

// Icons
import {GridIcon, ListViewIcon} from '../../components/icons'

const GridListToggle = (props) => {
    const productsViewsList = ['list', 'grid']

    const {getRootProps, getRadioProps} = useRadioGroup({
        name: 'listGridToggle',
        defaultValue: 'grid',
        onChange: (e) => {
            changeProductView(e)
            if (e == 'list') {
                changeGridSizes([1, 1, 1, 1])
            } else {
                changeGridSizes([2, 2, 3, 3])
            }
        }
    })
    const group = getRootProps()
    const {changeProductView, changeGridSizes} = props

    return (
        <HStack {...group}>
            {productsViewsList.map((item) => {
                const radioProps = getRadioProps({value: item})
                const {getInputProps, getCheckboxProps} = useRadio(radioProps)
                const input = getInputProps()
                const checkbox = getCheckboxProps()
                return (
                    <Box key={item} as="label">
                        <input {...input} />
                        <Box {...checkbox} _checked={{fill: 'gray'}}>
                            {item == 'list' ? (
                                <ListViewIcon boxSize={8} />
                            ) : (
                                <GridIcon boxSize={8} />
                            )}
                        </Box>
                    </Box>
                )
            })}
        </HStack>
    )
}

GridListToggle.displayName = 'GridListToggle'

GridListToggle.propTypes = {
    changeProductView: PropTypes.func,
    changeGridSizes: PropTypes.func
}

export default GridListToggle