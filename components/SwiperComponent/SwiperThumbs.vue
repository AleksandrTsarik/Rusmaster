<template>
    <div class="swiper-thumbs">
        <swiper
                :style="{
        '--swiper-navigation-color': '#fff',
        '--swiper-pagination-color': '#fff',
      }"
                :navigation="{
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      }"
                :thumbs="{ swiper: thumbsSwiper }"
                :modules="modules"
                :loop="true"
                class="mySwiper2"
        >
            <swiper-slide v-for="project in projects" :key="project.id">
                <img :src="project.src"/>
            </swiper-slide>
            <div class="swiper-button-prev"></div>
            <div class="swiper-button-next"></div>
        </swiper>

        <swiper
                @swiper="setThumbsSwiper"
                :spaceBetween="11"
                :slidesPerView="4"
                :freeMode="true"
                :watchSlidesProgress="true"
                :modules="modules"
                :loop="true"
                class="mySwiper1"
        >
            <swiper-slide v-for="project in projects" :key="project.id">
                <img :src="project.src"/>
            </swiper-slide>
        </swiper>
    </div>
</template>

<script>
/**
 * @typedef {Object} SwiperItem
 * @property {number} id
 * @property {string} src
 */

import {Swiper, SwiperSlide} from "swiper/vue";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/free-mode";
import "swiper/css/thumbs";
import {FreeMode, Navigation, Thumbs} from "swiper/modules";

export default {
    components: {
        Swiper,
        SwiperSlide,
    },
    props: {
        /**
         * @type {SwiperItem[]}
         */
        projects: {
            type: Array,
            default: () => []
        }
    },
    data() {
        return {
            thumbsSwiper: null,
            modules: [FreeMode, Navigation, Thumbs],
        };
    },
    methods: {
        setThumbsSwiper(swiper) {
            this.thumbsSwiper = swiper;
        },
    },
};
</script>

<style scoped>
.swiper-thumbs {
    display: flex;
    flex-direction: column;
    width: auto;
}

.swiper-container {
    display: flex;
    justify-content: center;
}

.swiper-slide {
    width: 100%;
}

.mySwiper1 {
    width: 173px;
    width: 100%;
    max-width: 38vw;
}

.mySwiper2 {
    width: 100%;
    margin-bottom: 12px;
    max-width: 725px;
    margin-left: 0;
}

.swiper-button-prev,
.swiper-button-next {
    position: absolute;
    top: 50%;
    width: 27px;
    height: 44px;
    transform: translateY(-50%);
    cursor: pointer;
    z-index: 10;
    padding: 0 20px 10px 20px;
}

.swiper-button-prev:hover,
.swiper-button-next:hover {
    background: rgba(240, 240, 240, 0.3);
}

.swiper-button-prev {
    left: 10px;
}

.swiper-button-next {
    right: 15px;
    left: auto;
}

@media (max-width: 1300px) {
    .swiper-thumbs {
        flex-direction: column;
        margin-bottom: 0;
    }

    .mySwiper2 {
        max-width: 100%;
        width: auto;
    }

    .mySwiper1 {
        max-width: 100%;
        width: auto;
    }

    .swiper-button-prev {
        left: 5px;
    }

    .swiper-button-next {
        right: 5px;
        left: auto;
    }
}
</style>
