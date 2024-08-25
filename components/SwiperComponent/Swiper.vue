<template>
    <div class="swiper-container">
        <div>
            <swiper
                    ref="swiper"
                    :slidesPerView="slidesPerView"
                    :grid="{ rows: gridRows }"
                    :spaceBetween="spaceBetween"
                    :modules="modules"
                    :pagination="pagination ? paginationStyle : false"
                    :navigation="{
                    prevEl: prev,
                    nextEl: next}"
                    :loop="true"
                    :class="mySwiperClass"
                    :paginationType="paginationType"
                    :breakpoints="breakpoint"
                    @swiper="onSwiper"
                    loopAddBlankSlides="false"
                    :autoHeight
            >
                <swiper-slide
                        :class="swiperSlide"
                        v-for="(image, index) in images"
                        :key="index"
                        @click="handleImageClick(image)"
                >
                    <!-- <NuxtLink :to="image.url">-->
                    <div v-if="swiperSlideW" :class="swiperSlideW">
                        <NuxtLink :to="image.url">
                            <NuxtImg
                                    :class="swiperSlideImage"
                                    :src="image.src"
                                    :alt="image.alt"
                            />
                        </NuxtLink>
                    </div>
                    <NuxtLink v-else :to="image.url">
                        <NuxtImg

                                :class="swiperSlideImage"
                                :src="image.src"
                                :alt="image.alt"
                        />
                    </NuxtLink>
                    <p v-if="player && image.video" class="player" @click="openModal2(image.video)">
                        <svg
                                width="55"
                                height="55"
                                viewBox="0 0 55 55"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                        >
                            <g class="filter-circle" filter="url(#filter0_b_329_555)">
                                <circle
                                        id="circle"
                                        cx="27.5"
                                        cy="27.5"
                                        r="27.5"
                                        fill="#C37F53"
                                />
                            </g>
                            <path
                                    d="M33.5849 26.1914C34.1384 26.5508 34.1384 27.4492 33.5849 27.8086L24.2453 33.8735C23.6918 34.2329 23 33.7837 23 33.0649L23 20.9351C23 20.2163 23.6918 19.7671 24.2453 20.1265L33.5849 26.1914Z"
                                    fill="#13181B"
                            />
                            <defs>
                                <filter
                                        id="filter0_b_329_555"
                                        x="-200"
                                        y="-200"
                                        width="455"
                                        height="455"
                                        filterUnits="userSpaceOnUse"
                                        color-interpolation-filters="sRGB"
                                >
                                    <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                                    <feGaussianBlur in="BackgroundImageFix" stdDeviation="100"/>
                                    <feComposite
                                            in2="SourceAlpha"
                                            operator="in"
                                            result="effect1_backgroundBlur_329_555"
                                    />
                                    <feBlend
                                            mode="normal"
                                            in="SourceGraphic"
                                            in2="effect1_backgroundBlur_329_555"
                                            result="shape"
                                    />
                                </filter>
                            </defs>
                        </svg>
                    </p>

                    <div :class="slideClass">
                        <div :class="titleClass">
                            <NuxtLink :to="image.url" v-if="image.url">
                                {{ image.title }}
                            </NuxtLink>
                            <template v-else>
                                {{ image.title }}
                            </template>
                        </div>
                        <div :class="subtitleClass">
                            <div v-html="image.subtitle">
                            </div>
                            <div :class="textClass" v-html="image.text"></div>
                        </div>

                        <div class="question-wrapp" v-if="question">
                            <div class="question-calculate">
                                Рассчитать такой проект для вас?
                            </div>
                            <Button
                                    :class="swiperButtonClass"
                                    v-if="buttonComponentWrapp.component"
                                    :is="buttonComponentWrapp.component"
                                    v-bind="buttonComponentWrapp.props"
                                    class="button"
                                    @click="openModal1"
                            />
                        </div>
                        <template v-if="buttonComponent.component">
                            <NuxtLink class="nuxtbutton" :to="image.url" v-if="buttonComponent.isLink">
                                {{ buttonComponent.props.text }}
                            </NuxtLink>
                            <Button
                                    v-else
                                    :is="buttonComponent.component"
                                    v-bind="buttonComponent.props"
                                    class="button"
                                    @click="openModal"
                            />
                        </template>
                    </div>
                    <!--/NuxtLink>-->
                </swiper-slide>
            </swiper>
            <div v-if="navigation" ref="prev" class="swiper-button-prev"></div>
            <div v-if="navigation" ref="next" class="swiper-button-next"></div>
            <div v-if="customPagination" class="pagination-container">
                <div @click="goToPrevSlide" class="pagination-prev" ref="prev"></div>
                <div class="pagination" ref="pagination">
                    <div
                            :class="{ 'pagination-active': currentSlide === index }"
                            v-for="(slide, index) in visiblePaginationItems"
                            :key="index"
                            @click="goToSlide(slide - 1)"
                    >
                        {{ index + 1 }}
                    </div>
                </div>
                <div class="pagination-next" @click="goToNextSlide" ref="next"></div>
            </div>
        </div>
    </div>
