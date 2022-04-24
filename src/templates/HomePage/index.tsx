import * as S from './styles'

import { posts } from './mockPosts'

const HomePage = () => (
  <S.Wrapper>
    <S.Description>
      Quisque consectetur lacinia finibus. Pellentesque euismod risus
    </S.Description>

    <S.ListPosts>
      {posts.map((post, index) => (
        <S.CardPost key={index} {...post} />
      ))}
    </S.ListPosts>
  </S.Wrapper>
)

export default HomePage
