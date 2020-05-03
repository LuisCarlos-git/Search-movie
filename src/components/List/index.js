import React, { useState, useEffect } from 'react';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import { useParams, useHistory } from 'react-router-dom';

import api from '../../services/api';

import { Container, Prev, Next, InfoPage } from './styles';
import img from '../../assets/notFound.png';

export default function List() {
  const { query } = useParams();
  const history = useHistory();

  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);
  const [maxPage, setMaxPage] = useState(null);

  useEffect(() => {
    async function handleMovies() {
      const response = await api.get('/search/movie', {
        params: {
          api_key: '3d6bcb8efbf4577208ea3fbb4b2c105f',
          query,
          page,
          language: 'pt',
        },
      });
      const { results } = response.data;
      const { total_pages } = response.data;
      setMaxPage(total_pages);
      setMovies(results);
    }

    handleMovies();
  }, [query, page]);

  function next() {
    const nextPage = page >= maxPage;

    if (!nextPage) {
      setPage(page + 1);
    }
  }

  function prev() {
    if (page > 1) {
      setPage(page - 1);
    }
  }

  return (
    <Container>
      <ul>
        {movies.map((movie) => (
          <li key={movie.id}>
            <div>
              <img
                src={
                  movie.poster_path === null
                    ? img
                    : `https://image.tmdb.org/t/p/original/${movie.poster_path}`
                }
                alt=""
              />
              <div>
                <span>{movie.title}</span>
                <p>{movie.overview}</p>
              </div>
            </div>
            <button
              type="button"
              onClick={() => history.push(`/details/${movie.id}`)}
            >
              Detalhes
            </button>
          </li>
        ))}
      </ul>

      <InfoPage>
        <Prev type="button" onClick={prev}>
          <IoIosArrowBack size={40} color="#191920" />
        </Prev>
        <div>
          <strong>Pagina: {page}</strong>
          <p>Total de paginas: {maxPage}</p>
        </div>
        <Next type="button" onClick={next}>
          <IoIosArrowForward size={40} color="#191920" />
        </Next>
      </InfoPage>
    </Container>
  );
}
