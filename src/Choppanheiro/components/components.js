import { StyleSheet, Text, TouchableOpacity, TextInput, Keyboard, View } from 'react-native';
import {Avatar} from 'react-native-elements'


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


export function Profile ({onPress, width, bgColor}) {
  return(
    <View style={{marginTop: 'auto', width:width, backgroundColor:bgColor}}>
      <TouchableOpacity style={styles.profile} onPress={onPress}>
        <Avatar
          size={54}
          rounded
          icon={{ name: 'user', type: 'font-awesome' }}
          containerStyle={{ borderWidth: 2, borderColor: '#FFFFFF' }}
        />
      </TouchableOpacity>
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
        alignItems: 'center'
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
});


