import { ComponentMeta, ComponentStory } from '@storybook/react'

import CardPost from '.'

import { Tags } from 'components/CardPost'

export default {
  title: 'Components/CardPost',
  component: CardPost
} as ComponentMeta<typeof CardPost>

export const Default: ComponentStory<typeof CardPost> = (args) => (
  <CardPost {...args} />
)

Default.args = {
  title: 'Nullam in nisl eget tellus bibendum.',
  description:
    'Aliquam felis lorem, viverra ac est at, ornare ultrices felis. Donec cursus purus id tempus posuere. Cras nec felis metus.',
  date: 'Novembro 10, 2022',
  reading_time: 10,
  tags: ['dev'] as Tags[]
}
