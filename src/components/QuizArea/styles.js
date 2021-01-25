import styled from 'styled-components';

export const Container = styled.aside`
  background: ${({ theme }) => theme.colors.primary};
  width: 40rem;

  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-direction: column;

  color: ${({ theme }) => theme.colors.contrastText};
`;

export const Content = styled.div`
  margin: 1rem;

  h1,
  span {
    margin: 1rem;
  }
`;
