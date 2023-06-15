// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';

const Tipodocumento = {
  "TICKET": "TICKET",
  "NOTADEVENTA": "NOTADEVENTA",
  "FACTURA": "FACTURA"
};

const Tipotransaccion = {
  "VENTA": "VENTA",
  "COBRO": "COBRO"
};

const Metodopago = {
  "TARJETA_CREDITO": "TARJETA_CREDITO",
  "TRANSFERENCIA": "TRANSFERENCIA",
  "EFECTIVO": "EFECTIVO"
};

const Ordenstatus = {
  "CREADA": "CREADA",
  "ENVIADAMAQUILA": "ENVIADAMAQUILA",
  "ENTREGADA": "ENTREGADA",
  "CONPROBLEMAS": "CONPROBLEMAS",
  "FINALIZADA": "FINALIZADA"
};

const Tipoorden = {
  "COTIZACION": "COTIZACION",
  "ORDEN": "ORDEN"
};

const Enumcategoria = {
  "DAMA": "DAMA",
  "CABALLERO": "CABALLERO",
  "BOY": "BOY"
};

const { GASTOS, DOCUMENTOS, CONFIGURACIONDOCUMENTO, Transacciones, Deudas, Turno, Caja, INVENTARIOORDENITEMS, GERENTE, VENDEDORES, INVENTARIO, ORDEN, CLIENTES, OPTICA } = initSchema(schema);

export {
  GASTOS,
  DOCUMENTOS,
  CONFIGURACIONDOCUMENTO,
  Transacciones,
  Deudas,
  Turno,
  Caja,
  INVENTARIOORDENITEMS,
  GERENTE,
  VENDEDORES,
  INVENTARIO,
  ORDEN,
  CLIENTES,
  OPTICA,
  Tipodocumento,
  Tipotransaccion,
  Metodopago,
  Ordenstatus,
  Tipoorden,
  Enumcategoria
};