import { render } from 'utils/test-utils'

import CardPost from '.'

describe('<CardPost />', () => {
  it('should render the CardPost', () => {
    const { container } = render(<CardPost />)

    expect(container.firstChild).toMatchSnapshot()
  })
})
