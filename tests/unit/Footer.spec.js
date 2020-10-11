import { shallowMount } from '@vue/test-utils'
import Footer from '@/components/Footer'

describe('Footer', () => {
  it('renders the component', () => {
    // arrange
    const wrapper = shallowMount(Footer)

    // assert
    expect(wrapper.html()).toMatchSnapshot()
  })
})