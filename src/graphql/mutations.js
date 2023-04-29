/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createGERENTE = /* GraphQL */ `
  mutation CreateGERENTE(
    $input: CreateGERENTEInput!
    $condition: ModelGERENTEConditionInput
  ) {
    createGERENTE(input: $input, condition: $condition) {
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
export const updateGERENTE = /* GraphQL */ `
  mutation UpdateGERENTE(
    $input: UpdateGERENTEInput!
    $condition: ModelGERENTEConditionInput
  ) {
    updateGERENTE(input: $input, condition: $condition) {
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
export const deleteGERENTE = /* GraphQL */ `
  mutation DeleteGERENTE(
    $input: DeleteGERENTEInput!
    $condition: ModelGERENTEConditionInput
  ) {
    deleteGERENTE(input: $input, condition: $condition) {
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
export const createLABORATORIO = /* GraphQL */ `
  mutation CreateLABORATORIO(
    $input: CreateLABORATORIOInput!
    $condition: ModelLABORATORIOConditionInput
  ) {
    createLABORATORIO(input: $input, condition: $condition) {
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
export const updateLABORATORIO = /* GraphQL */ `
  mutation UpdateLABORATORIO(
    $input: UpdateLABORATORIOInput!
    $condition: ModelLABORATORIOConditionInput
  ) {
    updateLABORATORIO(input: $input, condition: $condition) {
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
export const deleteLABORATORIO = /* GraphQL */ `
  mutation DeleteLABORATORIO(
    $input: DeleteLABORATORIOInput!
    $condition: ModelLABORATORIOConditionInput
  ) {
    deleteLABORATORIO(input: $input, condition: $condition) {
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
