import {StyleSheet, Text, TouchableOpacity, TextInput, Keyboard, View, ScrollView,} from "react-native";
import { Avatar, Icon } from "react-native-elements";
import { useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { Add, getPedidos } from "../controller/controller";

export function Botao({ onPress, texto, style }) {
  return (
    <TouchableOpacity style={[style, styles.botao]} onPress={onPress}>
      <Text style={styles.textoBotao}>{texto}</Text>
    </TouchableOpacity>
  );
}
export function BotaoComanda({ onPress, texto, style }) {
  return (
    <TouchableOpacity style={[style, styles.botaoComanda]} onPress={onPress}>
      <Text style={styles.textoBotao}>{texto}</Text>
    </TouchableOpacity>
  );
}


export function TextoBotao({ onPress, texto }) {
  return (
    <TouchableOpacity onPress={onPress}>
      <Text style={{ color: "white" }}>{texto}</Text>
    </TouchableOpacity>
  );
}

//Handler de Teclado
export function handlerTeclado() {
  Keyboard.dismiss();
}

// Input
export function Input({ holder, onChangeText }) {
  return (
    <TextInput
      style={styles.input}
      placeholder={holder}
      onChangeText={onChangeText}
    />
  );
}

// Input Com mascara de segurança
export function InputSecure({ holder, onChangeText, secureTextEntry }) {
  return (
    <TextInput
      style={styles.input}
      placeholder={holder}
      onChangeText={onChangeText}
      secureTextEntry={true}
    />
  );
}

//Adiciona novo item
export function Pedido({ onPress }) {
  const [item, setItem] = useState("");
  const [preco, setPreco] = useState("");
  const [qtd, setValor] = useState(0);

  const alterarValor = (operacao) => {
    setValor(operacao === "adicao" ? qtd + 1 : qtd - 1);
  };

  const handleConfirm = () => {
    if (!item || !preco || qtd <= 0) {
      alert("Por favor, preencha todos os campos antes de confirmar.");
      return;
    }

    const items = {
      item,
      preco,
      qtd,
    };

    onPress(items);

    Add(items);
  };

  return (
    <View
      style={{
        backgroundColor: "#F2F2F2",
        width: "100%",
        height: 440,
        borderRadius: 20,
        marginTop: 90,
      }}
    >
      <View style={styles.container}>
        <Text style={styles.menuText}>ITEM</Text>
        <TextInput
          style={styles.inputModal}
          value={item}
          onChangeText={setItem}
          autoCapitalize="characters"
        />
        <Text style={styles.menuText}> VALOR</Text>
        <TextInput
          placeholder="R$:"
          style={styles.inputModal}
          value={preco}
          onChangeText={setPreco}
          keyboardType="numeric"
        />

        <View style={styles.rowContainer}>
          <View style={styles.containerValor}>
            <TextInput
              style={styles.inputValorText}
              value={qtd.toString()}
              keyboardType="numeric"
              autoCapitalize="characters"
              onChangeText={setValor}
              editable={false}
            />
          </View>
          <View style={styles.botoesContainer}>
            <TouchableOpacity
              style={styles.botaoDois}
              onPress={() => alterarValor("adicao")}
            >
              <Text style={styles.menuText}>+</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.botaoDois}
              onPress={() => alterarValor("subtracao")}
            >
              <Text style={styles.menuText}>-</Text>
            </TouchableOpacity>
          </View>
        </View>
        <TouchableOpacity onPress={handleConfirm}>
          <View
            style={{
              backgroundColor: "#F2A60C",
              borderRadius: 10,
              paddingVertical: 10,
              paddingHorizontal: 20,
              alignSelf: "center",
              marginTop: 10,
            }}
          >
            <Text style={{ color: "white" }}>Confirmar</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
}

export function Comanda({ onPress }) {
  const [dadosPedidos, setDadosPedidos] = useState([]);
  const [totalGeral, setTotalGeral] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const pedidos = await getPedidos();
        setDadosPedidos(pedidos);
        atualizarTotalGeral(pedidos);
      } catch (error) {
        console.error("Erro ao obter dados dos pedidos", error);
      }
    };

    fetchData();
  }, []);

  const incrementarQuantidade = (pedidoId) => {
    setDadosPedidos((prevState) => {
      const updatedPedidos = prevState.map((pedido) =>
        pedido.id === pedidoId ? { ...pedido, qtd: pedido.qtd + 1 } : pedido
      );
      atualizarTotalGeral(updatedPedidos);
      return updatedPedidos;
    });
  };

  const decrementarQuantidade = (pedidoId) => {
    setDadosPedidos((prevState) => {
      const updatedPedidos = prevState.map((pedido) =>
        pedido.id === pedidoId && pedido.qtd > 0
          ? { ...pedido, qtd: pedido.qtd - 1 }
          : pedido
      );
      atualizarTotalGeral(updatedPedidos);
      return updatedPedidos;
    });
  };

  const atualizarTotalGeral = (pedidos) => {
    const total = pedidos.reduce((acc, pedido) => {
      const precoDecimal = parseFloat(pedido.preco);
      return acc + precoDecimal * pedido.qtd;
    }, 0);
    setTotalGeral(total);
  };

  return (
    <View
      style={{
        backgroundColor: "#F2F2F2",
        width: "100%",
        height: 440,
        borderRadius: 20,
        marginTop: 90,
      }}
    >
      <BotaoComanda
        style={styles.botaoComanda}
        texto={"COMANDA"}
        onPress={onPress}
      />
      <ScrollView>
        <View style={styles.containerPeidos}>
          {dadosPedidos.map((pedido) => {
            const precoDecimal = parseFloat(pedido.preco);

            return (
              <View key={pedido.id} style={styles.itemPedido}>
                <Text style={styles.textoPedido}>
                  {pedido.item} ...................... R$ {precoDecimal.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                </Text>
                <View style={styles.controlesQuantidade}>
                  <TouchableOpacity
                    onPress={() => decrementarQuantidade(pedido.id)}
                  >
                    <Text style={styles.botaoControle}>-</Text>
                  </TouchableOpacity>
                  <Text style={{fontSize: 12, padding:5, margin: 2,}}>{pedido.qtd}</Text>
                  <TouchableOpacity
                    onPress={() => incrementarQuantidade(pedido.id)}
                  >
                    <Text style={styles.botaoControle}>+</Text>
                  </TouchableOpacity>
                </View>
              </View>
            );
          })}
        </View>
        <View style={styles.containerTotal}>
        <Text style={{fontSize: 16, fontWeight:'bold'}}>TOTAL:                                         R$ {totalGeral.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</Text>
        </View>
      </ScrollView>
      <TouchableOpacity style={{marginBottom: 25}} onPress={onPress}>
          <Icon
            name="check"
            type="material"
            color="white"
            size={35}
            rounded
            containerStyle={{
              backgroundColor: "green",
              borderRadius: 100,
              width: 50,
              height: 50,
              justifyContent: "center",
              alignSelf: 'center',
            }}
          />
        </TouchableOpacity>
    </View>
  );
}
//Tela Mesa
export function NumeroPessoas({ onPress }) {
  const [numeroPessoas, setNumeroPessoas] = useState('');

  return (
    <View style={{
      backgroundColor: "#F2F2F2",
      width: "90%",
      height: 200,
      borderRadius: 20,
      marginTop: 150,
    }}>
      <View style={{ justifyContent: "center", alignItems: 'center', margin: 10, marginTop: 40 }}>
        <TextInput
          placeholder={"NUMERO DE PESSOAS"}
          value={numeroPessoas}
          onChangeText={(text) => setNumeroPessoas(text)}
          keyboardType="numeric"
          style={[styles.inputModal, { width: '90%' }]}
        />
      </View>
      <TouchableOpacity onPress={() => onPress(numeroPessoas)}>
        <View style={{
          backgroundColor: "#F2A60C",
          borderRadius: 10,
          paddingVertical: 10,
          paddingHorizontal: 20,
          alignSelf: 'center',
          marginTop: 10,
        }}>
          <Text style={{ color: 'white' }}>Confirmar</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}

export function Gorjeta({ onPress }) {
  const [valorGorjeta, setValorGorjeta] = useState('');

  return (
    <View style={{
      backgroundColor: "#F2F2F2",
      width: "90%",
      height: 200,
      borderRadius: 20,
      marginTop: 150,
    }}>
      <View style={{ justifyContent: "center", alignItems: 'center', margin: 10, marginTop: 40 }}>
        <TextInput
          placeholder={"VALOR DA GORJETA"}
          value={valorGorjeta}
          onChangeText={(text) => setValorGorjeta(text)}
          keyboardType="numeric"
          style={[styles.inputModal, { width: '90%' }]}
        />
      </View>
      <TouchableOpacity onPress={() => onPress(valorGorjeta)}>
        <View style={{
          backgroundColor: "#F2A60C",
          borderRadius: 10,
          paddingVertical: 10,
          paddingHorizontal: 20,
          alignSelf: 'center',
          marginTop: 10,
        }}>
          <Text style={{ color: 'white' }}>Confirmar</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}

export function Couver({ onPress }) {
  const [valorCouver, setValorCouver] = useState('');

  return (
    <View style={{
      backgroundColor: "#F2F2F2",
      width: "90%",
      height: 200,
      borderRadius: 20,
      marginTop: 150,
    }}>
      <View style={{ justifyContent: "center", alignItems: 'center', margin: 10, marginTop: 40 }}>
        <TextInput
          placeholder={"VALOR DE COUVER"}
          value={valorCouver}
          onChangeText={(text) => setValorCouver(text)}
          keyboardType="numeric"
          style={[styles.inputModal, { width: '90%' }]}
        />
      </View>
      <TouchableOpacity onPress={() => onPress(valorCouver)}>
        <View style={{
          backgroundColor: "#F2A60C",
          borderRadius: 10,
          paddingVertical: 10,
          paddingHorizontal: 20,
          alignSelf: 'center',
          marginTop: 10,
        }}>
          <Text style={{ color: 'white' }}>Confirmar</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}

// Modal de inserçao
export function Modal({ onChangeText, texto, style, holder }) {
  const [modalVisible, setModalVisible] = useState(false);

  const toggleMenu = () => {
    setModalVisible(!modalVisible);
  };

  return (
    <View>
      <Botao texto={texto} onPress={toggleMenu} style={style} />

      {modalVisible && (
        <View style={styles.modalInput}>
          <TouchableOpacity
            style={{ marginBottom: 2 }}
            onPress={() => console.log("Sair")}
          >
            <Input holder={holder}></Input>
          <Botao texto={'OK'} onPress={toggleMenu}></Botao>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
}

// Botao perfil
export function Profile({ width, bgColor }) {
  const [menuVisible, setMenuVisible] = useState(false);
  const navigation = useNavigation();

  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
  };

  return (
    <View
      style={{
        marginTop: "auto",
        width: width,
        backgroundColor: bgColor,
        alignItems: "center",
      }}
    >
      <TouchableOpacity style={styles.profile} onPress={toggleMenu}>
        <Avatar
          size={54}
          rounded
          icon={{ name: "user", type: "font-awesome" }}
          containerStyle={{ borderWidth: 2, borderColor: "#FFFFFF" }}
        />
      </TouchableOpacity>

      {menuVisible && (
        <View style={styles.menuProfile}>
          {/* Opções do menu aqui */}
          <TouchableOpacity onPress={() => navigation.navigate("MinhaConta")}>
            <Text style={styles.menuText}>Minha Conta</Text>
            <View
              style={{ height: 1, width: 100, backgroundColor: "#410404" }}
            ></View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate("Historico")}>
            <Text style={styles.menuText}>Histórico</Text>
            <View
              style={{ height: 1, width: 100, backgroundColor: "#410404" }}
            ></View>
          </TouchableOpacity>

          <TouchableOpacity
            style={{ marginBottom: 2 }}
            onPress={() => console.log("Sair")}
          >
            <Text style={styles.menuText}>Sair</Text>
            <View
              style={{ height: 1, width: 100, backgroundColor: "#410404" }}
            ></View>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
}

//CSS DOS COMPONENTS
const styles = StyleSheet.create({
  botao: {
    elevation: 2,
    padding: 10,
    backgroundColor: "#F2A60C",
    height: 56,
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
  },
  botaoComanda: {
    elevation: 2,
    padding: 10,
    backgroundColor: "#CCC",
    height: 56,
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
  },
  containerPeidos:{
    flex: 1,
    marginTop: 10,
    alignItems: 'center'
  },
  containerTotal:{
    margin: '10%',
    borderTopWidth: 5,
    borderTopColor: '#ccc'
    
  },
  itemPedido: {
    flexDirection: 'row',
    paddingVertical: 8,
  },
  textoPedido: {
    fontSize: 16,
    color: 'black',
    marginBottom: 8,
    
  },
  controlesQuantidade: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 6,
    marginBottom: 10
  },
  botaoControle: {
    paddingHorizontal: 5,
    fontSize: 14.5,
    backgroundColor: '#cccc'
  },
  textoBotao: {
    fontSize: 24,
    //fontFamily: 'Poppins',
    fontWeight: "600",
    color: "#410404",
    textAlign: "center",
  },
  input: {
    marginBottom: 15,
    borderWidth: 3,
    borderColor: "#FFBF00",
    borderRadius: 6,
    paddingHorizontal: 10,
    backgroundColor: "white",
    height: 45,
    width: "80%",
  },
  inputModal: {
    marginBottom: 15,
    borderRadius: 6,
    paddingHorizontal: 10,
    backgroundColor: "#FFBF00",
    height: 55,
    width: "80%",
    fontSize: 24,
    fontWeight: "600",
    color: "#410404",
    textAlign: "center",
  },
  inputValorText: {
    color: "#410404",
    fontSize: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  containerValor: {
    flexDirection: "row",
    backgroundColor: "#FFBF00",
    width: "22%",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 6,
  },
  botoesContainer: {
    flexDirection: "row",
    width: "30%",
    marginHorizontal: "50%",
  },
  rowContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: 85,
    marginBottom: 20,
  },
  botaoDois: {
    backgroundColor: "#F2A60C",
    height: 56,
    justifyContent: "center",
    alignItems: "center",
    width: "80%",
    borderRadius: 10,
    marginHorizontal: "35%",
  },
  container: {
    flex: 1,
    justifyContent: "flex-end", // Alinha o conteúdo ao final da tela
    alignItems: "center", // Centraliza horizontalmente
    marginBottom: 16, // Adicione margem inferior conforme necessário
  },
  profile: {
    padding: 10,
    width: "100%",
    alignItems: "center",
  },
  menuProfile: {
    alignItems: "center",
    position: "absolute",
    zIndex: 3,
    bottom: 100,
    width: 229,
    paddingTop: 10,
    paddingBottom: 10,
    borderRadius: 5,
    elevation: 3,
  },
  menuText: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 2,
  },
  modalInput: {
    alignItems: "center",
    position: "absolute",
    zIndex: 3,
    bottom: 100,
    backgroundColor: "white",
    width: "100%",
    paddingTop: 10,
    paddingBottom: 10,
    borderRadius: 5,
    elevation: 3,
  },
});
