import { DataStore } from "aws-amplify";
import React, { useEffect } from "react";
import { Table, Modal, Tag, Popconfirm, Button, message } from "antd";
import { useState } from "react";
import {
  CLIENTES,
  INVENTARIO,
  INVENTARIOORDENITEMS,
  OPTICA,
  ORDEN,
} from "../../../models";
import TicketPDF from "./TicketPdf";
import Cotizacion from "./Cotizacion";
import { PDFDownloadLink, PDFViewer } from "@react-pdf/renderer";

import logo from "../../../assets/logohilmora.png";

import {
  DeleteOutlined,
  EyeOutlined,
  CloudDownloadOutlined,
} from "@ant-design/icons";
function ListaOrdenes() {
  const [ordenes, setOrdenes] = useState();
  const [isEditing, setIsEditing] = useState(false);
  // datos de la orden seleeccionada
  // const [first, setfirst] = useState(second);
  const [products, setProducts] = useState([]);
  const [cliente, setCliente] = useState("");
  const [total, setTotal] = useState("");
  const [tipoOrden, setTipoOrden] = useState("");
  const [ordenNow, setOrdenNow] = useState(null);
  const [ordenID, setOrdenID] = useState("");

  const fetchOrdenes = async () => {
    try {
      const ordenes = await DataStore.query(ORDEN);
      const ordenesConNombres = [];
      for (const orden of ordenes) {
        // Obtén el cliente correspondiente a través del ID
        const cliente = await DataStore.query(CLIENTES, orden.clientesID);
        const optica = await DataStore.query(OPTICA, orden.opticaID);
        const ordenConNombre = {
          ...orden,
          nombreCliente:
            cliente.nombres +
            " " +
            cliente.apellidoPaterno +
            " " +
            cliente.apellidoMaterno,
          nombreOptica: optica.nombre,
        };

        // Agrega el objeto nuevo al array de órdenes con nombres de cliente
        ordenesConNombres.push(ordenConNombre);
      }
      setOrdenes(ordenesConNombres);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchOrdenes();
  }, []);

  const edithandle = async (record) => {
    setOrdenID(record.id);
    setTipoOrden(record.tipoOrden);
    if (record.tipoOrden === "COTIZACION") {
      const ordenesConNombres = [];
      const ordenConNombre = {
        ...record,
      };
      ordenesConNombres.push(ordenConNombre);
      setOrdenNow(ordenesConNombres);
    } else {
      setTotal(record.precioTotal);
      setCliente(record.nombreCliente);
      try {
        const ordenes = await DataStore.query(INVENTARIOORDENITEMS, (d) =>
          d.ordenID.eq(record.id)
        );
        const ordenesConNombres = [];
        for (const orden of ordenes) {
          // Obtén el cliente correspondiente a través del ID
          const inventario = await DataStore.query(
            INVENTARIO,
            orden.inventarioID
          );
          const ordenConNombre = {
            ...orden,
            nombreProducto: inventario.nombreProducto,
            precio: inventario.precioVenta,
          };
          // Agrega el objeto nuevo al array de órdenes con nombres de cliente
          ordenesConNombres.push(ordenConNombre);
        }
        setProducts(ordenesConNombres);
      } catch (error) {
        console.log(error);
      }
    }
    setIsEditing(true);
  };

  const changeDelete = (record) => {
    setOrdenID(record?.id);
  };
  const deletehandle = async (record) => {
    try {
      if (record.tipoOrden === "COTIZACION") {
        await DataStore.delete(ORDEN, ordenID);
      } else {
        await DataStore.delete(INVENTARIOORDENITEMS, (d) =>
          d.ordenID.eq(record.id)
        );
        await DataStore.delete(ORDEN, ordenID);
      }
      fetchOrdenes();
      message.success("La orden se ha eliminado correctamente");
    } catch (error) {
      console.log(error);
      message.error("Hubo un error contacta al administrador");
    }
  };
  const columns = [
    {
      title: "Tipo Orden",
      key: "tipoOrden",
      dataIndex: "tipoOrden",
      render: (text, record) => {
        let color = "";
        if (text === "COTIZACION") {
          color = "geekblue";
        }
        if (text === "ORDEN") {
          color = "green";
        }
        return <Tag color={color}>{text}</Tag>;
      },
      // filters: searchcategorias(),
      // filterMode: "tree",
      // filterSearch: true,
      // onFilter: (value, record) => record.categoria.startsWith(value),
    },
    {
      title: "Fecha Orden",
      dataIndex: "fechaOrden",
      key: "fechaOrden",
    },
    {
      title: "Hora Orden",
      dataIndex: "horaOrden",
      key: "horaOrden",
    },
    {
      title: "Cliente",
      dataIndex: "nombreCliente",
      key: "nombreCliente",
    },
    {
      title: "Optica",
      dataIndex: "nombreOptica",
      key: "nombreOptica",
    },
    {
      title: "Actions",
      dataIndex: "actions",
      key: "actions",
      render: (_, record) => {
        return (
          <>
            <EyeOutlined
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
  return (
    <div>
      <h1>Lista Ordenes</h1>
      <Table
        scroll={{ x: 400 }}
        rowKey={(record) => record.id}
        dataSource={ordenes}
        columns={columns}
        rowClassName="editable-row"
      />

      <Modal
        onCancel={() => setIsEditing(false)}
        title="Ver Report"
        open={isEditing}
        // onOk={() => onFinish()}
      >
        {tipoOrden === "COTIZACION" ? (
          <>
            <PDFViewer style={{ width: "100%", height: "50vh" }}>
              <Cotizacion
                logoSrc={logo}
                title="Orden de Graduacion"
                orden={ordenNow}
              />
            </PDFViewer>
            <PDFDownloadLink
              fileName={ordenID + "-" + ordenNow[0].nombreCliente}
              document={
                <Cotizacion
                  logoSrc={logo}
                  title="Orden de Graduacion"
                  orden={ordenNow}
                />
              }
            >
              <Button>
                <CloudDownloadOutlined /> Descargar
              </Button>
            </PDFDownloadLink>
          </>
        ) : (
          <>
            <PDFViewer style={{ width: "100%", height: "50vh" }}>
              <TicketPDF
                tipoOrden={tipoOrden}
                logoSrc={logo}
                title="Ticket de Compra"
                customer={cliente}
                products={products}
                total={total}
              />
            </PDFViewer>

            <PDFDownloadLink
              fileName={ordenID + "-" + cliente}
              document={
                <TicketPDF
                  tipoOrden={tipoOrden}
                  logoSrc={logo}
                  title="Ticket de Compra"
                  customer={cliente}
                  products={products}
                  total={total}
                />
              }
            >
              <Button>
                <CloudDownloadOutlined /> Descargar
              </Button>
            </PDFDownloadLink>
          </>
        )}
      </Modal>
    </div>
  );
}

export default ListaOrdenes;
