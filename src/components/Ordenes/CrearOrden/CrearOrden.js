import {
  Button,
  DatePicker,
  Form,
  Input,
  InputNumber,
  Select,
  Space,
  Table,
  message,
} from "antd";
import { MenuContext } from "../../../contexts/MenuContext";
import dayjs from "dayjs";
import { React, useState, useEffect, useContext } from "react";
import { DataStore } from "aws-amplify";
import {
  CLIENTES,
  INVENTARIO,
  INVENTARIOORDENITEMS,
  OPTICA,
  ORDEN,
} from "../../../models";
const { Option } = Select;

function CrearOrden() {
  const { cambiarComponent } = useContext(MenuContext);
  const [clientes, setClientes] = useState([]);
  const [clientesID, setclientesID] = useState(null);
  const [tipoOrden, setTipoOrden] = useState(null);
  const [usoLentes, setUsoLentes] = useState("");
  // graducacion state
  const [gradCheck, setGradCheck] = useState("");
  const [opticaID, setOpticaID] = useState("");
  const [opticas, setOpticas] = useState([]);
  const [graduacionDerechaVieja, setGraduacionDerechaVieja] = useState("");
  const [graduacionIzquierdaVieja, setGraduacionIzquierdaVieja] = useState("");
  const [referencia, setReferencia] = useState("");
  const [seRealizoExamen, setSeRealizoExamen] = useState("");
  const [fechaExamen, setFechaExamen] = useState("");
  const [fechaEntrega, setFechaEntrega] = useState("");

  // ordenes state carts
  const [carrito, setCarrito] = useState([]);
  const [productos, setProductos] = useState([]);
  const [listProductos, setListProductos] = useState([]);
  const [cantidad, setCantidad] = useState(1);
  const [precio, setPrecio] = useState(0);
  const [productoID, setProductoID] = useState("");
  const [nombreProducto, setNombreProducto] = useState("");
  const [total, setTotal] = useState(0);

  const fetchClientes = async () => {
    try {
      const result = await DataStore.query(CLIENTES);
      const options = [];
      result.forEach((cliente) => {
        const option = {
          value: cliente.id,
          label:
            cliente.nombres +
            " " +
            cliente.apellidoPaterno +
            " " +
            cliente.apellidoMaterno,
        };
        options.push(option);
      });
      setClientes(options);
    } catch (error) {
      message.error("No se encontraron clientes");
    }
  };
  useEffect(() => {
    fetchProductos();
    fetchOpticas();
    fetchClientes();
  }, []);
  const fetchOpticas = async () => {
    try {
      const result = await DataStore.query(OPTICA);
      setOpticas(result);
    } catch (error) {
      message.error("No hay opticas creadas");
    }
  };
  const fetchProductos = async () => {
    try {
      const options = [];
      const result = await DataStore.query(INVENTARIO);
      result.map((producto) => {
        const option = {
          value: producto.id,
          label: producto.nombreProducto,
        };
        options.push(option);
        return true;
      });
      setListProductos(result);
      setProductos(options);
    } catch (error) {
      message.error("No se encontraron clientes");
    }
  };

  const addCarrito = () => {
    console.log("addcart");
    if (productoID !== "") {
      const ident = carrito.find((elemento) => {
        if (elemento.id === productoID) {
          return true;
        }
        return false;
      });
      if (ident) {
        const nuevosObjetos = carrito.map((objeto) => {
          if (objeto.id === productoID) {
            const newCantidad = objeto.cantidad + cantidad;
            const newSubtotal = newCantidad * objeto.precio;
            setTotal(total + cantidad * objeto.precio);
            return { ...objeto, cantidad: newCantidad, subTotal: newSubtotal };
          }
          return objeto;
        });
        setCarrito(nuevosObjetos);
      } else {
        const carritoInterno = {
          id: productoID,
          nombre: nombreProducto,
          cantidad,
          precio,
          subTotal: precio * cantidad,
        };
        setCarrito([...carrito, carritoInterno]);
        setTotal(total + carritoInterno.subTotal);
      }
    }
  };

  const changeCarrito = (e) => {
    const result = listProductos.find((elemento) => elemento.id === e);
    setCantidad(1);
    setProductoID(result.id);
    setPrecio(result.precioVenta);
    setNombreProducto(result.nombreProducto);
  };

  const onFinish = async () => {
    const fecha = dayjs().format("YYYY-MM-DD");

    // Obtener la hora actual en el formato deseado: 09:57:05
    const hora = dayjs().format("HH:mm:ss");
    try {
      await DataStore.save(
        new ORDEN({
          tipoOrden,
          clientesID,
          opticaID,
          seRealizoExamen,
          fechaEntrega,
          usadoLentes: usoLentes,
          referencia,
          graduacionDerechaVieja,
          graduacionIzquierdaVieja,
          fechaExamen,
          ordenStatus: "CREADA",
          fechaOrden: fecha,
          horaOrden: hora,
        })
      );
      message.success("La orden se ha registrado correctamente");
    } catch (error) {
      console.log(error);
    }
  };
  const onOrden = async () => {
    if (carrito.length > 0) {
      if (clientesID !== "") {
        const fecha = dayjs().format("YYYY-MM-DD");

        // Obtener la hora actual en el formato deseado: 09:57:05
        const hora = dayjs().format("HH:mm:ss");
        const result = await DataStore.save(
          new ORDEN({
            tipoOrden,
            clientesID,
            opticaID,
            seRealizoExamen,
            fechaEntrega,
            usadoLentes: usoLentes,
            referencia,
            graduacionDerechaVieja,
            graduacionIzquierdaVieja,
            fechaExamen,
            ordenStatus: "CREADA",
            fechaOrden: fecha,
            horaOrden: hora,
            precioTotal: total.toString(),
          })
        );
        console.log(result);
        carrito.map(async (cart) => {
          await DataStore.save(
            new INVENTARIOORDENITEMS({
              cantidad: cart.cantidad,
              ordenID: result.id,
              inventarioID: cart.id,
              costo: cart.subTotal,
            })
          );
        });
        setCarrito([]);
        cambiarComponent({ key: "21" });
        message.success("La orden se ha registrado correctamente");
      }
    }
    try {
    } catch (error) {
      console.log(error);
    }
  };

  const deleteRowCart = (record) => {
    const nuevosObjetos = carrito.filter((objeto) => objeto.id !== record.id);
    setCarrito(nuevosObjetos);
  };

  // Table source
  const columns = [
    {
      title: "Acciones",
      dataIndex: "acciones",
      key: "acciones",
      render: (_, record) => {
        return (
          <>
            <Button onClick={() => deleteRowCart(record)} type="primary" danger>
              -
            </Button>
          </>
        );
      },
    },
    {
      title: "Producto",
      dataIndex: "nombre",
      key: "nombre",
    },
    {
      title: "Cantidad",
      dataIndex: "cantidad",
      key: "cantidad",
    },
    {
      title: "Precio Unitario",
      dataIndex: "precio",
      key: "precio",
      render: (_, record) => {
        return <p>$/{record.precio}.00</p>;
      },
    },
    {
      title: "SubTotal",
      dataIndex: "subTotal",
      key: "subTotal",
      render: (_, record) => {
        return <p>$/{record.subTotal}.00</p>;
      },
    },
  ];
  return (
    <div
      style={{
        maxWidth: "800px",
        margin: "auto",
        padding: "20px 30px",
        boxShadow: "0px 10px 10px 0px #ececec",
        background: "#fff",
      }}
    >
      <h1>Crear Orden</h1>

      <Form.Item label="Tipo de orden">
        <Select
          onSelect={(e) => {
            setTipoOrden(e);
          }}
          placeholder="Seleccione que tipo de orden desea registrar"
        >
          <Option value="COTIZACION">COTIZACION</Option>
          <Option value="ORDEN">ORDEN</Option>
        </Select>
      </Form.Item>
      {tipoOrden === "COTIZACION" ? (
        <Form layout="vertical">
          <>
            <Form.Item>
              <h1>Cliente</h1>
              <p>Buscar Cliente</p>
              <Select
                showSearch
                style={{ width: "100%" }}
                onChange={(e) => setclientesID(e)}
                placeholder="Search to Select"
                optionFilterProp="children"
                filterOption={(input, option) =>
                  (option?.label ?? "")
                    .toLowerCase()
                    .includes(input.toLowerCase())
                }
                options={clientes}
              />
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
            <h1>Graducacion de lentes</h1>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(2, 1fr)",
                gap: "20px",
              }}
            >
              <Form.Item label="Usa Lentes">
                <Select
                  onSelect={(e) => setUsoLentes(e)}
                  placeholder="Selecciona SI/NO"
                >
                  <Option value="SI">SI</Option>
                  <Option value="NO">NO</Option>
                </Select>
              </Form.Item>
              <Form.Item label="Se Realizo un examen?">
                <Select
                  onSelect={(e) => setSeRealizoExamen(e)}
                  placeholder="Selecciona SI/NO"
                >
                  <Option value="SI">SI</Option>
                  <Option value="NO">NO</Option>
                </Select>
              </Form.Item>
              <Form.Item label="Fecha de examen">
                <DatePicker
                  style={{ width: "100%" }}
                  format="YYYY-MM-DD"
                  onChange={(date, dateString) => setFechaExamen(dateString)}
                />
              </Form.Item>
              <Form.Item label="Referencia">
                <Input
                  onChange={(e) => setReferencia(e.target.value)}
                  value={referencia}
                  placeholder="Reeferencia"
                />
              </Form.Item>
              <Form.Item label="Tiene graducacion de lentes?">
                <Select
                  onSelect={(e) => setGradCheck(e)}
                  placeholder="Selecciona SI/NO"
                >
                  <Option value="SI">SI</Option>
                  <Option value="NO">NO</Option>
                </Select>
                {gradCheck === "SI" ? (
                  <Space direction="horizontal">
                    <Form.Item label="Graducacion Derecha">
                      <Input
                        value={graduacionDerechaVieja}
                        onChange={(e) =>
                          setGraduacionDerechaVieja(e.target.value)
                        }
                      />
                    </Form.Item>
                    <Form.Item label="Graducacion Izquierda">
                      <Input
                        value={graduacionIzquierdaVieja}
                        onChange={(e) =>
                          setGraduacionIzquierdaVieja(e.target.value)
                        }
                      />
                    </Form.Item>
                  </Space>
                ) : null}
              </Form.Item>
              <Form.Item label="Fecha de entrega">
                <DatePicker
                  style={{ width: "100%" }}
                  format="YYYY-MM-DD"
                  onChange={(date, dateString) => setFechaEntrega(dateString)}
                />
              </Form.Item>
            </div>

            <div style={{ marginTop: 10 }}>
              <Button title="Generar Orden" onClick={onFinish} type="primary">
                Crear Cotizacion
              </Button>
            </div>
          </>
        </Form>
      ) : tipoOrden === "ORDEN" ? (
        <>
          <Form.Item>
            <h1>Cliente</h1>
            <p>Buscar Cliente</p>
            <Select
              showSearch
              style={{ width: "100%" }}
              onChange={(e) => setclientesID(e)}
              placeholder="Search to Select"
              optionFilterProp="children"
              filterOption={(input, option) =>
                (option?.label ?? "")
                  .toLowerCase()
                  .includes(input.toLowerCase())
              }
              options={clientes}
            />
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
          <p>Add carrito productos</p>
          <Form
            onFinish={onFinish}
            layout="vertical"
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(4, 1fr)",
              gap: "15px",
              marginBottom: "30px",
            }}
          >
            <Form.Item label="Producto">
              <Select
                showSearch
                style={{ width: "100%" }}
                onChange={(e) => changeCarrito(e)}
                placeholder="Search to Select"
                optionFilterProp="children"
                filterOption={(input, option) =>
                  (option?.label ?? "")
                    .toLowerCase()
                    .includes(input.toLowerCase())
                }
                options={productos}
              />
            </Form.Item>
            <Form.Item label="Cantidad">
              <InputNumber
                value={cantidad}
                onChange={(e) => setCantidad(e)}
                style={{ width: "100%" }}
              />
            </Form.Item>
            <Form.Item label="Precio">
              <Input value={precio} disabled />
            </Form.Item>
            <Form.Item label="Add">
              <Button onClick={addCarrito} title="Save" type="primary">
                + Agregar
              </Button>
              <Button
                onClick={() => {
                  setCarrito([]);
                  setTotal(0);
                }}
                title="Reset"
                type="primary"
                danger
              >
                - Resetear
              </Button>
            </Form.Item>
          </Form>
          <Table
            scroll={{ x: 400 }}
            rowKey={(record) => record.id}
            columns={columns}
            dataSource={carrito}
          />
          <div>
            <h1>Total a pagar: ${total}.00</h1>
          </div>
          <div style={{ marginTop: 10 }}>
            <Button
              onClick={onOrden}
              title="Save"
              htmlType="submit"
              type="primary"
            >
              Crear Orden
            </Button>
          </div>
        </>
      ) : null}
    </div>
  );
}

export default CrearOrden;
