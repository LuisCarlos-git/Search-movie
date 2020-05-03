import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  ul {
    display: flex;
    flex-direction: column;
    max-width: 950px;
    margin: 0 auto 70px;

    li {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
      align-self: center;
      width: 100%;
      margin: 20px 0;
      padding: 0 20px;
      border: 1px solid rgba(55, 55, 55, 0.3);
      border-radius: 5px;
      
      img {
        width: 70px;
        border-radius: 5px;
      }
      button {
        width: 100%;
        min-width: 150px;
        max-width: 150px;
        height: 35px;
        background-image: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
        border: 0;
        color #fff;
        font-weight: bold;
        border-radius: 5px;
      }
    }

    div {
      display: flex;
      align-self: center;
      align-items: center;
      justify-content: space-around;
      padding: 5px;

      div {
        width: 100%;

        span {
          font-size: 16px;
          color: #333;
          padding: 10px 10px;
          font-weight: bold;
        }

        p {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          text-overflow: ellipsis;
          overflow: hidden;
          margin-left: 10px;
          margin-top: 10px;
          color: #666;
        }
      }
    }
    
  }
`;

export const Next = styled.button`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  background: transparent;

  display: flex;
  justify-content: center;
  align-items: center;
  border: 0;
`;
export const Prev = styled.button`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  background: transparent;
  display: flex;
  justify-content: center;
  border: 0;
  align-items: center;
`;

export const InfoPage = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  padding: 30px 0;

  strong {
    font-size: 30px;
    color: #555;
  }

  p {
    font-size: 20px;
    color: #555;
  }
`;
