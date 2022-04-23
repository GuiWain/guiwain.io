import { render } from 'utils/test-utils'

import Menu from '.'

const mockArgs = {
  checked: true,
  getTheme: jest.fn()
}

describe('<Menu />', () => {
  it('should render the Menu', () => {
    const { container } = render(<Menu {...mockArgs} />)

    expect(container.firstChild).toMatchSnapshot()
  })
})
