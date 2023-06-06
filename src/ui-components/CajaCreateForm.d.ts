/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type CajaCreateFormInputValues = {
    fechaApertura?: string;
    fechaCierre?: string;
    montoInicial?: string;
    montoFinal?: string;
    estado?: string;
};
export declare type CajaCreateFormValidationValues = {
    fechaApertura?: ValidationFunction<string>;
    fechaCierre?: ValidationFunction<string>;
    montoInicial?: ValidationFunction<string>;
    montoFinal?: ValidationFunction<string>;
    estado?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type CajaCreateFormOverridesProps = {
    CajaCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    fechaApertura?: PrimitiveOverrideProps<TextFieldProps>;
    fechaCierre?: PrimitiveOverrideProps<TextFieldProps>;
    montoInicial?: PrimitiveOverrideProps<TextFieldProps>;
    montoFinal?: PrimitiveOverrideProps<TextFieldProps>;
    estado?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type CajaCreateFormProps = React.PropsWithChildren<{
    overrides?: CajaCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: CajaCreateFormInputValues) => CajaCreateFormInputValues;
    onSuccess?: (fields: CajaCreateFormInputValues) => void;
    onError?: (fields: CajaCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: CajaCreateFormInputValues) => CajaCreateFormInputValues;
    onValidate?: CajaCreateFormValidationValues;
} & React.CSSProperties>;
export default function CajaCreateForm(props: CajaCreateFormProps): React.ReactElement;
