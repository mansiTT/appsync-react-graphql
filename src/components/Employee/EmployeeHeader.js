import React from 'react';
import { Space } from 'antd';

import CustomModal from '../../containers/CustomModal'

const employeeHeader = (handleDeleteEvent) => {
    const columns = [
        {
            title: 'Employee ID',
            dataIndex: 'employeeID',
            key: 'employeeID',
        },
        {
            title: 'Firstname',
            dataIndex: 'firstName',
            key: 'firstName',
        },
        {
            title: 'Lastname',
            dataIndex: 'lastName',
            key: 'lastName',
        },
        {
            title: 'Designation',
            dataIndex: 'designation',
            key: 'designation',
        },
        {
            title: 'Date of Joining',
            dataIndex: 'doj',
            key: 'doj',
        },
        {
            title: 'Status',
            dataIndex: 'status',
            key: 'status',
        },
        {
            title: 'Offices',
            dataIndex: 'offices',
            key: 'offices',
            render: (text, row) => (
                <CustomModal title={row.offices.items.length}
                    name="GenericList"
                    data={row.offices.items} />
            )
        },
        {
            title: 'Action',
            key: 'action',
            render: (text, row) => (
                <Space size="middle">
                    <CustomModal title="Add Office" name="AssignOfficeForm" data={row} />
                    <a onClick={() => handleDeleteEvent(row.id)}>Delete</a>
                </Space>
            )
        }
    ]
    return columns;
}

export default employeeHeader