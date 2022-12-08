import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import Axios from 'axios';
import { Link } from 'react-router-dom';
import * as yup from 'yup';
import { useNavigate, useLocation } from 'react-router-dom';

function Update() {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const path = pathname.split('/');
  const idLocation = path[path.length - 1];

  const validationUsers = yup.object().shape({
    name: yup.string().required('Este campo é obrigatório para cadastrar'),
    email: yup.string().email().required('Campo obrigatório do tipo email'),
    phone: yup
      .number()
      .integer()
      .positive()
      .required('Campo obrigatório e só aceita números'),
  });

  const handleClickUpdate = () => {
    Axios.patch(`http://localhost:3001/users/${idLocation}`, {
      name: document.getElementById('name').value,
      email: document.getElementById('email').value,
      phone: document.getElementById('phone').value,
    }).then(({ data }) => {
      console.log(data);
      alert(data.msg);
      navigate('/registered');
    });
  };

  return (
    <div>
      <Link to="/" className="link">
        Voltar para Página Inicial
      </Link>
      <div className="container">
        <h1>Atualizar Usuário</h1>
        <Formik
          initialValues={{}}
          validationSchema={validationUsers}
          onSubmit={handleClickUpdate}
        >
          <Form className="form-users">
            <Field
              className="field-input"
              id="name"
              name="name"
              placeholder="Nome"
            />
            <ErrorMessage component="span" name="name" className="error" />
            <Field
              className="field-input"
              id="email"
              name="email"
              placeholder="Email"
            />
            <ErrorMessage component="span" name="email" className="error" />
            <Field
              className="field-input"
              id="phone"
              name="phone"
              placeholder="Telefone"
            />
            <ErrorMessage component="span" name="phone" className="error" />
            <button className="btn-submit" type="submit">
              Atualizar
            </button>
          </Form>
        </Formik>
      </div>
    </div>
  );
}

export default Update;
