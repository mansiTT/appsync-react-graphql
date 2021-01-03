import React from 'react'
import { Tabs } from 'antd';
import Employee from '../components/Employee/Employee'
import Office from '../components/Office/Office'
import ListAddress from '../components/Address/ListAddress';
import { Typography } from 'antd';
const { TabPane } = Tabs;
const { Title } = Typography;

const tabs = () => {
    const callback = (tab) => {
        console.log(tab)
    }
    return (
        <div>
        <Title level={3}>Manage Employee/Offices</Title>
        <Tabs defaultActiveKey="1" onChange={callback}>
            <TabPane tab="Employee" key="1">
                <Employee />
            </TabPane>
            <TabPane tab="Office" key="2">
                <Office />
            </TabPane>
            <TabPane tab="Address" key="3">
                <ListAddress />
            </TabPane>
        </Tabs>
        </div>
    )
}

export default tabs