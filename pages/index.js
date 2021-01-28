import Head from 'next/head';
import { useRouter } from 'next/router';
import { useState } from 'react';

import styled from 'styled-components';
import Button from '../src/components/Button';
import Input from '../src/components/Input';

const Container = styled.main`
  display: flex;

  height: 100vh;
`;

const Content = styled.section`
  background: ${({ theme }) => theme.colors.primary};
  width: 40rem;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  color: ${({ theme }) => theme.colors.contrastText};
  padding: 1rem;
  height: 100vh;

  h1 {
    margin: 1rem 0;
    width: 84%;
  }
`;

export default function Home() {
  const [name, setName] = useState();

  const router = useRouter();

  function handleSubmit(e) {
    e.preventDefault();
    router.push(`/quiz?name=${name}`);
  }

  return (
    <Container>
      <Head>
        <title>League of Quiz!</title>
      </Head>
      <Content className="animeLeft">
        <h1>Bem vindo ao League of Quiz!</h1>
        <form onSubmit={handleSubmit}>
          <Input
            name="name"
            type="text"
            required
            id="name"
            label="Qual seu nome, invocador?"
            setName={setName}
          />
          <Button type="submit">Jogar</Button>
        </form>
      </Content>
    </Container>
  );
}
