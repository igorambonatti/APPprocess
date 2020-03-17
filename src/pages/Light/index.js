import React from "react";

import { Container, Nav, Item, Info, Teste, Table } from "./styles";
import Icon from "react-native-vector-icons/FontAwesome";

export default function Light({ navigation }) {
  function navigate(route) {
    navigation.navigate(route);
  }

  return (
    <Container>
      <Teste>
        <Nav onPress={() => navigate("AddLight")}>
          <Icon name="plus" size={30} color="#ffd700" />
        </Nav>
      </Teste>
      <Table>
        <Item>
          <Info>Dale</Info>
        </Item>
        <Item>
          <Info>Dale</Info>
        </Item>
        <Item>
          <Info>Dale</Info>
        </Item>
        <Item>
          <Info>Dale</Info>
        </Item>
        <Item>
          <Info>Dale</Info>
        </Item>
      </Table>
    </Container>
  );
}
