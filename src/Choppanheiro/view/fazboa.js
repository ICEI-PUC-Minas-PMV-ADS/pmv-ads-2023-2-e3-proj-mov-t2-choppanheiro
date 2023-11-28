import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, FlatList, Alert } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Botao, Input, handlerTeclado, Profile } from "../components/components";
import { listaItem } from "../controller/controller";

export default function Fazboa( ) {
    const navigation = useNavigation();

    const tPedido = () => {
        Alert.alert('Ta pago!', 'Se beber não dirija');
        navigation.navigate('Principal')
    }

    const itensBar = [
        { item: 'Cerveja', preco: 30 },
        { item: 'Chiclete', preco: 10 },
        { item: 'Petisco', preco: 40 },
        { item: 'Coquetel', preco: 70 },
        { item: 'COUVERT', preco: 10 },
        { item: 'GORJETA', preco: 20 },
      ];


    const renderComandaItem = ({ item }) => (
        <View style={{alignItems:"center"}}>
            <Text style={{fontSize: 20, marginBottom: 10}}>{`${item.item} ............................ ${item.preco}`}</Text>
        </View>
    );

    return (
        <View style={styles.container}>
            <View style={{ padding: 20 }}>
                <Text style={styles.title}>Faz a boa!</Text>
                <Text style={{fontSize:18,marginBottom:20}}>Faça a boa para seus amigos</Text>
                <View style={{ backgroundColor: '#d6d6d6', borderRadius: 5, borderColor: '#969696', borderWidth: 1, height: '80%' }}>
                    <View>
                        <View style={{ padding: 5, alignItems: "center" }}>
                            <Text style={{ fontSize: 26, fontWeight: 'bold', marginBottom: 5, marginTop: 5 }}>COMANDA</Text>
                        </View>
                        <View style={{ backgroundColor: '#969696', height: 5, margin: 5 }}></View>
                    </View>
                    <FlatList
                        data={itensBar}
                        keyExtractor={(item) => item.id}
                        renderItem={renderComandaItem}
                    />
                    <View>
                        <View style={{ backgroundColor: '#969696', height: 5, margin: 5 }}></View>
                        <View style={{ padding: 5, alignItems: 'center'}}>
                            <Text style={{ fontSize: 26, fontWeight: 'bold', marginBottom: 5, marginTop: 5 }}>TOTAL: R$:180,00</Text>
                        </View>
                    
                    </View>
                </View>
            </View>
        
            <Botao texto={'FAZ A BOA'} onPress={tPedido}></Botao>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFFF',
    },
    title: {
        fontSize: 36,
        fontWeight: "bold",
        color: "#410404",
        alignSelf: "flex-start",
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

