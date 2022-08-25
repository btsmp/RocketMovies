import { RiShutDownLine } from 'react-icons/ri'
import { Container, Profile, Logout } from "./styles";

export function Header(){
  return (
    <Container>
      <Profile>
        <img src="https://github.com/btsmp.png" alt="Foto do usuário"/>

        <div>
          <span>Bem-vindo,</span>
          <strong>Bruno Sampaio</strong>
        </div>
      </Profile>

    <Logout>
      <RiShutDownLine/>
    </Logout>
    </Container>
  )
}