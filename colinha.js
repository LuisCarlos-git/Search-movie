import React, { useState, useEffect } from "react";
import api from "./services/api";

function App() {
  const [res, setRes] = useState([]);
  const [page, setPage] = useState(1);
  const [maxPage, setMaxPage] = useState(null);

  useEffect(() => {
    async function loadTest() {
      const response = await api.get("/discover/movie", {
        params: {
         ,
          page,
          language: "pt",
          ,
        },
      });
      const { results } = response.data;
      const { total_pages } = response.data;
      setRes(results);
      setMaxPage(total_pages);
    }
    loadTest();
  }, [page]);

  console.log(maxPage);

  function next() {
    const nextPage = page >= maxPage ? true : false;

    if (!nextPage) {
      setPage(page + 1);
    }
  }

  function prev() {
    if (page > 1) {
      setPage(page - 1);
    }
  }

  console.log(res);

  return (
    <div className="App">
      <span>Count pages: {page}</span>
      <span>Total pages: {maxPage}</span>
      <button type="button" onClick={prev}>
        prev
      </button>
      <button type="button" onClick={next}>
        next
      </button>
      {res.map((r) => (
        <div>
          <img
            src={`https://image.tmdb.org/t/p/original/${r.poster_path}`}
            alt=""
            style={{ width: 300 }}
          />
        </div>
      ))}
    </div>
  );
}

export default App;
-----------------------------------------------------------------------------------------------
import React, { useState } from 'react';
import { AiOutlineEllipsis } from 'react-icons/ai';
import { TiHeartOutline, TiPlusOutline } from 'react-icons/ti';

import { Container, Menu, Percent, Card } from './styles';

export default function App() {
  const [visible, setVisible] = useState(false);
  return (
    <Container>
      <Card>
        <button type="button" onClick={() => setVisible(!visible)}>
          <AiOutlineEllipsis size={25} color="#FFF" />
        </button>
        <img
          src="https://www.torredevigilancia.com/wp-content/uploads/2019/10/coringa-55.jpg"
          alt=""
        />
        <Menu visible={visible}>
          <div>
            <ul>
              <li>
                <button type="button">
                  <TiPlusOutline size={25} color="#FFF" />
                </button>
              </li>
              <li>
                <button type="button">
                  <TiHeartOutline size={25} color="#FFF" />
                </button>
              </li>
              <li>
                <button type="button">
                  <AiOutlineEllipsis size={25} color="#FFF" />
                </button>
              </li>
            </ul>
          </div>
        </Menu>

        <Percent visible={visible} width={30}>
          20%
        </Percent>
      </Card>
    </Container>
  );
}
