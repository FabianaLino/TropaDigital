import { Link } from 'react-router-dom'
import React from 'react';
import LogoAgencia from "../../imagens/LogoAgencia.png";
import PaisagemPraia from "../../imagens/PaisagemPraia.png";


import "./home.css";

function Home() {
    const list= new Array(6).fill(' ');
    return (
        <div className="container-home">
            <div className="bloco-menu">
                <div className="logo-agencia-menu">
                    <img src={ LogoAgencia } alt="Logo da Agencia"/>
                </div> 
                    <nav>
                        <ul>
                            <Link to="/">
                                <li className="icon-inicio"><button className="botao-inicio">Início</button></li>                                                             
                            </Link>
                            <li>Contatos</li>
                            <li className="icon-relatorio">Relatóio</li>
                            <li>Conatos</li>
                            <li>Contatos</li>
                            <li>Contatos</li>                            
                        </ul>
                    </nav>                          
                </div>           
            
            <div className="cabecalho">Olá
                <span className="usuario"> Usuário</span> 
            </div>
            
            <div className="bloco-praia">
                <div className="imagens-praia">
                    {
                        list?.map((item, index) => (
                                                      
                            <img key={index} className='PaisagemPraia' src= { PaisagemPraia } alt="Imagens da Praia"/>
                            
                        ))
                    }
                </div>
            </div>
        </div>     
    )
}

export default Home;