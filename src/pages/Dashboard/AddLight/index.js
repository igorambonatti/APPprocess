import React from "react";

import { Container, InputLogin, ButtonText, Button } from "./styles";

export default function AddLight() {
  function handleSubmit() {}
  return (
    <Container>
      <InputLogin placeholder="Escreva o Tópico" editable maxLength={25} />
      <InputLogin placeholder="Escreva a Mensagem" editable maxLength={25} />
      <Button onPress={handleSubmit}>
        <ButtonText>Registrar</ButtonText>
      </Button>
    </Container>
  );
}
