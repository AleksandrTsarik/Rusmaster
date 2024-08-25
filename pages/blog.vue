<template>
    <Share :navigationItems="navigationItems"/>
    <Blog v-if="post" :post="post"/>
    <Subscription/>
</template>

<script>
import Blog from "~/components/BlogComponent/Blog.vue";
import Share from "~/components/ShareComponent/Share.vue";
import Subscription from "~/components/SubscriptionComponent/Subscription.vue";
import api from "~/api/api.js";

export default {
    name: "BlogPage",
    components: {
        Blog,
        Subscription,
        Share,
    },

    async setup() {
        const route = useRoute();
        const path = route.params.pathMatch;
        if (!path || path.length === 0) {
            await navigateTo("/");
            return;
        }

        const title = ref("Блог");

        useHead({
            title,
            meta: [
                {name: "keywords", title},
                {name: "description", title}
            ]
        });

        const post = await api(path.join("/"));
        title.value = post.title;

        return {
            post,
            navigationItems: ["Главная", post.title]
        };
    }
};
</script>
