import { render, screen, waitFor } from 'utils/test-utils'
import userEvent from '@testing-library/user-event'

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

  it('should invoke getTheme when click on switch', async () => {
    render(<Menu {...mockArgs} />)

    const buttonSwitch = screen.getByRole('switch')
    userEvent.click(buttonSwitch)

    await waitFor(() => {
      expect(mockArgs.getTheme).toBeCalledWith('dark')
    })
  })
})
