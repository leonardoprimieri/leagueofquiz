import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  button {
    width: 100%;
    border-radius: 0.5rem;
    cursor: pointer;
    padding: 1rem 2rem;
    border: 0;
    background: ${({ theme }) => theme.colors.secondary};
    color: ${({ theme }) => theme.colors.contrastText};
    font-weight: bold;
    font-size: 1rem;
    transition: all 400ms ease;

    &.next__question {
      background: transparent;
      border: 1px solid ${({ theme }) => theme.colors.secondary};
    }
  }
`;
