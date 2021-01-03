import React from 'react'
import { Form, Input, Button } from "antd";
import { API, graphqlOperation } from "aws-amplify";
import { createAddress } from "../../graphql/mutations";
import {Select} from 'antd'

const address = () => {
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
        const office = await API.graphql(graphqlOperation(createAddress, values));
        console.log(office)
    };
    return (
        <div style={{ textAlign: "center" }}>
            <Form
                {...layout}
                name="nest-messages"
                onFinish={onFinish}
                validateMessages={validateMessages}>
                <Form.Item name={["input", "city"]} label="City"
                    rules={[
                        {
                            required: true
                        }
                    ]}>
                        <Input/>
                </Form.Item>
                <Form.Item name={["input", "state"]} label="State"
                    rules={[
                        {
                            required: true
                        }
                    ]}>
                        <Input/>
                </Form.Item> 
                <Form.Item name={["input", "country"]} label="Country"
                    rules={[
                        {
                            required: true
                        }
                    ]}>
                    <Input/>
                </Form.Item>

                <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
                    <Button type="primary" htmlType="submit">
                        Submit</Button>
                </Form.Item>
            </Form>
        </div>
    )
}

export default address