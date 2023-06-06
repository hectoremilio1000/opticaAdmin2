/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { Caja } from "../models";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type CajaUpdateFormInputValues = {
    fechaApertura?: string;
    fechaCierre?: string;
    montoInicial?: string;
    montoFinal?: string;
    estado?: string;
};
export declare type CajaUpdateFormValidationValues = {
    fechaApertura?: ValidationFunction<string>;
    fechaCierre?: ValidationFunction<string>;
    montoInicial?: ValidationFunction<string>;
    montoFinal?: ValidationFunction<string>;
    estado?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type CajaUpdateFormOverridesProps = {
    CajaUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    fechaApertura?: PrimitiveOverrideProps<TextFieldProps>;
    fechaCierre?: PrimitiveOverrideProps<TextFieldProps>;
    montoInicial?: PrimitiveOverrideProps<TextFieldProps>;
    montoFinal?: PrimitiveOverrideProps<TextFieldProps>;
    estado?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type CajaUpdateFormProps = React.PropsWithChildren<{
    overrides?: CajaUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    caja?: Caja;
    onSubmit?: (fields: CajaUpdateFormInputValues) => CajaUpdateFormInputValues;
    onSuccess?: (fields: CajaUpdateFormInputValues) => void;
    onError?: (fields: CajaUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: CajaUpdateFormInputValues) => CajaUpdateFormInputValues;
    onValidate?: CajaUpdateFormValidationValues;
} & React.CSSProperties>;
export default function CajaUpdateForm(props: CajaUpdateFormProps): React.ReactElement;
