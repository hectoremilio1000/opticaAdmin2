import React, { useEffect, useState } from "react";
import { Button, Form, Input, Layout, Select, Table, Tag } from "antd";

// amplify API
import { API, graphqlOperation } from "aws-amplify";
import * as queries from "../../../graphql/queries";
// import { useNavigate } from "react-router-dom";

const { Content } = Layout;
const { Option } = Select;
function ListaLentes() {
  const [editingRow, setEditingRow] = useState(null);
  const [form] = Form.useForm();
  // const navigate = useNavigate();
  const [lentes, setLentes] = useState([]);
  const searchGrupos = () => {
    const grupos = [...new Set(lentes.map((lente) => lente.grupo))];
    const items = [];
    for (let index = 0; index < grupos.length; index++) {
      const grup = { text: grupos[index], value: grupos[index] };
      items.push(grup);
    }
    return items;
  };
  const columns = [
    {
      title: "Grupo",
      key: "grupo",
      dataIndex: "grupo",
      render: (text, record) => {
        if (editingRow === record.id) {
          return (
            <Form.Item name="grupo" valuePropName={record.grupo}>
              <Select placeholder="Select un grupo DAMA/CABALERO/BOY">
                <Option value="DAMA">DAMA</Option>
                <Option value="CABALLERO">CABALLERO</Option>
                <Option value="BOY">BOY</Option>
              </Select>
            </Form.Item>
          );
        } else {
          let color = "";
          if (text === "DAMA") {
            color = "geekblue";
          }
          if (text === "CABALLERO") {
            color = "green";
          }
          if (text === "BOY") {
            color = "volcano";
          }
          return <Tag color={color}>{text}</Tag>;
        }
      },
      filters: searchGrupos(),
      filterMode: "tree",
      filterSearch: true,
      onFilter: (value, record) => record.grupo.startsWith(value),
    },
    {
      title: "Proveedor",
      dataIndex: "proveedor",
      key: "proveedor",
      render: (text, record) => {
        if (editingRow === record.id) {
          return (
            <Form.Item name="proveedor">
              <Input />
            </Form.Item>
          );
        } else {
          return <p>{text}</p>;
        }
      },
    },
    {
      title: "Costo",
      dataIndex: "costo",
      key: "costo",
    },
    {
      title: "Precio Venta",
      dataIndex: "precioVenta",
      key: "precioVenta",
    },
    {
      title: "Tiempo Entrega",
      dataIndex: "tiempoEntrega",
      key: "tiempoEntrega",
    },
    {
      title: "Color",
      dataIndex: "color",
      key: "color",
    },
    {
      title: "Tipo Armazon",
      dataIndex: "tipoArmazon",
      key: "tipoArmazon",
    },
    {
      title: "Imagen",
      dataIndex: "imagen",
      key: "imagen",
      render: (imagen) => {
        // const extension = imagen.split("/");
        // const key = "images/" + extension[extension.length - 1];
        // console.log(key);
        // const image1 = await Storage.get(key, { level: "public" });
        return (
          <img
            style={{
              width: "80px",
              height: "80px",
              borderRadius: "50%",
              objectFit: "contain",
              objectPosition: "center",
            }}
            src={imagen}
            alt="iamgen prueba"
          />
        );
      },
    },
    {
      title: "Tipo Material",
      dataIndex: "tipoMaterial",
      key: "tipoMaterial",
    },
    {
      title: "Actions",
      dataIndex: "actions",
      key: "actions",
      render: (_, record) => {
        return (
          <>
            <Button
              type="link"
              onClick={() => {
                setEditingRow(record.id);
                console.log(record);
                form.setFieldValue({
                  grupo: record.grupo,
                  proveedor: record.proveedor,
                });
                console.log(form);
              }}
            >
              Edit
            </Button>
            <Button type="link">Save</Button>
          </>
        );
      },
    },
  ];

  const fetchLentes = async () => {
    const lentes = await API.graphql(graphqlOperation(queries.listLENTES));
    const items = lentes?.data?.listLENTES?.items;
    setLentes(
      items.sort(function (a, b) {
        if (a.proveedor > b.proveedor) {
          return 1;
        }
        if (a.proveedor < b.proveedor) {
          return -1;
        }
        // a must be equal to b
        return 0;
      })
    );
  };

  useEffect(() => {
    fetchLentes();
  }, []);

  return (
    <Content>
      <div>
        <p>NUESTOS LENTES</p>
        <Form form={form}>
          <Table
            scroll={{ x: 400 }}
            rowKey={(record) => record.id}
            dataSource={lentes}
            columns={columns}
            rowClassName="editable-row"
            // onRow={(lentes) => ({
            //   onClick: () => navigate(`lentes/${lentes.id}`),
            // })}
          />
        </Form>
      </div>
    </Content>
  );
}

export default ListaLentes;
