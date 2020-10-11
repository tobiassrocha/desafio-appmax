<template>
    <section>
        <h2>{{ messageTitle }}</h2>
        <div class="container-cards">
            <div v-for="(info, idx) in infos" :key="idx" class="card">
                <img :src="info.image" style="width: 100%">
                <h4>{{ info.title }}</h4>
                <p style="text-align: left">{{ info.description }}</p>
                <div>
                    <span style="float: left">R$ {{ info.value }}</span>
                    <button style="float: right">Comprar</button>
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

<style>
    .container-cards {
        display: flex;
        flex-wrap: wrap;
        border-bottom: 1px solid;
        margin-bottom: 30px;
    }
    .card {
        margin-bottom: 20px;
        margin-right: 15px;
        width: 30%;
    }
    .card:nth-child(3) {
        margin-right: 0;
    }
    .card-item {
        border: 1px solid;
        padding: 15px;
        box-sizing: border-box;
    }
    form {
        display: flex;
        justify-content: space-between;
        width: 100%;
        margin: 0 auto;
        flex-wrap: wrap;
        border-bottom: 1px solid;
        margin-bottom: 30px;
        padding: 0 25% 30px;
        box-sizing: border-box;
    }
    form div {
        width: 100%;
        display: flex;
        justify-content: space-between;
        flex-direction: column;
        text-align: left;
        margin-bottom: 15px;
    }
    .no-image {
        background-image: url('../assets/unnamed.png');
        background-size: contain;
        background-repeat: no-repeat;
        background-position: center;
        width: 100%;
        height: 160px;
    }
    figure {
        margin: 0;
        height: 200px;
        display: flex;
        align-items: center;
    }
    figure img {
        max-width: 100%;
        max-height: 100%;
        margin: 0 auto;
    }
</style>