<template>
    <Share :navigationItems="navigationItems"/>
    <StorageSystems
            v-if="category"
            :title="title"
            :swipe-images="products"
    />
    <YourTasks v-else/>

    <OurPhoto/>
    <OurProjects/>
    <OurTeam/>
    <Reviews/>
    <Scheme/>
    <FAQ/>
    <Subscription/>
</template>

<script>
import Share from "~/components/ShareComponent/Share.vue";
import StorageSystems from "~/components/StorageSystemsComponent/StorageSystems.vue";
import Reviews from "~/components/ReviewsComponent/Reviews.vue";
import Scheme from "~/components/SchemeComponent/Scheme.vue";
import FAQ from "~/components/FAQComponent/FAQ.vue";
import Subscription from "~/components/SubscriptionComponent/Subscription.vue";
import OurProjects from "~/components/OurProjectsComponent/OurProjects.vue";
import OurTeam from "~/components/OurTeamComponent/OurTeam.vue";
import OurPhoto from "~/components/OurPhotoComponent/OurPhoto.vue";
import api from "~/api/api.js";
import YourTasks from "~/components/YourTasksComponent/YourTasks.vue";

export default {
    name: "SchoolPage",
    components: {
        YourTasks,
        Share,
        StorageSystems,
        Reviews,
        Scheme,
        FAQ,
        Subscription,
        OurProjects,
        OurTeam,
        OurPhoto,
    },
    data() {
        return {
            navigationItems: ["Главная", "Каталог решений"],
        };
    },

    async setup() {
        const route = useRoute();

        const title = ref("Каталог");
        useHead({
            title,
            meta: [
                {name: "keywords", content: title},
                {name: "description", content: title}
            ]
        });

        let category = null;
        if (route.params.pathMatch && route.params.pathMatch.length > 0) {
            category = await api("category/" + route.params.pathMatch.join("/"));
            title.value = category.title;
        }
        return {
            category,
            title,
            products: category?.children.map(el => {
                return {
                    id: el.id,
                    src: el.picture,
                    title: el.title,
                    url: "/product/" + el.localUrl
                };
            })
        };
    }
};
</script>
