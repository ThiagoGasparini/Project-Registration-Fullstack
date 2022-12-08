import React, { useEffect, useState } from 'react';
import Axios from 'axios';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import './pages-css/registered.css';

function Registered() {
  const [users, setUsers] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    Axios.get('http://localhost:3001/users').then((response) => {
      setUsers(response.data);
    });
  }, []);

  const handleDelete = async (id) => {
    Axios.delete(`http://localhost:3001/users/${id}`).then(({ data }) => {
      const newArray = users.filter((user) => user.id !== id);
      setUsers(newArray);
    });
    window.location.reload(true);
  };

  const handleUpdate = async (id) => {
    navigate(`/update/${id}`);
  }

  return (
    <div>
      <Link to="/" className="link">
        Voltar para Página Inicial
      </Link>
      <h1 className='title1'>Usuários cadastrados</h1>
      <div className='container1'>
        {users.length ? (
          users.map((user) => (
            <div className="card">
              <p key={user.id}>ID: {user.id}</p>
              <p key={user.id}>Nome: {user.name}</p>
              <p key={user.id}>Telefone: {user.phone}</p>
              <button className="btn-del" onClick={() => handleDelete(user.id)}>
                Deletar Usuário
              </button>
              <button className="btn-update" onClick={() => handleUpdate(user.id)}>
                Atualizar Usuário
              </button>
            </div>
          ))
        ) : (
          <p className="condition">Nenhum Usuário Cadastrado!</p>
        )}
      </div>
    </div>
  );
}

export default Registered;
