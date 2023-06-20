/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { Button, Flex, Grid, TextField } from "@aws-amplify/ui-react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Caja } from "../models";
import { fetchByPath, validateField } from "./utils";
import { DataStore } from "aws-amplify";
export default function CajaCreateForm(props) {
  const {
    clearOnSuccess = true,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    fechaApertura: "",
    fechaCierre: "",
    montoInicial: "",
    montoFinal: "",
    estado: "",
  };
  const [fechaApertura, setFechaApertura] = React.useState(
    initialValues.fechaApertura
  );
  const [fechaCierre, setFechaCierre] = React.useState(
    initialValues.fechaCierre
  );
  const [montoInicial, setMontoInicial] = React.useState(
    initialValues.montoInicial
  );
  const [montoFinal, setMontoFinal] = React.useState(initialValues.montoFinal);
  const [estado, setEstado] = React.useState(initialValues.estado);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    setFechaApertura(initialValues.fechaApertura);
    setFechaCierre(initialValues.fechaCierre);
    setMontoInicial(initialValues.montoInicial);
    setMontoFinal(initialValues.montoFinal);
    setEstado(initialValues.estado);
    setErrors({});
  };
  const validations = {
    fechaApertura: [],
    fechaCierre: [],
    montoInicial: [],
    montoFinal: [],
    estado: [],
  };
  const runValidationTasks = async (
    fieldName,
    currentValue,
    getDisplayValue
  ) => {
    const value =
      currentValue && getDisplayValue
        ? getDisplayValue(currentValue)
        : currentValue;
    let validationResponse = validateField(value, validations[fieldName]);
    const customValidator = fetchByPath(onValidate, fieldName);
    if (customValidator) {
      validationResponse = await customValidator(value, validationResponse);
    }
    setErrors((errors) => ({ ...errors, [fieldName]: validationResponse }));
    return validationResponse;
  };
  return (
    <Grid
      as="form"
      rowGap="15px"
      columnGap="15px"
      padding="20px"
      onSubmit={async (event) => {
        event.preventDefault();
        let modelFields = {
          fechaApertura,
          fechaCierre,
          montoInicial,
          montoFinal,
          estado,
        };
        const validationResponses = await Promise.all(
          Object.keys(validations).reduce((promises, fieldName) => {
            if (Array.isArray(modelFields[fieldName])) {
              promises.push(
                ...modelFields[fieldName].map((item) =>
                  runValidationTasks(fieldName, item)
                )
              );
              return promises;
            }
            promises.push(
              runValidationTasks(fieldName, modelFields[fieldName])
            );
            return promises;
          }, [])
        );
        if (validationResponses.some((r) => r.hasError)) {
          return;
        }
        if (onSubmit) {
          modelFields = onSubmit(modelFields);
        }
        try {
          Object.entries(modelFields).forEach(([key, value]) => {
            if (typeof value === "string" && value.trim() === "") {
              modelFields[key] = undefined;
            }
          });
          await DataStore.save(new Caja(modelFields));
          if (onSuccess) {
            onSuccess(modelFields);
          }
          if (clearOnSuccess) {
            resetStateValues();
          }
        } catch (err) {
          if (onError) {
            onError(modelFields, err.message);
          }
        }
      }}
      {...getOverrideProps(overrides, "CajaCreateForm")}
      {...rest}
    >
      <TextField
        label="Fecha apertura"
        isRequired={false}
        isReadOnly={false}
        value={fechaApertura}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              fechaApertura: value,
              fechaCierre,
              montoInicial,
              montoFinal,
              estado,
            };
            const result = onChange(modelFields);
            value = result?.fechaApertura ?? value;
          }
          if (errors.fechaApertura?.hasError) {
            runValidationTasks("fechaApertura", value);
          }
          setFechaApertura(value);
        }}
        onBlur={() => runValidationTasks("fechaApertura", fechaApertura)}
        errorMessage={errors.fechaApertura?.errorMessage}
        hasError={errors.fechaApertura?.hasError}
        {...getOverrideProps(overrides, "fechaApertura")}
      ></TextField>
      <TextField
        label="Fecha cierre"
        isRequired={false}
        isReadOnly={false}
        value={fechaCierre}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              fechaApertura,
              fechaCierre: value,
              montoInicial,
              montoFinal,
              estado,
            };
            const result = onChange(modelFields);
            value = result?.fechaCierre ?? value;
          }
          if (errors.fechaCierre?.hasError) {
            runValidationTasks("fechaCierre", value);
          }
          setFechaCierre(value);
        }}
        onBlur={() => runValidationTasks("fechaCierre", fechaCierre)}
        errorMessage={errors.fechaCierre?.errorMessage}
        hasError={errors.fechaCierre?.hasError}
        {...getOverrideProps(overrides, "fechaCierre")}
      ></TextField>
      <TextField
        label="Monto inicial"
        isRequired={false}
        isReadOnly={false}
        value={montoInicial}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              fechaApertura,
              fechaCierre,
              montoInicial: value,
              montoFinal,
              estado,
            };
            const result = onChange(modelFields);
            value = result?.montoInicial ?? value;
          }
          if (errors.montoInicial?.hasError) {
            runValidationTasks("montoInicial", value);
          }
          setMontoInicial(value);
        }}
        onBlur={() => runValidationTasks("montoInicial", montoInicial)}
        errorMessage={errors.montoInicial?.errorMessage}
        hasError={errors.montoInicial?.hasError}
        {...getOverrideProps(overrides, "montoInicial")}
      ></TextField>
      <TextField
        label="Monto final"
        isRequired={false}
        isReadOnly={false}
        value={montoFinal}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              fechaApertura,
              fechaCierre,
              montoInicial,
              montoFinal: value,
              estado,
            };
            const result = onChange(modelFields);
            value = result?.montoFinal ?? value;
          }
          if (errors.montoFinal?.hasError) {
            runValidationTasks("montoFinal", value);
          }
          setMontoFinal(value);
        }}
        onBlur={() => runValidationTasks("montoFinal", montoFinal)}
        errorMessage={errors.montoFinal?.errorMessage}
        hasError={errors.montoFinal?.hasError}
        {...getOverrideProps(overrides, "montoFinal")}
      ></TextField>
      <TextField
        label="Estado"
        isRequired={false}
        isReadOnly={false}
        value={estado}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              fechaApertura,
              fechaCierre,
              montoInicial,
              montoFinal,
              estado: value,
            };
            const result = onChange(modelFields);
            value = result?.estado ?? value;
          }
          if (errors.estado?.hasError) {
            runValidationTasks("estado", value);
          }
          setEstado(value);
        }}
        onBlur={() => runValidationTasks("estado", estado)}
        errorMessage={errors.estado?.errorMessage}
        hasError={errors.estado?.hasError}
        {...getOverrideProps(overrides, "estado")}
      ></TextField>
      <Flex
        justifyContent="space-between"
        {...getOverrideProps(overrides, "CTAFlex")}
      >
        <Button
          children="Clear"
          type="reset"
          onClick={(event) => {
            event.preventDefault();
            resetStateValues();
          }}
          {...getOverrideProps(overrides, "ClearButton")}
        ></Button>
        <Flex
          gap="15px"
          {...getOverrideProps(overrides, "RightAlignCTASubFlex")}
        >
          <Button
            children="Submit"
            type="submit"
            variation="primary"
            isDisabled={Object.values(errors).some((e) => e?.hasError)}
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
