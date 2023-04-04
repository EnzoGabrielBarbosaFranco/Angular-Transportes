import React from 'react';
import './styles.css';
import logoEmpresa from '../imagens/logoEmpresa.png'

function Header() {
    return (
        <header>
                <img src={logoEmpresa} className='logoEmpresa'></img>
            <h1 className='logo'> Angular Transportes Premium
            </h1>
            <nav>
                <ul>
                    <li>
                        <a href='#'> Sobre Nós</a>
                    </li>
                    <li>
                        <a href='#'> Contato</a>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;
