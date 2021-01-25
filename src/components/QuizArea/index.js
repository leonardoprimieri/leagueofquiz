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
import { useState } from 'react';
import Button from '../Button';

export default function QuizArea() {
  const [index, setIndex] = useState(0);

  function handleClick(orientation) {
    if (orientation === 'next') {
      setIndex(index + 1);
    } else {
      setIndex(index - 1);
    }
  }

  return (
    <Container>
      <Content>
        {/* <ContentInfo>
          <h1>{db.title}</h1>
          <span>{db.description}</span>
        </ContentInfo> */}
        <ContentQuiz>
          <h1>{db.questions[index].title}</h1>
          <h3>{db.questions[index].description}</h3>
          <ContentQuizImage>
            <img src={db.questions[index].image} />
          </ContentQuizImage>
          <ContentQuizSelection>
            {db.questions[index].alternatives.map((alternative) => (
              <QuizSelectionItem>{alternative}</QuizSelectionItem>
            ))}
            <Button handleClick={() => handleClick('previous')} index={index}>
              Pergunta Anterior
            </Button>
            <Button
              className="next__question"
              handleClick={() => handleClick('next')}
              index={index}
            >
              Próxima Pergunta
            </Button>
          </ContentQuizSelection>
        </ContentQuiz>
      </Content>
    </Container>
  );
}
