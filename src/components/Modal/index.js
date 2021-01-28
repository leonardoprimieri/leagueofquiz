import Link from 'next/link';
import { Container, Content, ContentImage } from './styles';
import { useRouter } from 'next/router';

export default function Modal({ rightCount, totalQuestions }) {
  const router = useRouter();
  const name = router.query.name;

  return (
    <Container>
      <Content className="animeTop">
        <ContentImage background="https://wallpaperaccess.com/full/2139002.jpg">
          <h1>
            {name}, seu resultado foi {rightCount} / {totalQuestions}
          </h1>
          <Link href="/">
            <a>Voltar para a home</a>
          </Link>
        </ContentImage>
      </Content>
    </Container>
  );
}
