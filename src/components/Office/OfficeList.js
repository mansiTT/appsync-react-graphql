import React, { useEffect, useState, useContext } from 'react';
import { OfficeContext } from './OfficeContext'
import { listOffices } from "../../graphql/queries";
import { Table, Spin } from 'antd';
import officeHeader from './OfficeHeader'
import { deleteOffice } from "../../graphql/mutations"
import { API, graphqlOperation } from "aws-amplify";

const OfficeList = () => {

    const [offices, setOffices] = useContext(OfficeContext)

    const handleGetOfficeList = async () => {
        const result = await API.graphql(graphqlOperation(listOffices));
        console.log(result.data.listOffices.items)
        setOffices(result.data.listOffices.items)
    }

    const handleDeleteOffice = async (id) => {
        const val = { input: { "id": id } }
        await API.graphql(graphqlOperation(deleteOffice, val));
        const tempOfficeState = [...offices]
        const updatedOffices = tempOfficeState.filter((office, index) => {
            return office.id !== id
        })
    
        setOffices(updatedOffices)

    }

    useEffect(() => {
        handleGetOfficeList()
    }, [])

    return (
        <div>
            {
                (offices.length === 0) ?
                    (<div><Spin tip="Loading...">Looking for existing offices......</Spin></div>) :
                    (
                        <div>
                            <Table
                                rowKey="id"
                                dataSource={offices}
                                columns={officeHeader(handleDeleteOffice)}
                            />
                        </div>
                    )}
        </div>
    )
}


export default OfficeList