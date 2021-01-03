import React from 'react';
import { Space } from 'antd';

import CustomModal from '../../containers/CustomModal'

const officeHeader = (handleDeleteEvent) => {
    const columns = [
        {
            title: 'Office Name',
            dataIndex: 'name',
            key: 'name',
        },
        {
            title: 'City',
            dataIndex: 'address.city',
            key: 'address.city',
        },
        {
            title: 'State',
            dataIndex: 'address.state',
            key: 'address.state',
        },
        {
            title: 'Action',
            key: 'action',
            render: (text, row) => (
                <Space size="middle">
                    <a>Assign Address </a>
                    <a onClick={() => handleDeleteEvent(row.id)}>Delete</a>
                </Space>
            )
        }
    ];
    return columns;
}

export default officeHeader