import { render } from 'utils/test-utils'

import Post from '.'

describe('<Post />', () => {
  it('should render the Post', () => {
    const { container } = render(<Post />)

    expect(container.firstChild).toMatchSnapshot()
  })
})
