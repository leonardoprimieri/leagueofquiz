import styled from 'styled-components';
import QuizArea from '../src/components/QuizArea';

import db from '../db.json';

const Container = styled.main`
  background: url(${({ background }) => background}) no-repeat;
  background-size: cover;
  display: flex;
  height: 100vh;
`;

export default function Home() {
  return (
    <Container background={db.bg}>
      <QuizArea />
    </Container>
  );
}
