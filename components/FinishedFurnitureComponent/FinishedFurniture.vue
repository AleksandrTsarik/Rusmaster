<template>
  <div class="finished">
    <div class="finished__content">
      <h1 class="finished__title title">
        <span class="title-text">
          Готовая мебель в нашем каталоге
          <NuxtImg class="social-icon" src="/images/dots.svg" alt="dots"
        /></span>
      </h1>
      <h2 class="finished__subtitle subtitle">
        В производстве мы используем комплектующие <br> зарекомендовавших себя у российских и
        зарубежных производителей
      </h2>
    </div>
    <div class="finished__mySwiper">
      <my-swiper
        :slidesPerView="3"
        :images="swipeImages"
        swiperSlide="finished__swiper-slide"
        swiperSlideImage="finished__swiper-slide__image"
        slideClass="finished__slide-wrapp"
        titleClass="finished__slide-title"
        :breakpoint="swiperBreakpoint3"
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
          src: "/images/finished-1.png",
          title: "Парты",
        },
        {
          id: 2,
          src: "/images/finished-2.png",
          title: "Учительские столы",
        },
        {
          id: 3,
          src: "/images/finished-3.png",
          title: "Системы хранения",
        },
        {
          id: 4,
          src: "/images/finished-2.png",
          title: "Системы хранения",
        },
      ],
      swiperBreakpoint3: {
        320: {
          slidesPerView: 1,
          spaceBetween: 0,
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
.finished {
  margin-bottom: 166px;
}
.finished__title {
  margin-bottom: 20px;
  position: relative;
}
.title-text img {
  width: 10px;
  position: relative;
  top: 6px;
}

.finished__swiper-slide {
  display: flex;
  padding: 23px;
  background: var(--accent2);
  gap: 92px;
}

.finished__content {
  width: 50%;
}
@media (max-width: 1300px) {
  .finished__title {
    margin-bottom: 15px;
  }
  .finished__subtitle {
    margin-bottom: 40px;
  }
  .finished {
    margin-bottom: 100px;
  }
  .finished__content {
    width: 64%;
  }
}
@media screen and (max-width: 767px) {
  .finished__content {
    width: 90%;
  }
  .finished__subtitle {
    font-size: 18px;
    margin-bottom: 86px;
  }

  .finished {
    margin-bottom: 80px;
  }
  .finished__title {
    width: 90%;
    font-size: 26px;
line-height: 120%;
letter-spacing: 0.02em;
text-transform: uppercase;
color: var(--heading);
  }
  .title-text img {
    left: 15px;
  }
  .finished {
    margin-bottom: 80px;
  }
}
</style>
