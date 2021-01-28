import { Container } from './styles';
export default function Input({ id, label, setName, ...props }) {
  return (
    <Container>
      <label htmlFor={id}>{label}</label>
      <input
        {...props}
        id={id}
        onChange={({ target }) => setName(target.value)}
        maxLength={10}
      />
    </Container>
  );
}
