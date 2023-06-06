import React, { useContext, useEffect, useState } from "react";
import { Button, Card, Col, Row, Tag, Form, Input, message } from "antd";
import { FiDollarSign, FiShoppingBag, FiInbox, FiLock } from "react-icons/fi";
import { CajaContext } from "../../../contexts/CajaContext";
import { API, graphqlOperation } from "aws-amplify";

import { createCaja } from "../../../graphql/mutations";
import dayjs from "dayjs";
import { oRDENSByCajaID } from "../../../graphql/queries";

const CrearCaja = () => {
  const [montoInicial, setMontoInicial] = useState(0);
  const [ventas, setVentas] = useState(0);

  const [verificandoCaja, setVerificandoCaja] = useState(true);
  const { cajaAbierta, nowCaja, verificarCajaAbierta } =
    useContext(CajaContext);

  const revisarVentas = async () => {
    if (cajaAbierta) {
      try {
        const result = await API.graphql(
          graphqlOperation(oRDENSByCajaID, { cajaID: nowCaja.id })
        );
        const ordenes = result.data.oRDENSByCajaID.items;
        let monto = 0;
        if (ordenes.length > 0) {
          for (const orden of ordenes) {
            if (orden.tipoOrden === "ORDEN") {
              monto = monto + Number(orden.precioTotal);
              setVentas(monto);
            }
          }
        }
      } catch (error) {
        console.log(error);
      }
    }
  };
  useEffect(() => {
    revisarVentas();
    // eslint-disable-next-line
  }, [cajaAbierta, ventas]);
  const abrirCaja = async () => {
    let fechaApertura = dayjs().format("YYYY-MM-DD");
    try {
      let newCaja = {
        montoInicial,
        fechaApertura,
        estado: "Abierta",
      };
      await API.graphql(graphqlOperation(createCaja, { input: newCaja }));
      message.success("Se aperturo la caja");
      verificarCajaAbierta();
    } catch (error) {
      message.error("Hubo un error contacta al administrador");
    }
  };
  useEffect(() => {
    const verificarCaja = async () => {
      // Realizar la verificación del estado de la caja aquí
      // Reemplaza el siguiente código con tu lógica de verificación real
      await verificarCajaAbierta(); // Supongamos que esto es una función asincrónica

      setVerificandoCaja(false); // Finaliza la verificación
    };

    verificarCaja();
  }, [verificarCajaAbierta]);
  return (
    <div>
      {verificandoCaja ? (
        <p>Verificando cajas abiertas...</p>
      ) : cajaAbierta === false ? (
        <div
          style={{
            maxWidth: "300px",
            padding: "20px",
            boxShadow: "0px 0px 10px 2px #ececec",
          }}
        >
          <h1>Apertura de Caja</h1>
          <Form.Item label="Monto Inicial">
            <Input
              value={montoInicial}
              onChange={(e) => setMontoInicial(e.target.value)}
              placeholder="Ingresa el monto inicial"
            />
          </Form.Item>
          <div>
            <Button onClick={abrirCaja}>Aperturar Caja</Button>
          </div>
        </div>
      ) : (
        <>
          <Col span={32} style={{ margin: "20px 0px" }}>
            <Card bordered={true}>
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <div style={{ display: "flex", gap: "10px" }}>
                  <FiInbox style={{ fontSize: "30px", color: "#1677ff" }} />
                  <div>
                    <p>Caja : {nowCaja.id}</p>
                    <Tag color="green">Aperturado</Tag>
                    <p>
                      Responsable: <b> Gerente</b>
                    </p>
                    <p>
                      Apertura: <b> {nowCaja.fechaApertura}</b>
                    </p>
                  </div>
                </div>
                <div>
                  <Button
                    style={{
                      background: "#ff6016",
                      color: "#fff",
                      display: "flex",
                      alignItems: "center",
                      gap: "5px",
                    }}
                  >
                    <FiLock /> Hacer corte de caja
                  </Button>
                </div>
              </div>
            </Card>
          </Col>
          <Row gutter={16}>
            <Col span={8}>
              <Card bordered={false}>
                <p>Saldo inicial</p>
                <div
                  style={{ display: "flex", justifyContent: "space-between" }}
                >
                  <div>
                    <h1>
                      $
                      {(
                        Math.round(Number(nowCaja.montoInicial) * 100) / 100
                      ).toFixed(2)}
                    </h1>
                  </div>
                  <div>
                    <FiDollarSign
                      style={{ fontSize: "30", color: "#1677ff" }}
                    />
                  </div>
                </div>
              </Card>
            </Col>
            <Col span={8}>
              <Card bordered={false}>
                <p>Mis Ventas</p>
                <div
                  style={{ display: "flex", justifyContent: "space-between" }}
                >
                  <div>
                    <h1>
                      ${(Math.round(Number(ventas) * 100) / 100).toFixed(2)}
                    </h1>
                    <p>Resultado de ventas de ordenes aceptadas</p>
                  </div>
                  <div>
                    <FiShoppingBag
                      style={{ fontSize: "30", color: "#1677ff" }}
                    />
                  </div>
                </div>
              </Card>
            </Col>
            <Col span={8}>
              <Card bordered={false}>
                <p>Total a rendir</p>
                <div
                  style={{ display: "flex", justifyContent: "space-between" }}
                >
                  <div>
                    <h1>
                      $
                      {(
                        Math.round(
                          (Number(ventas) + Number(nowCaja.montoInicial)) * 100
                        ) / 100
                      ).toFixed(2)}
                    </h1>
                  </div>
                  <div>
                    <FiDollarSign
                      style={{ fontSize: "30", color: "#1677ff" }}
                    />
                  </div>
                </div>
              </Card>
            </Col>
          </Row>
        </>
      )}
    </div>
  );
};

export default CrearCaja;
