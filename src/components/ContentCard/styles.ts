import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  min-height: 56px;
  max-height: 56px;
  width: 100%;
  background-color: ${({ theme }) => theme.COLORS.WHITE};
  border-radius: 6px;
  justify-content: center;
  align-items: center;
  margin-bottom: 12px;
`;

export const Text = styled.Text`
  font-size: ${({ theme }) => theme.FONT_SIZE.MD}px;
  color: ${({ theme }) => theme.COLORS.GRAY_600};
  font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
`;
