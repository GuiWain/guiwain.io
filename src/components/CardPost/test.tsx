import { render } from 'utils/test-utils'

import CardPost from '.'

import { Tags } from 'components/CardPost'

const mockPost = {
  title: 'Nullam in nisl eget tellus bibendum.',
  slug: '1',
  description:
    'Aliquam felis lorem, viverra ac est at, ornare ultrices felis. Donec cursus purus id tempus posuere. Cras nec felis metus.',
  date: 'Novembro 10, 2022',
  reading_time: 10,
  tags: ['dev'] as Tags[]
}

describe('<CardPost />', () => {
  it('should render the CardPost', () => {
    const { container } = render(<CardPost {...mockPost} />)

    expect(container.firstChild).toMatchSnapshot()
  })
})
