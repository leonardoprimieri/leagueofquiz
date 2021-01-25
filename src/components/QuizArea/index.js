import { Container, Content } from './styles';

import db from '../../../db.json';

export default function QuizArea() {
  return (
    <Container>
      <Content>
        <h1>{db.title}</h1>
        <span>{db.description}</span>
      </Content>
    </Container>
  );
}
