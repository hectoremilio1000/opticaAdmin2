import { React, useState } from "react";

import { Layout, Menu, Table } from "antd";
import ItemsRoutes from "../../components/ItemRoutes/ItemRoutes";
import HeaderLayoutSuperAdmin from "./HeaderLayoutSuperAdmin";

const { Content, Footer, Sider } = Layout;

const dataSource = [
  {
    key: "1",
    name: "Mike",
    age: 32,
    address: "10 Downing Street",
  },
  {
    key: "2",
    name: "John",
    age: 42,
    address: "10 Downing Street",
  },
];

const columns = [
  {
    title: "Name",
    dataIndex: "name",
    key: "name",
  },
  {
    title: "Age",
    dataIndex: "age",
    key: "age",
  },
  {
    title: "Address",
    dataIndex: "address",
    key: "address",
  },
];
function LayoutSuperAdmin({ user, signOut }) {
  const [collapsed, setCollapsed] = useState(false);
  //   const [current, setCurrent] = useState("");

  const toggle = () => {
    setCollapsed(!collapsed);
  };
  //   const cambiarComponent = (e) => {
  //     setCurrent(e.key);
  //   };
  return (
    <Layout>
      <Sider
        style={{ height: "100vh" }}
        trigger={null}
        collapsible
        collapsed={collapsed}
      >
        <div
          className="logo"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            marginBottom: "30px",
          }}
        >
          <img
            style={{ width: "80%" }}
            src="https://imagenesrutalab.s3.amazonaws.com/sanmateo/logo+nuevo/SAN-MATEO.png"
            alt=""
          />
        </div>
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={["2"]}
          items={ItemsRoutes}
        />
      </Sider>
      <Layout>
        <HeaderLayoutSuperAdmin
          collapsed={collapsed}
          toggle={toggle}
          signOut={signOut}
        />
        <Content style={{ margin: "24px 16px 0" }}>
          <div
            style={{
              padding: 24,
              minHeight: 360,
            }}
          >
            <Table dataSource={dataSource} columns={columns} />
          </div>
        </Content>
        <Footer style={{ textAlign: "center" }}>
          Ant Design ©2023 Created by Ant UED
        </Footer>
      </Layout>
    </Layout>
  );
}

export default LayoutSuperAdmin;
