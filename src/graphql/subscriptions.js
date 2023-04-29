/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateGERENTE = /* GraphQL */ `
  subscription OnCreateGERENTE($filter: ModelSubscriptionGERENTEFilterInput) {
    onCreateGERENTE(filter: $filter) {
      id
      nombres
      userName
      laboratorioID
      LABORATORIO {
        id
        nombre
        createdBy
        GERENTES {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      email
      phoneNumber
      confirmed
      blocked
      createdBy
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onUpdateGERENTE = /* GraphQL */ `
  subscription OnUpdateGERENTE($filter: ModelSubscriptionGERENTEFilterInput) {
    onUpdateGERENTE(filter: $filter) {
      id
      nombres
      userName
      laboratorioID
      LABORATORIO {
        id
        nombre
        createdBy
        GERENTES {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      email
      phoneNumber
      confirmed
      blocked
      createdBy
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onDeleteGERENTE = /* GraphQL */ `
  subscription OnDeleteGERENTE($filter: ModelSubscriptionGERENTEFilterInput) {
    onDeleteGERENTE(filter: $filter) {
      id
      nombres
      userName
      laboratorioID
      LABORATORIO {
        id
        nombre
        createdBy
        GERENTES {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      email
      phoneNumber
      confirmed
      blocked
      createdBy
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onCreateLABORATORIO = /* GraphQL */ `
  subscription OnCreateLABORATORIO(
    $filter: ModelSubscriptionLABORATORIOFilterInput
  ) {
    onCreateLABORATORIO(filter: $filter) {
      id
      nombre
      createdBy
      GERENTES {
        items {
          id
          nombres
          userName
          laboratorioID
          email
          phoneNumber
          confirmed
          blocked
          createdBy
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onUpdateLABORATORIO = /* GraphQL */ `
  subscription OnUpdateLABORATORIO(
    $filter: ModelSubscriptionLABORATORIOFilterInput
  ) {
    onUpdateLABORATORIO(filter: $filter) {
      id
      nombre
      createdBy
      GERENTES {
        items {
          id
          nombres
          userName
          laboratorioID
          email
          phoneNumber
          confirmed
          blocked
          createdBy
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onDeleteLABORATORIO = /* GraphQL */ `
  subscription OnDeleteLABORATORIO(
    $filter: ModelSubscriptionLABORATORIOFilterInput
  ) {
    onDeleteLABORATORIO(filter: $filter) {
      id
      nombre
      createdBy
      GERENTES {
        items {
          id
          nombres
          userName
          laboratorioID
          email
          phoneNumber
          confirmed
          blocked
          createdBy
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
