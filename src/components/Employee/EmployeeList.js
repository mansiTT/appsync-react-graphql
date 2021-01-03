import React, { useEffect, useContext } from 'react';
import { EmployeeContext } from './EmployeeContext'
import { listEmployees } from "../../graphql/queries";
import { Table, Spin } from 'antd';
import employeeHeader from './EmployeeHeader'
import { deleteEmployee } from "../../graphql/mutations"
import { API, graphqlOperation } from "aws-amplify";

const EmployeeList = () => {
    const [employees, setEmployees] = useContext(EmployeeContext)

    const handleGetEmployeeList = async () => {
        const result = await API.graphql(graphqlOperation(listEmployees));
        setEmployees(result.data.listEmployees.items)
    }

    const handleDeleteEmployee = async (id) => {
        const val = { input: { "id": id } }
        await API.graphql(graphqlOperation(deleteEmployee, val));
        const tempEmpState = [...employees]
        const updatedEmployees = tempEmpState.filter((employee, index) => {
            return employee.id !== id
        })
        setEmployees(updatedEmployees)

    }

    useEffect(() => {
        handleGetEmployeeList()
    }, [])

    return (
        <div>
            {
                (employees.length === 0) ?
                    (<div><Spin tip="Loading...">Looking for existing employees......</Spin></div>) :
                    (
                        <div>
                            <Table
                                rowKey="id"
                                dataSource={employees}
                                columns={employeeHeader(handleDeleteEmployee)}
                            />
                        </div>
                    )}
        </div>
    )
}


export default EmployeeList