import { ComponentMeta, ComponentStory } from '@storybook/react'
import HomePage from '.'

export default {
  title: 'Components/HomePage',
  component: HomePage
} as ComponentMeta<typeof HomePage>

export const Default: ComponentStory<typeof HomePage> = () => <HomePage />
