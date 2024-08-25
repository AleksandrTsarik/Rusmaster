<template>
  <div>
    <Top
      title="Мебель для создания пространства..."
      info-text="...где можно жить, отдыхать, работать и учиться"
    />
    <Button
      class="button accent"
      text="Button"
    />
    
    <BlogSlider />
    <YourTasks />
    
    <OurProjects />
    <Certificate />

<!--    <OurPhoto />-->
<!--    <FinishedFurniture />-->
    <Materials />
    <OurTeam />Есть задача?
    <Scheme />
    <Reviews />
    <FAQ />
    <Subscription />
  </div>
</template>

<script>
import Top from "~/components/TopComponent/Top.vue";
import YourTasks from "~/components/YourTasksComponent/YourTasks.vue";
import OurProjects from "~/components/OurProjectsComponent/OurProjects.vue";
import OurPhoto from "~/components/OurPhotoComponent/OurPhoto.vue";
// import FinishedFurniture from "~/components/FinishedFurnitureComponent/FinishedFurniture.vue";
import Materials from "~/components/MaterialsComponent/Materials.vue";
import OurTeam from "~/components/OurTeamComponent/OurTeam.vue";
import Scheme from "~/components/SchemeComponent/Scheme.vue";
import Reviews from "~/components/ReviewsComponent/Reviews.vue";
import FAQ from "~/components/FAQComponent/FAQ.vue";
import Subscription from "~/components/SubscriptionComponent/Subscription.vue";
import Certificate from "~/components/Сertificate/Сertificate.vue"
import BlogSlider from "~/components/BlogComponent/BlogSlider.vue"
import Button from "~/components/ButtonComponent/Button.vue";

export default {
  components: {
    Top,
    YourTasks,
    OurProjects,
    OurPhoto,
    // FinishedFurniture,
    Materials,
    OurTeam,
    Scheme,
    Reviews,
    FAQ,
    Subscription,
    Certificate,
    BlogSlider,
    Button
  },
};
</script>
