/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateCompany = /* GraphQL */ `
  subscription OnCreateCompany($filter: ModelSubscriptionCompanyFilterInput) {
    onCreateCompany(filter: $filter) {
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
export const onUpdateCompany = /* GraphQL */ `
  subscription OnUpdateCompany($filter: ModelSubscriptionCompanyFilterInput) {
    onUpdateCompany(filter: $filter) {
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
export const onDeleteCompany = /* GraphQL */ `
  subscription OnDeleteCompany($filter: ModelSubscriptionCompanyFilterInput) {
    onDeleteCompany(filter: $filter) {
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
export const onCreateCountry = /* GraphQL */ `
  subscription OnCreateCountry($filter: ModelSubscriptionCountryFilterInput) {
    onCreateCountry(filter: $filter) {
      id
      name
      iconUrl
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateCountry = /* GraphQL */ `
  subscription OnUpdateCountry($filter: ModelSubscriptionCountryFilterInput) {
    onUpdateCountry(filter: $filter) {
      id
      name
      iconUrl
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteCountry = /* GraphQL */ `
  subscription OnDeleteCountry($filter: ModelSubscriptionCountryFilterInput) {
    onDeleteCountry(filter: $filter) {
      id
      name
      iconUrl
      createdAt
      updatedAt
    }
  }
`;
