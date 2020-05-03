import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import api from '../../services/api';

import {
  Container,
  Header,
  InfoContainer,
  Image,
  Title,
  Popularity,
  Percent,
  Sinopse,
  TrailersContainer,
  Trailers,
} from './styles';

export default function Details() {
  const { movie_id } = useParams();
  const [info, setInfo] = useState([]);
  const [trailers, setTrailers] = useState([]);

  useEffect(() => {
    async function handleDetails() {
      const response = await api.get(`/movie/${movie_id}`, {
        params: {
          api_key: '3d6bcb8efbf4577208ea3fbb4b2c105f',
          language: 'pt',
          append_to_response: 'videos',
        },
      });
      setInfo(response.data);
      setTrailers(response.data.videos.results);
    }

    handleDetails();
  }, [movie_id]);

  return (
    <Container>
      <Header bg={`https://image.tmdb.org/t/p/original/${info.backdrop_path}`}>
        <InfoContainer>
          <Image
            src={`https://image.tmdb.org/t/p/original/${info.poster_path}`}
          />
          <div>
            <Title>
              <h1>{info.title}</h1>
            </Title>
            <Sinopse>
              <h2>Sinopse</h2>
              <p>{info.overview}</p>
            </Sinopse>

            <Popularity>
              <h2>Popularidade</h2>
              <div>
                <Percent width={Number(info.vote_average * 10).toFixed()}>
                  <span>{Number(info.vote_average * 10).toFixed()}%</span>
                </Percent>
              </div>
            </Popularity>
          </div>
        </InfoContainer>
      </Header>

      <TrailersContainer>
        <div>
          <h1>Trailer</h1>
        </div>
        {trailers.map((video) => (
          <Trailers key={String(video.id)}>
            <iframe
              key={video.key}
              type="text/html"
              src={`https://www.youtube.com/embed/${video.key}?autoplay=0&origin=http://localhost:3000`}
              frameBorder="0"
              allowFullScreen
              title="YouTube"
              className="youtube-player"
            />
          </Trailers>
        ))}
      </TrailersContainer>
    </Container>
  );
}
