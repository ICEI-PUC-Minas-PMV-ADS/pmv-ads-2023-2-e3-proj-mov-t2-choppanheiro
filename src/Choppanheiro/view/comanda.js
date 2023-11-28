import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Botao, Input, handlerTeclado, Profile } from "../components/components";
import { listaItem } from "../controller/controller";

export default function Comanda( ) {
    const navigation = useNavigation();



    const tPedido = () => {
        navigation.navigate('Pedido')
    }

    const itensBar = [
        { item: '1x Cerveja', preco: 30 },
        { item: '1x Chiclete', preco: 10 },
        { item: '1x Petisco', preco: 40 },
        { item: '1x Coquetel', preco: 70 },
      ];


    const renderComandaItem = ({ item }) => (
        <View style={{alignItems:"center"}}>
            <Text style={{fontSize: 20, marginBottom: 10}}>{`${item.item} ............................ ${item.preco}`}</Text>
        </View>
    );

    return (
        <View style={styles.container}>
            <View style={{ padding: 20 }}>
                <Text style={styles.title}>Seu consumo</Text>
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
                            <Text style={{ fontSize: 26, fontWeight: 'bold', marginBottom: 5, marginTop: 5 }}>TOTAL: R$:150,00</Text>
                        </View>
                    
                    </View>
                </View>
            </View>
        
            <Botao texto={'VOLTAR'} onPress={tPedido}></Botao>
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

