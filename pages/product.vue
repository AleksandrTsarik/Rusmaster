<script>
import {defineComponent} from 'vue'
import ProductCart from "~/components/ProductCartComponent/ProductCart.vue";
import api from "~/api/api.js";

export default defineComponent({
    name: "product",
    components: {
        ProductCart
    },

    async setup() {
        const route = useRoute();
        if (!route.params.pathMatch || route.params.length === 0) {
            navigateTo("/");
            return;
        }

        const title = ref("");
        useHead({
            title
        });

        const product = await api(route.params.pathMatch.join("/"));
        title.value = product.title;

        return {
            product
        };
    }
})
</script>

<template>
    <ProductCart v-if="product" :product="product"/>
</template>

<style scoped>

</style>