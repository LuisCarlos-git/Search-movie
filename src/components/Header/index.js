import React from 'react';
import { useLocation, Link } from 'react-router-dom';

import Form from '../Form';

import { Container } from './styles';

import logo from '../../assets/logo.png';

export default function Header() {
  const location = useLocation();
  return (
    <Container>
      <div>
        <Link to="/">
          <img src={logo} alt="" />
        </Link>
      </div>

      {location.pathname !== '/' && <Form />}
    </Container>
  );
}
