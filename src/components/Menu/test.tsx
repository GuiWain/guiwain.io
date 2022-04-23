import { render } from 'utils/test-utils'

import Menu from '.'

describe('<Menu />', () => {
  it('should render the Menu', () => {
    const { container } = render(<Menu />)

    expect(container.firstChild).toMatchSnapshot()
  })
})
