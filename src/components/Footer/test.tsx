import { render } from 'utils/test-utils'

import Footer from '.'

describe('<Footer />', () => {
  it('should render the Footer', () => {
    const { container } = render(<Footer />)

    expect(container.firstChild).toMatchSnapshot()
  })
})
