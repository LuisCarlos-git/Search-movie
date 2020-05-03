import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 85px;
  background: #191920;
  padding: 0 30px;

  display: flex;
  justify-content: space-between;
  align-items: center;
  align-self: center;

  @media only screen and (max-width: 820px) {
    justify-content: center;
    align-items: center;
  }

  form {
    width: 40%;
    display: flex;
    flex-direction: row;
    input {
      background: #fff;
      height: 35px;
      width: 80%;
      padding: 0 15px;
      border: 0;
      border-radius: 5px 0px 0px 5px;

      &::placeholder {
        font-weight: bold;
      }
    }

    button {
      background: red;
      width: 20%;
      border: 0;
      background-image: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      color: #fff;
      font-weight: bold;
      border-radius: 0px 5px 5px 0px;

      &:hover {
        opacity: 0.9;
      }
    }
  }
`;
