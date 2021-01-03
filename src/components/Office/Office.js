import React from 'react';
import OfficeAdd from './OfficeAdd'
import OfficeList from './OfficeList'
import { OfficeProvider } from './OfficeContext'

function Office() {

    return (
        <OfficeProvider>
            <div>
                <OfficeAdd />
                <br/>
                <OfficeList />
            </div>
        </OfficeProvider>
    )
}

export default Office