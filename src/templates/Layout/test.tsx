import { render } from 'utils/test-utils'

import Layout from '.'

describe('<Layout />', () => {
  it('should render the Layout', () => {
    const { container } = render(
      <Layout>
        <p>lalala</p>
      </Layout>
    )

    expect(container.firstChild).toMatchSnapshot()
  })
})
