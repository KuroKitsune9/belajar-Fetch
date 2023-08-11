<template>
    <div>
        <div class="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16">
        <h1 class="text-3xl font-bold text-gray-900 dark:text-white">Surah</h1>
        <br>
        <div  class="grid md:grid-cols-4 gap-8">
            <div v-for="data in getSurahs" :key="data.id" class="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                <div class="px-5 pb-5">
                    <router-link :to="{ name: 'SingleSurah', params: { id: data.number } }" class="group">
                    <h4>{{ data.name }}</h4>
                </router-link>
                    <br>
                    <h4></h4>
                    <div class="flex items-center mt-2.5 mb-5">
                    </div>
                    <div class="flex items-center justify-between">
                    </div>
                </div>
            </div>
        </div>
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

import { mapGetters, mapActions } from 'vuex';

export default {
    computed: {
        ...mapGetters('surah', ['getSurahs']),
    },
    methods: {
        ...mapActions('surah', ['fetchSurah']),
    },
    created() {
        this.fetchSurah();
    },
}
</script>

<style lang="scss" scoped>

</style>