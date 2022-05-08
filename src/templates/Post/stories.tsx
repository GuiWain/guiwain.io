import { ComponentMeta, ComponentStory } from '@storybook/react'

import Post from '.'
import * as m from './mockPost'

export default {
  title: 'Components/Post',
  component: Post
} as ComponentMeta<typeof Post>

export const Default: ComponentStory<typeof Post> = (args) => <Post {...args} />

Default.args = {
  title: m.post2.title,
  resume: m.post2.resume,
  content: m.post2.content,
  date: m.post2.date,
  reading_time: m.post2.reading_time,
  updateDate: m.post2.updateDate
}
