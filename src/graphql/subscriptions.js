/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateEmployee = /* GraphQL */ `
  subscription OnCreateEmployee {
    onCreateEmployee {
      id
      employeeID
      firstName
      lastName
      dob
      doj
      designation
      status
      offices {
        items {
          id
          employee_id
          office_id
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateEmployee = /* GraphQL */ `
  subscription OnUpdateEmployee {
    onUpdateEmployee {
      id
      employeeID
      firstName
      lastName
      dob
      doj
      designation
      status
      offices {
        items {
          id
          employee_id
          office_id
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteEmployee = /* GraphQL */ `
  subscription OnDeleteEmployee {
    onDeleteEmployee {
      id
      employeeID
      firstName
      lastName
      dob
      doj
      designation
      status
      offices {
        items {
          id
          employee_id
          office_id
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const onCreateOffice = /* GraphQL */ `
  subscription OnCreateOffice {
    onCreateOffice {
      id
      name
      employees {
        items {
          id
          employee_id
          office_id
          createdAt
          updatedAt
        }
        nextToken
      }
      address {
        id
        city
        state
        country
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateOffice = /* GraphQL */ `
  subscription OnUpdateOffice {
    onUpdateOffice {
      id
      name
      employees {
        items {
          id
          employee_id
          office_id
          createdAt
          updatedAt
        }
        nextToken
      }
      address {
        id
        city
        state
        country
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteOffice = /* GraphQL */ `
  subscription OnDeleteOffice {
    onDeleteOffice {
      id
      name
      employees {
        items {
          id
          employee_id
          office_id
          createdAt
          updatedAt
        }
        nextToken
      }
      address {
        id
        city
        state
        country
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const onCreateAddress = /* GraphQL */ `
  subscription OnCreateAddress {
    onCreateAddress {
      id
      city
      state
      country
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateAddress = /* GraphQL */ `
  subscription OnUpdateAddress {
    onUpdateAddress {
      id
      city
      state
      country
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteAddress = /* GraphQL */ `
  subscription OnDeleteAddress {
    onDeleteAddress {
      id
      city
      state
      country
      createdAt
      updatedAt
    }
  }
`;
export const onCreateEmployeeOffice = /* GraphQL */ `
  subscription OnCreateEmployeeOffice {
    onCreateEmployeeOffice {
      id
      employee_id
      office_id
      employee {
        id
        employeeID
        firstName
        lastName
        dob
        doj
        designation
        status
        offices {
          nextToken
        }
        createdAt
        updatedAt
      }
      office {
        id
        name
        employees {
          nextToken
        }
        address {
          id
          city
          state
          country
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateEmployeeOffice = /* GraphQL */ `
  subscription OnUpdateEmployeeOffice {
    onUpdateEmployeeOffice {
      id
      employee_id
      office_id
      employee {
        id
        employeeID
        firstName
        lastName
        dob
        doj
        designation
        status
        offices {
          nextToken
        }
        createdAt
        updatedAt
      }
      office {
        id
        name
        employees {
          nextToken
        }
        address {
          id
          city
          state
          country
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteEmployeeOffice = /* GraphQL */ `
  subscription OnDeleteEmployeeOffice {
    onDeleteEmployeeOffice {
      id
      employee_id
      office_id
      employee {
        id
        employeeID
        firstName
        lastName
        dob
        doj
        designation
        status
        offices {
          nextToken
        }
        createdAt
        updatedAt
      }
      office {
        id
        name
        employees {
          nextToken
        }
        address {
          id
          city
          state
          country
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
