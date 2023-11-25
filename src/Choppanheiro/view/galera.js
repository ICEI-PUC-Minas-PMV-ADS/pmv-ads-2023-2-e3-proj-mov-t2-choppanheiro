import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, FlatList, ActivityIndicator } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Botao, Input, handlerTeclado, Profile, } from "../components/components";

import { getPedidos } from "../controller/controller";

const Galera = ({ navigation }) => {
  const [dados, setDados] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const dadosPedidos = await getPedidos();
        setDados(dadosPedidos);
      } catch (err) {
        console.error('Erro ao buscar os dados: ', err);
      }
    };

    fetchData();
  }, []);

  const renderHistoricoItem = ({ item }) => {
    if (!item || !item.listaItens) {
      return null;
    }

    const total = item.listaItens.reduce(
      (acc, currentItem) =>
        acc + parseFloat(currentItem.preco.replace(',', '.')) * currentItem.qtd,
      0
    );

    return (
      <View style={styles.historicoItem}>
        <Text style={styles.htitle}>COMANDA</Text>
        <View style={{ height: 5, backgroundColor: '#b0b0b0' }}></View>
        <FlatList
          style={{ marginTop: 20, alignItems: 'center' }}
          data={item.listaItens}
          keyExtractor={(item) => item.item}
          renderItem={({ item }) => (
            <Text style={styles.item}>{`${item.item} ............................ R$${item.preco}`}</Text>
          )}
        />

        <View style={{ flex: 1, justifyContent: 'flex-end' }}>
          <View style={{ height: 5, backgroundColor: '#b0b0b0' }}></View>
          <View style={{ alignItems: 'center' }}>
            <Text style={styles.total}>{`TOTAL: R$${total.toFixed(2)}`}</Text>
            <Text
              style={styles.dividedBy}
            >{`Dividido por ${item.listaItens.reduce((acc, currentItem) => acc + currentItem.qtd, 0)}: R$${total /
              item.listaItens.reduce((acc, currentItem) => acc + currentItem.qtd, 0)
              }`}</Text>
          </View>
        </View>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <View style={{ padding: 20 }}>
        <View style={{ marginTop: 25 }}>
          <Text style={styles.title}>Galera</Text>
          <Text style={styles.stitle}>Divida a conta com seus camaradas!</Text>
        </View>
        {dados ? (
          <FlatList
            data={dados}
            keyExtractor={(item) => item.id.toString()}
            renderItem={renderHistoricoItem}
          />
        ) : (
          <ActivityIndicator size="large" color="#0000ff" />
        )}
      </View>
      <Profile width={'100%'} bgColor={'#F2A60C'} navigation={navigation}></Profile>
    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF",
  },
  title: {
    fontSize: 36,
    fontWeight: "bold",
    color: "#410404",
  },
  htitle: {
    fontSize: 30,
    fontWeight: "bold",
    color: "#410404",
    marginBottom: 10,
  },
  stitle: {
    fontSize: 20,
    color: "#410404",
    marginBottom: 20,
  },
  historicoItem: {
    flexDirection: "column",
    backgroundColor: '#ebebeb',
    borderWidth: 1,
    borderColor: "#878787",
    borderRadius: 5,
    padding: 10,
    marginBottom: 15,
    height: 400,
  },
  establishment: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 5,
  },
  date: {
    fontSize: 14,
    color: "#888",
    marginBottom: 5,
  },
  item: {
    fontSize: 18,
    marginBottom: 10,
  },
  total: {
    fontSize: 18,
    fontWeight: "bold",
    marginTop: 10,
  },
  dividedBy: {
    fontSize: 16,
    color: "#888",
  },
});


export default Galera;
