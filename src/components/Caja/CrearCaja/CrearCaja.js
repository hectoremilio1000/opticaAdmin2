import React, { useContext, useEffect, useState } from "react";
import {
  Button,
  Card,
  Col,
  Row,
  Tag,
  Form,
  Input,
  message,
  Modal,
  Select,
  Popconfirm,
} from "antd";
import { FiDollarSign, FiShoppingBag, FiInbox, FiLock } from "react-icons/fi";
import { CajaContext } from "../../../contexts/CajaContext";
import { API, graphqlOperation } from "aws-amplify";

import dayjs from "dayjs";
import {
  cajasByOpticaID,
  deudasByTurnoID,
  transaccionesByTurnoID,
} from "../../../graphql/queries";
import { useGerenteContext } from "../../../contexts/GerenteContext";
import { createTurno, updateTurno } from "../../../graphql/mutations";

const { Option } = Select;

const CrearCaja = () => {
  const { labId, gerenteId } = useGerenteContext();
  const [montoInicial, setMontoInicial] = useState(0);
  const [ventas, setVentas] = useState(0);
  const [adeudos, setAdeudos] = useState(0);
  const [cajas, setCajas] = useState([]);
  const [cajaID, setCajaID] = useState(null);

  const [verificandoCaja, setVerificandoCaja] = useState(true);
  const { cajaAbierta, nowTurno, verificarCajaAbierta } =
    useContext(CajaContext);
  const [isModal, setIsModal] = useState(true);

  const revisarVentas = async () => {
    if (cajaAbierta) {
      try {
        const result = await API.graphql(
          graphqlOperation(transaccionesByTurnoID, { turnoID: nowTurno.id })
        );
        const transacciones = result.data.transaccionesByTurnoID.items;
        let monto = 0;
        if (transacciones.length > 0) {
          for (const trans of transacciones) {
            monto = monto + Number(trans.monto);
            setVentas(monto);
          }
        }
      } catch (error) {
        console.log(error);
      }
    }
  };
  const revisarDeudas = async () => {
    if (cajaAbierta) {
      try {
        const result = await API.graphql(
          graphqlOperation(deudasByTurnoID, { turnoID: nowTurno.id })
        );
        const deudas = result.data.deudasByTurnoID.items;
        let adeudo = 0;
        if (deudas.length > 0) {
          for (const deuda of deudas) {
            adeudo = adeudo + Number(deuda.montoDeuda);
            setAdeudos(adeudo);
          }
        }
      } catch (error) {
        console.log(error);
      }
    }
  };
  const corteCaja = async () => {
    let fechaActual = dayjs().format("YYYY-MM-DD");
    try {
      const updateTurnos = {
        id: nowTurno.id,
        _version: nowTurno._version,
        montoCierre: Number(ventas) + nowTurno.montoInicial,
        fechaCierre: fechaActual,
        estado: "Cerrado",
      };
      await API.graphql(graphqlOperation(updateTurno, { input: updateTurnos }));
      verificarCajaAbierta(gerenteId);
      message.success("Se hizo corte de la caja correctamente");
    } catch (error) {
      console.log(error);
      message.error("Hubo un error contacta con administrador");
    }
  };

  useEffect(() => {
    revisarVentas();
    // eslint-disable-next-line
  }, [cajaAbierta, ventas]);
  useEffect(() => {
    revisarDeudas();
    // eslint-disable-next-line
  }, [cajaAbierta, adeudos]);
  const abrirCaja = async () => {
    let fechaApertura = dayjs().format("YYYY-MM-DD HH:mm:ss");
    try {
      let newCaja = {
        montoInicial: Number(montoInicial),
        fechaApertura,
        estado: "Abierto",
        usuario: gerenteId,
        cajaID,
      };
      console.log(newCaja);
      await API.graphql(graphqlOperation(createTurno, { input: newCaja }));
      message.success("Se aperturo la caja");
      verificarCajaAbierta(gerenteId);
    } catch (error) {
      console.log(error);
      message.error("Hubo un error contacta al administrador");
    }
  };
  const fetchCajas = async () => {
    try {
      if (labId !== "") {
        const result = await API.graphql(
          graphqlOperation(cajasByOpticaID, { opticaID: labId })
        );
        const cajas = result?.data?.cajasByOpticaID?.items;
        setCajas(cajas);
      }
    } catch (error) {
      message.error("Hubo un error contacta con el administrador");
    }
  };
  useEffect(() => {
    fetchCajas();
    // eslint-disable-next-line
  }, [labId]);

  useEffect(() => {
    const verificarCaja = async () => {
      // Realizar la verificación del estado de la caja aquí
      // Reemplaza el siguiente código con tu lógica de verificación real
      try {
        const result = await verificarCajaAbierta(gerenteId); // Supongamos que esto es una función asincrónica
        if (result === true) {
          setVerificandoCaja(false); // Finaliza la verificación
        }
      } catch (error) {
        console.log(error);
      }
    };
    verificarCaja();
    // eslint-disable-next-line
  }, []);
  return (
    <div>
      {verificandoCaja ? (
        <p>Verificando cajas abiertas...</p>
      ) : cajaAbierta === false ? (
        <Modal
          open={isModal}
          onOk={abrirCaja}
          onCancel={() => setIsModal(false)}
          okText="Aperturar caja"
          title="Aperturar turno de caja"
        >
          <div
            style={{
              maxWidth: "100%",
              display: "grid",
              gridTemplateColumns: "repeat(1, 1fr)",
              gap: "10px",
            }}
          >
            <Form.Item style={{ width: "100%" }} label="Monto Inicial">
              <Input
                value={montoInicial}
                onChange={(e) => setMontoInicial(e.target.value)}
                placeholder="Ingresa el monto inicial"
              />
            </Form.Item>
            <Form.Item
              style={{ width: "100%" }}
              label="Cajas"
              rules={[{ required: true, message: "Este campo es requerido" }]}
            >
              <Select
                onSelect={(e) => setCajaID(e)}
                placeholder="Select una Optica"
              >
                {cajas.map((caja) => {
                  const turnosAbiertos = caja.Turnos.items.some(
                    (turno) => turno.estado === "Abierto"
                  );
                  const textoAdicional = turnosAbiertos
                    ? " - Caja abierta"
                    : "";
                  return (
                    <Option
                      key={caja.id}
                      value={caja.id}
                      disabled={turnosAbiertos}
                    >
                      {caja.nombre} {textoAdicional}
                    </Option>
                  );
                })}
              </Select>
            </Form.Item>
          </div>
        </Modal>
      ) : (
        <>
          <Col span={32} style={{ margin: "20px 0px" }}>
            <Card bordered={true}>
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <div style={{ display: "flex", gap: "10px" }}>
                  <FiInbox style={{ fontSize: "30px", color: "#1677ff" }} />
                  <div>
                    <p>Caja : {nowTurno.id}</p>
                    <Tag color="green">Aperturado</Tag>
                    <p>
                      Responsable: <b> Gerente</b>
                    </p>
                    <p>
                      Apertura:{" "}
                      <b>
                        {" "}
                        {dayjs(nowTurno.fechaApertura).format(
                          "D [de] MMM [del] YYYY [a las] hh:mm:ss a"
                        )}
                      </b>
                    </p>
                  </div>
                </div>
                <div>
                  <Popconfirm
                    title="Corte de Caja"
                    description="¿Esta seguro de hacer corte de caja?"
                    onConfirm={() => corteCaja()}
                    okText="Si"
                    cancelText="No"
                  >
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
                    </Button>{" "}
                  </Popconfirm>
                </div>
              </div>
            </Card>
          </Col>
          <Row gutter={16}>
            <Col span={6}>
              <Card bordered={false}>
                <p>Saldo inicial</p>
                <div
                  style={{ display: "flex", justifyContent: "space-between" }}
                >
                  <div>
                    <h1>
                      $
                      {(
                        Math.round(Number(nowTurno.montoInicial) * 100) / 100
                      ).toFixed(2)}
                    </h1>
                  </div>
                  <div>
                    <FiDollarSign
                      style={{ fontSize: "30", color: "#529f00" }}
                    />
                  </div>
                </div>
              </Card>
            </Col>
            <Col span={6}>
              <Card bordered={false}>
                <p style={{ color: "#1677ff", fontWeight: "bold" }}>
                  Mis Ventas
                </p>
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
            <Col span={6}>
              <Card bordered={false}>
                <p style={{ color: "#ff1616", fontWeight: "bold" }}>
                  Adeudos en Caja
                </p>
                <div
                  style={{ display: "flex", justifyContent: "space-between" }}
                >
                  <div>
                    <h1>
                      ${(Math.round(Number(adeudos) * 100) / 100).toFixed(2)}
                    </h1>
                    <p>Resultado de adeudos de ordenes aceptadas</p>
                  </div>
                  <div>
                    <FiShoppingBag
                      style={{ fontSize: "30", color: "#ff1616" }}
                    />
                  </div>
                </div>
              </Card>
            </Col>
            <Col span={6}>
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
                          (Number(ventas) + Number(nowTurno.montoInicial)) * 100
                        ) / 100
                      ).toFixed(2)}
                    </h1>
                  </div>
                  <div>
                    <FiDollarSign
                      style={{ fontSize: "30", color: "#529f00" }}
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
