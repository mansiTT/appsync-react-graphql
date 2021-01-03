import React, { useContext, useEffect, useState } from 'react'
import { Form, Input, Button } from "antd";
import { OfficeContext } from './OfficeContext'
import { API, graphqlOperation } from "aws-amplify";
import { createOffice } from "../../graphql/mutations";
import { listAddresss } from "../../graphql/queries"

import { Select } from 'antd';
const { Option } = Select;

const OfficeForm = () => {

    const [form] = Form.useForm();

    const [offices, setOffices] = useContext(OfficeContext)

    const [addresses, setAddresses] = useState([])

    const handleGetAddressList = async () => {
        const result = await API.graphql(graphqlOperation(listAddresss));
        console.log(result.data.listAddresss.items)
        setAddresses(result.data.listAddresss.items)
    }

    useEffect(() => {
        handleGetAddressList()
    }, [])

    const validateMessages = {
        required: "${label} is required!",
        types: {
            email: "${label} is not validate email!",
            number: "${label} is not a validate number!"
        },
        number: {
            range: "${label} must be between ${min} and ${max}"
        }
    };

    const layout = {
        labelCol: {
            span: 8
        },
        wrapperCol: {
            span: 16
        }
    };

    const onFinish = async (values) => {
        console.log(values)
        const office = await API.graphql(graphqlOperation(createOffice, values));
        const tempOfficeState = [...offices, office.data.createOffice]
        setOffices(tempOfficeState);
        form.resetFields();
        return
    };


    const handleSelection = (value) => {
        console.log(value)
    }

    return (
        <div style={{ textAlign: "center" }}>
            <Form
                form={form}
                {...layout}
                name="nest-messages"
                onFinish={onFinish}
                validateMessages={validateMessages}>
                <Form.Item name={["input", "name"]} label="Office name"
                    rules={[
                        {
                            required: true
                        }
                    ]}>
                    <Input />
                </Form.Item>
                <Form.Item name={["input", "officeAddressId"]} label="Office Address">
                    <Select style={{ width: '100%' }} placeholder="Addresses" onChange={handleSelection}>
                        {addresses.map(address => (
                            <Option key={address.id}>{address.city}</Option>
                        ))}
                    </Select>
                </Form.Item>
                <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
                    <Button type="primary" htmlType="submit">
                        Submit</Button>
                </Form.Item>
            </Form>
        </div>
    )
}

export default OfficeForm