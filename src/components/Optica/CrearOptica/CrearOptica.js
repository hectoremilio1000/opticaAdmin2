import React, { useState, useContext } from "react";
import { Button, Form, Input, Select, message } from "antd";

import { API, graphqlOperation, Storage } from "aws-amplify";
import * as mutations from "../../../graphql/mutations";
function CrearOptica() {
  const [nombreOptica, setNombreOptica] = useState("");

  const onFinish = async () => {
    console.log(nombreOptica);
  };

  return (
    <>
      <h1>CREAR OPTICA</h1>
      <Form onFinish={onFinish} layout="vertical" name="crearInventario">
        <div
          style={{
            display: "grid",
            gap: "8px",
            gridTemplateColumns: "repeat(3, 1fr)",
          }}
        >
          <Form.Item
            value={nombreOptica}
            onChange={(e) => setNombreOptica(e.target.value)}
            label="Nombre"
            name="nombre"
            rules={[{ required: true, message: "Este campo es requerido" }]}
          >
            <Input />
          </Form.Item>
        </div>
        <div style={{ marginTop: 10 }}>
          <Button title="Save" htmlType="submit" type="primary">
            Guardar
          </Button>
        </div>
      </Form>
    </>
  );
}

export default CrearOptica;
