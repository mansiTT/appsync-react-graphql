import React, { useState, createContext } from 'react'

export const OfficeContext = createContext()

export const OfficeProvider = props => {

    const [offices, setOffices] = useState([])

    return (
        <OfficeContext.Provider value={[offices, setOffices]}>
            {props.children}
        </OfficeContext.Provider>
    )
}

