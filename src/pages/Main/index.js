import React from "react";
import { Image } from "react-native";
import {
  Container,
  InputLogin,
  FontBold,
  FontNormal,
  Button,
  ButtonText
} from "./styles";

function Main({ navigation }) {
  function handleSubmit() {
    navigation.navigate("List");
  }
  return (
    <Container>
      <Image
        style={{ width: 100, height: 100, marginBottom: 25 }}
        source={{
          uri:
            "https://uploaddeimagens.com.br/images/002/538/724/full/C%C3%B3pia_de_Logo_IBB-_vaso.png?1584396833"
        }}
      />
      <InputLogin placeholder="Username" editable maxLength={25} />
      <InputLogin
        placeholder="Password"
        editable
        maxLength={12}
        secureTextEntry
      />
      <Button onPress={handleSubmit}>
        <ButtonText>Login</ButtonText>
      </Button>
    </Container>
  );
}

export default Main;
