import { Container } from './styles';

export default function Button({
  children,
  handleClick,
  index,
  type,
  awnsered,
  ...props
}) {
  function handleButtonClick() {
    handleClick(index + 1);
  }

  return (
    <Container>
      <button
        style={awnsered === '' ? { pointerEvents: 'none' } : {}}
        {...props}
        onClick={type !== 'submit' ? handleButtonClick : undefined}
      >
        {children}
      </button>
    </Container>
  );
}
