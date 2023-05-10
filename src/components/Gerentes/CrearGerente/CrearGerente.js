import { React, useState, useEffect } from "react";
import { Form, message, Input, Select, Layout, Button } from "antd";
import { API, graphqlOperation, DataStore } from "aws-amplify";
import { OPTICA } from "../../../models";
// uso el contexto del auth
import { useAuthContext } from "../../../contexts/AuthContext";
import { checkIfExists } from "../../../functions/user/checkIfExists";

const { Content } = Layout;
const { Option } = Select;

function CrearGerente() {
  const { userName: createdBy } = useAuthContext();

  const [nombres, setNombres] = useState("");
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [opticaID, setOpticaID] = useState("");
  const confirmed = false;
  const blocked = false;

  // opticas search
  const [opticas, setOpticas] = useState([]);

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
      nombres,
      userName,
      email,
      phoneNumber,
      opticaID,
      createdBy,
      phoneNumber
    );
    const exist = await checkIfExists(userName);
    console.log(exist);
    // if (exist) {
    //   message.error("El usuario existe");
    //   return;
    // }
  };

  return (
    <Form onFinish={onFinish} layout="vertical">
      <div
        style={{
          display: "grid",
          gap: "8px",
          gridTemplateColumns: "repeat(2, 1fr)",
        }}
      >
        <Form.Item
          label="Nombres"
          name="nombres"
          rules={[{ required: true, message: "Este campo es requerido" }]}
        >
          <Input
            placeholder="Ingresa los nombres para el usuario"
            value={nombres}
            onChange={(e) => setNombres(e.target.value)}
          />
        </Form.Item>
        <Form.Item
          label="Optica"
          name="optica"
          rules={[{ required: true, message: "Este campo es requerido" }]}
        >
          <Select
            // defaultValue={opticaID}
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
          label="Username"
          rules={[{ required: true, message: "Este campo es requerido" }]}
        >
          <Input
            placeholder="Ingresa un username para el usuario"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
          />
        </Form.Item>
        <Form.Item
          label="Email"
          rules={[{ required: true, message: "Este campo es requerido" }]}
        >
          <Input
            placeholder="Ingresa el email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </Form.Item>
        <Form.Item
          label="Numero Telefono"
          rules={[{ required: true, message: "Este campo es requerido" }]}
        >
          <Input
            placeholder="Ingresa el numero de telefono"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
          />
        </Form.Item>
      </div>
      <div style={{ marginTop: 10 }}>
        <Button title="Save" htmlType="submit" type="primary">
          Guardar
        </Button>
      </div>
    </Form>
  );
}

export default CrearGerente;
