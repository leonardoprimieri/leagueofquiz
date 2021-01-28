import styled from 'styled-components';

export const Container = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.8);
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Content = styled.section`
  box-shadow: 1px 1px 11px rgba(0, 0, 0, 1);

  background: aliceblue;
  width: 50%;
  height: 50%;
  border-radius: 0.5rem;

  color: black;

  @media (max-width: 770px) {
    width: 80%;
  }
`;

export const ContentImage = styled.section`
  border-radius: 0.5rem;
  background-image: url(${(props) => props.background});
  width: 100%;
  height: 100%;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: 0 0;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 1rem;

  a {
    margin-top: 10rem;
  }
`;
