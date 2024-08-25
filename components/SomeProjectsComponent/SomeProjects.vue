<template>
    <div class="some-projects">
        <div class="some-projects__content">
            <h1 class="some-projects__title title">Некоторые из наших проектов</h1>
            <h2 class="some-projects__subtitle subtitle">
                Наши проекты - это воплощение идей и решений, созданных с учетом ваших потребностей. Делимся
                результатами нашей качественной и усердной работы.
            </h2>
        </div>
        <div>
            <my-swiper
                    :customPagination="true"
                    :slidesPerView="1"
                    :pagination="true"
                    :navigation="false"
                    :images="slides"
                    paginationType="fraction"
                    swiperSlide="some-projects__swiper-slide"
                    swiperSlideImage="some-projects__swiper-slide__image"
                    slideClass="some-projects__slide-wrapp"
                    titleClass="some-projects__slide-title"
                    subtitleClass="some-projects__slide-subtitle"
                    :buttonComponentWrapp="{ component: 'Button', props: { text: 'Да' } }"
                    mySwiperClass="some-projects__mySwiper"
                    swiperButtonClass="accent"
                    :question="true"
                    :breakpoint="swiperBreakpointGrid"
                    @openModal1="openModalForm"
                    :autoHeight="shouldAutoHeight"
            />
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
    data() {
        return {
            swiperBreakpointGrid: {
                320: {
                    grid: 1,
                },
                1350: {
                    grid: {
                        rows: 3,
                    },
                },
            },
            isModalOpenForm: false,
            phoneNumber: "+7 (999) 999 99 99",
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
    computed: {
        shouldAutoHeight() {
            return typeof window !== 'undefined' && window.innerWidth <= 1300;
        }
    },


    async setup() {
        const projects = await api("category/cases/");
        const slides = [];
        projects.children.forEach(child => slides.push({
            id: child.id,
            src: child.picture,
            title: child.title,
            subtitle: child.content,
            url: "/blog/" + child.localUrl
        }));

        return {
            slides
        };
    }
};
</script>

<style scoped>
.some-projects {
    margin-bottom: 180px;
}

.some-projects__content {
    width: 55%;
}

.some-projects__title {
    line-height: 120%;
    margin-bottom: 20px;
}

.some-projects__subtitle {
    margin-bottom: 10px;
}

@media (max-width: 1300px) {
    .some-projects {
        margin-bottom: 100px;
    }

    .some-projects__content {
        width: 100%;
    }

    .some-projects__title {
        width: 80%;
    }

    .some-projects__subtitle {
        font-size: 18px;
    }
}

@media screen and (max-width: 767px) {
    .some-projects {
        margin-bottom: 80px;
    }

    .some-projects__subtitle {
        margin-bottom: 0;
    }
}
</style>
