import { Container } from './styles';

export default function Button({
  children,
  handleClick,
  index,
  type,
  ...props
}) {
  function handleButtonClick() {
    handleClick(index + 1);
  }

  return (
    <Container>
      <button
        {...props}
        onClick={type !== 'submit' ? handleButtonClick : undefined}
      >
        {children}
      </button>
    </Container>
  );
}
