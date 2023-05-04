// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';

const Enumgrupo = {
  "DAMA": "DAMA",
  "CABALLERO": "CABALLERO",
  "BOY": "BOY"
};

const Tipo = {
  "COTIZACION": "COTIZACION",
  "NUEVO": "NUEVO"
};

const { LENTE, Orden, GERENTE, Cliente, Vendedores, OPTICA } = initSchema(schema);

export {
  LENTE,
  Orden,
  GERENTE,
  Cliente,
  Vendedores,
  OPTICA,
  Enumgrupo,
  Tipo
};