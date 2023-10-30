import axios from 'axios';
import { useNavigation } from '@react-navigation/native';

const navigation = useNavigation();

// Rotas
const tRecuperar = () => {
navigation.navigate('Recuperar')
};
const tPrincipal = () => {
  navigation.navigate('Principal') 
};

export default function Logar(credenciais) {
    axios.get('http://192.168.100.58:3000/users')
        .then((response) => {
            const userData = response.data;

            const validaLogin = userData.find((item) => credenciais.user === item.user & credenciais.pass === item.pass);

            if (validaLogin) {
                console.log('====ENTROU===')
                navigation.navigate('Principal')
            } else {
                console.log('===FALHOU===')
            }
        })
};


export default function Cadastrar(credenciais) {

    axios.get('http://192.168.100.58:3000/users')
        .then((response) => {
            const userData = response.data;

            const validaUsuario = userData.find((item) => credenciais.user === item.user || credenciais.email === item.email);

                if(validaUsuario){
                    //Usuario ou Email Já existe
                } else {
                    axios.post('http://192.168.100.58:3000/users', credenciais)
                    //Usuario foi cadastrado com sucesso
                }

        })
        .catch((error) => {
            console.log(error)
        })
};





