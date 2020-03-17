import React from "react";

import { Container, Separator, Description } from "./styles";

import Icon from "react-native-vector-icons/FontAwesome";

export default function ProcessList({ navigation }) {
  function navigate(route) {
    navigation.navigate(route);
  }

  return (
    <Container>
      <Separator onPress={() => navigate("Light")}>
        <Icon name="adjust" size={90} color="#000000" />
        <Description>Iluminação</Description>
      </Separator>
      <Separator onPress={() => navigate("Alarm")}>
        <Icon name="unlock-alt" size={90} color="#000000" />
        <Description>Alarme</Description>
      </Separator>
    </Container>
  );
}
