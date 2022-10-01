import styled from "styled-components/native";

export const Container = styled.SafeAreaView`
  flex: 1;
  align-items: center;
  background-color: #f1c700;
  padding: 24px;
`;

export const Text = styled.Text`
  font-size: ${({ theme }) => theme.FONT_SIZE.MD}px;
  color: white;
`;

export const Logo = styled.Image`
  width: 100%;
  height: 30%;
`;
