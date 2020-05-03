import styled from 'styled-components';

export const Container = styled.div`
  margin: 10px auto;

  width: 95%;

  div {
    padding: 10px;
    letter-spacing: 2px;

    border-bottom: 2px solid #ddd;

    h1 {
      color: #333;
    }
  }
`;
export const Scroll = styled.ul`
  display: flex;
  flex-direction: row;
  overflow-x: scroll;
  padding-bottom: 30px;
  margin-bottom: 40px;

  a {
    margin: 20px 15px;
  }
`;
export const Cards = styled.li`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 5px;
  background: #ddd;
  border-radius: 5px;

  span {
    height: 45px;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    font-size: 0.9rem;
    font-weight: bold;
    color: #444;
  }
  img {
    height: 350px;
    border-radius: 5px;
  }
`;
