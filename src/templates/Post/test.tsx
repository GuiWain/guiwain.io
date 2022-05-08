import { render } from 'utils/test-utils'

import Post from '.'
import * as m from './mockPost'

const mockPost = {
  title: m.post2.title,
  resume: m.post2.resume,
  content: m.post2.content,
  date: m.post2.date,
  reading_time: m.post2.reading_time,
  updateDate: m.post2.updateDate
}

describe('<Post />', () => {
  it('should render the Post', () => {
    const { container } = render(<Post {...mockPost} />)

    expect(container.firstChild).toMatchSnapshot()
  })
})
