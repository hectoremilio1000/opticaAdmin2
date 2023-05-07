/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createLENTE = /* GraphQL */ `
  mutation CreateLENTE(
    $input: CreateLENTEInput!
    $condition: ModelLENTEConditionInput
  ) {
    createLENTE(input: $input, condition: $condition) {
      id
      grupo
      proveedor
      costo
      precioVenta
      tiempoEntrega
      color
      tipoArmazon
      imagen
      tipoMaterial
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const updateLENTE = /* GraphQL */ `
  mutation UpdateLENTE(
    $input: UpdateLENTEInput!
    $condition: ModelLENTEConditionInput
  ) {
    updateLENTE(input: $input, condition: $condition) {
      id
      grupo
      proveedor
      costo
      precioVenta
      tiempoEntrega
      color
      tipoArmazon
      imagen
      tipoMaterial
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const deleteLENTE = /* GraphQL */ `
  mutation DeleteLENTE(
    $input: DeleteLENTEInput!
    $condition: ModelLENTEConditionInput
  ) {
    deleteLENTE(input: $input, condition: $condition) {
      id
      grupo
      proveedor
      costo
      precioVenta
      tiempoEntrega
      color
      tipoArmazon
      imagen
      tipoMaterial
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const createOrden = /* GraphQL */ `
  mutation CreateOrden(
    $input: CreateOrdenInput!
    $condition: ModelOrdenConditionInput
  ) {
    createOrden(input: $input, condition: $condition) {
      id
      opticaID
      tipo
      clienteID
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const updateOrden = /* GraphQL */ `
  mutation UpdateOrden(
    $input: UpdateOrdenInput!
    $condition: ModelOrdenConditionInput
  ) {
    updateOrden(input: $input, condition: $condition) {
      id
      opticaID
      tipo
      clienteID
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const deleteOrden = /* GraphQL */ `
  mutation DeleteOrden(
    $input: DeleteOrdenInput!
    $condition: ModelOrdenConditionInput
  ) {
    deleteOrden(input: $input, condition: $condition) {
      id
      opticaID
      tipo
      clienteID
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const createGERENTE = /* GraphQL */ `
  mutation CreateGERENTE(
    $input: CreateGERENTEInput!
    $condition: ModelGERENTEConditionInput
  ) {
    createGERENTE(input: $input, condition: $condition) {
      id
      nombres
      userName
      email
      phoneNumber
      confirmed
      blocked
      createdBy
      opticaID
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
      email
      phoneNumber
      confirmed
      blocked
      createdBy
      opticaID
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
      email
      phoneNumber
      confirmed
      blocked
      createdBy
      opticaID
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const createCliente = /* GraphQL */ `
  mutation CreateCliente(
    $input: CreateClienteInput!
    $condition: ModelClienteConditionInput
  ) {
    createCliente(input: $input, condition: $condition) {
      id
      nombres
      apellidoPaterno
      apellidoMaterno
      whats
      email
      fechaNacimiento
      edad
      opticaID
      Ordens {
        items {
          id
          opticaID
          tipo
          clienteID
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
export const updateCliente = /* GraphQL */ `
  mutation UpdateCliente(
    $input: UpdateClienteInput!
    $condition: ModelClienteConditionInput
  ) {
    updateCliente(input: $input, condition: $condition) {
      id
      nombres
      apellidoPaterno
      apellidoMaterno
      whats
      email
      fechaNacimiento
      edad
      opticaID
      Ordens {
        items {
          id
          opticaID
          tipo
          clienteID
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
export const deleteCliente = /* GraphQL */ `
  mutation DeleteCliente(
    $input: DeleteClienteInput!
    $condition: ModelClienteConditionInput
  ) {
    deleteCliente(input: $input, condition: $condition) {
      id
      nombres
      apellidoPaterno
      apellidoMaterno
      whats
      email
      fechaNacimiento
      edad
      opticaID
      Ordens {
        items {
          id
          opticaID
          tipo
          clienteID
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
export const createVendedores = /* GraphQL */ `
  mutation CreateVendedores(
    $input: CreateVendedoresInput!
    $condition: ModelVendedoresConditionInput
  ) {
    createVendedores(input: $input, condition: $condition) {
      id
      nombres
      opticaID
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const updateVendedores = /* GraphQL */ `
  mutation UpdateVendedores(
    $input: UpdateVendedoresInput!
    $condition: ModelVendedoresConditionInput
  ) {
    updateVendedores(input: $input, condition: $condition) {
      id
      nombres
      opticaID
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const deleteVendedores = /* GraphQL */ `
  mutation DeleteVendedores(
    $input: DeleteVendedoresInput!
    $condition: ModelVendedoresConditionInput
  ) {
    deleteVendedores(input: $input, condition: $condition) {
      id
      nombres
      opticaID
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const createOPTICA = /* GraphQL */ `
  mutation CreateOPTICA(
    $input: CreateOPTICAInput!
    $condition: ModelOPTICAConditionInput
  ) {
    createOPTICA(input: $input, condition: $condition) {
      id
      nombre
      createdBy
      Clientes {
        items {
          id
          nombres
          apellidoPaterno
          apellidoMaterno
          whats
          email
          fechaNacimiento
          edad
          opticaID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      Ordens {
        items {
          id
          opticaID
          tipo
          clienteID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      Vendedores {
        items {
          id
          nombres
          opticaID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      GERENTES {
        items {
          id
          nombres
          userName
          email
          phoneNumber
          confirmed
          blocked
          createdBy
          opticaID
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
export const updateOPTICA = /* GraphQL */ `
  mutation UpdateOPTICA(
    $input: UpdateOPTICAInput!
    $condition: ModelOPTICAConditionInput
  ) {
    updateOPTICA(input: $input, condition: $condition) {
      id
      nombre
      createdBy
      Clientes {
        items {
          id
          nombres
          apellidoPaterno
          apellidoMaterno
          whats
          email
          fechaNacimiento
          edad
          opticaID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      Ordens {
        items {
          id
          opticaID
          tipo
          clienteID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      Vendedores {
        items {
          id
          nombres
          opticaID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      GERENTES {
        items {
          id
          nombres
          userName
          email
          phoneNumber
          confirmed
          blocked
          createdBy
          opticaID
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
export const deleteOPTICA = /* GraphQL */ `
  mutation DeleteOPTICA(
    $input: DeleteOPTICAInput!
    $condition: ModelOPTICAConditionInput
  ) {
    deleteOPTICA(input: $input, condition: $condition) {
      id
      nombre
      createdBy
      Clientes {
        items {
          id
          nombres
          apellidoPaterno
          apellidoMaterno
          whats
          email
          fechaNacimiento
          edad
          opticaID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      Ordens {
        items {
          id
          opticaID
          tipo
          clienteID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      Vendedores {
        items {
          id
          nombres
          opticaID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      GERENTES {
        items {
          id
          nombres
          userName
          email
          phoneNumber
          confirmed
          blocked
          createdBy
          opticaID
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
