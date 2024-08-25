<template>
    <div class="top">
        <div class="top__left">
            <h2 class="top__title desk1">{{ title }}</h2>
            <div class="top__answer desk">
                <p class="top__answer_text">Есть задача?</p>
                <div class="top__answer_buttons">
                    <Button class="accent" text="Да" @click="openModalForm"/>
                    <Button class="button" text="Нет" @click="openModalForm"/>
                </div>
            </div>
        </div>

        <div class="top__right">
            <NuxtImg :src="img" alt="top"/>
            <h2 class="top__title mob1">{{ title }}</h2>
            <div class="top__info">
                <p class="top__info_text">{{ infoText }}</p>
                <div class="top__answer mob1">
                    <p class="top__answer_text">Есть задача?</p>
                    <div class="top__answer_buttons">
                        <Button class="accent" text="Да" @click="openModalForm"/>
                        <Button class="button" text="Нет" @click="openModalForm"/>
                    </div>
                </div>
                <div class="top__info_right" @click="openModalVideo">
                    <span>
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
          </span>
                    <p class="top__info_right_text">
                        Обязательно<br/>посмотрите это видео
                    </p>
                </div>
            </div>
        </div>

        <ModalContent :show="isModalOpenVideo" @close="closeModalVideo">
            <template #video>
                <iframe
                        width="560"
                        height="315"
                        src="https://www.youtube.com/embed/QqxhLewy5Xk"
                        frameborder="0"
                        allowfullscreen
                ></iframe>
            </template>
        </ModalContent>

        <ModalContent :show="isModalOpenForm" @close="closeModalForm">
            <template #form>
                <h1 class="mo-title">РАССЧИТАТЬ ПРОЕКТ</h1>
                <h2 class="mo-subtitle">чтобы рассчитать проект...</h2>
                <SchemeStepImage :phone="phoneNumber"/>
                <Form/>
            </template>
        </ModalContent>
    </div>
</template>

<script>
import Button from "~/components/ButtonComponent/Button.vue";
import ModalContent from "~/components/ModalComponent/ModalContent.vue";
import Form from "~/components/FormComponent/Form.vue";
import SchemeStepImage from "~/components/SchemeComponent/SchemeStepImage.vue";

export default {
    components: {
        Button,
        ModalContent,
        Form,
        SchemeStepImage,
    },
    props: {
        title: {
            type: String,
            required: true,
        },
        infoText: {
            type: String,
            required: true,
        },
        img: {
            type: String,
            default: "/images/top.jpg"
        }
    },
    data() {
        return {
            isModalOpenForm: false,
            isModalOpenVideo: false,
            phoneNumber: "+7 909 271-46-30",
            isMouseOver: false,
        };
    },
    methods: {
        openModalForm() {
            this.isModalOpenForm = true;
        },
        closeModalForm() {
            this.isModalOpenForm = false;
        },
        openModalVideo() {
            this.isModalOpenVideo = true;
        },

        closeModalVideo() {
            this.isModalOpenVideo = false;
        },
    },
};
</script>

<style scoped lang="scss">
.top {
    display: flex;
    position: relative;
    margin-bottom: 170px;
    &__left {
        position: absolute;
        top: 77px;
        left: 0;
        z-index: 10;
    }
    &__right {
        margin-left: auto;
        margin-right: 20%;
        max-width: 100%;
        img {
            width: 100%;
            height: 100%;
            object-fit: cover;
        }
    }
    // display: flex;
    // position: relative;
    // min-width: 100vh;
    // margin-bottom: 171px;
}

.top__left {
    // position: absolute;
    // top: 77px;
    // left: 0;
    // text-align: right;
    // z-index: 10;
}

.top__title {
    font-size: 50px;
    line-height: 1.2;
    letter-spacing: 0.01em;
    text-transform: uppercase;
    color: var(--heading);
    text-align: left;
    margin-bottom: 72px;
    width: 65%;
}

.top__right {
    // position: relative;
    // margin-bottom: 15px;
    // left: 27.3%;
}

.top__answer {
    display: flex;
    align-items: center;
    gap: 21px;
}

.top__answer_text {
    font-size: 18px;
    line-height: 140%;
}

.top__answer_buttons {
    gap: 10px;
    display: flex;
}

.top__info {
    margin-top: 15px;
    display: flex;
    max-width: 65rem;
}

.top__info_text {
    width: 54%;
    font-size: 18px;
    width: 34.5vw;
}

.top__info_right {
    cursor: pointer;

    font-size: 18px;
    line-height: 140%;

    align-items: center;
    display: flex;
    gap: 17px;
}

.top__info_right img {
    width: 55px;
}

@media (max-width: 1350px) {
    .desk {
        display: none;
    }

    .top {
        flex-direction: column;
        margin-bottom: 100px;
        min-width: 100%;
    }

    .top__left {
        position: relative;
        top: auto;
        left: auto;
        text-align: center;
        width: 100%;
    }

    .top__right {
        position: relative;
        margin-bottom: 15px;
        left: 0;
        width: 100%;
    }

    .top__title {
        font-size: 41px;
        margin-bottom: 30px;
        margin-top: 70px;
    }

    .top__answer {
        align-items: center;
        gap: 10px;
    }

    .top__answer_text {
        font-size: 18px;
    }

    .top__answer_buttons {
        gap: 10px;
    }

    .top__info {
        flex-direction: column;
        gap: 20px;
    }

    .top__info_text {
        font-size: 24px;
        width: 100%;
        text-align: start;
    }

    .top__info_right {
        cursor: pointer;
        font-size: 16px;
        line-height: 140%;
        align-items: center;
        gap: 10px;
        position: absolute;
        top: 30px;
        left: 30px;
    }

    .top__info_right img {
        width: 40px;
    }
}

@media screen and (max-width: 767px) {
    .top__title {
        font-size: 32px;
        line-height: 115%;
        letter-spacing: 0.01em;
    }

    .top__title {
        margin-top: 0;
        font-size: 32px;
        width: 100%;
        margin-bottom: 10px;
    }

    .top__info_right_text {
        display: none;
    }

    .top__info_right {
        top: 17%;
        left: 45%;
    }

    .top__answer {
        flex-direction: column;
        align-items: start;
    }

    .top__answer_buttons {
        width: 100%;
    }

    .top {
        margin-bottom: 80px;
    }

    .top__info {
        gap: 25px;
    }
}
</style>
