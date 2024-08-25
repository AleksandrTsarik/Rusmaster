<template>
    <div class="our-team">
        <div class="our-team__content">
            <h1 class="our-team__title title">В реализации любого <br> проекта важна команда</h1>
            <h2 class="our-team__subtitle subtitle">
                Мы объединены целью — быть продуктивными и обеспечить выгодный сервис высокого
                уровня
            </h2>
        </div>
        <div>
            <my-swiper
                    :slidesPerView="3"
                    :images="swipeImages"
                    swiperSlide="our-team__swiper-slide"
                    swiperSlideImage="our-team__swiper-slide__image"
                    slideClass="our-team__slide-wrapp"
                    titleClass="our-team__slide-title"
                    textClass="our-team__slide-text"
                    subtitleClass="our-team__slide-subtitle"
                    mySwiperClass="our-team__mySwiper"
                    :breakpoint="swiperBreakpoint3"
            />
        </div>
    </div>
</template>

<script>
import MySwiper from "~/components/SwiperComponent/Swiper.vue";
import Button from "~/components/ButtonComponent/Button.vue";
import api from "~/api/api.js";

export default {
    components: {
        MySwiper,
        Button,
    },

    async setup() {
        const swipeImages = [];
        const data = await api("category/team/");

        data.children.forEach(child => {
            swipeImages.push({
                id: child.id,
                src: child.picture,
                title: child.name,
                subtitle: child.post,
                text: child.description
            });
        });

        return {
            swipeImages
        }
    },

    data() {
        return {
            swiperBreakpoint3: {
                320: {
                    slidesPerView: 1,
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
.our-team {
    margin-bottom: 166px;
}

.our-team__content {
    width: 40%;
}

.our-team__title {
    margin-bottom: 20px;
}

@media (max-width: 1300px) {
    .our-team {
        margin-bottom: 100px;
    }

    .our-team__content {
        width: 75%;
    }
}

@media screen and (max-width: 767px) {
    .our-team__title {
        width: 90%;
    }

    .our-team__content {
        width: 100%;
    }

    .our-team__subtitle {
        font-size: 18px;
    }

    .our-team {
        margin-bottom: 80px;
    }

    .our-team__title {
        margin-bottom: 15px;
    }

    .our-team__subtitle {
        margin-bottom: 86px;
    }
}
</style>
