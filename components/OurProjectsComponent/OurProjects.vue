<template>
    <div class="our-projects">
        <div class="our-projects__content">
            <h1 class="our-projects__title title">Наши проекты</h1>
        </div>
        <div class="our-projects__swiper-container">
            <my-swiper
                    :slidesPerView="1"
                    :images="swipeImages"
                    swiperSlide="our-projects__swiper-slide"
                    swiperSlideW="our-projects__swiper-w"
                    swiperSlideImage="our-projects__swiper-slide__image"
                    slideClass="our-projects__slide-wrapp"
                    titleClass="our-projects__slide-title"
                    subtitleClass="our-projects__slide-subtitle"
                    :buttonComponent="{ component: 'Button', isLink: true, props: { text: 'Подробнее' } }"
                    mySwiperClass="our-projects__mySwiper"
                    @openModal="openModalForm" 
                    :autoHeight="true"
            >
            </my-swiper>
        </div>
    </div>
    <ModalContent :show="isModalOpenForm" @close="closeModalForm">
        <template #form>
            <h1 class="mo-title">РАССЧИТАТЬ ПРОЕКТ</h1>
            <h2 class="mo-subtitle">чтобы рассчитать проект...</h2>
            <SchemeStepImage :phone="phoneNumber"/>
            <Form/>
        </template>
    </ModalContent>
</template>

<script>
import MySwiper from "~/components/SwiperComponent/Swiper.vue";
import Button from "~/components/ButtonComponent/Button.vue";
import ModalContent from "~/components/ModalComponent/ModalContent.vue";
import Form from "~/components/FormComponent/Form.vue";
import SchemeStepImage from "~/components/SchemeComponent/SchemeStepImage.vue";
import api from "~/api/api.js";

export default {
    components: {
        MySwiper,
        Button,
        ModalContent,
        Form,
        SchemeStepImage,
    },
    props: {
        path: {
            type: String,
            default: "category/cases/"
        }
    },
    data() {
        return {
            isModalOpenForm: false,
            phoneNumber: "+7 909 271-46-30",
        };
    },
    methods: {
        openModalForm() {
            this.isModalOpenForm = true;
        },
        closeModalForm() {
            this.isModalOpenForm = false;
        },
    },

    async setup(props) {
        const swipeImages = [];
        const data = await api(props.path);
        data.children.forEach(el => swipeImages.push({
            id: el.id,
            src: el.picture,
            title: el.title,
            subtitle: el.description,
            url: "/blog/" + el.localUrl
        }));

        return {
            swipeImages
        };
    }
};
</script>

<style scoped>
.our-projects {
    margin-bottom: 166px;
}

.our-projects__swiper-container {
    height: fit-content;
    width: 100%;
}

@media (min-width: 1700px) {
    .our-projects__swiper-container {
        width: 100%;
    }

    .our-projects .swiper-button-prev {
        left: 58%;
    }

    .our-projects .swiper-button-next {
        left: 62.5%;
    }
}

@media (max-width: 1300px) {
    .our-projects__swiper-container {
        width: 100%;
    }

    .photo {
        margin-bottom: 100px;
    }
}

@media screen and (max-width: 767px) {
    .our-projects {
        margin-bottom: 80px !important;
    }

    .our-projects__title {
        font-size: 26px;
        width: 50%;
    }
}
</style>
