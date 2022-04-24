import { Story, Meta } from '@storybook/react'
import Menu, { MenuProps } from '.'

export default {
  title: 'Components/Menu',
  component: Menu
} as Meta

export const Default: Story<MenuProps> = (args) => <Menu {...args} />

// eslint-disable-next-line @typescript-eslint/no-empty-function
const handleTheme = () => {}

Default.args = {
  checked: true,
  getTheme: handleTheme
}
