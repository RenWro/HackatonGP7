import { useEffect, useState } from "react";
// import logo from "../../assets/img/logo.svg";
import "./style.css"
import { Link } from "react-router-dom"
import secureLocalStorage from "react-secure-storage";

function Header(){

        const [ usuarioLogado, setUsuarioLogado ] = useState<any>()


        // executa toda vez que é carregado quando tem []

        useEffect(()=> {
            verificarUsuarioLogado()
        },[])



        //verifica se tem usuario logado

        function verificarUsuarioLogado() {
            if (secureLocalStorage.getItem('user')) {
                setUsuarioLogado(secureLocalStorage.getItem('user'))
            }
        }

    return(
        <>
        <header>             
                    {
                    // condiçao ? caso true : caso false
                    usuarioLogado ?
                    <span style={{color: "white"}}>Olá, {usuarioLogado.user.nome.split(' ')[0]}!</span>
                    : 
                    <Link className="header_botao_login" to = 'Login'></Link>
                }
        </header>
        </>
    )
}
export default Header;