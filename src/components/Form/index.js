import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

export default function Form() {
  const history = useHistory();
  const [query, setQuery] = useState('');

  async function handleSearchMovie(event) {
    event.preventDefault();

    setQuery('');
    history.push(`/response/${query}`);
  }
  return (
    <form onSubmit={handleSearchMovie}>
      <input
        type="text"
        placeholder="O que deseja assistir hoje ?"
        value={query}
        onChange={(event) => setQuery(event.target.value)}
      />
      <button type="submit">Pesquisar</button>
    </form>
  );
}
