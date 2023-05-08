import React from "react";
import { Layout } from "antd";
import CrearLente from "../../components/Lente/CrearLente/CrearLente";
import ListaLentes from "../../components/Lente/ListaLentes/ListaLentes";
import CrearOptica from "../../components/Optica/CrearOptica/CrearOptica";
import ListaOptica from "../../components/Optica/ListaOpticas/ListaOptica";

const { Content } = Layout;

function ContentLayoutSuperAdmin({ current }) {
  return (
    <Content style={{ padding: "30px" }}>
      {current === "10" ? (
        <div className="site-layout-background" style={{ minHeight: 100 }}>
          <CrearLente />
        </div>
      ) : current === "11" ? (
        <div className="site-layout-background" style={{ minHeight: 100 }}>
          <ListaLentes />
        </div>
      ) : current === "12" ? (
        <div className="site-layout-background" style={{ minHeight: 100 }}>
          <CrearOptica />
        </div>
      ) : current === "13" ? (
        <div className="site-layout-background" style={{ minHeight: 100 }}>
          <ListaOptica />
        </div>
      ) : (
        <div style={{}}>Aun no se ha creado las demas rutas</div>
      )}
    </Content>
  );
}

export default ContentLayoutSuperAdmin;
