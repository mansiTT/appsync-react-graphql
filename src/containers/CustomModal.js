import React, { useState } from 'react'
import { Modal, Button, List } from 'antd';
import ListOffices from '../components/Offices/ListOffices'
import EmployeeForm from '../components/Employee/EmployeeForm'
import Office from '../components/Office/OfficeForm'
import Address from '../components/Address/Address'
import { PlusCircleOutlined } from '@ant-design/icons';
import  AssignOfficeForm from '../components/Employee/AssignOfficeForm'

const CustomModal = (props) => {

    const [visibility, setVisibility] = useState(false)

    const [modalName, setModalName] = useState("")

    const showModal = () => {
        console.log(props)
        if (props.name === "ListOffices")
            setModalName(<ListOffices />)
        if (props.name === "Office")
            setModalName(<Office />)
        if (props.name === "Address")
            setModalName(<Address />)
        if (props.name === "Employee")
            setModalName(<EmployeeForm />)
        if (props.name === "AssignOfficeForm") {
            setModalName(<AssignOfficeForm employee={props.data}/>)
        }
        else if (props.name === "GenericList") {
            setModalName(<List
                size="large"
                bordered
                dataSource={props.data}
                renderItem={item => <List.Item>{item.office.name}</List.Item>}
            />)
        }
        setVisibility(true)

    }

    const handleOk = e => {
        console.log(e);
        setVisibility(false)
    }

    const handleCancel = e => {
        console.log(e);
        setVisibility(false)
    }

    return (
        <div>
            {props.type === "button" ?
                <Button style={{ float: 'right' }}
                    type="dashed"
                    size="large"
                    icon={<PlusCircleOutlined />}
                    onClick={showModal}>{props.title}</Button>
                :
                <a onClick={showModal}>
                    {props.title}
                </a>
            }
            <Modal
                title={props.title}
                visible={visibility}
                onOk={handleOk}
                onCancel={handleCancel}
                okButtonProps={{ disabled: true }}
                cancelButtonProps={{ disabled: true }}>
                {modalName}
            </Modal>
        </div>
    );

}

export default CustomModal