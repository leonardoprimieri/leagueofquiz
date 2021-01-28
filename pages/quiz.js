import Head from 'next/head';
import Link from 'next/link';
import { useState } from 'react';
import styled from 'styled-components';
import db from '../db.json';
import Button from '../src/components/Button';

import { FiArrowLeft } from 'react-icons/fi';
import Modal from '../src/components/Modal';

export const Container = styled.aside`
  background: ${({ theme }) => theme.colors.primary};
  width: 40rem;
  display: flex;
  align-items: flex-start;
  flex-direction: column;

  color: ${({ theme }) => theme.colors.contrastText};
  padding: 1rem;
  height: 100vh;
`;

export const Content = styled.div`
  svg {
    border-radius: 0.5rem;
    width: 2rem;
    height: 2rem;
  }

  a {
    color: aliceblue;
    cursor: pointer;
  }
`;

export const ContentInfo = styled.div`
  margin: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const ContentQuiz = styled.div`
  h4 {
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
  padding: 1rem;
  border-radius: 0.5rem;

  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  width: 100%;
  max-width: 20rem;
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
    width: 36rem;
    height: 20rem;
    object-fit: cover;

    border: 2px solid ${({ theme }) => theme.colors.secondary};
  }
`;

export const RightContainer = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  color: white;
  width: 100%;
`;

export default function QuizArea() {
  const [index, setIndex] = useState(0);
  const [redColor, setredColor] = useState('');
  const [greenColor, setgreenColor] = useState('');
  const [rightCount, setRightCount] = useState(0);
  const [modalVisible, setModalVisible] = useState(false);

  function handleClick(orientation) {
    if (index === db.questions.length - 1 && orientation === 'next') {
      setModalVisible(true);
    }

    if (orientation === 'next') {
      if (index < db.questions.length - 1) {
        setIndex(index + 1);
      } else {
        setIndex(db.questions.length - 1);
      }
    } else if (index === 0) {
      setIndex(0);
    } else {
      setIndex(index - 1);
    }
    setgreenColor('');
    setredColor('');
  }

  function handleAlternativeClick({ target }) {
    if (
      db.questions[index].answer === target.innerText &&
      rightCount < db.questions.length
    ) {
      setRightCount(rightCount + 1);
    }

    setgreenColor('#44bd32');
    setredColor('#e84118');
    setTimeout(() => {
      handleClick('next');
    }, 1000);
  }

  return (
    <>
      <Container className="animeLeft">
        {modalVisible && <Modal rightCount={rightCount} />}
        <Head>
          <title>Quiz - LOQ</title>
        </Head>
        <Content>
          <Link href="/">
            <a>
              <FiArrowLeft />
            </a>
          </Link>
          <ContentInfo>
            <h1>
              {index + 1} / {db.questions.length}
            </h1>
          </ContentInfo>
          {index === db.questions.length && alert('acabou')}
          <ContentQuiz>
            <span>{db.questions[index].title}</span>
            <h4>{db.questions[index].description}</h4>
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
                      ? { background: greenColor }
                      : { background: redColor }
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
                awnsered={redColor}
              >
                {index === db.questions.length - 1
                  ? 'Ver Resultado'
                  : 'Próxima Pergunta'}
              </Button>
            </ContentQuizSelection>
          </ContentQuiz>
        </Content>
      </Container>
    </>
  );
}
