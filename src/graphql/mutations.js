/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createEmployee = /* GraphQL */ `
  mutation CreateEmployee(
    $input: CreateEmployeeInput!
    $condition: ModelEmployeeConditionInput
  ) {
    createEmployee(input: $input, condition: $condition) {
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
export const updateEmployee = /* GraphQL */ `
  mutation UpdateEmployee(
    $input: UpdateEmployeeInput!
    $condition: ModelEmployeeConditionInput
  ) {
    updateEmployee(input: $input, condition: $condition) {
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
export const deleteEmployee = /* GraphQL */ `
  mutation DeleteEmployee(
    $input: DeleteEmployeeInput!
    $condition: ModelEmployeeConditionInput
  ) {
    deleteEmployee(input: $input, condition: $condition) {
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
export const createOffice = /* GraphQL */ `
  mutation CreateOffice(
    $input: CreateOfficeInput!
    $condition: ModelOfficeConditionInput
  ) {
    createOffice(input: $input, condition: $condition) {
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
export const updateOffice = /* GraphQL */ `
  mutation UpdateOffice(
    $input: UpdateOfficeInput!
    $condition: ModelOfficeConditionInput
  ) {
    updateOffice(input: $input, condition: $condition) {
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
export const deleteOffice = /* GraphQL */ `
  mutation DeleteOffice(
    $input: DeleteOfficeInput!
    $condition: ModelOfficeConditionInput
  ) {
    deleteOffice(input: $input, condition: $condition) {
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
export const createAddress = /* GraphQL */ `
  mutation CreateAddress(
    $input: CreateAddressInput!
    $condition: ModelAddressConditionInput
  ) {
    createAddress(input: $input, condition: $condition) {
      id
      city
      state
      country
      createdAt
      updatedAt
    }
  }
`;
export const updateAddress = /* GraphQL */ `
  mutation UpdateAddress(
    $input: UpdateAddressInput!
    $condition: ModelAddressConditionInput
  ) {
    updateAddress(input: $input, condition: $condition) {
      id
      city
      state
      country
      createdAt
      updatedAt
    }
  }
`;
export const deleteAddress = /* GraphQL */ `
  mutation DeleteAddress(
    $input: DeleteAddressInput!
    $condition: ModelAddressConditionInput
  ) {
    deleteAddress(input: $input, condition: $condition) {
      id
      city
      state
      country
      createdAt
      updatedAt
    }
  }
`;
export const createEmployeeOffice = /* GraphQL */ `
  mutation CreateEmployeeOffice(
    $input: CreateEmployeeOfficeInput!
    $condition: ModelEmployeeOfficeConditionInput
  ) {
    createEmployeeOffice(input: $input, condition: $condition) {
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
export const updateEmployeeOffice = /* GraphQL */ `
  mutation UpdateEmployeeOffice(
    $input: UpdateEmployeeOfficeInput!
    $condition: ModelEmployeeOfficeConditionInput
  ) {
    updateEmployeeOffice(input: $input, condition: $condition) {
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
export const deleteEmployeeOffice = /* GraphQL */ `
  mutation DeleteEmployeeOffice(
    $input: DeleteEmployeeOfficeInput!
    $condition: ModelEmployeeOfficeConditionInput
  ) {
    deleteEmployeeOffice(input: $input, condition: $condition) {
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
