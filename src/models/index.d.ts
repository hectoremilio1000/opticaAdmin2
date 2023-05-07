import { ModelInit, MutableModel, __modelMeta__, ManagedIdentifier } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled, AsyncCollection } from "@aws-amplify/datastore";

export enum Enumgrupo {
  DAMA = "DAMA",
  CABALLERO = "CABALLERO",
  BOY = "BOY"
}

export enum Tipo {
  COTIZACION = "COTIZACION",
  NUEVO = "NUEVO"
}



type EagerLENTE = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<LENTE, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly grupo: Enumgrupo | keyof typeof Enumgrupo;
  readonly proveedor: string;
  readonly costo: number;
  readonly precioVenta: number;
  readonly tiempoEntrega?: string | null;
  readonly color?: string | null;
  readonly tipoArmazon?: string | null;
  readonly imagen?: string | null;
  readonly tipoMaterial?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyLENTE = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<LENTE, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly grupo: Enumgrupo | keyof typeof Enumgrupo;
  readonly proveedor: string;
  readonly costo: number;
  readonly precioVenta: number;
  readonly tiempoEntrega?: string | null;
  readonly color?: string | null;
  readonly tipoArmazon?: string | null;
  readonly imagen?: string | null;
  readonly tipoMaterial?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type LENTE = LazyLoading extends LazyLoadingDisabled ? EagerLENTE : LazyLENTE

export declare const LENTE: (new (init: ModelInit<LENTE>) => LENTE) & {
  copyOf(source: LENTE, mutator: (draft: MutableModel<LENTE>) => MutableModel<LENTE> | void): LENTE;
}

type EagerOrden = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Orden, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly opticaID: string;
  readonly tipo?: Tipo | keyof typeof Tipo | null;
  readonly clienteID: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyOrden = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Orden, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly opticaID: string;
  readonly tipo?: Tipo | keyof typeof Tipo | null;
  readonly clienteID: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Orden = LazyLoading extends LazyLoadingDisabled ? EagerOrden : LazyOrden

export declare const Orden: (new (init: ModelInit<Orden>) => Orden) & {
  copyOf(source: Orden, mutator: (draft: MutableModel<Orden>) => MutableModel<Orden> | void): Orden;
}

type EagerGERENTE = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<GERENTE, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly nombres: string;
  readonly userName: string;
  readonly email?: string | null;
  readonly phoneNumber?: string | null;
  readonly confirmed?: boolean | null;
  readonly blocked?: boolean | null;
  readonly createdBy: string;
  readonly opticaID: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyGERENTE = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<GERENTE, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly nombres: string;
  readonly userName: string;
  readonly email?: string | null;
  readonly phoneNumber?: string | null;
  readonly confirmed?: boolean | null;
  readonly blocked?: boolean | null;
  readonly createdBy: string;
  readonly opticaID: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type GERENTE = LazyLoading extends LazyLoadingDisabled ? EagerGERENTE : LazyGERENTE

export declare const GERENTE: (new (init: ModelInit<GERENTE>) => GERENTE) & {
  copyOf(source: GERENTE, mutator: (draft: MutableModel<GERENTE>) => MutableModel<GERENTE> | void): GERENTE;
}

type EagerCliente = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Cliente, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly nombres?: string | null;
  readonly apellidoPaterno?: string | null;
  readonly apellidoMaterno?: string | null;
  readonly whats?: string | null;
  readonly email?: string | null;
  readonly fechaNacimiento?: string | null;
  readonly edad?: number | null;
  readonly opticaID: string;
  readonly Ordens?: (Orden | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyCliente = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Cliente, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly nombres?: string | null;
  readonly apellidoPaterno?: string | null;
  readonly apellidoMaterno?: string | null;
  readonly whats?: string | null;
  readonly email?: string | null;
  readonly fechaNacimiento?: string | null;
  readonly edad?: number | null;
  readonly opticaID: string;
  readonly Ordens: AsyncCollection<Orden>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Cliente = LazyLoading extends LazyLoadingDisabled ? EagerCliente : LazyCliente

export declare const Cliente: (new (init: ModelInit<Cliente>) => Cliente) & {
  copyOf(source: Cliente, mutator: (draft: MutableModel<Cliente>) => MutableModel<Cliente> | void): Cliente;
}

type EagerVendedores = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Vendedores, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly nombres?: string | null;
  readonly opticaID: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyVendedores = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Vendedores, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly nombres?: string | null;
  readonly opticaID: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Vendedores = LazyLoading extends LazyLoadingDisabled ? EagerVendedores : LazyVendedores

export declare const Vendedores: (new (init: ModelInit<Vendedores>) => Vendedores) & {
  copyOf(source: Vendedores, mutator: (draft: MutableModel<Vendedores>) => MutableModel<Vendedores> | void): Vendedores;
}

type EagerOPTICA = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<OPTICA, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly nombre: string;
  readonly createdBy: string;
  readonly Clientes?: (Cliente | null)[] | null;
  readonly Ordens?: (Orden | null)[] | null;
  readonly Vendedores?: (Vendedores | null)[] | null;
  readonly GERENTES?: (GERENTE | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyOPTICA = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<OPTICA, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly nombre: string;
  readonly createdBy: string;
  readonly Clientes: AsyncCollection<Cliente>;
  readonly Ordens: AsyncCollection<Orden>;
  readonly Vendedores: AsyncCollection<Vendedores>;
  readonly GERENTES: AsyncCollection<GERENTE>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type OPTICA = LazyLoading extends LazyLoadingDisabled ? EagerOPTICA : LazyOPTICA

export declare const OPTICA: (new (init: ModelInit<OPTICA>) => OPTICA) & {
  copyOf(source: OPTICA, mutator: (draft: MutableModel<OPTICA>) => MutableModel<OPTICA> | void): OPTICA;
}