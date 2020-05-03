import styled from 'styled-components';

import bgImage from '../../assets/searchbg.png';

export const Container = styled.div`
  background: url(${bgImage});
  width: 100%;
  height: 264px;
  padding: 0 30px;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  div {
    padding: 10px 0;

    h1 {
      color: #fff;
      font-size: 2.5rem;
    }
    @media only screen and (max-width: 820px) {
      h1 {
        font-size: 2rem;
      }
    }

    @media only screen and (max-width: 570px) {
      h1 {
        margin: 30px 0;
        font-size: 1.5rem;
      }
    }
  }

  form {
    width: 80vw;
    margin: 50px 0;
    position: relative;

    input {
      width: 70vw;
      height: 45px;
      padding: 0 15px;
      border-radius: 23px;
      border: 0;

      &::placeholder {
        font-weight: bold;
      }
    }

    button {
      color: #fff;
      position: absolute;
      top: 0;
      right: 12.3%;
      height: 45px;
      width: 160px;
      border-radius: 25px;
      border: 0;
      background-image: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      font-weight: bold;

      &:hover {
        opacity: 0.9;
      }
    }

    @media only screen and (max-width: 820px) {
      display: flex;
      flex-direction: column;

      button {
        width: 70vw;
        margin-top: 5px;
        position: initial;
      }
    }

    @media only screen and (max-width: 570px) {
      margin: 20px 0;
    }
  }
`;
