<template>
    <div class="b-slider">
<!--            <div class="b-slider__content">-->
<!--                <h1 class="b-slider__title title">Мебель для однокомнатной квартиры</h1>-->
<!--            </div>-->
        <div>
            <MySwiper
                :slidesPerView="1"
                :gridRows="1"
                :images="swipeImages"
                :pagination="false"
                :loop="false"
                :navigation="true"
                swiperSlideW="b-slide"
                swiperSlideImage="b-slide__img"
                mySwiperClass="b-slide__mySwiper"
                :autoHeight="true"
            />
        </div>
    </div>

</template>

<script>
import MySwiper from "~/components/SwiperComponent/Swiper.vue";
//import Button from "~/components/ButtonComponent/Button.vue";

export default {
    components: {
        MySwiper,
        //Button,
    },

    props: {
        swipeImages: {
            type: Array,
            default: () => []
        }
    }
};
</script>

<style lang="scss">
.b-slide {
    margin: 0 auto;
    a {
        display: block;
   
    }
    &__img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        margin: 0 auto;
        display: block;
    }
    &__mySwiper {
        margin: 0 auto 0;
        .swiper-slide {} 
    }
}
.b-slider {
    margin: 0 auto 100px;
    @media(max-width: 1300px) {
        margin: 0 auto;
    }
    &__title {
        text-align: center;
        margin: 0 0 25px;
        @media(max-width: 1300px) {
            text-align: left;
            max-width: 80%;
        }
    }
    &__content {
        margin-bottom: 10px;
        @media(max-width: 575px) {
            margin-bottom: 80px;
        }
    }
    .swiper-button-prev, .swiper-button-next {
        top: 50%;
        @media(max-width: 1300px) {
            top: -50px;
        }
    }
    .swiper-button-prev {
        left: -55px;
        @media(max-width: 1300px) {
            left: auto;
            right: 70px;
        }
    }
    .swiper-button-next {
        right: -55px;
        left: auto;
        @media(max-width: 1300px) {
            right: 0;
            left: auto;
        }
    }

}
</style>
