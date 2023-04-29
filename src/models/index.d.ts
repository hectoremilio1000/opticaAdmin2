import { ModelInit, MutableModel, __modelMeta__, ManagedIdentifier } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled, AsyncItem, AsyncCollection } from "@aws-amplify/datastore";





type EagerGERENTE = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<GERENTE, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly nombres: string;
  readonly userName: string;
  readonly laboratorioID: string;
  readonly LABORATORIO?: LABORATORIO | null;
  readonly email?: string | null;
  readonly phoneNumber?: string | null;
  readonly confirmed?: boolean | null;
  readonly blocked?: boolean | null;
  readonly createdBy: string;
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
  readonly laboratorioID: string;
  readonly LABORATORIO: AsyncItem<LABORATORIO | undefined>;
  readonly email?: string | null;
  readonly phoneNumber?: string | null;
  readonly confirmed?: boolean | null;
  readonly blocked?: boolean | null;
  readonly createdBy: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type GERENTE = LazyLoading extends LazyLoadingDisabled ? EagerGERENTE : LazyGERENTE

export declare const GERENTE: (new (init: ModelInit<GERENTE>) => GERENTE) & {
  copyOf(source: GERENTE, mutator: (draft: MutableModel<GERENTE>) => MutableModel<GERENTE> | void): GERENTE;
}

type EagerLABORATORIO = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<LABORATORIO, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly nombre: string;
  readonly createdBy: string;
  readonly GERENTES?: (GERENTE | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyLABORATORIO = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<LABORATORIO, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly nombre: string;
  readonly createdBy: string;
  readonly GERENTES: AsyncCollection<GERENTE>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type LABORATORIO = LazyLoading extends LazyLoadingDisabled ? EagerLABORATORIO : LazyLABORATORIO

export declare const LABORATORIO: (new (init: ModelInit<LABORATORIO>) => LABORATORIO) & {
  copyOf(source: LABORATORIO, mutator: (draft: MutableModel<LABORATORIO>) => MutableModel<LABORATORIO> | void): LABORATORIO;
}