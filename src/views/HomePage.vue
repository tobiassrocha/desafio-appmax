<template>
  <div>
    <SponsoredOfferCard />
    <NewOfferCard />
  </div>
</template>

<script>
import SponsoredOfferCard from '@/components/SponsoredOfferCard.vue'
import NewOfferCard from '@/components/NewOfferCard.vue'

export default {
  name: 'HomePage',
  components: {
    SponsoredOfferCard,
    NewOfferCard
  }
}
</script>
