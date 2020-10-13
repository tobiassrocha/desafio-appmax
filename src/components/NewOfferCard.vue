<template>
    <section class="offer favorite">
        <h2 class="offer__title">{{ messageTitleOffer }}</h2>
        <div class="offer__container">
            <h3 v-if="listFavoriteOffers.length == 0" class="offer__no__data">{{ messageNoOffers }}</h3>
            <div v-for="(itemOffer, index) in listFavoriteOffers" :key="index" class="offer__card">
                <img :src="itemOffer.imageOffer" class="offer__card__image">
                <h4>{{ itemOffer.titleOffer }}</h4>
                <div class="offer__main__info">
                    <p class="offer__card__price">
                        <span class="offer__card__value">R$ {{ itemOffer.priceOffer }}</span>
                    </p>
                    <button @click="removeOffer(itemOffer)" class="offer__card__button offer__card__button--favorite">Remover da lista</button>
                </div>
            </div>
        </div>
        <h2 class="offer__title">{{ messageTitleNewOffers }}</h2>
        <p class="offer__subtitle">{{ messageSubTitleNewOffers }}</p>
        <div class="offer__container">
            <h3 v-if="list.length == 0" class="offer__no__data">{{ messageNoNewOffers }}</h3>
            <div v-for="(item, idx) in list" :key="idx" class="offer__card">
                <figure>
                    <img v-if="item.image" :src="item.image" class="offer__card__image">
                    <img v-else class="offer__card__image-no-image">
                </figure>
                <h4 class="offer__card__title">{{ item.title }}</h4>
                <p class="offer__card__description">{{ item.description }}</p>
                <div class="offer__main__info">
                    <p class="offer__card__price">
                        <span class="offer__card__value">R$ {{ item.value }}</span>
                        <span v-if="item.discount > 0" class="offer__card__discount">Desconto de R$ {{ item.discount }}</span>
                    </p>
                    <button @click.once="buyOffer(item)" class="offer__card__button">Favoritar oferta</button>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    data() {
        return {
            messageTitleOffer: 'Minha lista de ofertas',
            messageNoOffers: 'Você ainda não possui ofertas na lista de favoritos.',
            messageNoNewOffers: 'Ainda não existem novas ofertas cadastradas.',
            messageTitleNewOffers: 'Novas ofertas',
            messageSubTitleNewOffers: 'Parques, Passeios, Museus, Atrações e muito mais!',
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
            alert('Oferta favoritada! Verifique sua lista de favoritos.')
        },
        removeOffer(itemOffer) {
            const idx = this.listFavoriteOffers.indexOf(itemOffer)
            this.listFavoriteOffers.splice(idx, 1)
            localStorage.setItem('favoriteOffers', JSON.stringify(this.listFavoriteOffers))
            alert('Oferta removida da lista com sucesso!')
        }, 
    },
    mounted() {
        const offer = JSON.parse(localStorage.getItem('offers'));
        this.list = offer ? offer : [];

        const favoriteOffers = JSON.parse(localStorage.getItem('favoriteOffers'));
        this.listFavoriteOffers = favoriteOffers ? favoriteOffers : [];
    }
}
</script>

<style lang="less">
.favorite {
    background-color: #fff;

    .offer__card {
        border: 1px solid;
        padding: 15px 25px;
    }
    
    .offer__card__button {
        padding: 10px;
        width: 90px;
    }

    .offer__no__data {
        text-align: center;
        width: 100%;
    }
}
</style>