import { shallowMount } from '@vue/test-utils'
import SponsoredOfferCard from '@/components/SponsoredOfferCard'

describe('SponsoredOfferCard', () => {
  it('renders the component', () => {
    // arrange
    const wrapper = shallowMount(SponsoredOfferCard)

    // assert
    expect(wrapper.html()).toMatchSnapshot()
  })
})