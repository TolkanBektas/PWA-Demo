import React ,{useState} from 'react'

import {
    Box,
    Button

} from '@chakra-ui/react'
import {FormattedMessage} from 'react-intl'
import { useForm } from 'react-hook-form';
import useCheckOrderFields from '../../forms/useCheckOrderFields';
import Field from "../../field";
import useCustomer from '../../../commerce-api/hooks/useCustomer'

const CheckOrder = () => {

    const order = useCustomer()

    const form = useForm();
    const fields = useCheckOrderFields({form})
    const [orderNotFound, setOrderNotFound] = useState(null)
    const [shippingData, setShippingData] = useState(null)

    const submitForm = (data) =>{
        order.getOrder(data.orderNumber).then((res)=>{
            if(res.billingAddress.postalCode.toUpperCase() !== data.postalCode.toUpperCase() || res.customerInfo.email.toUpperCase() !== data.email.toUpperCase()){
                setOrderNotFound(true)
            } else {
                setOrderNotFound(false)
                setShippingData(res)
            }
        }).catch(error => {
            setShippingData(error)
            setOrderNotFound(true)
        });
    }

    return (
        <>
            { orderNotFound &&
                <Box padding={2} bg='#cebdb3' borderRadius={3} margin={2}>
                    <FormattedMessage
                        defaultMessage="Sorry this order number, email or postal code does not match our records. Check your records and try again."
                        id="login_form.check_order.order_not_found"
                    />
                </Box>
            }
            { (!orderNotFound && shippingData !== null)&&
                <Box padding={2} borderRadius={3} margin={2}>
                    <p>
                        <FormattedMessage
                            defaultMessage="Shipping Status : "
                            id="login_form.check_order.shipping_status"
                        />{shippingData.shippingStatus}
                    </p>
                    <p>
                        <FormattedMessage
                            defaultMessage="Order Number :"
                            id="login_form.check_order.order_number"
                        />{shippingData.orderNo}
                    </p>
                </Box>
            }
            <form onSubmit={form.handleSubmit(submitForm)}>
                <Field {...fields.orderNumber} />
                <Field {...fields.email} />
                <Field {...fields.postalCode} />
                <Button type="submit">
                    <FormattedMessage
                        defaultMessage="Submit"
                        id="shipping_address_selection.button.submit"
                    />
                </Button>
            </form>
        </>
    )
}

CheckOrder.propTypes = {
}

export default CheckOrder