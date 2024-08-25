<template>
    <div class="product">
        <Share :navigationItems="navigationItems" />
        <div class="product__container">
            <h2 class="product__title title">{{ product.title }}</h2>
            <div class="product__wrapper">
                <div class="product__subtitle mob1" v-html="product.content"></div>
                <SwiperThumbs :projects="product.toSwiper()" />

                <div class="product__content el-2">
                    <div class="product__subtitle desk" v-html="product.content"></div>
                    <div class="product__info-wrapper">
<!--                        <div class="product__options">-->
<!--                            <ul class="product__list">-->
<!--                                <li class="product__item">-->
<!--                  <span>Корпус</span-->
<!--                  ><span class="dots"-->
<!--                                >..............................................................</span-->
<!--                                ><span>ЛДСП Egger 1-й категории</span>-->
<!--                                </li>-->
<!--                                <li class="product__item">-->
<!--                  <span>Фасад</span-->
<!--                  ><span class="dots"-->
<!--                                >..............................................................</span-->
<!--                                ><span>МДФ 22 мм сборный</span>-->
<!--                                </li>-->
<!--                                <li class="product__item">-->
<!--                  <span>Покраска</span-->
<!--                  ><span class="dots"-->
<!--                                >..............................................................</span-->
<!--                                ><span>по раскладкам RAL, NCS, Sayerlack</span>-->
<!--                                </li>-->
<!--                                <li class="product__item">-->
<!--                  <span>Патина</span-->
<!--                  ><span class="dots"-->
<!--                                >............................................................................</span-->
<!--                                ><span>любая</span>-->
<!--                                </li>-->
<!--                                <li class="product__item">-->
<!--                  <span>Покрытие</span-->
<!--                  ><span class="dots"-->
<!--                                >..............................................................</span-->
<!--                                ><span>матовое, глянец</span>-->
<!--                                </li>-->
<!--                                <li class="product__item">-->
<!--                  <span>Фурнитура</span-->
<!--                  ><span class="dots"-->
<!--                                >..............................................................</span-->
<!--                                ><span>Blum с доводчиками</span>-->
<!--                                </li>-->
<!--                                <li class="product__item">-->
<!--                  <span>Размеры</span-->
<!--                  ><span class="dots"-->
<!--                                >..............................................................</span-->
<!--                                ><span>любые размеры</span>-->
<!--                                </li>-->
<!--                            </ul>-->
<!--                        </div>-->
                        <div class="product__content_buttons">
                            <Button
                                    class="accent"
                                    text="Запросить стоимость"
                                    @click="openModalForm"
                            />
                            <Button
                                    class="button"
                                    text="Пригласить в тендер"
                                    @click="openModalForm"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <ModalContent :show="isModalOpenForm" @close="closeModalForm">
        <template #form>
            <h1 class="mo-title">РАССЧИТАТЬ ПРОЕКТ</h1>
            <h2 class="mo-subtitle">чтобы рассчитать проект...</h2>
            <SchemeStepImage :phone="phoneNumber"/>
            <Form/>
        </template>
    </ModalContent>
</template>

<script>
import Share from "~/components/ShareComponent/Share.vue";
import Button from "~/components/ButtonComponent/Button.vue";
import SwiperThumbs from "~/components/SwiperComponent/SwiperThumbs.vue";
import ModalContent from "~/components/ModalComponent/ModalContent.vue";
import Form from "~/components/FormComponent/Form.vue";
import SchemeStepImage from "~/components/SchemeComponent/SchemeStepImage.vue";
import Entity from "~/dto/Entity.js";
import product from "../../pages/product.vue";

export default {
    computed: {
        product() {
            return product;
        },
        navigationItems() {
            return ["Главная", "Каталог решений", this.product.title];
        }
    },
    components: {
        Share,
        Button,
        SwiperThumbs,
        ModalContent,
        Form,
        SchemeStepImage,
    },
    props: {
        product: {
            type: Entity,
            required: true
        }
    },
    data() {
        return {
            isModalOpenForm: false,
            phoneNumber: "+7 909 271-46-30",
        };
    },
    methods: {
        openModalForm() {
            this.isModalOpenForm = true;
        },
        closeModalForm() {
            this.isModalOpenForm = false;
        },
    },
};
</script>

<style scoped>
.product {
    margin-bottom: 181px;
}

.product__wrapper {
    display: flex;
    gap: 88px;
}

.product__content {
    width: 50%;
}

.product__subtitle {
    margin-bottom: 20px;
    font-size: 20px;
}

.product__content_buttons {
    gap: 10px;
    display: flex;
}

.product__options {
    width: 30.5rem;
}

.product__options {
    font-size: 18px;
}

.product__item {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    font-size: 1.6rem;
    white-space: nowrap;
}

.product__item:not(:last-child) {
    margin-bottom: 1.5rem;
}

.product__item span {
    flex-shrink: 0;
    white-space: nowrap;
    font-size: 18px;
}

.product__item .dots {
    -ms-flex-negative: 1;
    flex-shrink: 1;
    overflow: hidden;
    -o-text-overflow: ellipsis;
    text-overflow: ellipsis;
}

.product__info-wrapper {
    display: flex;
    gap: 6rem;
    margin-bottom: 3rem;
    flex-direction: column;
}

.product__title {
    margin-bottom: 60px;
}

@media (max-width: 1300px) {
    .product__content {
        width: 100%;
    }

    .product__wrapper {
        flex-direction: column;
        gap: 30px;
    }

    .product {
        margin-bottom: 100px;
    }

    .product__item span {
        font-size: 20px;
    }

    .product__info-wrapper {
        align-items: center;
    }

    .product__options {
        width: 33.5rem;
        line-height: 190%;
    }
}

@media screen and (max-width: 767px) {
    .product__title {
        width: 100%;
        margin-bottom: 13px;
    }

    .product__subtitle {
        font-size: 18px;
    }

    .product__item span {
        font-size: 18px;
    }

    .product__options {
        width: 22.5rem;
        line-height: 190%;
    }

    .product__content_buttons {
        flex-direction: column;
        width: 100%;
    }

    .product {
        margin-bottom: 80px;
    }

    .product__subtitle {
        margin-bottom: 0;
    }
}

@media screen and (max-width: 767px) {
    .product__item span {
        font-size: 15px;
    }

    .product__options {
        width: 20.5rem;
    }

    .product__info-wrapper {
        margin-bottom: 20px;
    }

    .product__item {
        font-size: 15px;
        line-height: 190%;
        margin-bottom: 0 !important;
    }

    .product__info-wrapper {
        gap: 20px;
    }
}
</style>
