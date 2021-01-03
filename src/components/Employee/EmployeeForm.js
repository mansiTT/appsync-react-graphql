import React, { useContext } from 'react';
import { Form, Input, Button, DatePicker } from "antd";
import { EmployeeContext } from './EmployeeContext'
import { API, graphqlOperation } from "aws-amplify";
import { createEmployee } from "../../graphql/mutations";

const EmployeeForm = () => {
    const [form] = Form.useForm();

    const [employees, setEmployees] = useContext(EmployeeContext)

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
        const employee = await API.graphql(graphqlOperation(createEmployee, values));
        const tempEmpState = [...employees, employee.data.createEmployee]
        setEmployees(tempEmpState);
        form.resetFields();
        return
    };


    return (
        <div style={{ textAlign: "center" }}>
            <Form
                form={form}
                {...layout}
                name="nest-messages"
                onFinish={onFinish}
                validateMessages={validateMessages}>
                <Form.Item name={["input", "employeeID"]} label="Employee ID"
                    rules={[
                        {
                            required: true
                        }
                    ]}>
                    <Input />
                </Form.Item>
                <Form.Item
                    name={["input", "firstName"]}
                    label="Firstname"
                    rules={[
                        {
                            required: true
                        }
                    ]}>
                    <Input />
                </Form.Item>
                <Form.Item
                    name={["input", "lastName"]}
                    label="Lastname"
                    rules={[
                        {
                            required: true
                        }
                    ]}
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    name={["input", "dob"]}
                    label="Date Of Birth">
                    <DatePicker
                        format="MM/DD/YYYY"></DatePicker>
                </Form.Item>
                <Form.Item
                    name={["input", "doj"]}
                    label="Date Of joining">
                    <DatePicker
                        format="MM/DD/YYYY"></DatePicker>
                </Form.Item>
                <Form.Item
                    name={["input", "designation"]}
                    label="Designation"
                    rules={[
                        {
                            required: true
                        }
                    ]}>
                    <Input />
                </Form.Item>
                <Form.Item
                    name={["input", "status"]}
                    label="Status"
                    rules={[
                        {
                            required: true
                        }
                    ]}>
                    <Input />
                </Form.Item>
                <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
                    <Button type="primary" htmlType="submit">
                        Submit</Button>
                </Form.Item>
            </Form>
        </div>
    )
}


export default EmployeeForm