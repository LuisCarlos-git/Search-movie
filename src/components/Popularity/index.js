import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import api from '../../services/api';

import { Container, Scroll, Cards } from './styles';

export default function List() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function handleListPopularity() {
      const response = await api.get('/discover/movie', {
        params: {
          api_key: '3d6bcb8efbf4577208ea3fbb4b2c105f',
          vote_count: 'popularity',
          language: 'pt',
        },
      });
      const { results } = response.data;
      setMovies(results);
    }
    handleListPopularity();
  }, []);

  return (
    <Container>
      <div>
        <h1>Os mais populares</h1>
      </div>

      <Scroll>
        {movies.map((movie) => (
          <Link to={`/details/${movie.id}`} key={String(movie.id)}>
            <Cards>
              <img
                src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
                alt=""
              />
              <span>{movie.title}</span>
            </Cards>
          </Link>
        ))}
      </Scroll>
    </Container>
  );
}