</template>

<script>
import {Swiper, SwiperSlide} from "swiper/vue";
import "swiper/css";
import "swiper/css/grid";
import "swiper/css/navigation";
import {Grid, Navigation, Pagination} from "swiper/modules";
import Button from "~/components/ButtonComponent/Button.vue";

export default {
    components: {
        Button,
        Swiper,
        SwiperSlide,
    },
    props: {
        slidesPerView: {
            type: Number,
            default: 3,
        },
        playerProp: {
            type: Boolean,
            default: false,
        },
        gridRows: {
            type: Number,
            default: 1,
        },
        spaceBetween: {
            type: Number,
            default: 24,
        },
        navigation: {
            type: Boolean,
            default: true,
        },
        customPagination: {
            type: Boolean,
            default: false,
        },
        pagination: {
            type: Boolean,
            default: false,
        },
        paginationType: {
            type: String,
            default: "fraction",
        },
        images: {
            type: Array,
        },
        quote: Boolean,
        question: Boolean,
        player: Boolean,
        buttonComponent: {
            type: Object,
            default: () => ({
                component: null,
                props: {},
            }),
        },
        buttonComponentWrapp: {
            type: Object,
            default: () => ({
                component: null,
                props: {},
            }),
        },
        breakpoint: {
            type: Object,
            default: null,
        },
        autoHeight: {
            type: Boolean,
            default: false
        },
        mySwiperClass: String,
        slideClass: String,
        titleClass: String,
        subtitleClass: String,
        textClass: String,
        swiperSlideImage: String,
        swiperSlide: String,
        swiperSlideW: String,
        swiperButtonClass: String,
    },
    data() {
        return {
            modules: [Grid, Navigation, Pagination],
            paginationStyle: {
                el: ".swiper-pagination",
                clickable: true,
                renderBullet: function (index, className) {
                    return '<span class="' + className + '">' + (index + 1) + "</span>";
                },
            },
            prev: null,
            next: null,
            swiper: null,
            currentSlide: 0,
            currentLightboxIndex: 0,
            isMouseOver: false,
        };
    },
    mounted() {
        this.prev = this.$refs.prev;
        this.next = this.$refs.next;
    },
    methods: {
        onSwiper(swiper) {
            this.swiper = swiper;
            this.swiper.on("slideChange", () => {
                this.currentSlide = this.swiper.realIndex;
            });
        },
        goToPrevSlide() {
            if (this.currentSlide > 0) {
                this.currentSlide--;
                this.swiper.slidePrev();
            }
        },
        goToNextSlide() {
            if (this.currentSlide < this.totalSlides - 1) {
                this.currentSlide++;
                this.swiper.slideNext();
            }
        },
        goToSlide(index) {
            this.currentSlide = index;
            this.swiper.slideTo(index);
        },
        openModal() {
            this.$emit("openModal");
        },
        openModal1() {
            this.$emit("openModal1");
        },
        openModal2(video = null) {
            this.$emit("openModal2", video);
        },
        handleImageClick(image) {
            this.$emit("imageClick", image);
        },
        changeCircleColor() {
            var circle = document.getElementById("circle");
            circle.setAttribute("fill", "#fff");
        },
    },
    computed: {
        visiblePaginationItems() {
            const total = this.totalSlides;
            const visibleItems = [1];
            if (!visibleItems.includes(total)) {
                visibleItems.push(total);
            }
            return visibleItems.sort((a, b) => a - b);
        },
    },
};
</script>
<style>
.question-wrapp {
    display: flex;
}

