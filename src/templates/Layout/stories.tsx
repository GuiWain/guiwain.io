import { ComponentMeta, ComponentStory } from '@storybook/react'
import Layout from '.'

export default {
  title: 'Templates/Layout',
  component: Layout
} as ComponentMeta<typeof Layout>

export const Default: ComponentStory<typeof Layout> = () => (
  <Layout>
    <h1>Children</h1>
  </Layout>
)
