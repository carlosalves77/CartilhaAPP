import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  width: 100%;
  margin-top: 12px;
  margin-bottom: 12px;
`;

export const Text = styled.Text`
  font-size: ${({ theme }) => theme.FONT_SIZE.MD}px;
  color: ${({ theme }) => theme.COLORS.GRAY_700};
  font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
`;
