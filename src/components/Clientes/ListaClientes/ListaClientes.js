import { DataStore } from "aws-amplify";
import React, { useEffect, useState } from "react";
import { CLIENTES, OPTICA } from "../../../models";
import {
  Layout,
  Modal,
  Popconfirm,
  Form,
  Input,
  message,
  Table,
  Tag,
  Select,
  DatePicker,
} from "antd";

import { EditOutlined, DeleteOutlined } from "@ant-design/icons";
import dayjs from "dayjs";

const { Content } = Layout;
const { Option } = Select;

function ListaClientes() {
  // state for modal
  const [isEditing, setIsEditing] = useState(false);
  // state for modal
  const [id, setId] = useState("");
  const [clientes, setClientes] = useState([]);
  const [opticas, setOpticas] = useState([]);
  const [nombres, setNombres] = useState("");
  const [apellidoPaterno, setApellidoPaterno] = useState("");
  const [apellidoMaterno, setApellidoMaterno] = useState("");
  const [fechaNacimiento, setFechaNacimiento] = useState("");
  const [edad, setEdad] = useState("");
  const [whats, setWhats] = useState("");
  const [sexo, setSexo] = useState("");
  const [email, setEmail] = useState("");
  const [opticaID, setOpticaID] = useState("");

  const edithandle = (record) => {
    setId(record?.id);
    setNombres(record?.nombres);
    setApellidoPaterno(record?.apellidoPaterno);
    setApellidoMaterno(record?.apellidoMaterno);
    setFechaNacimiento(record?.fechaNacimiento);
    setEdad(record?.edad);
    setWhats(record?.whats);
    setSexo(record?.sexo);
    setEmail(record?.email);
    setOpticaID(record?.opticaID);
    setIsEditing(true);
  };

  const changeDelete = (record) => {
    setId(record?.id);
  };
  const deletehandle = async () => {
    console.log(id);

    try {
      await DataStore.delete(CLIENTES, id);
      fetchClientes();
      message.success("El cliente se ha eliminado correctamente");
    } catch (error) {
      console.log(error);
      message.error("Hubo un error contacta al administrador");
    }
  };

  const onFinish = async () => {
    try {
      const original = await DataStore.query(CLIENTES, id);
      // console.log(original);
      // console.log(
      //   nombres,
      //   edad,
      //   sexo,
      //   fechaNacimiento,
      //   apellidoMaterno,
      //   apellidoPaterno,
      //   whats,
      //   opticaID
      // );

      await DataStore.save(
        CLIENTES.copyOf(original, (updated) => {
          updated.nombres = nombres;
          updated.edad = edad;
          updated.sexo = sexo;
          updated.fechaNacimiento = fechaNacimiento;
          updated.opticaID = opticaID;
          updated.whats = whats;
          updated.apellidoPaterno = apellidoPaterno;
          updated.apellidoMaterno = apellidoMaterno;
        })
      );
      fetchClientes();
      setIsEditing(false);
      message.success("El cliente se ha actualizado");
    } catch (error) {
      message.error("Hubo un error contacta al administrador");
    }
  };

  const columns = [
    {
      title: "Nombres",
      dataIndex: "nombres",
      key: "nombres",
    },
    {
      title: "Apellido Paterno",
      dataIndex: "apellidoPaterno",
      key: "apellidoPaterno",
    },
    {
      title: "Apellido Materno",
      dataIndex: "apellidoMaterno",
      key: "apellidoMaterno",
    },
    {
      title: "Sexo",
      key: "sexo",
      dataIndex: "sexo",
      render: (text, record) => {
        let color = "";
        if (text === "FEMENINO") {
          color = "volcano";
        }
        if (text === "MASCULINO") {
          color = "green";
        }
        return <Tag color={color}>{text}</Tag>;
      },
    },
    {
      title: "Edad",
      dataIndex: "edad",
      key: "edad",
    },
    {
      title: "WhatsApp",
      dataIndex: "whats",
      key: "whats",
    },
    {
      title: "Fecha Nacimiento",
      dataIndex: "fechaNacimiento",
      key: "fechaNacimiento",
    },
    {
      title: "Actions",
      dataIndex: "actions",
      key: "actions",
      render: (_, record) => {
        return (
          <>
            <EditOutlined
              type="link"
              onClick={() => {
                edithandle(record);
              }}
            />
            <Popconfirm
              title="Eliminar Lente"
              description="¿Esta seguro de eliminar el lente?"
              onConfirm={() => deletehandle()}
              okText="Si"
              cancelText="No"
            >
              <DeleteOutlined
                onClick={() => changeDelete(record)}
                style={{ color: "red", marginLeft: "15px" }}
              />{" "}
            </Popconfirm>
          </>
        );
      },
    },
  ];
  const searchOpticas = async () => {
    try {
      const result = await DataStore.query(OPTICA);
      setOpticas(result);
    } catch (error) {
      console.log(error);
    }
  };

  const fetchClientes = async () => {
    const result = await DataStore.query(CLIENTES);
    setClientes(result);
  };

  useEffect(() => {
    fetchClientes();
    searchOpticas();
  }, []);

  return (
    <Content>
      <div>
        <h1>Lista de clientes</h1>
        <Table
          scroll={{ x: 400 }}
          rowKey={(record) => record.id}
          dataSource={clientes}
          columns={columns}
          rowClassName="editable-row"
        />
        <Modal
          onCancel={() => setIsEditing(false)}
          title="Editar Cliente"
          open={isEditing}
          onOk={() => onFinish()}
        >
          <Form layout="vertical" name="crearCliente">
            <div
              style={{
                display: "grid",
                gap: "8px",
                gridTemplateColumns: "repeat(3, 1fr)",
              }}
            >
              <Form.Item
                label="Nombres"
                rules={[{ required: true, message: "Este campo es requerido" }]}
              >
                <Input
                  value={nombres}
                  placeholder="Ingresa los nombres del cliente"
                  onChange={(e) => setNombres(e.target.value)}
                />
              </Form.Item>
              <Form.Item
                label="Apellido Paterno"
                rules={[{ required: true, message: "Este campo es requerido" }]}
              >
                <Input
                  value={apellidoPaterno}
                  placeholder="Ingresa el apellido paterno"
                  onChange={(e) => setApellidoPaterno(e.target.value)}
                />
              </Form.Item>
              <Form.Item
                label="Apellido Materno"
                rules={[{ required: true, message: "Este campo es requerido" }]}
              >
                <Input
                  value={apellidoMaterno}
                  placeholder="Ingresa el apellido materno"
                  onChange={(e) => setApellidoMaterno(e.target.value)}
                />
              </Form.Item>
              <Form.Item
                label="Sexo"
                rules={[{ required: true, message: "Este campo es requerido" }]}
              >
                <Select
                  defaultValue={sexo}
                  onSelect={(e) => setSexo(e)}
                  placeholder="Select una Categoria"
                >
                  <Option value="FEMENINO">FEMENINO</Option>
                  <Option value="MASCULINO">MASCULINO</Option>
                </Select>
              </Form.Item>
              <Form.Item
                label="Optica"
                rules={[{ required: true, message: "Este campo es requerido" }]}
              >
                <Select
                  defaultValue={opticaID}
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
                label="Fecha de nacimiento"
                rules={[{ required: true, message: "Este campo es requerido" }]}
              >
                <DatePicker
                  value={
                    fechaNacimiento !== ""
                      ? dayjs(fechaNacimiento, "YYYY-MM-DD")
                      : ""
                  }
                  format="YYYY-MM-DD"
                  onChange={(date, dateString) =>
                    setFechaNacimiento(dateString)
                  }
                />
              </Form.Item>
              <Form.Item
                label="Edad"
                rules={[{ required: true, message: "Este campo es requerido" }]}
              >
                <Input
                  placeholder="Ingrese la edad del cliente"
                  value={edad}
                  onChange={(e) => setEdad(e.target.value)}
                />
              </Form.Item>

              <Form.Item
                label="WhatsApp"
                rules={[
                  {
                    pattern: new RegExp(
                      /^[+]{1}[(]{0,1}[0-9]{1,3}[)]{0,1}[-\s/./0-9]*$/g
                    ),
                    message:
                      "Please add country code and check the number carefully",
                    required: true,
                  },
                ]}
              >
                <Input
                  placeholder="Ingresa el numero de whatsapp con codigo de pais"
                  value={whats}
                  onChange={(e) => setWhats(e.target.value)}
                />
              </Form.Item>
              <Form.Item
                label="Email"
                rules={[
                  {
                    email: true,
                    required: true,
                    type: "email",
                    message: "Enter a valid email",
                  },
                ]}
              >
                <Input
                  placeholder="Ingresa email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  style={{ width: "100%" }}
                />
              </Form.Item>
            </div>
          </Form>
        </Modal>
      </div>
    </Content>
  );
}

export default ListaClientes;
