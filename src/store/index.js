import { createStore } from "vuex";
// import donatur from "./modules/donatur";
// import clients from "./modules/clients";
// import transaksi from "./modules/transaksi";
// import users from "./modules/users";
// import berita from "./modules/berita";
import product from "./modules/Product.js";
import categories from "./modules/categories.js";
import auth from "./modules/auth.js";
const store = createStore({
    state: {
        isLoading: false,
    },
    modules: {
        // donatur,
        // clients,
        // transaksi,
        // users,
        // berita,
        product,
        categories,
        auth,
    },
});

export default store;