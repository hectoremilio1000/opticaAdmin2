import React, { useEffect, useState } from "react";
import { Layout, Table, Tag } from "antd";

// amplify API
import { API, graphqlOperation } from "aws-amplify";
import * as queries from "../../../graphql/queries";

const { Content } = Layout;

function ListaLentes() {
  const [lentes, setLentes] = useState([]);
  const searchGrupos = () => {
    const grupos = [...new Set(lentes.map((lente) => lente.grupo))];
    const items = [];
    for (let index = 0; index < grupos.length; index++) {
      const grup = { text: grupos[index], value: grupos[index] };
      items.push(grup);
    }
    console.log(items);
    return items;
  };

  const columns = [
    {
      title: "Grupo",
      key: "grupo",
      dataIndex: "grupo",
      render: (grupo) => {
        let color = "";
        if (grupo === "DAMA") {
          color = "geekblue";
        }
        if (grupo === "CABALLERO") {
          color = "green";
        }
        if (grupo === "BOY") {
          color = "volcano";
        }
        return <Tag color={color}>{grupo}</Tag>;
      },
      filters: searchGrupos(),
      // filters: [
      //   {
      //     text: "CABALLERO",
      //     value: "CABALLERO",
      //   },
      //   {
      //     text: "DAMA",
      //     value: "DAMA",
      //   },
      //   {
      //     text: "BOY",
      //     value: "BOY",
      //   },
      // ],
      filterMode: "tree",
      filterSearch: true,
      onFilter: (value, record) => record.grupo.startsWith(value),

      // filters: () => {
      //   const category_lente = [...new Set(lentes.map((lente) => lente.grupo))];
      //   return category_lente;
      // },
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
  ];

  const fetchLentes = async () => {
    const lentes = await API.graphql(graphqlOperation(queries.listLENTES));
    const items = lentes?.data?.listLENTES?.items;
    console.log(items);
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
        <Table
          scroll={{ x: 400 }}
          rowKey={(record) => record.id}
          dataSource={lentes}
          columns={columns}
        />
      </div>
    </Content>
  );
}

export default ListaLentes;
