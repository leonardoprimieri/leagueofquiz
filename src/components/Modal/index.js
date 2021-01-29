import Link from 'next/link';
import { Container, Content, ContentImage, WinsInfo } from './styles';
import { useRouter } from 'next/router';
import { FiArrowLeft } from 'react-icons/fi';

export default function Modal({ rightCount, totalQuestions }) {
  const router = useRouter();
  const name = router.query.name;

  return (
    <Container>
      <Content className="animeTop">
        <ContentImage>
          <img
            src="https://i.pinimg.com/originals/54/35/f7/5435f73a8557d0869ee3cfd983999391.gif"
            alt="yasuo m7"
          />
          <WinsInfo>
            <h1>
              {name}, você acertou {rightCount} de {totalQuestions}
            </h1>
            <Link href="/">
              <a>
                <FiArrowLeft /> Voltar para a home
              </a>
            </Link>
          </WinsInfo>
        </ContentImage>
      </Content>
    </Container>
  );
}
