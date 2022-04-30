import { ComponentMeta, ComponentStory } from '@storybook/react'
import Menu from '.'

export default {
  title: 'Components/Menu',
  component: Menu
} as ComponentMeta<typeof Menu>

export const Default: ComponentStory<typeof Menu> = (args) => <Menu {...args} />

// eslint-disable-next-line @typescript-eslint/no-empty-function
const handleTheme = () => {}

Default.args = {
  checked: true,
  getTheme: handleTheme
}
