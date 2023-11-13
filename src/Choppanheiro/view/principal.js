import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import {Botao, Profile} from '../components/components';
import { useNavigation } from '@react-navigation/native';
import { useState } from 'react';



export default function Principal() {
  const navigation = useNavigation();

  const tMesa = () => {
    navigation.navigate('Mesa');
  };


  const [menuVisible, setMenuVisible] = useState(false);

  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
  };


  return (
    <View style={styles.container}>
      <View style={styles.backgroundCircle} />

      <View style={styles.button}>
      <Botao texto={'ABRIR MESA'} onPress={tMesa} style={{width:229, marginTop:30}}></Botao>
      </View>

      <View style={styles.profile}>
        <TouchableOpacity onPress={toggleMenu} style={styles.touchableProfile}>
          <Profile />
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

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'relative',
    backgroundColor: '#F2A60C',
    overflow: 'hidden',
  },
  backgroundCircle: {
    top: 100,
    position: 'absolute',
    width: '130%',
    height: '100%',
    borderTopLeftRadius: 1600,
    borderTopRightRadius: 1400,
    borderBottomLeftRadius: 5000,
    backgroundColor: '#410404',
    transform: [{ rotate: '100deg' }],
  },
  content: {
    flex: 1,
    padding: 6,
  },
  button: {
    top: 280,
    alignItems: 'center',
    zIndex: 1,
    marginBottom: 16,
  },
  profile: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    marginBottom: 16,
  },
  profileText: {
    color: 'white',
    fontSize: 18,
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
  touchableProfile: {
    alignItems: 'center',
  },
});