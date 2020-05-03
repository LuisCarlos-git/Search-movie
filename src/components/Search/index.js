import React from 'react';

import Form from '../Form';

import { Container } from './styles';

export default function Search() {
  return (
    <>
      <Container>
        <div>
          <h1>
            Seja bem vindo(a). <br />O que você deseja assistir hoje ?
          </h1>
        </div>

        <Form />
      </Container>
    </>
  );
}
