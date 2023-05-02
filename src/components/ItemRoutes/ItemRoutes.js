import {
  UnorderedListOutlined,
  EyeOutlined,
  AppstoreOutlined,
  UserAddOutlined,
} from "@ant-design/icons";

function getItem(label, key, icon, children, type) {
  return {
    key,
    icon,
    children,
    label,
    type,
  };
}

const ItemsRoutes = [
  getItem("Lentes", "sub6", <AppstoreOutlined />, [
    getItem("Lista Lentes", "10", <EyeOutlined />),
    getItem("Crear Lente", "11", <UnorderedListOutlined />),
  ]),
  getItem("Optica", "sub7", <AppstoreOutlined />, [
    getItem("Lista Optica", "12", <UnorderedListOutlined />),
    getItem("Crear Optica", "13", <UnorderedListOutlined />),
  ]),
  getItem("Gerente", "sub8", <AppstoreOutlined />, [
    getItem("Crear Gerente", "14", <UserAddOutlined />),
    getItem("Lista Gerente", "15", <UserAddOutlined />),
  ]),
  getItem("Vendedor", "sub9", <AppstoreOutlined />, [
    getItem("Crear Vendedor", "16", <UserAddOutlined />),
    getItem("Lista Vendedor", "17", <UserAddOutlined />),
  ]),
  getItem("Clientes", "sub10", <AppstoreOutlined />, [
    getItem("Crear Clientes", "18", <UserAddOutlined />),
    getItem("Lista Clientes", "19", <UserAddOutlined />),
  ]),
];

export default ItemsRoutes;
