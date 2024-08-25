<template>
  <div class="materials">
    <div class="materials__content">
      <h1 class="materials__title title">Надежные, красивые и <br> безопасные материалы</h1>
      <h2 class="materials__subtitle subtitle">
        В производстве мы используем комплектующие <br> зарекомендовавших себя у российских и
        зарубежных производителей
      </h2>
    </div>
    <div class="materials__mySwiper">
      <my-swiper
        :slidesPerView="4"
        :images="swipeImages"
        swiperSlide="materials__swiper-slide"
        swiperSlideImage="materials__swiper-slide__image"
        slideClass="materials__slide-wrapp"
        titleClass="materials__slide-title"
        subtitleClass="materials__slide-subtitle"
        :breakpoint="swiperBreakpoint4"
      />
    </div>
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
  data() {
    return {
      swipeImages: [
        {
          id: 1,
          src: "/images/materials-1.png",
          title: "Листовой материал",
          subtitle: "Краткое описание комплектующей",
        },
        {
          id: 2,
          src: "/images/materials-2.png",
          title: "Фурнитура",
          subtitle: "Краткое описание комплектующей",
        },
        {
          id: 3,
          src: "/images/materials-3.png",
          title: "МДФ-эмаль",
          subtitle: "Краткое описание комплектующей",
        },
        {
          id: 4,
          src: "/images/materials-4.png",
          title: "Шпон",
          subtitle: "Краткое описание комплектующей",
        },
        {
          id: 5,
          src: "/images/materials-4.png",
          title: "МДФ-эмаль",
          subtitle: "Краткое описание комплектующей",
        },
      ],
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
.materials {
  margin-bottom: 166px;
}
.materials__content {
  width: 50%;
}
.materials__title {
  margin-bottom: 20px;
}

.materials__subtitle {
  margin-bottom: 60px;
}
.materials__swiper-slide {
  display: flex;
  padding: 23px;
  background: var(--accent2);
  gap: 92px;
}

@media (max-width: 1300px) {
  .materials {
    margin-bottom: 115px;
  }
  .materials__content {
    width: 70%;
  }
  .materials__subtitle {
    margin-bottom: 40px;
  }
}

@media screen and (max-width: 767px) {
  .materials__subtitle {
    font-size: 18px;
    margin-bottom: 86px;
  }
  .materials {
    margin-bottom: 80px;
  }
  .materials__title {
    width: 100%;
  }
  .materials__content {
    width: 92%;
  }
}
</style>
