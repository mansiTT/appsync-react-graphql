import React from 'react'
import { API, graphqlOperation } from "aws-amplify";
import { listOffices } from "../../graphql/queries";
import { Table, Space, Button, Spin } from 'antd';
import { Connect } from "aws-amplify-react";
import { deleteOffice } from "../../graphql/mutations"
import CustomModal from '../../containers/CustomModal';


const ListOffice = () => {


    const handleDeleteEvent = async (id) => {
        const val = { input: { id: id } }
        const result = await API.graphql(graphqlOperation(deleteOffice, val));
    }

    const columns = [
        {
            title: 'Office Name',
            dataIndex: 'name',
            key: 'name',
        },
        {
            title: 'Action',
            key: 'action',
            render: (text, row) => (
                <Space size="middle">
                    <a>Assign Employee </a>
                    <a onClick={() => handleDeleteEvent(row.id)}>Delete</a>
                </Space>
            )
        }
    ];

    return (
        <div>
            <CustomModal title="Add Office" name="Office" type="button"/>
            <Connect query={graphqlOperation(listOffices)}>
                {({ data: { listOffices: offices } }) => {
                    if (!offices || (offices.items && offices.items.length === 0)) {
                        return (<div><Spin tip="Loading...">Looking for existing offices......</Spin></div>)
                    }
                    return (
                        <div>
                            <Table dataSource={offices.items} columns={columns} />
                        </div>
                    );
                }}
            </Connect>
        </div>
    )
}

export default ListOffice





