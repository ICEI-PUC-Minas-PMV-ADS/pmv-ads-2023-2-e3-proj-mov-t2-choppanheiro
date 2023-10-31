import axios from 'axios';



// export function tPrincipal(navigation) {
//     navigation.navigate('Principal')
// }



export function Logar(credenciais) {
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


export function Cadastrar(credenciais) {

    const apiURL = 'http://192.168.100.58:3000/usuarios'

    axios.get(apiURL)
        .then((response) => {

            const userData = response.data;

            const dados = {
                email: credenciais.email,
                pass: credenciais.pass,
                user: credenciais.user,
                vpass: credenciais.vpass
            };

            const validaUsuario = userData.find((item) => credenciais.user === item.user || credenciais.email === item.email);


            if (validaUsuario) {
                    // Usuario ou Email Já existe
            } else {
                axios.post(apiURL, dados)
                //Usuario foi cadastrado com sucesso
            }

 })
};





