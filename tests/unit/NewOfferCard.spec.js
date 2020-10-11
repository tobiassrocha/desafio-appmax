import { shallowMount } from '@vue/test-utils'
import NewOfferCard from '@/components/NewOfferCard'

describe('NewOfferCard', () => {
  it('renders the component', () => {
    // arrange
    const wrapper = shallowMount(NewOfferCard)

    // assert
    expect(wrapper.html()).toMatchSnapshot()
  })
})