import { render } from 'utils/test-utils'

import Main from '.'

describe('<Main />', () => {
  it('should render the Main', () => {
    const { container } = render(<Main />)

    expect(container.firstChild).toMatchSnapshot()
  })
})
