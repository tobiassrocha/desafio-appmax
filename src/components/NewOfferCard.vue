<template>
    <section>
        <h2>Minhas ofertas</h2>
        <div>
            <div class="container-cards">
                <h3 v-if="listFavoriteOffers.length == 0" style="text-align: center;width: 100%;">Você ainda não possui ofertas na lista de favoritos</h3>
                <div v-for="(itemOffer, index) in listFavoriteOffers" :key="index" class="card card-item">
                    <img :src="itemOffer.imageOffer" style="width: 100%">
                    <h4>{{ itemOffer.titleOffer }}</h4>
                    <div>
                        <span style="float: left">R$ {{ itemOffer.priceOffer }}</span>
                        <button style="float: right">Remover da lista de favoritos</button>
                    </div>
                </div>
            </div>
        </div>
        <h2>Lista de novas ofertas</h2>
        <div class="container-cards">
            <div v-for="(item, idx) in list" :key="idx" class="card card-item">
                <figure>
                    <img v-if="item.image" :src="item.image">
                    <img v-else class="no-image">
                </figure>
                <h4>{{ item.title }}</h4>
                <p style="text-align: left">{{ item.description }}</p>
                <div>
                    <span style="float: left">R$ {{ item.value }}</span>
                    <button style="float: right;" @click.once="buyOffer(item)">Favoritar oferta</button>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    data() {
        return {
          list: [],
          offers: {
              id: 0,
              title: '',
              description: '',
              value: null,
              discount: null,
              image: ''
          },
          favoriteOffers: {
              id: 0,
              titleOffer: '',
              priceOffer: null,
              imageOffer: ''
          },
          listFavoriteOffers: []
        }
    },
    methods: {
        // eslint-disable-next-line no-unused-vars
        buyOffer(item) {
            this.favoriteOffers.id = this.listFavoriteOffers.length + 1
            this.favoriteOffers.titleOffer = item.title;
            this.favoriteOffers.priceOffer = item.value;
            this.favoriteOffers.imageOffer = item.image;
            this.listFavoriteOffers.push(this.favoriteOffers);
            localStorage.setItem('favoriteOffers', JSON.stringify(this.listFavoriteOffers))
            this.favoriteOffers = {id: 0, titleOffer: '', descriptionOffer: '', priceOffer: null,imageOffer: '',}
        }
    },
    mounted() {
        const offer = JSON.parse(localStorage.getItem('offers'));
        this.list = offer ? offer : [];

        const favoriteOffers = JSON.parse(localStorage.getItem('favoriteOffers'));
        this.listFavoriteOffers = favoriteOffers ? favoriteOffers : [];
    }
}
</script>

<style>
    
</style>