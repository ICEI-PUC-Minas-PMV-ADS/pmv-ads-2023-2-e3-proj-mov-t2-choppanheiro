import axios from 'axios';



export default function Login(credenciais) {
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


export default function Cadastro(credenciais) {

    axios.get('http://192.168.100.58:3000/users')
        .then((response) => {
            const userData = response.data;

            const validaUsuario = userData.find((item) => credenciais.user === item.user);

                if(validaUsuario){
                    //Usuario Já existe
                } else {
                    axios.post('http://192.168.100.58:3000/users', credenciais)
                }

        })
}




// console.log("=====BACKEND=====")

// axios.get('http://192.168.100.58:3000/profile')
//   .then((response) => {
//     console.log(response.data);
//   })
//   .catch((error) => {
//     // Handle the error
//     console.error(error);
//   });



