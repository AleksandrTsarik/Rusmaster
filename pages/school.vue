<template>
    <div v-if="category">
        <Top
                :title="category.title"
                :info-text="category.description"
                :img="category.picture"
        />
        <AvailableFurniture
                v-if="furniture.length > 0"
                :swipe-images="furniture"
        />
        <Factors/>
        <OurProjects/>
        <OurPhoto v-if="showPhoto" :link="galleryLink"/>
        <Mission/>
        <OurTeam/>
        <Reviews/>
        <Scheme/>
        <FAQ/>
        <Subscription/>
    </div>
</template>

<script>
import Top from "~/components/TopComponent/Top.vue";
import AvailableFurniture from "~/components/AvailableFurnitureComponent/AvailableFurniture.vue";
import Factors from "~/components/FactorsComponent/Factors.vue";
import OurProjects from "~/components/OurProjectsComponent/OurProjects.vue";
import Mission from "~/components/MissionComponent/Mission.vue";
import OurTeam from "~/components/OurTeamComponent/OurTeam.vue";
import Reviews from "~/components/ReviewsComponent/Reviews.vue";
import Scheme from "~/components/SchemeComponent/Scheme.vue";
import FAQ from "~/components/FAQComponent/FAQ.vue";
import Subscription from "~/components/SubscriptionComponent/Subscription.vue";
import api from "~/api/api.js";
import OurPhoto from "~/components/OurPhotoComponent/OurPhoto.vue";
import galleryLinks from "~/api/galleryLinks.js";

export default {
    name: "IndexPage",
    components: {
        OurPhoto,
        Top,
        AvailableFurniture,
        Factors,
        OurProjects,
        Mission,
        OurTeam,
        Reviews,
        Scheme,
        FAQ,
        Subscription,
    },

    async setup() {
        const route = useRoute();
        if (!route.params.path) {
            navigateTo("/");
            return;
        }

        const title = ref("");
        useHead({
            title,
            meta: [
                {name: "keywords", content: title},
                {name: "description", content: title}
            ]
        });

        const showPhoto = ['space-for-business', 'sozdat-yut-doma', 'create-edu-area'].includes(route.params.path);
        const category = await api("category/" + route.params.path);
        title.value = category.title;

        return {
            showPhoto,
            category,
            galleryLink: galleryLinks[route.params.path],
            furniture: category.subCategories
                .filter(el => el.picture)
                .map(el => {
                    return {
                        id: el.id,
                        src: el.picture,
                        title: el.title,
                        url: "/catalog" + el.localUrl
                    };
                })
        };
    }
};
</script>
