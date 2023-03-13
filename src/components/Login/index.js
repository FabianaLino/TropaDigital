
import { Link } from 'react-router-dom'
import RetanguloFundoPreto from "../../imagens/RetanguloFundoPreto.png";
import LogoAgencia from "../../imagens/LogoAgencia.png";
import NoteBook from "../../imagens/NoteBook.png";
import IconeOcultar from "../../imagens/IconeOcultar.png";


import "./styled.css";

function Login(){
    return (
        <div className="container">

        <div className="container-login-branco">
          <div className="logo-agencia">
            <img src={ LogoAgencia } alt="Logo da Agencia"/>
            <div>
              <div className="login-title">
                <span className="bemvindo">Bem Vindo</span>
                <span className="fonte-ao"> ao</span> 
                <span className="fonte-painel"> Painel</span> 
              </div>   
  
              <div className="input-email"></div>
  
              <div className="input-senha">
                <span className="icone-ocultar"></span>
                <img src={ IconeOcultar } alt="Icone Ocultar Senha"/>
              </div>
            
              <div className="botao-acessar">
              <Link to="/Home"> 
                <button className="button-btn">Acessar</button>
              </Link>                           
              </div>
            </div>
  
          </div>
          <div className="container-login-preto">
            <img className="img-preto" src={ RetanguloFundoPreto } alt="Fundo Preto"/>
            <img className="img-note" src={ NoteBook } alt="Imagem Note Book"/>
          </div>  
        </div>
       
      </div>
    )
}
export default Login;