import { ModelInit, MutableModel, __modelMeta__, ManagedIdentifier } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled, AsyncCollection } from "@aws-amplify/datastore";

export enum Tipodocumento {
  TICKET = "TICKET",
  NOTADEVENTA = "NOTADEVENTA",
  FACTURA = "FACTURA"
}

export enum Tipotransaccion {
  VENTA = "VENTA",
  COBRO = "COBRO"
}

export enum Metodopago {
  TARJETA_CREDITO = "TARJETA_CREDITO",
  TRANSFERENCIA = "TRANSFERENCIA",
  EFECTIVO = "EFECTIVO"
}

export enum Ordenstatus {
  CREADA = "CREADA",
  ENVIADAMAQUILA = "ENVIADAMAQUILA",
  ENTREGADA = "ENTREGADA",
  CONPROBLEMAS = "CONPROBLEMAS",
  FINALIZADA = "FINALIZADA"
}

export enum Tipoorden {
  COTIZACION = "COTIZACION",
  ORDEN = "ORDEN"
}

export enum Enumcategoria {
  DAMA = "DAMA",
  CABALLERO = "CABALLERO",
  BOY = "BOY"
}



type EagerGASTOS = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<GASTOS, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly montoGasto?: number | null;
  readonly descripcion?: string | null;
  readonly turnoID: string;
  readonly fecha?: string | null;
  readonly opticaID: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyGASTOS = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<GASTOS, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly montoGasto?: number | null;
  readonly descripcion?: string | null;
  readonly turnoID: string;
  readonly fecha?: string | null;
  readonly opticaID: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type GASTOS = LazyLoading extends LazyLoadingDisabled ? EagerGASTOS : LazyGASTOS

export declare const GASTOS: (new (init: ModelInit<GASTOS>) => GASTOS) & {
  copyOf(source: GASTOS, mutator: (draft: MutableModel<GASTOS>) => MutableModel<GASTOS> | void): GASTOS;
}

type EagerDOCUMENTOS = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<DOCUMENTOS, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly tipoDocumento?: Tipodocumento | keyof typeof Tipodocumento | null;
  readonly serie?: string | null;
  readonly numeroSecuencial?: number | null;
  readonly ordenID: string;
  readonly opticaID: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyDOCUMENTOS = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<DOCUMENTOS, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly tipoDocumento?: Tipodocumento | keyof typeof Tipodocumento | null;
  readonly serie?: string | null;
  readonly numeroSecuencial?: number | null;
  readonly ordenID: string;
  readonly opticaID: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type DOCUMENTOS = LazyLoading extends LazyLoadingDisabled ? EagerDOCUMENTOS : LazyDOCUMENTOS

export declare const DOCUMENTOS: (new (init: ModelInit<DOCUMENTOS>) => DOCUMENTOS) & {
  copyOf(source: DOCUMENTOS, mutator: (draft: MutableModel<DOCUMENTOS>) => MutableModel<DOCUMENTOS> | void): DOCUMENTOS;
}

type EagerCONFIGURACIONDOCUMENTO = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<CONFIGURACIONDOCUMENTO, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly tipoDocumento?: Tipodocumento | keyof typeof Tipodocumento | null;
  readonly serieActual?: string | null;
  readonly numeroSecuencialActual?: number | null;
  readonly opticaID: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyCONFIGURACIONDOCUMENTO = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<CONFIGURACIONDOCUMENTO, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly tipoDocumento?: Tipodocumento | keyof typeof Tipodocumento | null;
  readonly serieActual?: string | null;
  readonly numeroSecuencialActual?: number | null;
  readonly opticaID: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type CONFIGURACIONDOCUMENTO = LazyLoading extends LazyLoadingDisabled ? EagerCONFIGURACIONDOCUMENTO : LazyCONFIGURACIONDOCUMENTO

export declare const CONFIGURACIONDOCUMENTO: (new (init: ModelInit<CONFIGURACIONDOCUMENTO>) => CONFIGURACIONDOCUMENTO) & {
  copyOf(source: CONFIGURACIONDOCUMENTO, mutator: (draft: MutableModel<CONFIGURACIONDOCUMENTO>) => MutableModel<CONFIGURACIONDOCUMENTO> | void): CONFIGURACIONDOCUMENTO;
}

