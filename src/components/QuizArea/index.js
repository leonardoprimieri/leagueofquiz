import {
  Container,
  Content,
  ContentInfo,
  ContentQuiz,
  ContentQuizSelection,
  QuizSelectionItem,
  ContentQuizImage,
} from './styles';

import db from '../../../db.json';

export default function QuizArea() {
  return (
    <Container>
      <Content>
        <ContentInfo>
          <h1>{db.title}</h1>
          <span>{db.description}</span>
        </ContentInfo>
        <ContentQuiz>
          <h1>Qual é esse champ?</h1>
          <h3>Essa é pra aquecer</h3>
          <ContentQuizImage>
            <img src={db.questions[0].image} />
          </ContentQuizImage>
          <ContentQuizSelection>
            <QuizSelectionItem>Zac</QuizSelectionItem>
            <QuizSelectionItem>Graves</QuizSelectionItem>
            <QuizSelectionItem>Aurelion Sol</QuizSelectionItem>
            <QuizSelectionItem>Jax</QuizSelectionItem>
          </ContentQuizSelection>
        </ContentQuiz>
      </Content>
    </Container>
  );
}
