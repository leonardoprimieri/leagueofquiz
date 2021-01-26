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

  const [red, setRed] = useState();
  const [green, setGreen] = useState();
  const [rightCount, setRightCount] = useState(0);

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
    setGreen('');
    setRed('');
  }

  function handleAlternativeClick({ target }) {
    if (
      db.questions[index].answer === target.innerText &&
      rightCount < db.questions.length
    ) {
      setRightCount(rightCount + 1);
    }

    setGreen('#44bd32');
    setRed('#e84118');
    setTimeout(() => {
      handleClick('next');
    }, 1000);
  }

  return (
    <>
      <Container>
        <Content>
          <ContentInfo>
            <h1>
              {index + 1} / {db.questions.length}
            </h1>
            <span>
              Você acertou {rightCount} de {db.questions.length}
            </span>
          </ContentInfo>
          {index === db.questions.length && alert('acabou')}
          <ContentQuiz>
            <h1>{db.questions[index].title}</h1>
            <h3>{db.questions[index].description}</h3>
            <ContentQuizImage>
              <img src={db.questions[index].image} />
            </ContentQuizImage>
            <ContentQuizSelection>
              {db.questions[index].alternatives.map((alternative, id) => (
                <QuizSelectionItem
                  key={id}
                  onClick={handleAlternativeClick}
                  style={
                    db.questions[index].answer === alternative
                      ? { background: green }
                      : { background: red }
                  }
                >
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
    </>
  );
}
