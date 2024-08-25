<template>
    <div class="certificate">
        <div class="certificate__title title">Наши награды и сертификаты</div>
        <div class="certificate__slider">
            <Fancybox :options="optionsFancyBox">
                <swiper
                        :spaceBetween="30"
                        :slidesPerView="1"
                        :navigation="{
						prevEl: prev,
						nextEl: next}"
                        :modules="modules"
                        class="certificate-slider"
                >
                    <swiper-slide v-for="(item, i) in slides" :key="i">
                        <a class="certificate-slide" data-fancybox="FancyBoxGallery" :href="item.img">
                            <div class="certificate-slide__img">
                                <img :src="item.img" alt="..." loading="lazy">
                            </div>
                        </a>
                    </swiper-slide>
                </swiper>
                <div ref="prev" class="swiper-button-prev"></div>
                <div ref="next" class="swiper-button-next"></div>
            </Fancybox>
        </div>

    </div>
</template>

<script>
import {ref} from 'vue'
import {Swiper, SwiperSlide} from 'swiper/vue';
import Fancybox from '@/components/Сertificate/FancyBoxGallery.vue'
// import required modules
import {FreeMode, Navigation, Mousewheel} from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
import api from "~/api/api.js";


export default {
    components: {
        Swiper,
        SwiperSlide,
        Fancybox
    },
    data() {
        return {
            slide: [],
            optionsFancyBox: {
                Carousel: {
                    infinite: true,
                },
                Thumbs: {
                    type: "classic",
                },
            },
        }
    },
    async setup() {

        const data = await api("2024/08/08/сертификаты/");
        const slides = data.gallery.map((img, i) => {
            return {
                id: i + 1,
                img
            };
        });

        const prev = ref(null)
        const next = ref(null)
        return {
            modules: [FreeMode, Navigation, Mousewheel],
            prev,
            next,
            slides
        };

    }
};
</script>

<style lang="scss">
.certificate {
  margin-bottom: 165px;
  @media(max-width: 767px) {
    margin-bottom: 80px;
  }

  &__title {
    margin-bottom: 65px;
  }

  &__slider {
    position: relative;
  }
}

.certificate-slide {
  &__img {
    max-width: 30rem;
    margin: 0 auto;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
}

.certificate-slider {
  position: relative;
}
</style>