.question-calculate {
    font-size: 20px;
    width: 200px;
}

.storage-systems .swiper-button-prev::before,
.some-projects .swiper-button-prev::before,
.storage-systems .swiper-button-next::before,
.some-projects .swiper-button-next::before {
    font-size: 8px;
}

.swiper-pagination {
    bottom: 0 !important;
    left: 44% !important;
    max-width: 150px;
    display: flex;
    justify-content: center;
    align-items: center;
}

.storage-systems__swiper-slide {
    display: flex;
    flex-direction: column;
    padding: 25px;
    background: var(--accent2) !important;
    max-width: 517px;
}

.pagination {
    font-family: var(--font-family);
    font-weight: 300;
    font-size: 20px;
    color: var(--text);
    opacity: 1;
    background: inherit;
    cursor: pointer;
    margin: 0 5px;
}

.pagination-active {
    font-weight: 400;
}

.storage-systems__mySwiper {
    height: 1311px;
    padding-bottom: 50px;
    position: relative;
}

@media screen and (min-width: 3000px) {
    .photo__mySwiper {
        height: 2040px;
    }
}

@media screen and (max-width: 2999px) {
    .photo__mySwiper {
        height: 1200px;
    }
}

@media screen and (max-width: 1930px) {
    .photo__mySwiper {
        height: 800px;
    }
}

@media screen and (min-width: 3000px) {
   .blog-article__content .photo__mySwiper {
    height: 2200px;
    }
}

@media screen and (max-width: 2999px) {
   .blog-article__content .photo__mySwiper {
    height: 2200px;
    }
}

@media screen and (max-width: 1930px) {
   .blog-article__content .photo__mySwiper {
        height: 1350px;
    }
}


.reviews__mySwiper {
    height: 330px;
    height: max-content;
}

.our-projects__mySwiper {
    height: auto;
    width: 100%;
}

@media (min-width: 1700px) {
}

.our-projects__swiper-w img {
    max-width: 684px;
}

@media (max-width: 1705px) {
    .our-projects__swiper-w {
        width: 45%;
    }
}

@media screen and (min-width: 1920px) {
    .finished__mySwiper {
        height: max-content;
    }
}

@media screen and (max-width: 1920px) {
    .finished__mySwiper {
        height: 500px;
    }
}

@media screen and (min-width: 1920px) {
    .materials__mySwiper {
        height: max-content;
    }
}

@media screen and (max-width: 1920px) {
    .materials__mySwiper {
        height: 443px;
    }
}

.some-projects__mySwiper {
    padding-top: 50px;
    height: 2100px;
    position: relative;
}

.some-projects__mySwiper a {
    width: 60%;
}

.swiper-container {
    position: relative;
}

.mySwiper {
    position: relative;
    width: 100%;
}

.swiper-button-prev,
.swiper-button-next {
    background-color: inherit;
    cursor: pointer;
    color: var(--text);
    border: 1px solid var(--text);
    position: absolute;
    top: -86px;
    width: 51px;
    height: 51px;
}

.swiper-button-prev:hover,
.swiper-button-next:hover {
    background: rgba(240, 240, 240, 0.3);
    transition: all 300ms;
}

.swiper-button-prev {
    left: auto;
    right: 36px;
    left: 51%;
}

.swiper-button-next {
    right: 0;
    left: 55%;
}

.blog-article__content .swiper-slide img {
    max-height: 600px;
}


