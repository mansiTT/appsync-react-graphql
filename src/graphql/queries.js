/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getEmployee = /* GraphQL */ `
  query GetEmployee($id: ID!) {
    getEmployee(id: $id) {
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
export const listEmployees = /* GraphQL */ `
  query ListEmployees(
    $filter: ModelEmployeeFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listEmployees(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
    }
  }
`;
export const getOffice = /* GraphQL */ `
  query GetOffice($id: ID!) {
    getOffice(id: $id) {
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
export const listOffices = /* GraphQL */ `
  query ListOffices(
    $filter: ModelOfficeFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listOffices(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
    }
  }
`;
export const getAddress = /* GraphQL */ `
  query GetAddress($id: ID!) {
    getAddress(id: $id) {
      id
      city
      state
      country
      createdAt
      updatedAt
    }
  }
`;
export const listAddresss = /* GraphQL */ `
  query ListAddresss(
    $filter: ModelAddressFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listAddresss(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        city
        state
        country
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getEmployeeOffice = /* GraphQL */ `
  query GetEmployeeOffice($id: ID!) {
    getEmployeeOffice(id: $id) {
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
export const listEmployeeOffices = /* GraphQL */ `
  query ListEmployeeOffices(
    $filter: ModelEmployeeOfficeFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listEmployeeOffices(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
          createdAt
          updatedAt
        }
        office {
          id
          name
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
