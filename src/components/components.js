import { StyleSheet, Text, TouchableOpacity, TextInput, Keyboard } from 'react-native';



export function Botao ({onPress, texto}) {
    return(
        <TouchableOpacity style={[styles.botao]} onPress={onPress}>
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



//CSS DOS COMPONENTS
const styles = StyleSheet.create({
    botao: {
        elevation: 2,
        backgroundColor: '#F2A60C',
        width: 229,
        height: 56,
        borderRadius: 5,
        marginBottom: 20,
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
        marginBottom: 20,
        borderWidth: 3,
        borderColor: '#FFBF00',
        borderRadius: 6,
        paddingHorizontal: 10,
        backgroundColor: 'white',
        height: '7%',
        width: '80%',
      },
});


