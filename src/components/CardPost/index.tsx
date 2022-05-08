import * as S from './styles'

export type Tags = 'dev' | 'life' | 'travel'

export type CardPostProps = {
  title: string
  description: string
  slug: string
  date?: string
  reading_time: number
  tags?: Tags[]
}

const CardPost = ({
  title,
  description,
  date,
  reading_time,
  slug
}: CardPostProps) => {
  return (
    <S.Wrapper>
      <S.Link href={`/posts/${slug}`}>
        <S.Title>{title}</S.Title>
      </S.Link>

      <S.Div>
        <S.Date dateTime={date}>
          <S.CalendarIcon /> {date}
        </S.Date>
        <S.ReadingTime>
          <S.TimerIcon /> {reading_time} min. de leitura
        </S.ReadingTime>
      </S.Div>

      <S.Description>{description}</S.Description>
    </S.Wrapper>
  )
}

export default CardPost