type EagerTransacciones = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Transacciones, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly monto?: string | null;
  readonly metodoPago?: Metodopago | keyof typeof Metodopago | null;
  readonly turnoID: string;
  readonly ordenID: string;
  readonly tipoTransaccion?: Tipotransaccion | keyof typeof Tipotransaccion | null;
  readonly fecha?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyTransacciones = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Transacciones, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly monto?: string | null;
  readonly metodoPago?: Metodopago | keyof typeof Metodopago | null;
  readonly turnoID: string;
  readonly ordenID: string;
  readonly tipoTransaccion?: Tipotransaccion | keyof typeof Tipotransaccion | null;
  readonly fecha?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Transacciones = LazyLoading extends LazyLoadingDisabled ? EagerTransacciones : LazyTransacciones

export declare const Transacciones: (new (init: ModelInit<Transacciones>) => Transacciones) & {
  copyOf(source: Transacciones, mutator: (draft: MutableModel<Transacciones>) => MutableModel<Transacciones> | void): Transacciones;
}

type EagerDeudas = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Deudas, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly fecha?: string | null;
  readonly montoDeuda?: number | null;
  readonly estado?: string | null;
  readonly turnoID: string;
  readonly ordenID: string;
  readonly opticaID: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyDeudas = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Deudas, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly fecha?: string | null;
  readonly montoDeuda?: number | null;
  readonly estado?: string | null;
  readonly turnoID: string;
  readonly ordenID: string;
  readonly opticaID: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Deudas = LazyLoading extends LazyLoadingDisabled ? EagerDeudas : LazyDeudas

export declare const Deudas: (new (init: ModelInit<Deudas>) => Deudas) & {
  copyOf(source: Deudas, mutator: (draft: MutableModel<Deudas>) => MutableModel<Deudas> | void): Deudas;
}

