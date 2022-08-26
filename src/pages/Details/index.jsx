import { Container, Links, Content } from "./styles";

import { Header } from "../../components/header";
import { Button } from "../../components/Button";
import { ButtonText } from "../../components/ButtonText";
import { Section } from "../../components/Section";
import { Tag } from "../../components/Tag";

export function Details() {
  return (
    <Container>
      <Header />

      <main>
        <Content>
          <ButtonText title="Excluir Nota" />

          <h1>Introdução ao React</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit rem sint neque doloribus, tempore nemo nobis voluptatum debitis at perspiciatis. Ipsam, dolorem fuga similique aspernatur quaerat quia iste dolores? Asperiores.</p>

          <Section title="Links úteis">
            <Links>
              <li><a href="#">www.rocketseat.com.com.br</a></li>
              <li><a href="#">www.rocketseat.com.com.br</a></li>
            </Links>
          </Section>

          <Section title="Marcadores">
            <Tag title="express" />
            <Tag title="node" />
          </Section>

          <Button title='Voltar' />

        </Content>
      </main>


    </Container>
  );
}

