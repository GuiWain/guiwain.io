import { ComponentMeta, ComponentStory } from '@storybook/react'

import Post from '.'

export default {
  title: 'Components/Post',
  component: Post
} as ComponentMeta<typeof Post>

export const Default: ComponentStory<typeof Post> = () => <Post />
