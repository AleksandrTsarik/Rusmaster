<template>
    <div class="reviews">
        <div class="reviews__content">
            <h1 class="reviews__title title">Отзывы</h1>
            <h2 class="reviews__subtitle subtitle">
                Доверие достигается трудом и результатами наших заказчиков
            </h2>
        </div>
        <div>
            <MySwiper
                    :slidesPerView="2"
                    :images="swipeImages"
                    swiperSlide="reviews__swiper-slide"
                    swiperSlideImage="reviews__swiper-slide__image"
                    slideClass="reviews__slide-wrapp"
                    titleClass="reviews__slide-title"
                    textClass="reviews__slide-text"
                    subtitleClass="reviews__slide-subtitle"
                    :quote="true"
                    :player="true"
                    mySwiperClass="reviews__mySwiper"
                    :breakpoint="swiperBreakpoint1"
                    @openModal2="openModalVideo"
            />
        </div>
    </div>
    <ModalContent :show="isModalOpenVideo" @close="closeModalVideo">
        <template #video>
            <iframe
                    width="560"
                    height="315"
                    :src="'https://www.youtube.com/embed/' + video"
                    frameborder="0"
                    allowfullscreen
            ></iframe>
        </template>
    </ModalContent>
</template>

<script>
import MySwiper from "~/components/SwiperComponent/Swiper.vue";
import ModalContent from "~/components/ModalComponent/ModalContent.vue";
import api from "~/api/api.js";

export default {
    components: {
        MySwiper,
        ModalContent,
    },
    data() {
        return {
            swiperBreakpoint1: {
                320: {
                    slidesPerView: 1,
                    spaceBetween: 24,
                },
                1500: {
                    slidesPerView: 2,
                    spaceBetween: 24,
                },
            },
            isModalOpenVideo: false,
            video: ""
        };
    },

    async setup() {
        const data = await api("category/otzivi/");
        const swipeImages = [];
        data.children.forEach(el => {
            swipeImages.push({
                id: el.id,
                src: el.picture || "/images/logo.svg",
                title: el.title,
                subtitle: el.description,
                text: el.content,
                video: el.video
            });
        });

        return {
            swipeImages
        };
    },

    methods: {
        openModalVideo(video) {
            this.video = video;
            this.isModalOpenVideo = true;
        },

        closeModalVideo() {
            this.isModalOpenVideo = false;
        },
    },
};
</script>

<style scoped>
.reviews {
    margin-bottom: 166px;
}

.reviews__title {
    margin-bottom: 20px;
}

@media (max-width: 1700px) {
    .reviews__content {
        width: 50%;
    }
}

@media (max-width: 1300px) {
    .reviews {
        margin-bottom: 100px;
    }

    .reviews__content {
        width: 40%;
    }

    .reviews__title {
        margin-bottom: 15px;
    }

    .reviews__subtitle {
        margin-bottom: 40px;
    }
}

@media screen and (max-width: 767px) {
    .reviews {
        margin-bottom: 80px;
    }

    .reviews__content {
        width: 100%;
        margin-bottom: 86px;
    }
}
</style>
