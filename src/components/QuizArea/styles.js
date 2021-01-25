import styled from 'styled-components';

export const Container = styled.aside`
  background: ${({ theme }) => theme.colors.primary};
  width: 40rem;

  display: flex;
  align-items: flex-start;
  flex-direction: column;

  color: ${({ theme }) => theme.colors.contrastText};
  padding: 1rem;
`;

export const Content = styled.div``;

export const ContentInfo = styled.div`
  margin: 1rem;
`;

export const ContentQuiz = styled.div`
  h3 {
    margin: 1rem 0;
    color: ${({ theme }) => theme.colors.secondary};
  }
  margin: 1rem;
`;

export const ContentQuizSelection = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
`;

export const QuizSelectionItem = styled.button`
  background: ${({ theme }) => theme.colors.contrastText};
  color: ${({ theme }) => theme.colors.primary};
  padding: 2rem;
  border-radius: 0.5rem;

  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  width: 100%;
  transition: all 400ms ease;
  font-weight: bold;
  border: 0;
  font-size: 1.1rem;

  &:hover {
    background: ${({ theme }) => theme.colors.secondary};
    color: ${({ theme }) => theme.colors.contrastText};
  }
`;

export const ContentQuizImage = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 1rem 0;

  img {
    border-radius: 0.5rem;
    width: 100%;
    height: auto;
    border: 2px solid ${({ theme }) => theme.colors.secondary};
  }
`;
