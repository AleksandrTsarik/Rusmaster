<template>
  <Share :navigationItems="navigationItems" />
  <SomeProjects />
  <OurTeam />
  <Reviews />
  <Scheme />
  <FAQ />
  <Subscription />
</template>

<script>
import Share from "~/components/ShareComponent/Share.vue";
import SomeProjects from "~/components/SomeProjectsComponent/SomeProjects.vue";
import Reviews from "~/components/ReviewsComponent/Reviews.vue";
import Scheme from "~/components/SchemeComponent/Scheme.vue";
import OurTeam from "~/components/OurTeamComponent/OurTeam.vue";
import FAQ from "~/components/FAQComponent/FAQ.vue";
import Subscription from "~/components/SubscriptionComponent/Subscription.vue";

export default {
  name: "CasesPage",
  components: { Share, SomeProjects, Reviews, Scheme, FAQ, OurTeam, Subscription },

  data() {
    return {
      navigationItems: ["Главная", "Наши работы"],
    };
  },
};
</script>
