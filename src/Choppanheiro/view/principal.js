import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";
import { Botao, Profile } from "../components/components";
import { useNavigation } from "@react-navigation/native";
import { useState } from "react";

export default function Principal() {
  const navigation = useNavigation();

  const tMesa = () => {
    navigation.navigate("Mesa");
  };
  return (
    <View style={styles.container}>
      <View style={styles.backgroundCircle} />

      <Image style={styles.img} source={require("../assets/Vector.png")} />

      <View>
        <Botao
          texto={"ABRIR MESA"}
          onPress={tMesa}
          style={{ width: 229, marginTop: "30%" }} /*onPress={tCadastro}*/
        />
      </View>

      <Profile
        width={"100%"}
        bgColor={"#F2A60C"}
        navigation={navigation}
      ></Profile>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F2A60C",
    justifyContent: "center",
    alignItems: "center",
  },
  backgroundCircle: {
    top: 140,
    position: "absolute",
    width: "130%",
    height: "100%",
    borderTopLeftRadius: 1600,
    borderTopRightRadius: 1400,
    borderBottomLeftRadius: 5000,
    backgroundColor: "#410404",
    transform: [{ rotate: "100deg" }],
  },
  img: {
    marginTop:100,
    width: 200,
    height: 200,
    resizeMode: "contain",
  },
});
