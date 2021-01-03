import React from 'react';
import EmployeeAdd from './EmployeeAdd'
import EmployeeList from './EmployeeList'
import { EmployeeProvider } from './EmployeeContext'

function Employee() {

    return (
        <EmployeeProvider>
            <div>
                <EmployeeAdd />
                <EmployeeList />
            </div>
        </EmployeeProvider>
    )
}

export default Employee