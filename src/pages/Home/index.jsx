import { FiPlus } from 'react-icons/fi'
import { Container, Brand, Menu, Search, Content, NewNotes } from './styles.js'

import { Header } from "../../components/Header"
import { Note } from "../../components/Note"
import { Input } from "../../components/Input"
import { Section } from "../../components/Section"
import { ButtonText } from "../../components/ButtonText"


export function Home() {
  return (
    <Container>
      <Header />
      <Brand>
        <h1>RocketNotes</h1>
      </Brand>


      <Menu>
        <li><ButtonText title="Todos" isActive /></li>
        <li><ButtonText title="React" /></li>
        <li><ButtonText title="Node" /></li>

      </Menu>

      <Search>
        <Input placeholder="Pesquisar pelo título" />
      </Search>

      <Content>
        <Section title="Minhas notas">
          <Note data={{
            title: 'React',
            tags: [
              { id: '1', name: 'react' },
              { id: '2', name: 'node' },
            ]
          }} />

        </Section>

      </Content>

      <NewNotes>
        <FiPlus />
        Criar Nota

      </NewNotes>
    </Container>
  )
}