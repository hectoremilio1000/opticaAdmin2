/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import {
  Button,
  Flex,
  Grid,
  SelectField,
  TextField,
} from "@aws-amplify/ui-react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { LENTE } from "../models";
import { fetchByPath, validateField } from "./utils";
import { DataStore } from "aws-amplify";
export default function LENTECreateForm(props) {
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
    grupo: "",
    proveedor: "",
    costo: "",
    precioVenta: "",
    tiempoEntrega: "",
    color: "",
    tipoArmazon: "",
    imagen: "",
    tipoMaterial: "",
  };
  const [grupo, setGrupo] = React.useState(initialValues.grupo);
  const [proveedor, setProveedor] = React.useState(initialValues.proveedor);
  const [costo, setCosto] = React.useState(initialValues.costo);
  const [precioVenta, setPrecioVenta] = React.useState(
    initialValues.precioVenta
  );
  const [tiempoEntrega, setTiempoEntrega] = React.useState(
    initialValues.tiempoEntrega
  );
  const [color, setColor] = React.useState(initialValues.color);
  const [tipoArmazon, setTipoArmazon] = React.useState(
    initialValues.tipoArmazon
  );
  const [imagen, setImagen] = React.useState(initialValues.imagen);
  const [tipoMaterial, setTipoMaterial] = React.useState(
    initialValues.tipoMaterial
  );
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    setGrupo(initialValues.grupo);
    setProveedor(initialValues.proveedor);
    setCosto(initialValues.costo);
    setPrecioVenta(initialValues.precioVenta);
    setTiempoEntrega(initialValues.tiempoEntrega);
    setColor(initialValues.color);
    setTipoArmazon(initialValues.tipoArmazon);
    setImagen(initialValues.imagen);
    setTipoMaterial(initialValues.tipoMaterial);
    setErrors({});
  };
  const validations = {
    grupo: [{ type: "Required" }],
    proveedor: [{ type: "Required" }],
    costo: [{ type: "Required" }],
    precioVenta: [{ type: "Required" }],
    tiempoEntrega: [],
    color: [],
    tipoArmazon: [],
    imagen: [],
    tipoMaterial: [],
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
          grupo,
          proveedor,
          costo,
          precioVenta,
          tiempoEntrega,
          color,
          tipoArmazon,
          imagen,
          tipoMaterial,
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
          await DataStore.save(new LENTE(modelFields));
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
      {...getOverrideProps(overrides, "LENTECreateForm")}
      {...rest}
    >
      <SelectField
        label="Grupo"
        placeholder="Please select an option"
        isDisabled={false}
        value={grupo}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              grupo: value,
              proveedor,
              costo,
              precioVenta,
              tiempoEntrega,
              color,
              tipoArmazon,
              imagen,
              tipoMaterial,
            };
            const result = onChange(modelFields);
            value = result?.grupo ?? value;
          }
          if (errors.grupo?.hasError) {
            runValidationTasks("grupo", value);
          }
          setGrupo(value);
        }}
        onBlur={() => runValidationTasks("grupo", grupo)}
        errorMessage={errors.grupo?.errorMessage}
        hasError={errors.grupo?.hasError}
        {...getOverrideProps(overrides, "grupo")}
      >
        <option
          children="Dama"
          value="DAMA"
          {...getOverrideProps(overrides, "grupooption0")}
        ></option>
        <option
          children="Caballero"
          value="CABALLERO"
          {...getOverrideProps(overrides, "grupooption1")}
        ></option>
        <option
          children="Boy"
          value="BOY"
          {...getOverrideProps(overrides, "grupooption2")}
        ></option>
      </SelectField>
      <TextField
        label="Proveedor"
        isRequired={true}
        isReadOnly={false}
        value={proveedor}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              grupo,
              proveedor: value,
              costo,
              precioVenta,
              tiempoEntrega,
              color,
              tipoArmazon,
              imagen,
              tipoMaterial,
            };
            const result = onChange(modelFields);
            value = result?.proveedor ?? value;
          }
          if (errors.proveedor?.hasError) {
            runValidationTasks("proveedor", value);
          }
          setProveedor(value);
        }}
        onBlur={() => runValidationTasks("proveedor", proveedor)}
        errorMessage={errors.proveedor?.errorMessage}
        hasError={errors.proveedor?.hasError}
        {...getOverrideProps(overrides, "proveedor")}
      ></TextField>
      <TextField
        label="Costo"
        isRequired={true}
        isReadOnly={false}
        type="number"
        step="any"
        value={costo}
        onChange={(e) => {
          let value = isNaN(parseFloat(e.target.value))
            ? e.target.value
            : parseFloat(e.target.value);
          if (onChange) {
            const modelFields = {
              grupo,
              proveedor,
              costo: value,
              precioVenta,
              tiempoEntrega,
              color,
              tipoArmazon,
              imagen,
              tipoMaterial,
            };
            const result = onChange(modelFields);
            value = result?.costo ?? value;
          }
          if (errors.costo?.hasError) {
            runValidationTasks("costo", value);
          }
          setCosto(value);
        }}
        onBlur={() => runValidationTasks("costo", costo)}
        errorMessage={errors.costo?.errorMessage}
        hasError={errors.costo?.hasError}
        {...getOverrideProps(overrides, "costo")}
      ></TextField>
      <TextField
        label="Precio venta"
        isRequired={true}
        isReadOnly={false}
        type="number"
        step="any"
        value={precioVenta}
        onChange={(e) => {
          let value = isNaN(parseFloat(e.target.value))
            ? e.target.value
            : parseFloat(e.target.value);
          if (onChange) {
            const modelFields = {
              grupo,
              proveedor,
              costo,
              precioVenta: value,
              tiempoEntrega,
              color,
              tipoArmazon,
              imagen,
              tipoMaterial,
            };
            const result = onChange(modelFields);
            value = result?.precioVenta ?? value;
          }
          if (errors.precioVenta?.hasError) {
            runValidationTasks("precioVenta", value);
          }
          setPrecioVenta(value);
        }}
        onBlur={() => runValidationTasks("precioVenta", precioVenta)}
        errorMessage={errors.precioVenta?.errorMessage}
        hasError={errors.precioVenta?.hasError}
        {...getOverrideProps(overrides, "precioVenta")}
      ></TextField>
      <TextField
        label="Tiempo entrega"
        isRequired={false}
        isReadOnly={false}
        value={tiempoEntrega}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              grupo,
              proveedor,
              costo,
              precioVenta,
              tiempoEntrega: value,
              color,
              tipoArmazon,
              imagen,
              tipoMaterial,
            };
            const result = onChange(modelFields);
            value = result?.tiempoEntrega ?? value;
          }
          if (errors.tiempoEntrega?.hasError) {
            runValidationTasks("tiempoEntrega", value);
          }
          setTiempoEntrega(value);
        }}
        onBlur={() => runValidationTasks("tiempoEntrega", tiempoEntrega)}
        errorMessage={errors.tiempoEntrega?.errorMessage}
        hasError={errors.tiempoEntrega?.hasError}
        {...getOverrideProps(overrides, "tiempoEntrega")}
      ></TextField>
      <TextField
        label="Color"
        isRequired={false}
        isReadOnly={false}
        value={color}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              grupo,
              proveedor,
              costo,
              precioVenta,
              tiempoEntrega,
              color: value,
              tipoArmazon,
              imagen,
              tipoMaterial,
            };
            const result = onChange(modelFields);
            value = result?.color ?? value;
          }
          if (errors.color?.hasError) {
            runValidationTasks("color", value);
          }
          setColor(value);
        }}
        onBlur={() => runValidationTasks("color", color)}
        errorMessage={errors.color?.errorMessage}
        hasError={errors.color?.hasError}
        {...getOverrideProps(overrides, "color")}
      ></TextField>
      <TextField
        label="Tipo armazon"
        isRequired={false}
        isReadOnly={false}
        value={tipoArmazon}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              grupo,
              proveedor,
              costo,
              precioVenta,
              tiempoEntrega,
              color,
              tipoArmazon: value,
              imagen,
              tipoMaterial,
            };
            const result = onChange(modelFields);
            value = result?.tipoArmazon ?? value;
          }
          if (errors.tipoArmazon?.hasError) {
            runValidationTasks("tipoArmazon", value);
          }
          setTipoArmazon(value);
        }}
        onBlur={() => runValidationTasks("tipoArmazon", tipoArmazon)}
        errorMessage={errors.tipoArmazon?.errorMessage}
        hasError={errors.tipoArmazon?.hasError}
        {...getOverrideProps(overrides, "tipoArmazon")}
      ></TextField>
      <TextField
        label="Imagen"
        isRequired={false}
        isReadOnly={false}
        value={imagen}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              grupo,
              proveedor,
              costo,
              precioVenta,
              tiempoEntrega,
              color,
              tipoArmazon,
              imagen: value,
              tipoMaterial,
            };
            const result = onChange(modelFields);
            value = result?.imagen ?? value;
          }
          if (errors.imagen?.hasError) {
            runValidationTasks("imagen", value);
          }
          setImagen(value);
        }}
        onBlur={() => runValidationTasks("imagen", imagen)}
        errorMessage={errors.imagen?.errorMessage}
        hasError={errors.imagen?.hasError}
        {...getOverrideProps(overrides, "imagen")}
      ></TextField>
      <TextField
        label="Tipo material"
        isRequired={false}
        isReadOnly={false}
        value={tipoMaterial}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              grupo,
              proveedor,
              costo,
              precioVenta,
              tiempoEntrega,
              color,
              tipoArmazon,
              imagen,
              tipoMaterial: value,
            };
            const result = onChange(modelFields);
            value = result?.tipoMaterial ?? value;
          }
          if (errors.tipoMaterial?.hasError) {
            runValidationTasks("tipoMaterial", value);
          }
          setTipoMaterial(value);
        }}
        onBlur={() => runValidationTasks("tipoMaterial", tipoMaterial)}
        errorMessage={errors.tipoMaterial?.errorMessage}
        hasError={errors.tipoMaterial?.hasError}
        {...getOverrideProps(overrides, "tipoMaterial")}
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
