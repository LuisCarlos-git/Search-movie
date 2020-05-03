import React from 'react';

import { Container } from './styles';

import Search from '../../components/Search';
import Popularity from '../../components/Popularity';

export default function Dashboard() {
  return (
    <Container>
      <Search />
      <Popularity />
    </Container>
  );
}
