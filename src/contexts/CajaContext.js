// CajaContext.js
import { API, graphqlOperation } from "aws-amplify";
import React, { createContext, useEffect, useState } from "react";
import { listCajas } from "../graphql/queries";
import { message } from "antd";

const CajaContext = createContext();
const CajaProvider = ({ children }) => {
  const [cajaAbierta, setCajaAbierta] = useState(false);
  const [nowCaja, setNowCaja] = useState({});
  const verificarCajaAbierta = async () => {
    try {
      const response = await API.graphql(
        graphqlOperation(listCajas, {
          filter: {
            estado: { eq: "Abierta" },
          },
          limit: 1, // Limitamos la consulta a 1 resultado
        })
      );

      const cajasAbiertas = response.data.listCajas.items;

      if (cajasAbiertas.length > 0) {
        // Si hay al menos una caja abierta, actualiza el estado
        setCajaAbierta(true);
        let newCaja = {
          id: cajasAbiertas[0].id,
          montoInicial: cajasAbiertas[0].montoInicial,
          montoFinal: cajasAbiertas[0].montoFinal,
          fechaApertura: cajasAbiertas[0].fechaApertura,
        };
        setNowCaja(newCaja);
      } else {
        // Si no hay cajas abiertas, redirige al usuario para que cree una nueva caja
        //   cambiarComponent({ key: "21" });
        message.warning("No haz abierto ninguna caja");
      }
    } catch (error) {
      // Manejo de errores
      console.error(error);
    }
  };
  useEffect(() => {
    verificarCajaAbierta();
    // eslint-disable-next-line
  }, []);
  return (
    <CajaContext.Provider
      value={{ cajaAbierta, setCajaAbierta, nowCaja, verificarCajaAbierta }}
    >
      {children}
    </CajaContext.Provider>
  );
};
export { CajaContext, CajaProvider };
