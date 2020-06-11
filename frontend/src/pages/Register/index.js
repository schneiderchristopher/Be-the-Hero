import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';

import api from '../../services/api';
import logoImg from '../../assets/logo.svg';

import './styles.css';
export default function Register() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [whatsApp, setWhatsApp] = useState('');
  const [cidade, setCidade] = useState('');
  const [uf, setUf] = useState('');

  function handleRegister(e) {
    e.preventDefault();
    const data = {
      name,
      email,
      whatsApp,
      cidade,
      uf
    };
  }
  return (
    <div className="register-container">
      <div className="content">
        <section>
          <img src={logoImg} alt="Be the Hero" />
          <h1>Cadastro</h1>
          <p>Faça seu cadastro, entre na plataforma e ajude pessoas a encontrarem os casos de sua ONG.</p>

          <Link className="back-link" to="/">
            <FiArrowLeft size={16} color="#E02041" />
            Não tenho cadastro
          </Link>
        </section>
        <form onSubmit={handleRegister}>
          <input placeholder="Nome da ONG" value={name} onChange={e => setName(e.target.value)} />
          <input type="email" placeholder="E-mail" value={email} onChange={e => setEmail(e.target.value)} />
          <input placeholder="WhatsApp" value={whatsApp} onChange={e => setWhatsApp(e.target.value)} />
          <div className="input-group">
            <input placeholder="Cidade" value={cidade} onChange={e => setCidade(e.target.value)} />
            <input placeholder="UF" style={{ width: 80 }} value={uf} onChange={e => setUf(e.target.value)} />
          </div>

          <button className="button" type="submit">
            Cadastrar
          </button>
        </form>
      </div>
    </div>
  );
}
