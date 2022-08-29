import { Container } from "./styles";

export function Form({ value, ...rest }) {
  return (
    <Container {...rest}>
      {value}
    </Container>
  )
}