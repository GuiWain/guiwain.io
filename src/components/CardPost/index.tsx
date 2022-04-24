import * as S from './styles'

export type Tags = 'dev' | 'life' | 'travel'

export type CardPost = {
  title: string
  description: string
  date?: string
  reading_time: number
  tags?: Tags[]
}

const CardPost = ({
  title,
  description,
  date,
  reading_time,
  tags
}: CardPost) => {
  return (
    <S.Wrapper>
      <S.Title>{title}</S.Title>

      <S.Div>
        <S.Date>{date}</S.Date>
        <S.ReadingTime>{reading_time} min. de leitura</S.ReadingTime>
      </S.Div>

      <S.Description>{description}</S.Description>
    </S.Wrapper>
  )
}

export default CardPost
