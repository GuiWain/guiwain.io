import { Story, Meta } from '@storybook/react'
import Layout from '.'

export default {
  title: 'Templates/Layout',
  component: Layout
} as Meta

export const Default: Story = () => (
  <Layout>
    <h1>Children</h1>
  </Layout>
)
