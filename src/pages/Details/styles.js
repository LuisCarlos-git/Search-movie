import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100%;
`;

export const Header = styled.div`
  background-image: url(${({ bg }) => bg});
  background-size: cover;
  background-position: center;
`;

export const InfoContainer = styled.div`
  background-color: rgba(19, 19, 19, 0.8);
  width: 100%;
  padding: 30px;
  display: flex;
`;
export const Image = styled.img`
  border-radius: 5px;
  border: 5px solid #fff;
  margin-right: 20px;
  width: 300px;
`;
export const Title = styled.div`
  width: 100%;
  border-bottom: 1px solid rgba(255, 255, 255, 0.2);

  h1 {
    color: #fff;
    padding-bottom: 5px;
  }
`;
export const Sinopse = styled.div`
  padding-top: 5px;
  width: 100%;
  h2 {
    color: #fff;
    padding: 8px 0;
  }

  p {
    color: #fff;
    font-size: 18px;
  }
`;
export const Popularity = styled.div`
  padding-top: 5px;
  width: 100%;

  h2 {
    color: #fff;
    padding: 10px 0;
  }

  > div {
    background-color: rgba(255, 255, 255, 0.4);
    border-radius: 20px;
    width: 100%;
  }
`;
export const Percent = styled.div`
  width: ${({ width }) => width}%;
  border-radius: 20px;
  border: 1px solid #fff;
  text-align: center;
  background-image: linear-gradient(135deg, #667eea 0%, #764ba2 100%);

  span {
    color: #fff;
    font-weight: bold;
  }
`;

export const TrailersContainer = styled.div`
  width: 100%;
  margin: 20px 0 100px;

  div h1 {
    border-bottom: 1px solid rgba(19, 19, 19, 20);
    width: calc(100% - 60px);
    margin: 10px auto;
    padding: 10px 30px;
  }
`;
export const Trailers = styled.div`
  width: 100%;
  height: 600px;
  padding: 30px;
  display: flex;
  justify-content: center;
  align-items: center;

  iframe {
    width: 100%;
    height: 100%;
  }
`;
