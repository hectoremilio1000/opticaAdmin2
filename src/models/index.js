// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { GERENTE, OPTICA } = initSchema(schema);

export {
  GERENTE,
  OPTICA
};