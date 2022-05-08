import * as S from './styles'

export type PostProps = {
  title: string
  resume?: string
  content: string
  date: string
  reading_time: number
  updateDate?: string
}

const Post = ({
  title,
  resume,
  content,
  date,
  reading_time,
  updateDate
}: PostProps) => {
  const createMarkup = (sanitizedContent: string) => {
    return { __html: sanitizedContent }
  }

  return (
    <S.Wrapper>
      <S.Info>
        <S.Date dateTime={date}>
          <S.CalendarIcon /> {date}
        </S.Date>

        <S.ReadingTime>
          <S.TimerIcon /> {reading_time} min. de leitura
        </S.ReadingTime>
      </S.Info>

      {!!updateDate && (
        <S.UpdateDate dateTime={date}>
          <S.UpdateDateIcon /> Atualizado em {date}
        </S.UpdateDate>
      )}

      <S.Title>{title}</S.Title>
      {!!resume && <S.Resume>{resume}</S.Resume>}

      <S.Content dangerouslySetInnerHTML={createMarkup(content)} />
    </S.Wrapper>
  )
}

export default Post
