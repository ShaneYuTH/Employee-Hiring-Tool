/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getCompany = /* GraphQL */ `
  query GetCompany($id: ID!) {
    getCompany(id: $id) {
      id
      name
      isVerfied
      logoUrl
      targetCountries
      createdAt
      updatedAt
    }
  }
`;
export const listCompanies = /* GraphQL */ `
  query ListCompanies(
    $filter: ModelCompanyFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listCompanies(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        isVerfied
        logoUrl
        targetCountries
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getCountry = /* GraphQL */ `
  query GetCountry($id: ID!) {
    getCountry(id: $id) {
      id
      name
      iconUrl
      createdAt
      updatedAt
    }
  }
`;
export const listCountries = /* GraphQL */ `
  query ListCountries(
    $filter: ModelCountryFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listCountries(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        iconUrl
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
