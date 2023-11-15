import { StyleSheet, Text, TouchableOpacity, TextInput, Keyboard, View } from 'react-native';
import {Avatar} from 'react-native-elements'
import { useState } from 'react';


export function Botao ({onPress, texto, style}) {
    return(
        <TouchableOpacity style={[style,styles.botao]} onPress={onPress}>
            <Text style={styles.textoBotao}>{texto}</Text>
        </TouchableOpacity>
    );
};

export function TextoBotao ({onPress, texto}) {
    return(
        <TouchableOpacity onPress={onPress}>
        <Text style={{ color: 'white' }}>
          {texto}
        </Text>
      </TouchableOpacity>
    )
}

//Handler de Teclado
export function handlerTeclado() {
    Keyboard.dismiss();
};


// Input
export function Input  ({holder, onChangeText})  {
    return(
        
        <TextInput
        style={styles.input}
        placeholder={holder}
        onChangeText={onChangeText}
        
      />
    );
};


export function Modal ({onChangeText, texto, style}) {

  const [modalVisible, setModalVisible] = useState(false);
      
  const toggleMenu = () => {
      setModalVisible(!modalVisible);
    }

  return(
    <View>
    <Botao texto={texto} onPress={toggleMenu} style={style}/>

    {modalVisible && (
      <View style={styles.modalInput}>
        <TouchableOpacity style={{marginBottom: 2}} onPress={() => console.log('Sair')}>
          <Input holder={'Insira o numero de pessoas'}></Input>
        </TouchableOpacity>
 
      </View>
    )}
    </View>

  )


}


// Botao perfil
export function Profile ({width, bgColor}) {

  const [menuVisible, setMenuVisible] = useState(false);

  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
  };


  return(
    <View style={{marginTop: 'auto', width:width, backgroundColor:bgColor, alignItems: 'center'}}>
      <TouchableOpacity style={styles.profile} onPress={toggleMenu}>
        <Avatar
          size={54}
          rounded
          icon={{ name: 'user', type: 'font-awesome' }}
          containerStyle={{ borderWidth: 2, borderColor: '#FFFFFF' }}
        />
      </TouchableOpacity>

      {menuVisible && (
          <View style={styles.menuProfile}>
            {/* Opções do menu aqui */}
            <TouchableOpacity style={{marginBottom: 2}} onPress={() => console.log('Sair')}>
              <Text style={styles.menuText}>Minha Conta</Text>
              <View style={{height: 1,width:100, backgroundColor:'#410404'}}></View>
            </TouchableOpacity>
            <TouchableOpacity style={{marginBottom: 2}} onPress={() => console.log('Sair')}>
              <Text style={styles.menuText}>Histórico</Text>
              <View style={{height: 1,width:100, backgroundColor:'#410404'}}></View>
            </TouchableOpacity>
            <TouchableOpacity style={{marginBottom: 2}} onPress={() => console.log('Sair')}>
              <Text style={styles.menuText}>Sair</Text>
              <View style={{height: 1,width:100 , backgroundColor:'#410404'}}></View>
            </TouchableOpacity>
     
          </View>
        )}


    </View>
  )
}




//CSS DOS COMPONENTS
const styles = StyleSheet.create({
    botao: {
        elevation: 2,
        padding:10,
        backgroundColor: '#F2A60C',
        height: 56,
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',
      },
      textoBotao: {
        fontSize: 24,
        //fontFamily: 'Poppins',
        fontWeight: '600',
        color: '#410404',
        textAlign: 'center',
      },
      input: {
        marginBottom: 15,
        borderWidth: 3,
        borderColor: '#FFBF00',
        borderRadius: 6,
        paddingHorizontal: 10,
        backgroundColor: 'white',
        height: 45,
        width: '80%',
      },
      container: {
        flex: 1,
        justifyContent: 'flex-end', // Alinha o conteúdo ao final da tela
        alignItems: 'center', // Centraliza horizontalmente
        marginBottom: 16, // Adicione margem inferior conforme necessário
      },
      profile: {
        padding: 10,
        width: '100%',
        alignItems: 'center',
      },
      menuProfile: {
        alignItems:'center',
        position: 'absolute',
        zIndex:3,
        bottom: 100,
        backgroundColor: 'white',
        width:229,
        paddingTop:10,
        paddingBottom:10,
        borderRadius: 5,
        elevation: 3,
      },
      menuText: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 2,
      },
      modalInput: {
        alignItems:'center',
        position: 'absolute',
        zIndex:3,
        bottom: 100,
        backgroundColor: 'white',
        width:'100%',
        paddingTop:10,
        paddingBottom:10,
        borderRadius: 5,
        elevation: 3,
      }

});


