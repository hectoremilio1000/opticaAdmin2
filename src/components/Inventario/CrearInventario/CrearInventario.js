import React, { useState, useContext, useEffect } from "react";
import { Button, Form, Input, Select, message } from "antd";
// import { InboxOutlined, UploadOutlined } from "@ant-design/icons";
// import type { FormInstance } from "antd/es/form";

// amplify API
import { API, graphqlOperation, Storage, DataStore } from "aws-amplify";
import * as mutations from "../../../graphql/mutations";
import { MenuContext } from "../../../contexts/MenuContext";
import { v4 as uuidv4 } from "uuid";
import config from "../../../aws-exports";
import { INVENTARIO, OPTICA } from "../../../models";

const {
  aws_user_files_s3_bucket_region: region,
  aws_user_files_s3_bucket: bucket,
} = config;

const { Option } = Select;

function CrearInventario() {
  // usesate url y key

  const { cambiarComponent } = useContext(MenuContext);
  const [nombreProducto, setNombreProducto] = useState("");
  const [categoria, setCategoria] = useState("");
  const [proveedor, setProveedor] = useState("");
  const [costo, setCosto] = useState(0);
  const [precioVenta, setPrecioVenta] = useState(0);
  const [color, setColor] = useState("");
  const [tipoEstructura, setTipoEstructura] = useState("");
  const [urlImagen, setUrlImagen] = useState("");
  const [tipoMaterial, setTipoMaterial] = useState("");
  const [opticaID, setOpticaID] = useState("");
  const [opticas, setOpticas] = useState([]);

  // const onChange = (value: number | string) => {
  //   console.log("changed", value);
  // };
  const searchOpticas = async () => {
    try {
      const result = await DataStore.query(OPTICA);
      setOpticas(result);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    searchOpticas();
  }, []);

  const onFinish = async () => {
    console.log(
      opticaID,
      categoria,
      nombreProducto,
      proveedor,
      costo,
      precioVenta,
      color,
      tipoEstructura,
      urlImagen,
      tipoMaterial
    );
    try {
      const result = await DataStore.save(
        new INVENTARIO({
          opticaID,
          categoria,
          nombreProducto,
          proveedor,
          costo,
          precioVenta,
          color,
          tipoEstructura,
          urlImagen,
          tipoMaterial,
        })
      );
      console.log(result);
      message.success("El lente se ha creado");
      //   cambiarComponent({ key: "11" });
    } catch (error) {
      console.log(error);
      message.error("Hubo un error contacta al administrador");
    }
  };
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
      setUrlImagen(urls);
      console.log("archivo guardado");
      message.success("Imagen cargada exitósamente");
    } catch (error) {
      console.log(error);
      message.error("No se subió correctamente, contacta al administrador");
    }
  };
  return (
    <div>
      <h1>CREAR PRODUCTO</h1>
      <Form layout="vertical" name="crearLente">
        <div
          style={{
            display: "grid",
            gap: "8px",
            gridTemplateColumns: "repeat(3, 1fr)",
          }}
        >
          <Form.Item
            label="Nombre Producto"
            rules={[{ required: true, message: "Este campo es requerido" }]}
          >
            <Input
              value={nombreProducto}
              onChange={(e) => setNombreProducto(e.target.value)}
            />
          </Form.Item>
          <Form.Item
            label="Categoria"
            rules={[{ required: true, message: "Este campo es requerido" }]}
          >
            <Select
              //   defaultValue={categoria}
              onSelect={(e) => setCategoria(e)}
              placeholder="Select una Categoria"
            >
              <Option value="DAMA">DAMA</Option>
              <Option value="CABALLERO">CABALLERO</Option>
              <Option value="BOY">BOY</Option>
            </Select>
          </Form.Item>
          <Form.Item
            label="Optica"
            rules={[{ required: true, message: "Este campo es requerido" }]}
          >
            <Select
              //   defaultValue={categoria}
              onSelect={(e) => setOpticaID(e)}
              placeholder="Select una Optica"
            >
              {opticas.map((optica) => {
                return (
                  <Option key={optica.id} value={optica.id}>
                    {optica.nombre}
                  </Option>
                );
              })}
            </Select>
          </Form.Item>
          <Form.Item
            label="Proveedor"
            rules={[{ required: true, message: "Este campo es requerido" }]}
          >
            <Input
              value={proveedor}
              onChange={(e) => setProveedor(e.target.value)}
            />
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
                  setCosto(Number(e.target.value));
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
                  setPrecioVenta(Number(e.target.value));
                }
              }}
              style={{ width: "100%" }}
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
            label="Tipo Estructura"
            name="tipoEstructura"
            // rules={[{ required: true, message: "Este campo es requerido" }]}
          >
            <Input
              value={tipoEstructura}
              onChange={(e) => setTipoEstructura(e.target.value)}
            />
          </Form.Item>
          <Form.Item
            label="Imagen"
            name="urlImagen"
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
          <Button
            onClick={onFinish}
            title="Save"
            htmlType="submit"
            type="primary"
          >
            Guardar
          </Button>
        </div>
      </Form>
    </div>
  );
}

export default CrearInventario;
