import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import Axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import * as yup from 'yup';
import './pages-css/registration.css';

function Registration() {
  const navigate = useNavigate();

  const handleClickUsers = (value) => {
    Axios.post('http://localhost:3001/users', {
      name: value.name,
      address: value.address,
      district: value.district,
      zip_code: value.zip_code,
      city: value.city,
      state: value.state,
      email: value.email,
      phone: value.phone,
    })
      .then((response) => {
        alert(response.data.msg);
        navigate('/registered');
      })
      .catch((error) => {
        alert(error.response.data.msg);
        window.location.reload(true);
      });
  };

  const validationUsers = yup.object().shape({
    name: yup.string().required('Este campo é obrigatório para cadastrar'),
    email: yup.string().email().required('Campo obrigatório do tipo email'),
    phone: yup
      .number()
      .integer()
      .positive()
      .required('Campo obrigatório e só aceita números'),
  });

  return (
    <div>
      <Link to="/" className="link">
        Voltar para Página Inicial
      </Link>
      <div className="container">
        <h1>Cadastrar Usuário</h1>
        <Formik
          initialValues={{}}
          onSubmit={handleClickUsers}
          validationSchema={validationUsers}
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
              id="address"
              name="address"
              placeholder="Endereço"
            />
            <Field
              className="field-input"
              id="district"
              name="district"
              placeholder="Bairro"
            />
            <Field
              className="field-input"
              id="zip_code"
              name="zip_code"
              placeholder="CEP"
            />
            <Field
              className="field-input"
              id="city"
              name="city"
              placeholder="Cidade"
            />
            <Field
              className="field-input"
              id="state"
              name="state"
              placeholder="Estado"
            />
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
              Cadastrar
            </button>
          </Form>
        </Formik>
        <Link to="/registered" className="link space">
          Visualizar Usuários já Cadastrados
        </Link>
      </div>
    </div>
  );
}

export default Registration;
