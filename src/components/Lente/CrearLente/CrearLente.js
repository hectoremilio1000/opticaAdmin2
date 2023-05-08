import React, { useState, useContext } from "react";
import { Button, Form, Input, Select, message } from "antd";
// import { InboxOutlined, UploadOutlined } from "@ant-design/icons";
// import type { FormInstance } from "antd/es/form";

// amplify API
import { API, graphqlOperation, Storage } from "aws-amplify";
import * as mutations from "../../../graphql/mutations";
import { MenuContext } from "../../../contexts/MenuContext";
import { v4 as uuidv4 } from "uuid";
import config from "../../../aws-exports";

const {
  aws_user_files_s3_bucket_region: region,
  aws_user_files_s3_bucket: bucket,
} = config;

const { Option } = Select;

function CrearLente() {
  // usesate url y key

  const { cambiarComponent } = useContext(MenuContext);
  const [proveedor, setProveedor] = useState("");
  const [costo, setCosto] = useState(0);
  const [precioVenta, setPrecioVenta] = useState(0);
  const [tiempoEntrega, setTiempoEntrega] = useState("");
  const [color, setColor] = useState("");
  const [tipoArmazon, setTipoArmazon] = useState("");
  const [imagen, setImagen] = useState("");
  const [tipoMaterial, setTipoMaterial] = useState("");

  // const onChange = (value: number | string) => {
  //   console.log("changed", value);
  // };
  const onFinish = async (values) => {
    const { grupo } = values;
    console.log(grupo);
    console.log(
      proveedor,
      costo,
      precioVenta,
      tiempoEntrega,
      color,
      tipoArmazon,
      imagen,
      tipoMaterial
    );
    try {
      const newLente = {
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
      await API.graphql(
        graphqlOperation(mutations.createINVENTARIO, { input: newLente })
      );
      message.success("El lente se ha creado");
      cambiarComponent({ key: "11" });
    } catch (error) {
      message.error("Hubo un error contacta al administrador");
    }
  };
  // const handleImage = (e) => {
  //   console.log(e.file);
  // };
  const handleImage = async (e) => {
    e.preventDefault();
    const file = e.target.files[0];
    const extension = file.name.split(".")[1];
    const name = file.name.split(".")[0];
    const keys = `images/${uuidv4()}${name}.${extension}`;
    const urls = `https://${bucket}.s3.${region}.amazonaws.com/public/${keys}`;
    console.log(urls);

    try {
      await Storage.put(keys, file, {
        level: "public",
        contentType: file.type,
      });
      // const image1 = await Storage.get(keys, { level: "public" });
      setImagen(urls);
      console.log("archivo guardado");
      message.success("imagen 1 cargada exitósamente");
    } catch (error) {
      console.log(error);
      message.error("No se subió correctamente, contacta al administrador");
    }
  };
  console.log(imagen);
  return (
    <div>
      <h1>CREAR LENTES</h1>
      <Form onFinish={onFinish} layout="vertical" name="crearLente">
        <div
          style={{
            display: "grid",
            gap: "8px",
            gridTemplateColumns: "repeat(3, 1fr)",
          }}
        >
          <Form.Item
            label="Grupo"
            name="grupo"
            rules={[{ required: true, message: "Este campo es requerido" }]}
          >
            <Select placeholder="Select un grupo DAMA/CABALERO/BOY">
              <Option value="DAMA">DAMA</Option>
              <Option value="CABALLERO">CABALLERO</Option>
              <Option value="BOY">BOY</Option>
            </Select>
          </Form.Item>
          <Form.Item
            value={proveedor}
            onChange={(e) => setProveedor(e.target.value)}
            label="Proveedor"
            name="proveedor"
            rules={[{ required: true, message: "Este campo es requerido" }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Costo"
            name="costo"
            rules={[{ required: true, message: "Este campo es requerido" }]}
          >
            <Input
              value={costo}
              onChange={(e) => {
                if (e.target.value === "") {
                  setCosto(0);
                } else {
                  setCosto(e.target.value);
                }
              }}
            />
          </Form.Item>
          <Form.Item
            label="Precio de Venta"
            name="precioVenta"
            rules={[{ required: true, message: "Este campo es requerido" }]}
          >
            <Input
              value={precioVenta}
              onChange={(e) => {
                if (e.target.value === "") {
                  setPrecioVenta(0);
                } else {
                  setPrecioVenta(e.target.value);
                }
              }}
              style={{ width: "100%" }}
              // formatter={(value) =>
              //   `$ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ",")
              // }
              // parser={(value) => value.replace(/\$\s?|(,*)/g, "")}
              // onChange={onChange}
            />
          </Form.Item>
          <Form.Item
            label="Tiempo Entrega"
            name="tiempoEntrega"
            // rules={[{ required: true, message: "Este campo es requerido" }]}
          >
            <Input
              value={tiempoEntrega}
              onChange={(e) => setTiempoEntrega(e.target.value)}
            />
          </Form.Item>
          <Form.Item
            label="Color"
            name="color"
            // rules={[{ required: true, message: "Este campo es requerido" }]}
          >
            <Input value={color} onChange={(e) => setColor(e.target.value)} />
          </Form.Item>
          <Form.Item
            label="Tipo Armazon"
            name="tipoArmazon"
            // rules={[{ required: true, message: "Este campo es requerido" }]}
          >
            <Input
              value={tipoArmazon}
              onChange={(e) => setTipoArmazon(e.target.value)}
            />
          </Form.Item>
          <Form.Item
            label="Imagen"
            name="imagen"
            // rules={[{ required: true, message: "Este campo es requerido" }]}
          >
            <Input type="file" accept="jpg" onChange={(e) => handleImage(e)} />
            {/* <Upload
              // customRequest={(info) => handleImage(info)}
              onChange={(e) => handleImage(e)}
              action="http://localhost:3000/superadmin"
              name="lente"
              accept=".apng,.avif,.gif,.jpg,.jpeg,.jfif,.pjpeg,.pjp,.png,.svg,.webp"
              listType="picture"
            >
              <Button icon={<UploadOutlined />}>Click to upload</Button>
            </Upload> */}
          </Form.Item>
          <Form.Item
            label="Tipo Material"
            name="tipoMaterial"
            // rules={[{ required: true, message: "Este campo es requerido" }]}
          >
            <Input
              value={tipoMaterial}
              onChange={(e) => setTipoMaterial(e.target.value)}
            />
          </Form.Item>
        </div>
        <div style={{ marginTop: 10 }}>
          <Button title="Save" htmlType="submit" type="primary">
            Guardar
          </Button>
        </div>
      </Form>
    </div>
  );
}

export default CrearLente;
