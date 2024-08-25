<template>
    <div class="photo">
        <h1 class="photo__title title">Наши рендеры</h1>
        <div class="photo__mySwiper">
            <my-swiper
                    :gridRows="2"
                    :images="swipeImages"
                    mySwiperClass="photo__mySwiper"
                    :breakpoint="swiperBreakpoint3"
                    @imageClick="handleImageClick"
            />
        </div>
    </div>
    <ModalImg
            :show="showModal"
            :image="selectedImage"
            :index="selectedIndex"
            @close="showModal = false"
            v-if="selectedImage"
    />
</template>

<script>
import MySwiper from "~/components/SwiperComponent/Swiper.vue";
import ModalImg from "~/components/ModalComponent/ModalImg.vue";
import api from "~/api/api.js";

export default {
    components: {
        MySwiper,
        ModalImg,
    },
    props: {
        link: {
            type: String,
            default: "gallery/"
        }
    },
    data() {
        return {
            // swipeImages: [
            //     {
            //         src: "/images/gallery-1.png",
            //         alt: "",
            //         type: "video",
            //         videoId: "MrSYP-cotdg",
            //     },
            // ],
            showModal: false,
            selectedImage: null,
            selectedIndex: null,
            swiperBreakpoint3: {
                320: {
                    slidesPerView: 1,
                    grid: {
                        rows: 1,
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

    methods: {
        handleImageClick(image) {
            this.selectedImage = image;
            this.showModal = true;
        },
    },

    async setup(props) {
        const swipeImages = [];
        const data = await api("category/" + props.link);
        data.children.forEach(el => {
            el.gallery.forEach(img => {
                swipeImages.push({
                    src: img,
                    alt: el.title
                });
            });
        });

        return {
            swipeImages
        };
    }
};
</script>

<style scoped>
.photo {
    margin-bottom: 180px;
}

.photo__title {
    margin-bottom: 60px;
}

@media (max-width: 1300px) {
    .photo__title {
        margin-bottom: 40px;
    }

    .product__wrapper {
        flex-direction: column;
    }

    .photo {
        margin-bottom: 100px;
    }
}

@media screen and (max-width: 767px) {
    .photo {
        margin-bottom: 80px;
    }

    .photo__title {
        width: 70%;
        margin-bottom: 88px;
    }
}
</style>
