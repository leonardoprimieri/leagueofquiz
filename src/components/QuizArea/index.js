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
import { useCallback, useEffect, useState } from 'react';
import Button from '../Button';

export default function QuizArea() {
  const [index, setIndex] = useState(0);

  const [response, setResponse] = useState();

  function handleClick(orientation) {
    if (orientation === 'next') {
      if (index < db.questions.length - 1) {
        setIndex(index + 1);
      } else {
        setIndex(db.questions.length - 1);
      }
    } else {
      if (index === 0) {
        setIndex(0);
      } else {
        setIndex(index - 1);
      }
    }
  }

  function handleAlternativeClick({ target }) {
    setResponse(target.innerText);

    setTimeout(() => {
      handleClick('next');
    }, 1000);
  }

  return (
    <Container>
      <Content>
        <ContentInfo>
          <h1>
            {index + 1} / {db.questions.length}
          </h1>
        </ContentInfo>

        <ContentQuiz>
          <h1>{db.questions[index].title}</h1>
          <h3>{db.questions[index].description}</h3>
          <ContentQuizImage>
            <img src={db.questions[index].image} />
          </ContentQuizImage>
          <ContentQuizSelection>
            {db.questions[index].alternatives.map((alternative, index) => (
              <QuizSelectionItem key={index} onClick={handleAlternativeClick}>
                {alternative}
              </QuizSelectionItem>
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
