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
import { API, DataStore, graphqlOperation } from "aws-amplify";
import * as mutations from "../../../graphql/mutations";
import * as queries from "../../../graphql/queries";
// import { useNavigate } from "react-router-dom";
import { INVENTARIO, OPTICA } from "../../../models";

const { Content } = Layout;
const { Option } = Select;
function ListaInventario() {
  // use state de form modal
  const [categoria, setCategoria] = useState("");
  const [id, setId] = useState("");
  const [nombreProducto, setNombreProducto] = useState("");
  const [proveedor, setProveedor] = useState("");
  const [costo, setCosto] = useState(0);
  const [precioVenta, setPrecioVenta] = useState(0);
  const [tiempoEntrega, setTiempoEntrega] = useState("");
  const [color, setColor] = useState("");
  const [tipoEstructura, settipoEstructura] = useState("");
  const [urlImagen, setUrlImagen] = useState("");
  const [tipoMaterial, setTipoMaterial] = useState("");
  const [inventario, setInventario] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const [opticaID, setOpticaID] = useState("");
  const [filtercategorias, setFiltercategorias] = useState([]);
  const [opticas, setOpticas] = useState([]);

  // const navigate = useNavigate();
  const [lentes, setLentes] = useState([]);
  const searchcategorias = () => {
    const categorias = [...new Set(inventario.map((inv) => inv.categoria))];
    const items = [];
    for (let index = 0; index < categorias.length; index++) {
      const cat = { text: categorias[index], value: categorias[index] };
      items.push(cat);
    }
    return items;
  };
  const columns = [
    {
      title: "Nombre",
      dataIndex: "nombreProducto",
      key: "nombreProducto",
    },
    {
      title: "Categoria",
      key: "categoria",
      dataIndex: "categoria",
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
      filters: searchcategorias(),
      filterMode: "tree",
      filterSearch: true,
      onFilter: (value, record) => record.categoria.startsWith(value),
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
      title: "Color",
      dataIndex: "color",
      key: "color",
    },
    {
      title: "Tipo Estructura",
      dataIndex: "tipoEstructura",
      key: "tipoEstructura",
    },
    {
      title: "Imagen",
      dataIndex: "urlImagen",
      key: "urlImagen",
      render: (urlImagen) => {
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
            src={urlImagen}
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
  useEffect(() => {
    searchOpticas();
  }, []);

  const edithandle = (record) => {
    setId(record?.id);
    setOpticaID(record.opticaID);
    setNombreProducto(record?.nombreProducto);
    setCategoria(record?.categoria);
    setProveedor(record?.proveedor);
    setCosto(record?.costo);
    setPrecioVenta(record?.precioVenta);
    setColor(record?.color);
    settipoEstructura(record?.tipoEstructura);
    setTipoMaterial(record?.tipoMaterial);
    setIsEditing(true);
    setUrlImagen(record?.urlImagen);
  };

  const changeDelete = (record) => {
    setId(record?.id);
  };

  const fetchInventario = async () => {
    const result = await DataStore.query(INVENTARIO);
    setInventario(result);
  };

  useEffect(() => {
    fetchInventario();
  }, []);

  const deletehandle = async () => {
    console.log(id);

    try {
      await DataStore.delete(INVENTARIO, id);
      fetchInventario();
      message.success("El lente se ha eliminado correctamente");
    } catch (error) {
      console.log(error);
      message.error("Hubo un error contacta al administrador");
    }
  };

  const onFinish = async () => {
    try {
      const original = await DataStore.query(INVENTARIO, id);
      console.log(original);

      await DataStore.save(
        INVENTARIO.copyOf(original, (updated) => {
          updated.categoria = categoria;
          updated.proveedor = proveedor;
          updated.costo = costo;
          updated.precioVenta = precioVenta;
          updated.nombreProducto = nombreProducto;
          updated.color = color;
          updated.tipoEstructura = tipoEstructura;
          updated.urlImagen = urlImagen;
          updated.tipoMaterial = tipoMaterial;
          updated.opticaID = opticaID;
        })
      );
      fetchInventario();
      setIsEditing(false);
      message.success("El producto se ha actualizado");
    } catch (error) {
      message.error("Hubo un error contacta al administrador");
    }
  };

  return (
    <Content>
      <div>
        <h1>NUESTROS PRODUCTOS</h1>
        <Table
          scroll={{ x: 400 }}
          rowKey={(record) => record.id}
          dataSource={inventario}
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
                label="Nombre"
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
                  defaultValue={categoria}
                  onSelect={(e) => setCategoria(e)}
                  placeholder="Select un categoria DAMA/CABALERO/BOY"
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
                  value={tipoEstructura}
                  onChange={(e) => settipoEstructura(e.target.value)}
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

export default ListaInventario;
