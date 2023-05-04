/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getLENTE = /* GraphQL */ `
  query GetLENTE($id: ID!) {
    getLENTE(id: $id) {
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
export const listLENTES = /* GraphQL */ `
  query ListLENTES(
    $filter: ModelLENTEFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listLENTES(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const syncLENTES = /* GraphQL */ `
  query SyncLENTES(
    $filter: ModelLENTEFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncLENTES(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const getOrden = /* GraphQL */ `
  query GetOrden($id: ID!) {
    getOrden(id: $id) {
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
export const listOrdens = /* GraphQL */ `
  query ListOrdens(
    $filter: ModelOrdenFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listOrdens(filter: $filter, limit: $limit, nextToken: $nextToken) {
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
  }
`;
export const syncOrdens = /* GraphQL */ `
  query SyncOrdens(
    $filter: ModelOrdenFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncOrdens(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
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
  }
`;
export const ordensByOpticaID = /* GraphQL */ `
  query OrdensByOpticaID(
    $opticaID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelOrdenFilterInput
    $limit: Int
    $nextToken: String
  ) {
    ordensByOpticaID(
      opticaID: $opticaID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
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
  }
`;
export const ordensByClienteID = /* GraphQL */ `
  query OrdensByClienteID(
    $clienteID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelOrdenFilterInput
    $limit: Int
    $nextToken: String
  ) {
    ordensByClienteID(
      clienteID: $clienteID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
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
  }
`;
export const getGERENTE = /* GraphQL */ `
  query GetGERENTE($id: ID!) {
    getGERENTE(id: $id) {
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
        email
        phoneNumber
        confirmed
        blocked
        createdBy
        OPTICA {
          id
          nombre
          createdBy
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
        email
        phoneNumber
        confirmed
        blocked
        createdBy
        OPTICA {
          id
          nombre
          createdBy
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
        email
        phoneNumber
        confirmed
        blocked
        createdBy
        OPTICA {
          id
          nombre
          createdBy
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
      nextToken
      startedAt
    }
  }
`;
export const getCliente = /* GraphQL */ `
  query GetCliente($id: ID!) {
    getCliente(id: $id) {
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
export const listClientes = /* GraphQL */ `
  query ListClientes(
    $filter: ModelClienteFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listClientes(filter: $filter, limit: $limit, nextToken: $nextToken) {
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
        Ordens {
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
export const syncClientes = /* GraphQL */ `
  query SyncClientes(
    $filter: ModelClienteFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncClientes(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
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
        Ordens {
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
export const clientesByOpticaID = /* GraphQL */ `
  query ClientesByOpticaID(
    $opticaID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelClienteFilterInput
    $limit: Int
    $nextToken: String
  ) {
    clientesByOpticaID(
      opticaID: $opticaID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
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
        Ordens {
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
export const getVendedores = /* GraphQL */ `
  query GetVendedores($id: ID!) {
    getVendedores(id: $id) {
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
export const listVendedores = /* GraphQL */ `
  query ListVendedores(
    $filter: ModelVendedoresFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listVendedores(filter: $filter, limit: $limit, nextToken: $nextToken) {
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
  }
`;
export const syncVendedores = /* GraphQL */ `
  query SyncVendedores(
    $filter: ModelVendedoresFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncVendedores(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
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
  }
`;
export const vendedoresByOpticaID = /* GraphQL */ `
  query VendedoresByOpticaID(
    $opticaID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelVendedoresFilterInput
    $limit: Int
    $nextToken: String
  ) {
    vendedoresByOpticaID(
      opticaID: $opticaID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
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
  }
`;
export const getOPTICA = /* GraphQL */ `
  query GetOPTICA($id: ID!) {
    getOPTICA(id: $id) {
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
export const listOPTICAS = /* GraphQL */ `
  query ListOPTICAS(
    $filter: ModelOPTICAFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listOPTICAS(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const syncOPTICAS = /* GraphQL */ `
  query SyncOPTICAS(
    $filter: ModelOPTICAFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncOPTICAS(
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
      nextToken
      startedAt
    }
  }
`;