@media (max-width: 1700px) {
    .swiper-button-next {
        right: 0;
        left: 56%;
    }

    .quote-mark {
        top: 168px;
    }
}

@media (max-width: 1700px) {
    .photo__mySwiper {
        height: 717px;
    }

    .blog-article__content .photo__mySwiper {
        height: 1250px;
    }
}

@media (max-width: 1270px) {

    .blog-article__content .photo__mySwiper {
        height: 717px;
    }
}

@media (max-width: 890px) {

.blog-article__content .photo__mySwiper {
    height: 684px;
}
}

@media (max-width: 758px) {

.blog-article__content .photo__mySwiper {
    height: 550px;
}
}

@media (max-width: 475px) {

.blog-article__content .photo__mySwiper {
    height: 300px;
}
}


.photo__mySwiper {
    cursor: pointer;
}

.swiper-button-next:after,
.swiper-rtl .swiper-button-prev:after,
.swiper-button-prev:after,
.swiper-rtl .swiper-button-next:after {
    content: "";
}

.swiper-button-prev::before {
    content: url("~/assets/left.svg");
    background-position: center;
    background-size: cover;
    font-size: 22px;
}

.swiper-button-next::before {
    content: "→";
    content: url("~/assets/rigth.svg");
    background-position: center;
    background-size: cover;
    font-size: 22px;
}

/* materials */
.materials__swiper-slide,
.available__swiper-slide {
    padding: 25px;
    background: var(--accent2);
    padding-bottom: 27px;
    height: auto;
}

.materials__slide-title,
.available__slide-title,
.our-team__slide-title {
    font-size: 24px;
}

.materials__slide-subtitle,
.available__slide-subtitle,
.our-team__slide-text {
    font-size: 18px;
}

.available__slide-title {
    margin-top: 20px;
    font-size: 24px;
}

.available__slide-title
    /* storage-systems */
.storage-systems__slide-wrapp {
    display: flex;
    flex-direction: column;
    justify-content: center;
}

.storage-systems__slide-title {
    font-size: 24px;
    margin-top: 20px;
    margin-bottom: 27px;
}

/* our-projects */

.our-projects__swiper-slide {
    display: flex;
    padding: 23px 70px 23px 23px;
    background: var(--accent2);
    gap: 92px;
    align-items: center;
    min-height: auto;
    margin-bottom: 24px;
    height: fit-content;
}

@media screen and (min-width: 1805px) {
    .our-projects__swiper-w {
        width: 46%;
    }
}

@media screen and (min-width: 1816px) {
    .our-projects__swiper-w {
        width: 46%;
    }
}

@media screen and (max-width: 1805px) {
    .our-projects__swiper-w {
        width: 46%;
    }
}

@media screen and (max-width: 1430px) {
    .our-projects__swiper-w {
        width: 45%;
    }
}

.our-projects__slide-wrapp {
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 43%;
}

.our-projects__slide-wrapp button {
    width: 49%;
}

.our-projects__title {
    margin-bottom: 60px;
}

.our-projects__slide-title {
    font-size: 32px;
    margin-bottom: 40px;
}

.our-projects__slide-subtitle {
    font-size: 18px;
    line-height: 140%;
    margin-bottom: 85px;
}

/* our-team */
.our-team__slide-wrapp {
    display: flex;
    flex-direction: column;
    gap: 5px;
}

.our-team__swiper-slide {
    padding: 25px;
    background: var(--accent2);
    height: auto;
    display: flex;
    flex-direction: column;
    gap: 20px;
    padding-bottom: 12px;
}

.our-team__slide-subtitle {
    font-size: 20px;
}

.our-team__slide-title,
.reviews__slide-wrapp {
    display: flex;
    flex-direction: column;
    justify-content: center;
}

/* reviews */
.reviews__slide-title {
    font-size: 24px;
    margin-bottom: 4px;
}

.reviews__slide-subtitle {
    font-size: 18px;
    line-height: 140%;
}

.quote-mark {
    font-size: 70px;
    color: var(--accent);
    position: absolute;
    top: 170px;
}

