<template>
  <div class="home">
    <SponsoredOfferCard />
    <CreateOffersForm />
    <NewOfferCard />
  </div>
</template>

<script>
import SponsoredOfferCard from '@/components/SponsoredOfferCard.vue'
import CreateOffersForm from '@/components/CreateOffersForm.vue'
import NewOfferCard from '@/components/NewOfferCard.vue'

export default {
  name: 'Home',
  components: {
    SponsoredOfferCard,
    CreateOffersForm,
    NewOfferCard
  }
}
</script>
