//estilização
import { useState } from "react";
import "./style.login.css";
import api from "../../utils/api";
import secureLocalStorage from "react-secure-storage"
import { useNavigate } from "react-router-dom"; // força uma navegaçao programatica
import Logo from "./../../assets/img/image.png"
import { faEnvelope, faLock } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Swal from 'sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css'; // Certifique-se de importar o CSS também




function Login() {
    

    const navigate = useNavigate()

    const [email, setEmail] = useState<string>('')
    const [senha, setSenha] = useState<string>('')

function fazerLogin (event:any) {
    event.preventDefault()

    const usuario: object = {
        email: email,
        password: senha
    }
// post envia 
// response resposta da api
// promisse um dos tipos de funçao assincrona nao fica esperando a resposta
    api.post('login', usuario).then((response) => {
        console.log(response)


        // salvar no local storage
        // localStorage.setItem('user', response.data) 

        //npm i react-secure-storage extensao para salvar no localstorage
        secureLocalStorage.setItem('user', response.data)
        navigate('/Home')
        
        // Recarrega a pagina e resgate no local storage o usuario logado
        navigate(0)
    })
    .catch((error) => {
      console.error('Erro ao fazer login:', error);

      // Utiliza o SweetAlert2 para exibir uma mensagem de erro mais amigável
      Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Erro ao fazer login, Verifique suas credenciais e tente novamente!",
      });
  });
    
}
    return (
      <div className="container">
  <div className="content first-content">
    <div className="first-column">
      <h2 className="title title-primary">Olá, bem vindo!</h2>
      <p className="description description-primary">Insira seus dados</p>
      <p className="description description-primary">
        e comece sua jornada conosco
      </p>
    <div><img className="header_logo" src={Logo} alt="" /></div>
    </div>
    <div className="second-column">
      <h2 className="title title-second">VSHub</h2>
      <div className="social-media"></div>
      <p className="description description-second">Preencha as informações:</p>
      <form onSubmit={ fazerLogin } className="form" method="POST">
        <label className="label-input" htmlFor="">
        <FontAwesomeIcon icon={faEnvelope} className="icons"/>
          <input type="email"
          onChange={ (event) => { setEmail(event.target.value) } } // pega o valor digitado e coloca como um valor
          placeholder="Email"
          required
           />
        </label>
        <label className="label-input" htmlFor="">
        <FontAwesomeIcon icon={faLock} className="icons"/>
        <input type="password" 
          onChange={ (event) => { setSenha(event.target.value) } } // pega o valor digitado e coloca como um valor                   
          placeholder="Senha" 
          required
          />
        </label>
        {/* <a className="password" href="#">
          esqueceu a senha?
        </a> */}
        <button className="btn btn-second">Entrar</button>
      </form>
    </div>
  </div>
</div>
    );
}

export default Login;