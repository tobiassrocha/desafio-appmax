<template>
    <section class="offer">
        <h2 class="offer__title">{{ messageTitle }}</h2>
        <p class="offer__subtitle">{{ messageSubTitle }}</p>
        <div class="offer__container">
            <div v-for="(info, idx) in infos" :key="idx" class="offer__card">
                <img :src="info.image" class="offer__card__image">
                <h4 class="offer__card__title">{{ info.title }}</h4>
                <p class="offer__card__description">{{ info.description }}</p>
                <div class="offer__main__info">
                    <p class="offer__card__price">
                        <span class="offer__card__value">R$ {{ info.value }}</span>
                        <span v-if="info.discount > 0" class="offer__card__discount">Desconto de R$ {{ info.discount }}</span>
                    </p>
                    <button class="offer__card__button">Favoritar oferta</button>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import axios from 'axios';

export default {
    data() {
        return {
          messageTitle: 'Ofertas Patrocinadas',
          messageSubTitle: 'Confira a seleção de ofertas patrocinadas que o para o final de semana!',
          infos: [],
          offers: {
              id: 0,
              title: '',
              description: '',
              value: null,
              discount: null,
              image: ''
          },
          index: null,
          list: []
        }
    },
    mounted() {
        axios
        .get('https://api-json.sandboxappmax.com.br/')
        .then(response => (this.infos = response.data))

        const offer = JSON.parse(localStorage.getItem('offers'))
        this.list = offer ? offer : []
    }
}
</script>

<style lang="less">
    .offer {
        background-color: #f2f2f2;
        box-sizing: border-box;
        padding: 30px 40px 0;
        width: 100%;

        &__title {
            font-size: 26px;
            color: #000;
            margin: 0;
        }

        &__subtitle {
            font-size: 16px;
            margin: 0 0 25px 0;
        }

        &__container {
            display: flex;
            flex-wrap: wrap;
            justify-content: space-between;
            margin-bottom: 30px;
        }

        &__card {
            margin-bottom: 35px;
            width: 30%;

            &__image {
                max-width: 100%;
                max-height: 100%;
                margin: 0 auto;
            }

            &__title {
                font-size: 20px;
                margin: 5px 0 0 0;
                text-transform: uppercase;
            }

            &__description {
                font-size: 16px;
                margin: 0 0 20px 0;
                text-align: left;
            }

            &__price {
                display: flex;
                flex-direction: column;
                align-items: baseline;
                margin: 0;
            }

            &__discount {
                font-size: 14px;
            }

            &__button {
                background-color: #fcbf10;
                border: 1px solid;
                cursor: pointer;
                font-size: 12px;
                font-weight: bold;
                outline: none;
                padding: 15px 10px;
                text-transform: uppercase;
            }
        }

        &__main__info {
            color: #000;
            display: flex;
            justify-content: space-between;
            font-size: 20px;
            font-weight: bold;
        }
    }
</style>