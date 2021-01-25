import { Container } from './styles';

export default function Button({ children, handleClick, index, ...props }) {
  function handleButtonClick() {
    handleClick(index + 1);
  }

  return (
    <Container>
      <button {...props} onClick={handleButtonClick}>
        {children}
      </button>
    </Container>
  );
}
