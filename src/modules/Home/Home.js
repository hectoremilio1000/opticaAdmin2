import { Button, Card } from "antd";
import React from "react";
import { Navigate } from "react-router-dom";
import GROUPS from "../../constants/groups";
import { getGroupName } from "../../contexts/AuthContext";

function Home({ signOut, user, sub }) {
  switch (
    getGroupName(user?.signInUserSession?.idToken?.payload["cognito:groups"][0])
  ) {
    case GROUPS.SUPER_ADMIN:
      return <Navigate to="/superadmin" />;
    case GROUPS.GERENTE:
      return <Navigate to="/gerente" />;
    case GROUPS.VENDEDOR_MOSTRADOR:
      return <Navigate to="/vendedormostrador" />;
    default:
      return (
        <Card className="mt-2 mb-2">
          <h3>
            Hola {user?.attributes?.username} no tienes acceso o permisos para
            acceder a esta ruta.
          </h3>

          <Button onClick={signOut} variant="warning">
            Cerrar Sesión
          </Button>
        </Card>
      );
  }
}

export default Home;
