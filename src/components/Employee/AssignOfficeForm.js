import React, { useEffect, useContext, useState } from 'react';
import { EmployeeContext } from './EmployeeContext'
import { Select } from 'antd';
import { API, graphqlOperation } from "aws-amplify";
import { createEmployeeOffice } from "../../graphql/mutations";
import { listOffices } from '../../graphql/queries'


const { Option } = Select;

const AssignOfficeForm = (props) => {
    const [offices, setOffices] = useState([])
    const [employees, setEmployees] = useContext(EmployeeContext)

    const handleGetOfficeList = async () => {
        const result = await API.graphql(graphqlOperation(listOffices));
        setOffices(result.data.listOffices.items)
    }

    const handleSelection= async (value) => {
        const input = {
            input: {
                employee_id: props.employee.id,
                office_id: value[0]
            }
        }
        let result = await API.graphql(graphqlOperation(createEmployeeOffice, input));
        result = result.data.createEmployeeOffice
        const tempEmpState = [...employees]

        for (let employee of tempEmpState) {
            if (employee.id === props.employee.id) {
                if (!employee.offices && employee.offices.length >= 0) {
                    employee.offices = {};
                    employee.offices.items = []
                }
                delete result.employee
                employee.offices.items.push(result)
                break;
            }
        }
        setEmployees(tempEmpState)
    }

    useEffect(() => {
        handleGetOfficeList()
    }, [])

    return (
        <div>
            Employee Name :  <a> {props.employee.firstName + " " + props.employee.lastName} </a>
            <Select mode="tags" style={{ width: '100%' }} placeholder="Tags Mode" onChange={handleSelection}>
                {offices.map(office => (
                    <Option key={office.id}>{office.name}</Option>
                ))}
            </Select>
        </div>
    )
}


export default AssignOfficeForm