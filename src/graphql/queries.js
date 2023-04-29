/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getGERENTE = /* GraphQL */ `
  query GetGERENTE($id: ID!) {
    getGERENTE(id: $id) {
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
export const listGERENTES = /* GraphQL */ `
  query ListGERENTES(
    $filter: ModelGERENTEFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listGERENTES(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        nombres
        userName
        laboratorioID
        LABORATORIO {
          id
          nombre
          createdBy
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
      nextToken
      startedAt
    }
  }
`;
export const syncGERENTES = /* GraphQL */ `
  query SyncGERENTES(
    $filter: ModelGERENTEFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncGERENTES(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        nombres
        userName
        laboratorioID
        LABORATORIO {
          id
          nombre
          createdBy
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
      nextToken
      startedAt
    }
  }
`;
export const gERENTESByLaboratorioID = /* GraphQL */ `
  query GERENTESByLaboratorioID(
    $laboratorioID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelGERENTEFilterInput
    $limit: Int
    $nextToken: String
  ) {
    gERENTESByLaboratorioID(
      laboratorioID: $laboratorioID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        nombres
        userName
        laboratorioID
        LABORATORIO {
          id
          nombre
          createdBy
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
      nextToken
      startedAt
    }
  }
`;
export const getLABORATORIO = /* GraphQL */ `
  query GetLABORATORIO($id: ID!) {
    getLABORATORIO(id: $id) {
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
export const listLABORATORIOS = /* GraphQL */ `
  query ListLABORATORIOS(
    $filter: ModelLABORATORIOFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listLABORATORIOS(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const syncLABORATORIOS = /* GraphQL */ `
  query SyncLABORATORIOS(
    $filter: ModelLABORATORIOFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncLABORATORIOS(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
