import React, { useState, useContext } from "react";
import { Button, Form, Input, message } from "antd";

import { API, graphqlOperation, Storage, DataStore } from "aws-amplify";
import * as mutations from "../../../graphql/mutations";

import { useAuthContext } from "../../../contexts/AuthContext";
import { OPTICA } from "../../../models";
function CrearOptica() {
  const authContext = useAuthContext();
  const [nombreOptica, setNombreOptica] = useState("");

  const onFinish = async () => {
    console.log(nombreOptica);
    try {
      const result = await DataStore.save(
        new OPTICA({
          nombre: nombreOptica,
          createdBy: authContext?.authEmail,
        })
      );
      console.log(result);
      message.success("La optica s eha creado correctamente");
      setNombreOptica("");
    } catch (error) {
      console.log(error);
      message.error("Hubo un error contacta al administrador");
    }
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
            label="Nombre"
            rules={[{ required: true, message: "Este campo es requerido" }]}
          >
            <Input
              value={nombreOptica}
              onChange={(e) => setNombreOptica(e.target.value)}
            />
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