.player {
    position: absolute;
    left: 187px;
    bottom: 37px;
    width: 50px;
    height: 50px;
    cursor: pointer;
}

.reviews__slide-wrapp {
    display: flex;
}

.reviews__swiper-slide__image {
    width: 230px;
    height: 280px;
    margin-right: 20px;
}

.reviews__slide-text {
    font-size: 20px;
    color: var(--text);
    margin-top: 75px;
}

.reviews__swiper-slide {
    display: flex;
    gap: 44px;
    background: var(--accent2);
    padding: 25px;
    height: auto;
}

/* finished */
.finished__swiper-slide {
    padding: 25px;
    background: var(--accent2);
}

.finished__slide-title,
.some-projects__slide-title {
    font-size: 24px;
    margin-top: 20px;
}

/* some-projects */
@media (min-width: 1320px) {
    .some-projects__swiper-slide {
        height: auto !important;
    }
}

.some-projects__swiper-slide__image {
    /*width: 60%;*/
    height: max-content;
}

.some-projects__swiper-slide {
    display: flex;
    padding: 23px 70px 23px 23px;
    background: var(--accent2);
    gap: 92px;
    align-items: center;
    min-height: 531px;
    margin-bottom: 24px;
    margin-top: 0 !important;
}

.some-projects__slide-wrapp {
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 50%;
    gap: 20px;
}

.some-projects__slide-subtitle {
    font-size: 18px;
    margin-bottom: 60px;
}
.some-projects__slide-subtitle div {
  display: flex;
    flex-direction: column;
    gap: 5px;
}

@media (min-width: 1300px) {
    .blog-article__content .swiper-button-next {
    left: 50%;
    top: -150px;
}

.blog-article__content .swiper-button-prev {
    top: -150px;
    left: 41%;
}
}

@media (max-width: 1320px) {
    .available .swiper-button-prev,
    .available .swiper-button-next {
        top: -55px;
    }

    .our-projects__mySwiper {
        width: 688px;
    }

    .our-projects__swiper-w {
        width: 100%;
    }

    .our-projects__swiper-slide {
        flex-direction: column;
        gap: 30px;
        padding: 17px 35px 17px 17px;
    }

    .our-projects__slide-title {
        margin-bottom: 15px;
    }

    .our-projects__slide-subtitle {
        margin-bottom: 26px;
    }

    .photo__mySwiper {
        height: 794px;
    }

    .blog-article__content.photo__mySwiper {
        height: 1000px;
    }

    .finished {
        margin-bottom: 100px;
    }

    .finished__swiper-slide {
        padding: 20px;
    }

    .finished__slide-title {
        margin-top: 15px;
    }

    .finished__mySwiper {
        height: 350px;
    }

    .materials__swiper-slide,
    .available__swiper-slide {
        padding: 20px;
    }

    .reviews__swiper-slide {
        gap: 41px;
    }

    .reviews__slide-subtitle {
        width: 100%;
    }

    .storage-systems__mySwiper {
        height: 910px;
    }

    .storage-systems__slide-title {
        margin-top: 15px;
        margin-bottom: 0;
    }

    .storage-systems__swiper-slide {
        max-width: 334px;
        padding: 20px;
    }

    .some-projects__swiper-slide {
        flex-direction: column;
        gap: 20px;
        padding: 20px;
        min-height: auto;
    }

    .some-projects__slide-title {
        margin-top: 0;
    }

    .some-projects__swiper-slide__image {
        width: 100%;
    }

    .some-projects__slide-wrapp {
        width: 100%;
    }

    .some-projects__slide-subtitle {
        margin-bottom: 30px;
    }

    .mySwiper2 {
        width: 688px;
    }

    .swiper-button-prev,
    .our-projects .swiper-button-prev {
        left: auto;
        right: 68px;
        left: auto;
    }

    .swiper-button-next,
    .our-projects .swiper-button-next {
        right: 0;
        left: auto;
    }

    .our-team__swiper-slide {
        padding: 20px;
    }
}

