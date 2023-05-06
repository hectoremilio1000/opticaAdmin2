import React, { useEffect, useState } from "react";
import {
  Form,
  Input,
  Layout,
  Select,
  Table,
  Tag,
  Modal,
  message,
  Image,
  Popconfirm,
} from "antd";
// amplify API
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";
import { API, graphqlOperation } from "aws-amplify";
import * as mutations from "../../../graphql/mutations";
import * as queries from "../../../graphql/queries";
// import { useNavigate } from "react-router-dom";

const { Content } = Layout;
const { Option } = Select;
function ListaLentes() {
  // use state de form modal
  const [grupo, setGrupo] = useState("");
  const [id, setId] = useState("");
  const [proveedor, setProveedor] = useState("");
  const [costo, setCosto] = useState(0);
  const [precioVenta, setPrecioVenta] = useState(0);
  const [tiempoEntrega, setTiempoEntrega] = useState("");
  const [color, setColor] = useState("");
  const [tipoArmazon, setTipoArmazon] = useState("");
  const [imagen, setImagen] = useState("");
  const [tipoMaterial, setTipoMaterial] = useState("");

  const [isEditing, setIsEditing] = useState(false);

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
          <Image
            style={{
              width: "80px",
              height: "80px",
              borderRadius: "50%",
              objectFit: "contain",
              objectPosition: "center",
              overflow: "hidden",
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
            <EditOutlined
              type="link"
              onClick={() => {
                edithandle(record);
              }}
            />
            <Popconfirm
              title="Eliminar Lente"
              description="¿Esta seguro de eliminar el lente?"
              onConfirm={() => deletehandle(record)}
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

  const edithandle = (record) => {
    setId(record?.id);
    setGrupo(record?.grupo);
    setProveedor(record?.proveedor);
    setCosto(record?.costo);
    setPrecioVenta(record?.precioVenta);
    setTiempoEntrega(record?.tiempoEntrega);
    setColor(record?.color);
    setTipoArmazon(record?.tipoArmazon);
    setTipoMaterial(record?.tipoMaterial);
    setIsEditing(true);
    setImagen(record?.imagen);
  };
  const changeDelete = (record) => {
    setId(record?.id);
  };
  const deletehandle = async (record) => {
    const lente = lentes[record?.id];
    console.log(lente);
    try {
      const lente = {
        id,
      };
      const result = await API.graphql(
        graphqlOperation(mutations.deleteLENTE, { input: lente })
      );
      console.log(result);
      message.success("El lente se ha eliminado correctamente");
    } catch (error) {
      console.log(error);
      message.error("Hubo un error contacta al administrador");
    }
  };
  const onFinish = async () => {
    try {
      const updateLentes = {
        id,
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
      console.log(updateLentes);
      const result = await API.graphql(
        graphqlOperation(mutations.updateLENTE, { input: updateLentes })
      );
      console.log(result);
      message.success("El lente se ha actualizado");
      fetchLentes();
      setIsEditing(false);
    } catch (error) {
      console.log(error);
      message.error("Hubo un error contacta al administrador");
    }
  };

  useEffect(() => {
    fetchLentes();
  }, []);

  return (
    <Content>
      <div>
        <p>NUESTOS LENTES</p>
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
        {/* {isEditing === true ? ( */}
        <Modal
          onCancel={() => setIsEditing(false)}
          // onOk={() => setIsEditing(false)}
          title="Edit Lente"
          open={isEditing}
          onOk={() => onFinish()}
        >
          <Form layout="vertical">
            <div
              style={{
                display: "grid",
                gap: "8px",
                gridTemplateColumns: "repeat(2, 1fr)",
              }}
            >
              <Form.Item
                label="Grupo"
                rules={[{ required: true, message: "Este campo es requerido" }]}
              >
                <Select
                  defaultValue={grupo}
                  onSelect={(e) => setGrupo(e)}
                  placeholder="Select un grupo DAMA/CABALERO/BOY"
                >
                  <Option value="DAMA">DAMA</Option>
                  <Option value="CABALLERO">CABALLERO</Option>
                  <Option value="BOY">BOY</Option>
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
                  // formatter={(value) =>
                  //   `$ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ",")
                  // }
                  // parser={(value) => value.replace(/\$\s?|(,*)/g, "")}
                  // onChange={onChange}
                />
              </Form.Item>
              <Form.Item
                label="Tiempo Entrega"

                // rules={[{ required: true, message: "Este campo es requerido" }]}
              >
                <Input
                  value={tiempoEntrega}
                  onChange={(e) => setTiempoEntrega(e.target.value)}
                />
              </Form.Item>
              <Form.Item
                label="Color"
                // rules={[{ required: true, message: "Este campo es requerido" }]}
              >
                <Input
                  value={color}
                  onChange={(e) => setColor(e.target.value)}
                />
              </Form.Item>
              <Form.Item
                label="Tipo Armazon"

                // rules={[{ required: true, message: "Este campo es requerido" }]}
              >
                <Input
                  value={tipoArmazon}
                  onChange={(e) => setTipoArmazon(e.target.value)}
                />
              </Form.Item>
              <Form.Item
                label="Imagen"

                // rules={[{ required: true, message: "Este campo es requerido" }]}
              >
                <Input type="file" accept="jpg" />
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

                // rules={[{ required: true, message: "Este campo es requerido" }]}
              >
                <Input
                  value={tipoMaterial}
                  onChange={(e) => setTipoMaterial(e.target.value)}
                />
              </Form.Item>
            </div>
          </Form>
        </Modal>
        {/* ) : null} */}
      </div>
    </Content>
  );
}

export default ListaLentes;
