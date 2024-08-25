<template>
    <div class="available">
        <div class="available__content">
            <h1 class="available__title title">Доступная и функциональная мебель</h1>
        </div>
        <div class="available__mySwiper">
            <my-swiper
                    :slidesPerView="4"
                    :images="swipeImages"
                    swiperSlide="available__swiper-slide"
                    swiperSlideImage="available__swiper-slide__image"
                    slideClass="available__slide-wrapp"
                    titleClass="available__slide-title"
                    subtitleClass="available__slide-subtitle"
                    :breakpoint="swiperBreakpoint4"
            />
        </div>
<!--        <div class="available__mySwiper1">-->
<!--            <my-swiper-->
<!--                    :slidesPerView="4"-->
<!--                    :images="swipeImages"-->
<!--                    swiperSlide="available__swiper-slide"-->
<!--                    swiperSlideImage="available__swiper-slide__image"-->
<!--                    slideClass="available__slide-wrapp"-->
<!--                    titleClass="available__slide-title"-->
<!--                    subtitleClass="available__slide-subtitle"-->
<!--                    :breakpoint="swiperBreakpoint4"-->
<!--            />-->
<!--        </div>-->
    </div>
</template>

<script>
import MySwiper from "~/components/SwiperComponent/Swiper.vue";
import Button from "~/components/ButtonComponent/Button.vue";

export default {
    components: {
        MySwiper,
        Button,
    },
    props: {
        swipeImages: {
            type: Array,
            required: true
        }
    },
    data() {
        return {
            swiperBreakpoint4: {
                320: {
                    slidesPerView: 1,
                },
                768: {
                    slidesPerView: 2,
                    spaceBetween: 20,
                },
                1280: {
                    slidesPerView: 4,
                    spaceBetween: 24,
                },
            },
        };
    },
};
</script>

<style scoped>
.available {
    margin-bottom: 166px;
}

.available__content {
    width: 40%;
}

.available__title {
    margin-bottom: 36px;
}

.available__subtitle {
    margin-bottom: 60px;
}

.available__swiper-slide {
    display: flex;
    padding: 23px;
    background: var(--accent2);
    gap: 92px;
}

@media (max-width: 1300px) {
    .available {
        margin-bottom: 115px;
    }

    .available__content {
        width: 80%;
    }

    .available__title {
        margin-bottom: 86px;
    }
}

@media screen and (max-width: 767px) {
    .available__subtitle {
        font-size: 18px;
        margin-bottom: 86px;
    }

    .available {
        margin-bottom: 80px;
    }

    .available__title {
        margin-bottom: 86px;
        width: 100%;
    }
}
</style>