@media (max-width: 1351px) {
    .some-projects__mySwiper {
        height: 100%;
    }

    .our-projects__slide-wrapp {
        width: 100%;
    }

    .our-projects__slide-wrapp button {
        width: 100%;
    }

    .our-projects__slide-wrapp .nuxtbutton {
        width: 100%;
    }
}

@media screen and (max-width: 767px) {
    .our-projects__swiper-slide__image {
        height: max-content;
    }

    .some-projects__mySwiper {
        padding-top: 30px;
    }

    .our-projects__slide-title {
        font-size: 22px;
        margin-bottom: 15px;
    }

    .our-projects__slide-subtitle {
        font-size: 15px;
        margin-bottom: 30px;
    }

    .our-projects__swiper-slide {
        padding: 20px;
    }

    .our-projects__title {
        margin-bottom: 86px;
    }

    .our-projects__mySwiper {
        width: 100%;
    }

    .reviews__mySwiper {
        height: 666px;
    }

    .reviews__swiper-slide {
        flex-direction: column;
    }

    .quote-mark {
        top: 74%;
    }

    .reviews__swiper-slide__image {
        width: 100%;
        height: max-content;
    }

    .reviews__swiper-slide {
        padding: 20px;
    }

    .reviews__swiper-slide {
        gap: 15px;
        height: auto;
    }

    .player {
        left: 244px;
        bottom: 325px;

        left: 282px;
        bottom: 10px;
    }

    .reviews__slide-title {
        font-size: 22px;
    }

    .reviews__slide-subtitle {
        font-size: 15px;
    }

    .reviews__slide-text {
        font-size: 18px;
        min-height: 150px;
    }

    .reviews__swiper-slide__image {
        margin-right: 0;
    }

    .finished__slide-title {
        font-size: 18px;
        margin-top: 10px;
    }

    .finished__mySwiper {
        height: 320px;
    }

    .materials__slide-title,
    .available__slide-title {
        font-size: 22px;
    }

    .materials__slide-subtitle,
    .available__slide-subtitle {
        font-size: 18px;
    }

    .our-team__slide-title {
        font-size: 22px;
    }

    .our-team__slide-subtitle {
        font-size: 18px;
    }

    .our-team__slide-text {
        font-size: 15px;
    }

    .mySwiper2 {
        width: 328px;
        height: 207px;
    }

    .storage-systems__slide-title {
        margin-top: 10px;
        font-size: 18px;
    }

    .swiper-button-prev,
    .swiper-button-next {
        top: -49px;
    }

    .swiper-pagination {
        bottom: 0 !important;
        left: 27% !important;
    }

    .some-projects .swiper-button-prev,
    .storage-systems .swiper-button-prev {
        left: 56%;
    }

    .some-projects__slide-title {
        font-size: 22px;
    }

    .some-projects__slide-subtitle {
        font-size: 15px;
    }

    .question-wrapp {
        flex-direction: column;
    }

    .question-calculate {
        font-size: 15px;
        width: 100%;
        margin-bottom: 20px;
    }

    .reviews__slide-subtitle {
        min-height: 202px;
        max-height: 240px;
    }
}

@media screen and (max-width: 500px) {
    .our-projects__swiper-w {
        width: 100%;
    }
}


.pagination-container {
    position: relative;
    bottom: -10px;
    left: 50%;
    transform: translateX(-50%);
    z-index: 10;
}

.pagination-container {
    position: relative;
    display: flex;
    justify-content: flex-end;
    align-items: center;
}

.pagination-prev,
.pagination-next {
    cursor: pointer;
    border: 1px solid var(--text);
    padding: 7px;
}

.pagination {
    display: flex;
}

.pagination div {
    margin: 0 5px;
}

.pagination-prev::before {
    content: url("~/assets/prews.svg");
    font-size: 3px;
    background-position: center;
    background-size: cover;
    display: flex;
}

.pagination-next::before {
    content: url("~/assets/rigths.svg");
    font-size: 3px;
    background-position: center;
    background-size: cover;
    display: flex;
}
</style>
