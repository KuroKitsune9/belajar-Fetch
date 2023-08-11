import axios from "axios";

const surah = {
    namespaced: true,
    state: {
        surahsData: [],
    },
    getters: {
        getSurahs: (state) => state.surahsData,

        getSurahById: (state) => (surahId) => {
            console.log("Fetching single surah by ID:", surahId);
            console.log("SurahsData:", state.surahsData);
            const surah = state.surahsData.find((p) => p.number == surahId);
            console.log("Surah:", surah);
            return surah;
        },
    },
    actions: {
        async fetchSurah({ commit }) {
            try {
                const dataSurah = await axios.get("https://al-quran-jade.vercel.app/surahs")
                commit('SET_SURAHS', dataSurah.data['data'])
            } catch (error) {
                alert('Ada error')
                console.log(error)
            }
        },
        async fetchSingleSurah({ commit }, surahId) {
            try {
                const response = await axios.get(
                    `https://al-quran-jade.vercel.app/surahs/${surahId}`
                );
                commit("SET_SINGLE_SURAHS", response.data);
            } catch (error) {
                alert(error);
                console.log(error);
            }
        },
    },
    mutations: {
        SET_SURAHS(state, surahs) {
            state.surahsData = surahs;
        },
        SET_SINGLE_SURAHS(state, surah) {
            state.singleSurah = surah;
        },
    }
}

export default surah;
