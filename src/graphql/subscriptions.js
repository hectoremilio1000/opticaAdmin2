/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateLENTE = /* GraphQL */ `
  subscription OnCreateLENTE($filter: ModelSubscriptionLENTEFilterInput) {
    onCreateLENTE(filter: $filter) {
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
export const onUpdateLENTE = /* GraphQL */ `
  subscription OnUpdateLENTE($filter: ModelSubscriptionLENTEFilterInput) {
    onUpdateLENTE(filter: $filter) {
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
export const onDeleteLENTE = /* GraphQL */ `
  subscription OnDeleteLENTE($filter: ModelSubscriptionLENTEFilterInput) {
    onDeleteLENTE(filter: $filter) {
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
export const onCreateOrden = /* GraphQL */ `
  subscription OnCreateOrden($filter: ModelSubscriptionOrdenFilterInput) {
    onCreateOrden(filter: $filter) {
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
export const onUpdateOrden = /* GraphQL */ `
  subscription OnUpdateOrden($filter: ModelSubscriptionOrdenFilterInput) {
    onUpdateOrden(filter: $filter) {
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
export const onDeleteOrden = /* GraphQL */ `
  subscription OnDeleteOrden($filter: ModelSubscriptionOrdenFilterInput) {
    onDeleteOrden(filter: $filter) {
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
export const onCreateGERENTE = /* GraphQL */ `
  subscription OnCreateGERENTE($filter: ModelSubscriptionGERENTEFilterInput) {
    onCreateGERENTE(filter: $filter) {
      id
      nombres
      userName
      laboratorioID
      email
      phoneNumber
      confirmed
      blocked
      createdBy
      OPTICA {
        id
        nombre
        createdBy
        GERENTES {
          nextToken
          startedAt
        }
        Clientes {
          nextToken
          startedAt
        }
        Ordens {
          nextToken
          startedAt
        }
        Vendedores {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
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
      email
      phoneNumber
      confirmed
      blocked
      createdBy
      OPTICA {
        id
        nombre
        createdBy
        GERENTES {
          nextToken
          startedAt
        }
        Clientes {
          nextToken
          startedAt
        }
        Ordens {
          nextToken
          startedAt
        }
        Vendedores {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
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
      email
      phoneNumber
      confirmed
      blocked
      createdBy
      OPTICA {
        id
        nombre
        createdBy
        GERENTES {
          nextToken
          startedAt
        }
        Clientes {
          nextToken
          startedAt
        }
        Ordens {
          nextToken
          startedAt
        }
        Vendedores {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onCreateCliente = /* GraphQL */ `
  subscription OnCreateCliente($filter: ModelSubscriptionClienteFilterInput) {
    onCreateCliente(filter: $filter) {
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
export const onUpdateCliente = /* GraphQL */ `
  subscription OnUpdateCliente($filter: ModelSubscriptionClienteFilterInput) {
    onUpdateCliente(filter: $filter) {
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
export const onDeleteCliente = /* GraphQL */ `
  subscription OnDeleteCliente($filter: ModelSubscriptionClienteFilterInput) {
    onDeleteCliente(filter: $filter) {
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
export const onCreateVendedores = /* GraphQL */ `
  subscription OnCreateVendedores(
    $filter: ModelSubscriptionVendedoresFilterInput
  ) {
    onCreateVendedores(filter: $filter) {
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
export const onUpdateVendedores = /* GraphQL */ `
  subscription OnUpdateVendedores(
    $filter: ModelSubscriptionVendedoresFilterInput
  ) {
    onUpdateVendedores(filter: $filter) {
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
export const onDeleteVendedores = /* GraphQL */ `
  subscription OnDeleteVendedores(
    $filter: ModelSubscriptionVendedoresFilterInput
  ) {
    onDeleteVendedores(filter: $filter) {
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
export const onCreateOPTICA = /* GraphQL */ `
  subscription OnCreateOPTICA($filter: ModelSubscriptionOPTICAFilterInput) {
    onCreateOPTICA(filter: $filter) {
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
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onUpdateOPTICA = /* GraphQL */ `
  subscription OnUpdateOPTICA($filter: ModelSubscriptionOPTICAFilterInput) {
    onUpdateOPTICA(filter: $filter) {
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
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onDeleteOPTICA = /* GraphQL */ `
  subscription OnDeleteOPTICA($filter: ModelSubscriptionOPTICAFilterInput) {
    onDeleteOPTICA(filter: $filter) {
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
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
