/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, SelectFieldProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type LENTECreateFormInputValues = {
    grupo?: string;
    proveedor?: string;
    costo?: number;
    precioVenta?: number;
    tiempoEntrega?: string;
    color?: string;
    tipoArmazon?: string;
    imagen?: string;
    tipoMaterial?: string;
};
export declare type LENTECreateFormValidationValues = {
    grupo?: ValidationFunction<string>;
    proveedor?: ValidationFunction<string>;
    costo?: ValidationFunction<number>;
    precioVenta?: ValidationFunction<number>;
    tiempoEntrega?: ValidationFunction<string>;
    color?: ValidationFunction<string>;
    tipoArmazon?: ValidationFunction<string>;
    imagen?: ValidationFunction<string>;
    tipoMaterial?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type LENTECreateFormOverridesProps = {
    LENTECreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    grupo?: PrimitiveOverrideProps<SelectFieldProps>;
    proveedor?: PrimitiveOverrideProps<TextFieldProps>;
    costo?: PrimitiveOverrideProps<TextFieldProps>;
    precioVenta?: PrimitiveOverrideProps<TextFieldProps>;
    tiempoEntrega?: PrimitiveOverrideProps<TextFieldProps>;
    color?: PrimitiveOverrideProps<TextFieldProps>;
    tipoArmazon?: PrimitiveOverrideProps<TextFieldProps>;
    imagen?: PrimitiveOverrideProps<TextFieldProps>;
    tipoMaterial?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type LENTECreateFormProps = React.PropsWithChildren<{
    overrides?: LENTECreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: LENTECreateFormInputValues) => LENTECreateFormInputValues;
    onSuccess?: (fields: LENTECreateFormInputValues) => void;
    onError?: (fields: LENTECreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: LENTECreateFormInputValues) => LENTECreateFormInputValues;
    onValidate?: LENTECreateFormValidationValues;
} & React.CSSProperties>;
export default function LENTECreateForm(props: LENTECreateFormProps): React.ReactElement;
