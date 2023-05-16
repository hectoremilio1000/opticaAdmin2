import React from "react";
import {
  Document,
  Page,
  Text,
  View,
  StyleSheet,
  Image,
} from "@react-pdf/renderer";

const styles = StyleSheet.create({
  page: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    fontFamily: "Helvetica",
    padding: "20px",
  },
  logo: {
    marginBottom: "10px",
    width: "80px",
  },
  title: {
    fontSize: "8px",
    fontWeight: "bold",
    marginBottom: "10px",
  },
  customer: {
    marginBottom: "10px",
    fontSize: "8px",
  },
  table: {
    width: "100%",
    marginBottom: "8px",
    fontSize: "8px",
  },
  tableHeader: {
    backgroundColor: "lightgray",
    padding: "5px",
    textAlign: "center",
    fontSize: "6px",
  },
  tableRow: {
    display: "flex",
    flexDirection: "row",
    padding: "5px",
    borderBottom: "1px solid black",
    textAlign: "center",
    fontSize: "8px",
  },
  tableCell: {
    width: "100%",
    display: "flex",
    justifyContent: "space-between",
  },
  totalRow: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    gap: "10px",
    padding: "5px",
    textAlign: "start",
    fontWeight: "bold",
    fontSize: "8px",
  },
});

export default function Cotizacion({ orden, title, logoSrc }) {
  console.log(orden);
  const total = Number(orden[0].precioTotal);
  console.log(total);
  return (
    <Document title="hola">
      <Page size="A7" style={styles.page}>
        <View style={styles.logo}>
          <Image src={logoSrc} alt="Logo" />
        </View>
        <View style={styles.title}>
          <Text>{title}</Text>
        </View>
        <View style={styles.customer}>
          <Text>Cliente: {orden[0].nombreCliente}</Text>
        </View>
        <View style={styles.table}>
          <View style={styles.tableRow}>
            <View style={styles.tableCell}>
              <Text>Producto</Text>
            </View>
            <View style={styles.tableCell}>
              <Text>Cantidad</Text>
            </View>
            <View style={styles.tableCell}>
              <Text>Precio</Text>
            </View>
            <View style={styles.tableCell}>
              <Text>Subtotal</Text>
            </View>
          </View>
          <View style={styles.tableRow} key={1}>
            <View style={styles.tableCell}>
              <Text>Graducacion de lentes</Text>
            </View>
            <View style={styles.tableCell}>
              <Text>1</Text>
            </View>
            <View style={styles.tableCell}>
              <Text>${Math.round((total * 100) / 100).toFixed(2)}</Text>
            </View>
            <View style={styles.tableCell}>
              <Text>${Math.round((total * 100) / 100).toFixed(2)}</Text>
            </View>
          </View>
        </View>
        <View style={styles.totalRow}>
          <View
            style={{
              display: "flex",
              justifyContent: "space-between",
              flexDirection: "row",
            }}
          >
            <Text>SubTotal</Text>
            <Text>${(Math.round((total / 1.16) * 100) / 100).toFixed(2)}</Text>
          </View>
          <View
            style={{
              display: "flex",
              justifyContent: "space-between",
              flexDirection: "row",
            }}
          >
            <Text>IVA(16%)</Text>
            <Text>
              ${(Math.round((total - total / 1.16) * 100) / 100).toFixed(2)}
            </Text>
          </View>
          <View
            style={{
              display: "flex",
              justifyContent: "space-between",
              flexDirection: "row",
            }}
          >
            <Text>Total</Text>
            <Text>${(Math.round(total * 100) / 100).toFixed(2)}</Text>
          </View>
          <View
            style={{
              display: "flex",
              justifyContent: "space-between",
              flexDirection: "row",
            }}
          >
            {/* <Text style={{ textAlign: "justify" }}>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illum
              reiciendis, provident officia architecto ut consequatur nobis
              alias a velit maxime debitis praesentium inventore consequuntur
              est laborum ex nostrum fugiat. Commodi.
            </Text> */}
          </View>
        </View>
      </Page>
    </Document>
  );
}
