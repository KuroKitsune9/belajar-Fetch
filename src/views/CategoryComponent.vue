<template>
    <div>
        <div class="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16">
        <h1 class="text-3xl font-bold text-gray-900 dark:text-white">Category</h1>
        <br>
        <div class="grid md:grid-cols-4 gap-8">
            <div v-for="data in getCategories"
                class="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 ">
                    
                <div class="px-5 pb-5">
                    <h4>{{ data }}</h4>
                    <div class="flex items-center mt-2.5 mb-5">
                        <svg class="w-4 h-4 text-yellow-300 mr-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                            fill="currentColor" viewBox="0 0 22 20">
                            <path
                                d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                        </svg>
                        
                    </div>
                    <div class="flex items-center justify-between">
                        <p class="text-3xl font-bold text-gray-900 dark:text-white">Lihat</p>
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
        ...mapGetters('categories', ['getCategories']),
    },
    methods: {
        ...mapActions('categories', ['fetchCategories']),
    },
    created() {
        this.fetchCategories();
    },
}
</script>

<style lang="scss" scoped>

</style>