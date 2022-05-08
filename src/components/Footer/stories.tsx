import { ComponentMeta, ComponentStory } from '@storybook/react'
import Footer from '.'

export default {
  title: 'Components/Footer',
  component: Footer
} as ComponentMeta<typeof Footer>

export const Default: ComponentStory<typeof Footer> = (args) => (
  <Footer {...args} />
)

Default.args = {
  modifier: 'default'
}

export const Minimal: ComponentStory<typeof Footer> = (args) => (
  <Footer {...args} />
)

Minimal.args = {
  modifier: 'minimal'
}
