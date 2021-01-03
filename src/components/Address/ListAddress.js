import React from 'react'
import { graphqlOperation } from "aws-amplify";
import { listAddresss } from "../../graphql/queries";
import { Table, Space, Spin } from 'antd';
import { Connect } from "aws-amplify-react";
import CustomModal from '../../containers/CustomModal'

import { addressHeader } from '../../constants/AddressHeader'

const ListAddress = () => {

    return (
        <div>
            <CustomModal title="Add Address" name="Address" type="button" />
            <Connect query={graphqlOperation(listAddresss)}>
                {({ data: { listAddresss: addresses } }) => {
                    console.log(addresses)
                    if (!addresses || (addresses.items && addresses.items.length === 0)) {
                        return (<div><Spin tip="Loading...">Looking for existing addresses......</Spin></div>);
                    }
                    return (
                        <div>
                            <Table dataSource={addresses.items}
                                columns={addressHeader}
                            />
                        </div>
                    );
                }}
            </Connect>
        </div>
    )
}

export default ListAddress