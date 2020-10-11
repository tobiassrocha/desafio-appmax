import { shallowMount } from '@vue/test-utils'
import Header from '@/components/Header'

describe('Header', () => {
  it('renders the component', () => {
    // arrange
    const wrapper = shallowMount(Header)

    // assert
    expect(wrapper.html()).toMatchSnapshot()
  })
})