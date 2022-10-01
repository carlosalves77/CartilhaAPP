import * as S from "./styles";

type Props = {
  title: string;
};

export function ContentCard({ title }: Props) {
  return (
    <S.Container>
      <S.Text>{title}</S.Text>
    </S.Container>
  );
}
