<template>
    <div class="blog-article">
        <h2 class="blog-article__title title">{{ post.title }}</h2>
        <div class="blog-article__content">
            <!--            <p class="blog-article__text blog-article__text&#45;&#45;first">-->
            <!--                Онлайн-генератор случайного текста, правильный Lorem Ipsum на русском языке. ...-->
            <!--                Прародителем текста-рыбы является известный "Lorem Ipsum" — латинский текст, ноги-->
            <!--                которого растут аж из 45 года до нашей эры.-->
            <!--            </p>-->

            <!--            <NuxtImg-->
            <!--                    v-if="post.picture"-->
            <!--                    class="blog-article__image main-image"-->
            <!--                    :src="post.picture"-->
            <!--                    alt="blog"-->
            <!--            />-->

            <BlogSlider :swipe-images="gallery"/>
            <iframe
                    v-if="post.video"
                    frameborder="0"
                    allowfullscreen
                    :src="'https://www.youtube.com/embed/' + post.video"
                    :title="post.title"
                    width="100%"
                    height="315"
            ></iframe>

            <p class="blog-article__text" v-html="post.content">
            </p>

            <!--            <div class="blog-article__images-row">-->
            <!--                <NuxtImg class="blog-article__image image1" src="/images/blog-2.png" alt="blog"/>-->
            <!--                <NuxtImg class="blog-article__image image2" src="/images/blog-3.png" alt="blog"/>-->
            <!--            </div>-->
        </div>
        <Offer/>
    </div>
</template>

<script>
import Offer from "~/components/OfferComponent/Offer.vue";
import Entity from "~/dto/Entity.js";
import MySwiper from "~/components/SwiperComponent/Swiper.vue";
import BlogSlider from "~/components/BlogComponent/BlogSlider.vue";

export default {
    name: "BlogPage",
    components: {
        BlogSlider,
        MySwiper,
        Offer,
    },

    props: {
        post: {
            type: Entity,
            required: true
        }
    },

    setup(props) {
        const gallery = props.post.gallery.map((el, i) => {
            return {
                id: i + 1,
                src: el,
                alt: props.post.title
            };
        });

        return {
            gallery
        };
    }
};
</script>

<style scoped>
.blog-article {
    width: 50%;
    margin: 0 auto;
}

.blog-article__title {
    margin-bottom: 20px;
}

.blog-article__text {
    font-family: var(--font-family);

    font-size: 18px;
    line-height: 140%;

    margin-top: 20px;
    margin-bottom: 10px;
}

.blog-article__text--first {
    font-size: 20px;

    margin-bottom: 60px;
}

.blog-article__image {
    width: 789px;
}

.blog-article__image {
    margin: 10px 0 20px 0;
}

.blog-article__images-row {
    display: flex;
    justify-content: center;
    gap: 24px;
    margin-bottom: 20px;
}

.blog-article__images-row img {
    margin-bottom: 0;
}

.blog-article__image.image1,
.blog-article__image.image2 {
    width: 382px;
    height: 242px;
}

@media (max-width: 1300px) {
    .blog-article {
        width: 100%;
    }

    .blog-article__image {
        width: 100%;
    }

    .blog-article__image.image1,
    .blog-article__image.image2 {
        width: 50%;
        height: auto;
    }

    .blog-article__images-row {
        margin-bottom: 30px;
    }

    .offer {
        margin-bottom: 80px;
    }
}

@media screen and (max-width: 767px) {
    .blog-article__text {
        font-size: 15px;
    }

    .blog-article__text--first {
        font-size: 18px;
    }

    .blog-article__images-row {
        gap: 15px;
    }

    .blog-article__image.image1,
    .blog-article__image.image2 {
        max-width: 159px;
    }

    .blog-article__title {
        width: 100%;
        margin-bottom: 115px;
    }

    .blog-article__text--first {
        margin-bottom: 30px;
    }
}
</style>
