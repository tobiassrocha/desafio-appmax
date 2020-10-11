import { shallowMount } from '@vue/test-utils'
import CreateOffersForm from '@/components/CreateOffersForm'

describe('CreateOffersForm', () => {
  it('renders the component', () => {
    // arrange
    const wrapper = shallowMount(CreateOffersForm)

    // assert
    expect(wrapper.html()).toMatchSnapshot()
  })
})