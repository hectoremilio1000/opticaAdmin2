import React from "react";
import { Layout } from "antd";
import CrearOptica from "../../components/Optica/CrearOptica/CrearOptica";
import ListaOptica from "../../components/Optica/ListaOpticas/ListaOptica";
import CrearInventario from "../../components/Inventario/CrearInventario/CrearInventario";
import ListaInventario from "../../components/Inventario/LIstaInventario/ListaInventario";
import CrearGerente from "../../components/Gerentes/CrearGerente/CrearGerente";
import ListaGerente from "../../components/Gerentes/ListaGerente/ListaGerente";

const { Content } = Layout;

function ContentLayoutSuperAdmin({ current }) {
  return (
    <Content style={{ padding: "30px" }}>
      {current === "10" ? (
        <div className="site-layout-background" style={{ minHeight: 100 }}>
          <CrearInventario />
        </div>
      ) : current === "11" ? (
        <div className="site-layout-background" style={{ minHeight: 100 }}>
          <ListaInventario />
        </div>
      ) : current === "12" ? (
        <div className="site-layout-background" style={{ minHeight: 100 }}>
          <CrearOptica />
        </div>
      ) : current === "13" ? (
        <div className="site-layout-background" style={{ minHeight: 100 }}>
          <ListaOptica />
        </div>
      ) : current === "14" ? (
        <div className="site-layout-background" style={{ minHeight: 100 }}>
          <CrearGerente />
        </div>
      ) : current === "15" ? (
        <div className="site-layout-background" style={{ minHeight: 100 }}>
          <ListaGerente />
        </div>
      ) : (
        <div style={{}}>Aun no se ha creado las demas rutas</div>
      )}
    </Content>
  );
}

export default ContentLayoutSuperAdmin;