type EagerTurno = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Turno, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly montoInicial: number;
  readonly fechaApertura: string;
  readonly montoCierre?: number | null;
  readonly fechaCierre?: string | null;
  readonly cajaID: string;
  readonly ORDENS?: (ORDEN | null)[] | null;
  readonly Deudas?: (Deudas | null)[] | null;
  readonly usuario?: string | null;
  readonly estado?: string | null;
  readonly Transacciones?: (Transacciones | null)[] | null;
  readonly GASTOS?: (GASTOS | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyTurno = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Turno, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly montoInicial: number;
  readonly fechaApertura: string;
  readonly montoCierre?: number | null;
  readonly fechaCierre?: string | null;
  readonly cajaID: string;
  readonly ORDENS: AsyncCollection<ORDEN>;
  readonly Deudas: AsyncCollection<Deudas>;
  readonly usuario?: string | null;
  readonly estado?: string | null;
  readonly Transacciones: AsyncCollection<Transacciones>;
  readonly GASTOS: AsyncCollection<GASTOS>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Turno = LazyLoading extends LazyLoadingDisabled ? EagerTurno : LazyTurno

export declare const Turno: (new (init: ModelInit<Turno>) => Turno) & {
  copyOf(source: Turno, mutator: (draft: MutableModel<Turno>) => MutableModel<Turno> | void): Turno;
}

type EagerCaja = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Caja, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly nombre: string;
  readonly opticaID: string;
  readonly Turnos?: (Turno | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyCaja = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Caja, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly nombre: string;
  readonly opticaID: string;
  readonly Turnos: AsyncCollection<Turno>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Caja = LazyLoading extends LazyLoadingDisabled ? EagerCaja : LazyCaja

export declare const Caja: (new (init: ModelInit<Caja>) => Caja) & {
  copyOf(source: Caja, mutator: (draft: MutableModel<Caja>) => MutableModel<Caja> | void): Caja;
}

type EagerINVENTARIOORDENITEMS = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<INVENTARIOORDENITEMS, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly cantidad?: number | null;
  readonly costo?: number | null;
  readonly inventarioID: string;
  readonly ordenID: string;
  readonly idGraduation?: boolean | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyINVENTARIOORDENITEMS = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<INVENTARIOORDENITEMS, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly cantidad?: number | null;
  readonly costo?: number | null;
  readonly inventarioID: string;
  readonly ordenID: string;
  readonly idGraduation?: boolean | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type INVENTARIOORDENITEMS = LazyLoading extends LazyLoadingDisabled ? EagerINVENTARIOORDENITEMS : LazyINVENTARIOORDENITEMS

export declare const INVENTARIOORDENITEMS: (new (init: ModelInit<INVENTARIOORDENITEMS>) => INVENTARIOORDENITEMS) & {
  copyOf(source: INVENTARIOORDENITEMS, mutator: (draft: MutableModel<INVENTARIOORDENITEMS>) => MutableModel<INVENTARIOORDENITEMS> | void): INVENTARIOORDENITEMS;
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

type EagerVENDEDORES = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<VENDEDORES, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly nombres?: string | null;
  readonly apellidoPaterno?: string | null;
  readonly apellidoMaterno?: string | null;
  readonly whats?: string | null;
  readonly email?: string | null;
  readonly opticaID: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyVENDEDORES = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<VENDEDORES, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly nombres?: string | null;
  readonly apellidoPaterno?: string | null;
  readonly apellidoMaterno?: string | null;
  readonly whats?: string | null;
  readonly email?: string | null;
  readonly opticaID: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type VENDEDORES = LazyLoading extends LazyLoadingDisabled ? EagerVENDEDORES : LazyVENDEDORES

export declare const VENDEDORES: (new (init: ModelInit<VENDEDORES>) => VENDEDORES) & {
  copyOf(source: VENDEDORES, mutator: (draft: MutableModel<VENDEDORES>) => MutableModel<VENDEDORES> | void): VENDEDORES;
}

type EagerINVENTARIO = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<INVENTARIO, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly nombreProducto?: string | null;
  readonly proveedor?: string | null;
  readonly costo: number;
  readonly precioVenta: number;
  readonly color?: string | null;
  readonly tipoEstructura?: string | null;
  readonly urlImagen?: string | null;
  readonly tipoMaterial?: string | null;
  readonly categoria: Enumcategoria | keyof typeof Enumcategoria;
  readonly INVENTARIOORDENITEMS?: (INVENTARIOORDENITEMS | null)[] | null;
  readonly opticaID: string;
  readonly stock?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyINVENTARIO = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<INVENTARIO, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly nombreProducto?: string | null;
  readonly proveedor?: string | null;
  readonly costo: number;
  readonly precioVenta: number;
  readonly color?: string | null;
  readonly tipoEstructura?: string | null;
  readonly urlImagen?: string | null;
  readonly tipoMaterial?: string | null;
  readonly categoria: Enumcategoria | keyof typeof Enumcategoria;
  readonly INVENTARIOORDENITEMS: AsyncCollection<INVENTARIOORDENITEMS>;
  readonly opticaID: string;
  readonly stock?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type INVENTARIO = LazyLoading extends LazyLoadingDisabled ? EagerINVENTARIO : LazyINVENTARIO

export declare const INVENTARIO: (new (init: ModelInit<INVENTARIO>) => INVENTARIO) & {
  copyOf(source: INVENTARIO, mutator: (draft: MutableModel<INVENTARIO>) => MutableModel<INVENTARIO> | void): INVENTARIO;
}

type EagerORDEN = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<ORDEN, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly opticaID: string;
  readonly tipoOrden?: Tipoorden | keyof typeof Tipoorden | null;
  readonly clientesID: string;
  readonly usadoLentes?: string | null;
  readonly fechaOrden?: string | null;
  readonly horaOrden?: string | null;
  readonly fechaExamen?: string | null;
  readonly referencia?: string | null;
  readonly fechaEntrega?: string | null;
  readonly seRealizoExamen?: string | null;
  readonly graduacionDerechaVieja?: string | null;
  readonly graduacionIzquierdaVieja?: string | null;
  readonly graduacionDerechaNueva?: string | null;
  readonly graduacionIzquierdaNueva?: string | null;
  readonly ordenStatus?: Ordenstatus | keyof typeof Ordenstatus | null;
  readonly INVENTARIOORDENITEMS?: (INVENTARIOORDENITEMS | null)[] | null;
  readonly precioTotal?: number | null;
  readonly montoPagado?: number | null;
  readonly anticipo?: number | null;
  readonly precioGraduacion?: number | null;
  readonly turnoID: string;
  readonly Deudas?: (Deudas | null)[] | null;
  readonly Transacciones?: (Transacciones | null)[] | null;
  readonly DOCUMENTOS?: (DOCUMENTOS | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyORDEN = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<ORDEN, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly opticaID: string;
  readonly tipoOrden?: Tipoorden | keyof typeof Tipoorden | null;
  readonly clientesID: string;
  readonly usadoLentes?: string | null;
  readonly fechaOrden?: string | null;
  readonly horaOrden?: string | null;
  readonly fechaExamen?: string | null;
  readonly referencia?: string | null;
  readonly fechaEntrega?: string | null;
  readonly seRealizoExamen?: string | null;
  readonly graduacionDerechaVieja?: string | null;
  readonly graduacionIzquierdaVieja?: string | null;
  readonly graduacionDerechaNueva?: string | null;
  readonly graduacionIzquierdaNueva?: string | null;
  readonly ordenStatus?: Ordenstatus | keyof typeof Ordenstatus | null;
  readonly INVENTARIOORDENITEMS: AsyncCollection<INVENTARIOORDENITEMS>;
  readonly precioTotal?: number | null;
  readonly montoPagado?: number | null;
  readonly anticipo?: number | null;
  readonly precioGraduacion?: number | null;
  readonly turnoID: string;
  readonly Deudas: AsyncCollection<Deudas>;
  readonly Transacciones: AsyncCollection<Transacciones>;
  readonly DOCUMENTOS: AsyncCollection<DOCUMENTOS>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type ORDEN = LazyLoading extends LazyLoadingDisabled ? EagerORDEN : LazyORDEN

export declare const ORDEN: (new (init: ModelInit<ORDEN>) => ORDEN) & {
  copyOf(source: ORDEN, mutator: (draft: MutableModel<ORDEN>) => MutableModel<ORDEN> | void): ORDEN;
}

type EagerCLIENTES = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<CLIENTES, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly nombres?: string | null;
  readonly apellidoPaterno?: string | null;
  readonly apellidoMaterno?: string | null;
  readonly fechaNacimiento?: string | null;
  readonly edad?: string | null;
  readonly whats?: string | null;
  readonly sexo?: string | null;
  readonly email?: string | null;
  readonly opticaID: string;
  readonly ORDENS?: (ORDEN | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyCLIENTES = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<CLIENTES, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly nombres?: string | null;
  readonly apellidoPaterno?: string | null;
  readonly apellidoMaterno?: string | null;
  readonly fechaNacimiento?: string | null;
  readonly edad?: string | null;
  readonly whats?: string | null;
  readonly sexo?: string | null;
  readonly email?: string | null;
  readonly opticaID: string;
  readonly ORDENS: AsyncCollection<ORDEN>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type CLIENTES = LazyLoading extends LazyLoadingDisabled ? EagerCLIENTES : LazyCLIENTES

export declare const CLIENTES: (new (init: ModelInit<CLIENTES>) => CLIENTES) & {
  copyOf(source: CLIENTES, mutator: (draft: MutableModel<CLIENTES>) => MutableModel<CLIENTES> | void): CLIENTES;
}

type EagerOPTICA = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<OPTICA, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly nombre: string;
  readonly createdBy: string;
  readonly VENDEDORES?: (VENDEDORES | null)[] | null;
  readonly GERENTES?: (GERENTE | null)[] | null;
  readonly ORDENS?: (ORDEN | null)[] | null;
  readonly CLIENTES?: (CLIENTES | null)[] | null;
  readonly INVENTARIOS?: (INVENTARIO | null)[] | null;
  readonly Cajas?: (Caja | null)[] | null;
  readonly CONFIGURACIONDOCUMENTOS?: (CONFIGURACIONDOCUMENTO | null)[] | null;
  readonly DOCUMENTOS?: (DOCUMENTOS | null)[] | null;
  readonly direction?: string | null;
  readonly cp?: string | null;
  readonly rfc?: string | null;
  readonly contactPhone?: string | null;
  readonly codSerial?: string | null;
  readonly Deudas?: (Deudas | null)[] | null;
  readonly GASTOS?: (GASTOS | null)[] | null;
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
  readonly VENDEDORES: AsyncCollection<VENDEDORES>;
  readonly GERENTES: AsyncCollection<GERENTE>;
  readonly ORDENS: AsyncCollection<ORDEN>;
  readonly CLIENTES: AsyncCollection<CLIENTES>;
  readonly INVENTARIOS: AsyncCollection<INVENTARIO>;
  readonly Cajas: AsyncCollection<Caja>;
  readonly CONFIGURACIONDOCUMENTOS: AsyncCollection<CONFIGURACIONDOCUMENTO>;
  readonly DOCUMENTOS: AsyncCollection<DOCUMENTOS>;
  readonly direction?: string | null;
  readonly cp?: string | null;
  readonly rfc?: string | null;
  readonly contactPhone?: string | null;
  readonly codSerial?: string | null;
  readonly Deudas: AsyncCollection<Deudas>;
  readonly GASTOS: AsyncCollection<GASTOS>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type OPTICA = LazyLoading extends LazyLoadingDisabled ? EagerOPTICA : LazyOPTICA

export declare const OPTICA: (new (init: ModelInit<OPTICA>) => OPTICA) & {
  copyOf(source: OPTICA, mutator: (draft: MutableModel<OPTICA>) => MutableModel<OPTICA> | void): OPTICA;
}