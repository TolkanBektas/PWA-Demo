/*
 * Copyright (c) 2021, salesforce.com, inc.
 * All rights reserved.
 * SPDX-License-Identifier: BSD-3-Clause
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/BSD-3-Clause
 */
import {useIntl, defineMessages} from 'react-intl'

const messages = defineMessages({
    zipCode: {defaultMessage: 'Zip Code', id: 'use_address_fields.label.zipCode'},
    postalCode: {defaultMessage: 'Postal Code', id: 'use_address_fields.label.postal_code'},
})


export default function useCheckOrderFields({form: {control, errors}, prefix = ''}) {
    const {formatMessage} = useIntl()


    const fields = {
        email: {
            name: `${prefix}email`,
            label: formatMessage({defaultMessage: 'Email', id: 'use_login_fields.label.email'}),
            placeholder: 'you@email.com',
            defaultValue: '',
            type: 'email',
            rules: {
                required: formatMessage({
                    defaultMessage: 'Please enter your email address.',
                    id: 'use_login_fields.error.required_email'
                })
            },
            error: errors[`${prefix}email`],
            control
        },
        postalCode: {
            name: `${prefix}postalCode`,
            label: formatMessage(messages.postalCode),
            defaultValue: '',
            type: 'text',
            rules: {
                required: formatMessage(
                    {
                        defaultMessage: 'Please enter your {postalOrZip}.',
                        id: 'use_address_fields.error.please_enter_your_postal_or_zip'
                    },
                    {postalOrZip:'postal code'}
                )
            },
            error: errors[`${prefix}postalCode`],
            control
        },
        orderNumber: {
            name: `${prefix}orderNumber`,
            label: formatMessage({
                defaultMessage: 'Order Number',
                id: 'account_order_detail.label.order_number',
            }, {
                orderNumber: ""
            }),
            defaultValue: '',
            type: 'text',
            rules: {
                required: formatMessage({
                    defaultMessage: 'Please enter your order number.',
                    id: 'account_order_detail.label.order_number'
                }, {
                    orderNumber: ""
                })
            },
            error: errors[`${prefix}orderNumber`],
            control
        }
    }

    return fields
}