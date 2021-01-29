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
  border-radius: 0.5rem;

  color: black;

  @media (max-width: 770px) {
    width: 80%;
  }
`;

export const ContentImage = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr;
  justify-content: center;
  align-items: center;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 0.5rem 0 0 0.5rem;
  }
`;

export const WinsInfo = styled.section`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
  padding: 1rem;

  h1 {
    font-size: 1.3rem;
  }

  a {
    margin-top: 1rem;
    display: flex;
    justify-content: center;
    align-items: center;
    background: ${({ theme }) => theme.colors.secondary};
    border-radius: 0.5rem;
    padding: 1rem;
    color: aliceblue;
    svg {
      margin-right: 1rem;
    }
  }
`;
