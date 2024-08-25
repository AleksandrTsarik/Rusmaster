<template>
    <div class="storage-systems">
        <div class="storage-systems__content">
            <h1 class="storage-systems__title title">
                Каталог готовых <br class="br-mob"/>
                дизайнерских решений
            </h1>
            <h2 class="storage-systems__subtitle subtitle">
                Этот блок предлагает широкий выбор готовых решений для оформления образовательных пространств, позволяя
                быстро и легко найти подходящий вариант.
            </h2>
        </div>
        <div>
            <h2 class="storage-systems__name subtitle">{{ title }}</h2>
            <my-swiper
                    :customPagination="true"
                    :slidesPerView="3"
                    :gridRows="3"
                    :images="swipeImages"
                    :pagination="false"
                    :navigation="false"
                    swiperSlide="storage-systems__swiper-slide"
                    swiperSlideImage="storage-systems__swiper-slide__image"
                    slideClass="storage-systems__slide-wrapp"
                    titleClass="storage-systems__slide-title"
                    mySwiperClass="storage-systems__mySwiper"
                    :breakpoint="swiperBreakpoint3"
            />
        </div>
    </div>
</template>

<script>
import MySwiper from "~/components/SwiperComponent/Swiper.vue";
import CustomPagination from "~/components/SwiperComponent/Swiper.vue";

export default {
    components: {
        MySwiper,
        CustomPagination,
    },
    props: {
        title: {
            type: String,
            default: "Системы хранения"
        },
        swipeImages: {
            type: Array,
            required: true
        }
    },
    data() {
        return {
            swiperBreakpoint3: {
                320: {
                    slidesPerView: 1,
                    grid: {
                        rows: 3,
                    },
                },
                768: {
                    slidesPerView: 2,
                    spaceBetween: 20,
                },
                1280: {
                    slidesPerView: 3,
                    spaceBetween: 24,
                },
            },
        };
    },
};
</script>

<style scoped>
.storage-systems {
    margin-bottom: 166px;
}

.storage-systems__content {
    width: 55%;
}

.storage-systems__title {
    margin-bottom: 20px;
}

.storage-systems__subtitle {
    margin-bottom: 40px;
}

.storage-systems__name {
    margin-bottom: 20px;
    font-weight: 400;
    font-size: 32px;
}

@media (max-width: 1300px) {
    .storage-systems__content {
        width: 75%;
    }

    .storage-systems {
        margin-bottom: 100px;
    }
}

@media screen and (max-width: 767px) {
    .storage-systems__subtitle {
        font-size: 18px;
    }

    .storage-systems__name {
        font-size: 24px;
    }

    .storage-systems {
        margin-bottom: 80px;
    }

    .storage-systems__content {
        width: 100%;
    }

    .storage-systems__title {
        width: 100%;
    }

    .storage-systems__name {
        margin-bottom: 12px;
    }
}
</style>
