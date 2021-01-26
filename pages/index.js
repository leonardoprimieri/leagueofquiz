import Head from 'next/head';

import styled from 'styled-components';
import QuizArea from '../src/components/QuizArea';

const Container = styled.main`
  background: url(${({ background }) => background}) no-repeat;
  background-size: cover;
  display: flex;

  height: 100vh;
`;

export default function Home() {
  return (
    <Container
      background={'https://images4.alphacoders.com/600/thumb-1920-600528.png'}
    >
      <Head>
        <title>League of Quiz!</title>
      </Head>
      <QuizArea />
    </Container>
  );
}
