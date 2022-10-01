import * as S from "./styles";

type Props = {
  text: string;
};

export function TextCard({ text }: Props) {
  return (
    <S.Container>
      <S.Text>{text}</S.Text>
    </S.Container>
  );
}
