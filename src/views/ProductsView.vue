<template>
    <div>
        <h1>Halaman Product</h1>
        <div v-for="data in items" :key="data.id">
            <img :src="data.image" alt="" style="height: 100px;">
        <i>{{ data.title }}</i>
        </div>
    </div>
</template>

<script>
// import { computed, onMounted } from 'vue';
// import { useStore } from 'vuex';

// const store = useStore();
// const getProducts = computed(() =>{
//     return store.getters.getProducts
// })

// const products = computed(()=> {
//     return store.satte.products
// })

// onMounted(() => {
//     store.dispatch('fetchProduct')
// })

export default {
    computed: {
        getProducts() {
            return this.$store.getter.getProducts
        },
        items() {
            return this.$store.state.products
        }
    },
    mounted () {
        this.$store.dispatch('fetchProduct')
    }
}
</script>

<style lang="scss" scoped>

</style>