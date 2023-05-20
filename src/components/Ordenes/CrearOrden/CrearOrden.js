import "./Cart.css";
import { Button, DatePicker, Form, Input, Select, Table, message } from "antd";
import { DeleteOutlined } from "@ant-design/icons";
import { MenuContext } from "../../../contexts/MenuContext";
import dayjs from "dayjs";
import { React, useState, useEffect, useContext } from "react";
import { API, DataStore, graphqlOperation } from "aws-amplify";
import { CLIENTES, INVENTARIO, OPTICA } from "../../../models";
import {
  createINVENTARIOORDENITEMS,
  createORDEN,
} from "../../../graphql/mutations";
const { Option } = Select;

function CrearOrden() {
  const { cambiarComponent } = useContext(MenuContext);
  const [clientes, setClientes] = useState([]);
  const [clientesID, setclientesID] = useState(null);
  // const [usoLentes, setUsoLentes] = useState("");
  // graducacion state
  const [gradCheck, setGradCheck] = useState("");
  const [graduacion, setGraduacion] = useState("");
  const [opticaID, setOpticaID] = useState("");
  const [opticas, setOpticas] = useState([]);
  const [graduacionDerechaVieja, setGraduacionDerechaVieja] = useState("");
  const [graduacionIzquierdaVieja, setGraduacionIzquierdaVieja] = useState("");
  const [graduacionDerechaNueva, setGraduacionDerechaNueva] = useState("");
  const [graduacionIzquierdaNueva, setGraduacionIzquierdaNueva] = useState("");
  const [referencia, setReferencia] = useState("");
  // const [seRealizoExamen, setSeRealizoExamen] = useState("");
  const [fechaExamen, setFechaExamen] = useState("");
  const [fechaEntrega, setFechaEntrega] = useState("");

  // ordenes state carts
  const [carrito, setCarrito] = useState([]);
  const [productos, setProductos] = useState([]);
  const [listaProductos, setListaProductos] = useState([]);
  var cantidad = 1;
  const [productoID, setProductoID] = useState(null);
  const [total, setTotal] = useState(0);
  const [precioGraduacion, setPrecioGraduacion] = useState(0);

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
      setProductos(options);
      setListaProductos(result);
    } catch (error) {
      message.error("No se encontraron clientes");
    }
  };

  const addCarrito = (productoID) => {
    const result = listaProductos.find(
      (elemento) => elemento.id === productoID
    );
    console.log(result);
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
          nombre: result.nombreProducto,
          cantidad: cantidad,
          precio: result.precioVenta,
          subTotal: Number(result.precioVenta) * Number(cantidad),
        };
        setCarrito([...carrito, carritoInterno]);
        setTotal(total + carritoInterno.subTotal);
      }
      setProductoID(null);
    }
  };

  const onOrden = async () => {
    if (carrito.length > 0) {
      if (clientesID !== "" && opticaID !== "") {
        const fecha = dayjs().format("YYYY-MM-DD");

        // Obtener la hora actual en el formato deseado: 09:57:05
        const hora = dayjs().format("HH:mm:ss");
        const newOrden = {
          tipoOrden: "COTIZACION",
          clientesID,
          opticaID,
          seRealizoExamen: "SI",
          fechaEntrega,
          usadoLentes: "-",
          referencia,
          graduacionDerechaVieja,
          graduacionIzquierdaVieja,
          graduacionDerechaNueva,
          graduacionIzquierdaNueva,
          fechaExamen,
          ordenStatus: "CREADA",
          fechaOrden: fecha,
          horaOrden: hora,
          precioGraduacion: precioGraduacion.toString(),
          precioTotal: (total + Number(precioGraduacion)).toString(),
        };
        const result = await API.graphql(
          graphqlOperation(createORDEN, { input: newOrden })
        );
        const orden = result.data.createORDEN;
        await Promise.all(
          carrito.map(async (cart) => {
            let newOrdenItem = {
              cantidad: cart.cantidad,
              ordenID: orden.id,
              inventarioID: cart.id,
              costo: cart.subTotal,
            };
            await API.graphql(
              graphqlOperation(createINVENTARIOORDENITEMS, {
                input: newOrdenItem,
              })
            );
          })
        );
        setCarrito([]);
        cambiarComponent({ key: "21" });
        message.success("La orden se ha registrado correctamente");
      } else {
        message.warning("Te faltan llenar campos");
      }
    } else {
      message.info("Te faltan agregar productos");
    }
    try {
    } catch (error) {
      console.log(error);
    }
  };

  const desCarrito = (record) => {
    const nuevosObjetos = carrito.map((objeto) => {
      if (objeto.id === record.id) {
        if (objeto.cantidad > 1) {
          const newCantidad = objeto.cantidad - cantidad;
          const newSubtotal = newCantidad * objeto.precio;
          setTotal(total - cantidad * objeto.precio);
          return { ...objeto, cantidad: newCantidad, subTotal: newSubtotal };
        }
      }
      return objeto;
    });
    setCarrito(nuevosObjetos);
  };
  const aumentCarrito = (record) => {
    const nuevosObjetos = carrito.map((objeto) => {
      if (objeto.id === record.id) {
        const newCantidad = objeto.cantidad + cantidad;
        const newSubtotal = newCantidad * objeto.precio;
        setTotal(total + cantidad * objeto.precio);
        return { ...objeto, cantidad: newCantidad, subTotal: newSubtotal };
      }
      return objeto;
    });
    setCarrito(nuevosObjetos);
  };

  const deleteRowCart = (record) => {
    const nuevosObjetos = carrito.filter((objeto) => objeto.id !== record.id);
    const precio = carrito.find((objeto) => objeto.id === record.id);
    setCarrito(nuevosObjetos);
    setTotal(total - Number(precio.subTotal));
  };

  // Table source
  const columns = [
    {
      title: "Producto",
      dataIndex: "nombre",
      key: "nombre",
    },
    {
      title: "Cantidad",
      dataIndex: "cantidad",
      key: "cantidad",
      render: (_, record) => {
        return (
          <div style={{ display: "flex", gap: "10px", alignItems: "center" }}>
            <Button
              onClick={() => desCarrito(record)}
              type="primary"
              style={{
                borderRadius: "50%",
                width: "25px",
                height: "25px",
                display: "inline-block",
                padding: "0px",
                background: "#ec1c10a8",
              }}
            >
              -
            </Button>
            <p>{record.cantidad}</p>
            <Button
              onClick={() => aumentCarrito(record)}
              type="primary"
              style={{
                borderRadius: "50%",
                width: "25px",
                height: "25px",
                display: "inline-block",
                padding: "0px",
                background: "#06980d",
              }}
            >
              +
            </Button>
          </div>
        );
      },
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
    {
      title: "Acciones",
      dataIndex: "acciones",
      key: "acciones",
      render: (_, record) => {
        return (
          <>
            <Button onClick={() => deleteRowCart(record)} type="primary" danger>
              <DeleteOutlined />
            </Button>
          </>
        );
      },
    },
  ];
  return (
    <div
      style={{
        padding: "20px 30px",
        background: "#fff",
      }}
    >
      <h1>Registrar Orden</h1>

      <Form.Item style={{ marginTop: "20px" }} label="Graduacion?">
        <Select
          onSelect={(e) => {
            setGraduacion(e);
          }}
          placeholder="Seleccione que tipo de orden desea registrar"
        >
          <Option value="SI">SI</Option>
          <Option value="NO">NO</Option>
        </Select>
      </Form.Item>
      {graduacion === "SI" ? (
        <Form layout="vertical">
          <>
            <h1>Graduacion de lentes</h1>
            <Form.Item label="Tiene graducacion de lentes?">
              <Select
                onSelect={(e) => setGradCheck(e)}
                allowClear
                onClear={() => setGradCheck("")}
                placeholder="Selecciona SI/NO"
              >
                <Option value="SI">SI</Option>
                <Option value="NO">NO</Option>
              </Select>
            </Form.Item>
            {gradCheck === "SI" ? (
              <div
                direction="horizontal"
                style={{ width: "100%", display: "flex", gap: "8px" }}
              >
                <Form.Item
                  label="Graducacion Derecha Vieja"
                  style={{ width: "100%" }}
                >
                  <Input
                    value={graduacionDerechaVieja}
                    onChange={(e) => setGraduacionDerechaVieja(e.target.value)}
                  />
                </Form.Item>
                <Form.Item
                  label="Graducacion Izquierda Vieja"
                  style={{ width: "100%" }}
                >
                  <Input
                    value={graduacionIzquierdaVieja}
                    onChange={(e) =>
                      setGraduacionIzquierdaVieja(e.target.value)
                    }
                  />
                </Form.Item>
              </div>
            ) : null}
            <div
              direction="horizontal"
              style={{ width: "100%", display: "flex", gap: "8px" }}
            >
              <Form.Item
                label="Graducacion Derecha Nueva"
                style={{ width: "100%" }}
              >
                <Input
                  value={graduacionDerechaNueva}
                  onChange={(e) => setGraduacionDerechaNueva(e.target.value)}
                />
              </Form.Item>
              <Form.Item
                label="Graducacion Izquierda Nueva"
                style={{ width: "100%" }}
              >
                <Input
                  value={graduacionIzquierdaNueva}
                  onChange={(e) => setGraduacionIzquierdaNueva(e.target.value)}
                />
              </Form.Item>
            </div>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(2, 1fr)",
                gap: "20px",
              }}
            >
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

              <Form.Item label="Fecha de entrega">
                <DatePicker
                  style={{ width: "100%" }}
                  format="YYYY-MM-DD"
                  onChange={(date, dateString) => setFechaEntrega(dateString)}
                />
              </Form.Item>
              <Form.Item label="Precio de Orden">
                <Input
                  value={precioGraduacion}
                  onChange={(e) => setPrecioGraduacion(e.target.value)}
                  placeholder="Ingrese el costo $.00 de la orden"
                />
              </Form.Item>
            </div>
          </>
        </Form>
      ) : null}
      <div style={{ display: "flex", gap: "20px" }}>
        <div className="container-productos" style={{ width: "100%" }}>
          <Select
            showSearch
            value={productoID}
            style={{ width: "100%", marginBottom: "20px" }}
            onChange={(e) => addCarrito(e)}
            placeholder="Agregar Producto"
            optionFilterProp="children"
            filterOption={(input, option) =>
              (option?.label ?? "").toLowerCase().includes(input.toLowerCase())
            }
            options={productos}
          />
          <Table
            pagination={false}
            scroll={{ x: 400 }}
            rowKey={(record) => record.id}
            columns={columns}
            dataSource={carrito}
          />
          <div
            style={{
              marginTop: "30px",
              width: "100%",
              maxWidth: "300px",
              padding: "15px",
              border: "1px solid #ececec",
              borderRadius: "10px",
            }}
          >
            <h3>Resumen de Pago</h3>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <p>SubTotal</p>
              <h4>
                $
                {(
                  Math.round(
                    ((total + Number(precioGraduacion)) / 1.16) * 100
                  ) / 100
                ).toFixed(2)}
              </h4>
            </div>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <p>IVA(16%)</p>
              <h4>
                $
                {(
                  Math.round(
                    (total +
                      precioGraduacion -
                      (total + Number(precioGraduacion)) / 1.16) *
                      100
                  ) / 100
                ).toFixed(2)}
              </h4>
            </div>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <p>Total</p>
              <h4>
                $
                {(
                  Math.round((total + Number(precioGraduacion)) * 100) / 100
                ).toFixed(2)}
              </h4>
            </div>
          </div>
        </div>
        <div
          className="container-info"
          style={{
            maxWidth: "250px",
            border: "1px solid #ececec",
            borderRadius: "10px",
            padding: "15px",
          }}
        >
          <Form.Item>
            <p>
              <b>Informacion Basica</b>
            </p>
            <Select
              showSearch
              style={{ width: "100%" }}
              onChange={(e) => setclientesID(e)}
              placeholder="Buscar Clientes"
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
        </div>
      </div>
    </div>
  );
}

export default CrearOrden;
