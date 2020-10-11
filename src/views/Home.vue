<template>
  <div class="home">
    <SponsoredOfferCard />
    <CreateOffersForm />
  </div>
</template>

<script>
import SponsoredOfferCard from '@/components/SponsoredOfferCard.vue'
import CreateOffersForm from '@/components/CreateOffersForm.vue'

export default {
  name: 'Home',
  components: {
    SponsoredOfferCard,
    CreateOffersForm
  }
}
</script>
