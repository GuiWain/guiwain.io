import * as S from './styles'

import { posts } from './mockPosts'

const HomePage = () => (
  <S.Wrapper>
    <S.Description>
      Quisque consectetur lacinia finibus. Pellentesque euismod risus
    </S.Description>

    {posts.map((post, index) => (
      <S.ListPosts key={index}>
        <S.CardPost {...post} />
      </S.ListPosts>
    ))}
  </S.Wrapper>
)

export default HomePage
