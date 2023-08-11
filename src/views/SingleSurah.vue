<template>
    <div>
        <div class="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16">
        <h1 class="text-3xl font-bold text-gray-900 dark:text-white">Surah</h1>
        <br>
        <center>
        <div v-if="surah">
            <div  class="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                
                <div class="px-5 pb-10">
                    
                    <h4>{{ surah.name }}</h4>
                    <p>{{ surah.numberOfAyahs }}</p>
                    <p>{{ surah.description }}</p>
                    <p></p>
                    <br>
                    <h4></h4>
                </div>
            
            </div>
        </div>
        
        <div v-else>
            ga ada wahai calon penghuni surga
        </div>
    </center>
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

import { mapGetters, mapActions } from "vuex";

export default {
    computed: {
        ...mapGetters("surah", ["getSurahById"]),
        surah() {
            return this.getSurahById(Number(this.$route.params.id));
        },
    },
    methods: {
        ...mapActions("surah", ["fetchSingleSurah"]),
    },
    // mounted() {
    //     const productId = this.$route.params.id;
    //     console.log("Fetching single product with ID:", productId);
    //     this.fetchSingleProduct(productId);
    // },

};
</script>

<style lang="scss" scoped>

</style>