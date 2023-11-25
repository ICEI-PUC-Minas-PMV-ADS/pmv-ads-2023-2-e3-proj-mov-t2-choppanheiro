import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import { useNavigation } from "@react-navigation/native";
import {
  Botao,
  Input,
  handlerTeclado,
  Profile,
} from "../components/components";

const Fazaboa = ({ navigation }) => {
  const [historicoData, setHistoricoData] = useState([]);

  useEffect(() => {
    // Fetch historical data from your backend or local storage
    // and update the state accordingly.
    // For now, we'll use dummy data.
    const dummyData = [
      {
        id: "1",
        establishment: "O Redentor",
        date: "07/08/23",
        total: "R$52,80",
        items: [
          { name: "Batata Frita", price: "R$24,00" },
          { name: "Cerveja", price: "R$18,00" },
          // Add other items similarly
        ],
        dividedBy: 4,
      },
      // Add more history entries similarly
    ];
    setHistoricoData(dummyData);
  }, []);

  const renderHistoricoItem = ({ item }) => (
    <View style={styles.historicoItem}>
      <Text style={styles.establishment}>{item.establishment}</Text>
      <Text style={styles.date}>{item.date}</Text>
      <FlatList
        data={item.items}
        keyExtractor={(item) => item.name}
        renderItem={({ item }) => (
          <Text style={styles.item}>{`${item.name}: ${item.price}`}</Text>
        )}
      />
      <Text style={styles.total}>{`TOTAL: ${item.total}`}</Text>
      <Text style={styles.dividedBy}>{`Dividido por ${item.dividedBy}: ${
        parseFloat(item.total.replace("R$", "").replace(",", ".")).toFixed(2) /
        item.dividedBy
      }`}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Histórico</Text>
      <FlatList
        data={historicoData}
        keyExtractor={(item) => item.id}
        renderItem={renderHistoricoItem}
      />
      <Profile
        width={"100%"}
        bgColor={"#F2A60C"}
        navigation={navigation}
      ></Profile>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF",
    padding: 20,
  },
  title: {
    fontSize: 36,
    fontWeight: "bold",
    color: "#410404",
    alignSelf: "flex-start",
    marginVertical: 20,
  },
  historicoItem: {
    borderWidth: 1,
    borderColor: "#DDD",
    borderRadius: 5,
    padding: 10,
    marginBottom: 15,
  },
  establishment: {
    fontSize: 18,
    fontWeight: "bold",
  },
  date: {
    fontSize: 14,
    color: "#888",
  },
  item: {
    fontSize: 16,
  },
  total: {
    fontSize: 16,
    fontWeight: "bold",
    marginTop: 10,
  },
  dividedBy: {
    fontSize: 14,
    color: "#888",
  },
});

export default Fazaboa;
