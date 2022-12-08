import React from 'react';
import { Formik, Form, Field } from 'formik';
import Axios from 'axios';
import { Link } from 'react-router-dom';
import './pages-css/productionData.css';

function ProductionData() {
  const handleData = () => {
    Axios.post('http://localhost:3001/production', {
      type: document.getElementsByClassName('radio')[0].value,
      quantity: document.getElementById('quantity').value,
      attractions: document.getElementById('attractions').value,
      suggestions: document.getElementById('suggestions').value,
      url_image: document.getElementById('url_image').value,
    }).then((response) => {
      alert(response.data.msg);
      window.location.reload(true);
    });
  };

  return (
    <div>
      <Link to="/" className="link">
        Voltar para Página Inicial
      </Link>
      <h1 className="title1">Dados para Produção</h1>
      <div>
        <Formik initialValues={{}} onSubmit={handleData}>
          <Form className="containers">
            <label htmlFor="" className="label">
              Tipo Revistinha:
              <label htmlFor="convite">
                <Field
                  type="radio"
                  id="convite"
                  className="radio"
                  name="type"
                  value="Convite"
                />
                Convite
              </label>
              <label htmlFor="lembranca">
                <Field
                  type="radio"
                  className="radio"
                  id="lembranca"
                  name="type"
                  value="Lembrança"
                />
                Lembrança
              </label>
              <label htmlFor="convite-lembranca">
                <Field
                  type="radio"
                  id="convite-lembranca"
                  name="type"
                  value="Convite-Lembrança"
                  className="radio"
                />
                Convite-Lembrança
              </label>
            </label>
            <label htmlFor="quantity" className='label-quantity'>
              Quantidade: 
              <Field name="quantity" id="quantity" className="quantity" />
            </label>
            <label htmlFor="attractions" className='label-quantity'>
              Atrações do evento:
              <Field
                as="textarea"
                rows="5"
                cols="18"
                name="attractions"
                id="attractions"
                className="quantity"
              />
            </label>
            <label htmlFor="suggestions">
              <Field
                type="checkbox"
                name="check"
                id="suggestions"
                value="Aceito sujestões"
                className="checkbox"
              />
              Aceito sujestões de texto para a capa
            </label>
            <label htmlFor="url_image" className="space">
              Imagens:
              <Field type="file" name="url_image" id="url_image" className="space" />
            </label>
            <button className="btn-submit btn-space" type="submit">
              Cadastrar
            </button>
          </Form>
        </Formik>
      </div>
    </div>
  );
}

export default ProductionData;
