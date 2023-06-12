import { Button, Table } from "antd";
import React, { useEffect, useState } from "react";

import { FiInbox } from "react-icons/fi";
import { useGerenteContext } from "../../../contexts/GerenteContext";
import { API, graphqlOperation } from "aws-amplify";
import { cajasByOpticaID, listCajas } from "../../../graphql/queries";

const ListaCaja = () => {
  const [cajas, setCajas] = useState([]);
  //   const [nombre, setNombre] = useState("");

  // optica id
  const { labId } = useGerenteContext();

  const columns = [
    {
      title: "Nombre",
      dataIndex: "nombre",
      key: "nombre",
      render: (_, record) => {
        return (
          <>
            <FiInbox style={{ fontSize: "30px", color: "#1677ff" }} />
            <p>{record?.nombre}</p>
          </>
        );
      },
    },
    {
      title: "Actions",
      dataIndex: "actions",
      key: "actions",
      render: (_, record) => {
        return (
          <>
            <Button>Ver historial</Button>
          </>
        );
      },
    },
  ];

  const fetchCajas = async () => {
    try {
      let cajas;
      if (labId === "") {
        const result = await API.graphql(graphqlOperation(listCajas));
        cajas = result.data.listCajas.items;
      } else {
        const result = await API.graphql(
          graphqlOperation(cajasByOpticaID, { opticaID: labId })
        );
        cajas = result.data.cajasByOpticaID.items;
      }
      setCajas(cajas);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchCajas();
    // eslint-disable-next-line
  }, [labId]);

  return (
    <div>
      <Button type="primary">Crear</Button>
      <div style={{ margin: "20px 0px" }}>
        <h1>Lista Cajas</h1>
      </div>
      <Table
        scroll={{ x: 400 }}
        rowKey={(record) => record.id}
        dataSource={cajas}
        columns={columns}
        rowClassName="editable-row"
      />
    </div>
  );
};

export default ListaCaja;
