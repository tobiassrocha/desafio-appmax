<template>
    <form>
        <h2>Criar nova oferta</h2>
        <div>
            <label>título:</label>
            <input type="text" v-model="offers.title">
        </div>
        <div>
            <label>descrição:</label>
            <textarea v-model="offers.description"></textarea>
        </div>
        <div>
            <label>valor/custo mensal:</label>
            <input type="text" v-model="offers.value">
        </div>
        <div>
            <label>desconto:</label>
            <input type="text" v-model="offers.discount">
        </div>
        <div>
            <label>imagem:</label>
            <input type="file" @change="onFileChange">
        </div>
        <button @click="add()">Criar Oferta</button>
    </form>
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

<style>

</style>