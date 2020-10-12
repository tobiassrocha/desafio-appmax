<template>
    <section class="createoffer">
        <h2 class="createoffer__title">Criar nova oferta</h2>
        <form class="createoffer__form">
            <div class="createoffer__form__group">
                <label class="createoffer__form__label">título:</label>
                <input type="text" v-model="offers.title" class="createoffer__form__input">
            </div>
            <div class="createoffer__form__group">
                <label class="createoffer__form__label">descrição:</label>
                <textarea rows="4" v-model="offers.description" class="createoffer__form__textarea"></textarea>
            </div>
            <div class="createoffer__form__group">
                <label class="createoffer__form__label">valor/custo mensal:</label>
                <input type="number" v-model="offers.value" class="createoffer__form__input">
            </div>
            <div class="createoffer__form__group">
                <label class="createoffer__form__label">desconto:</label>
                <input type="number" v-model="offers.discount" class="createoffer__form__input">
            </div>
            <div class="createoffer__form__group">
                <label class="createoffer__form__label">imagem:</label>
                <input type="file" @change="onFileChange" class="createoffer__form__input">
            </div>
            <button @click="add()" class="createoffer__form__button">Criar Oferta</button>
        </form>
    </section>
</template>

<script>
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
    methods: {
        add() {   
            if(this.offers.id === 0) {
                this.offers.id = this.list.length + 1
                this.list.push(this.offers)
            } else {
                this.list[this.index] = this.offers
            }
            localStorage.setItem('offers', JSON.stringify(this.list))
            this.offers = {id: 0, title: '', description: '', value: null, discount: null, image: ''}
            alert('Oferta criada com sucesso!');
        },
        onFileChange(e) {
            var files = e.target.files || e.dataTransfer.files;
            if (!files.length)
                return;
            this.createImage(files[0]);
        },
        createImage(file) {
            // eslint-disable-next-line no-unused-vars
            var image = new Image();
            var reader = new FileReader();

            reader.onload = (e) => {
                this.offers.image = e.target.result;
            };
            reader.readAsDataURL(file);
        } 
    },
    mounted() {
        const offer = JSON.parse(localStorage.getItem('offers'))
        this.list = offer ? offer : []
    }
}
</script>

<style lang="less" scoped>
.createoffer {
    display: flex;
    flex-direction: column;
    margin: 15px 0 50px;

    &__title {
        font-size: 26px;
    }

    &__form {
        display: flex;
        flex-direction: column;
        margin: 0 auto;
        width: 390px;

        &__group {
            display: flex;
            flex-direction: column;
            margin-bottom: 25px;
            text-align: left;
        }

        &__label {
            text-transform: capitalize;
            font-size: 16px;
            font-weight: bold;
            margin-bottom: 10px;
        }

        &__input {
            padding: 10px;
            font-size: 14px;
            outline: none;
            border: 1px solid;
            box-sizing: border-box;
        }

        &__textarea {
            border: 1px solid;
            font-family: Avenir, Helvetica, Arial, sans-serif;
            font-size: 14px;
            outline: none;
            padding: 10px;
            resize: none;
        }

        &__button {
            background-color: #fcbf10;
            border: 1px solid;
            color: #000;
            cursor: pointer;
            font-size: 16px;
            font-weight: bold;
            padding: 15px;
            text-transform: uppercase;
        }
    }
}
</style>