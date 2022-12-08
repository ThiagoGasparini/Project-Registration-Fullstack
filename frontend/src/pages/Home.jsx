import React from 'react';
import { Link } from 'react-router-dom';
import './pages-css/home.css';

function Home() {
  return (
    <div>
      <h1 className='title1'>Bem Vindo ao formulário de cadastros</h1>
      <div className="home">
        <Link className="link home-link" to="/registration">
          Cadastrar Usuário
        </Link>
        <Link className="link home-link" to="/production">
          Cadastrar Dados
        </Link>
      </div>
    </div>
  );
}

export default Home;
