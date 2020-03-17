import styled from "styled-components/native";

export const Container = styled.View`
  flex-direction: row;
  justify-content: center;
  margin: auto;
  flex-wrap: wrap;
`;
export const Separator = styled.TouchableOpacity`
  width: 120px;
  align-items: center;
  border: 1px solid #000000;
  padding: 10px;
  margin: 20px;
  border-radius: 2px;
  border-color: #ddd;
`;
export const Description = styled.Text`
  color: #000000;
`;
