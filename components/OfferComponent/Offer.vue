<template>
    <div class="offer" :style="{ backgroundImage: `url(${backgroundUrl})` }">
        <h1 class="offer__title">Есть задачи по меблировке?</h1>
        <p class="offer__text">
            Мы предложим решение по удобной, функциональной и красивой мебели, которая будет отвечать вашим ожиданиям от
            пространства и вписываться в разумный бюджет.
        </p>
        <Button text="Записаться на встречу" class="accent" @click="openModalForm"/>
    </div>
    <ModalContent :show="isModalOpenForm" @close="closeModalForm">
        <template #form>
            <h1 class="mo-title">ЗАПИСАТЬСЯ НА ВСТРЕЧУ</h1>
            <h2 class="mo-subtitle">чтобы рассчитать проект...</h2>
            <SchemeStepImage :phone="phoneNumber"/>
            <Form/>
        </template>
    </ModalContent>
</template>

<script>
import Button from "~/components/ButtonComponent/Button.vue";
import ModalContent from "~/components/ModalComponent/ModalContent.vue";
import Form from "~/components/FormComponent/Form.vue";
import SchemeStepImage from "~/components/SchemeComponent/SchemeStepImage.vue";

export default {
    name: "OfferComponent",
    components: {
        Button,
        ModalContent,
        Form,
        SchemeStepImage,
    },

    data() {
        return {
            backgroundUrl: "/images/offer.png",
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
.offer {
    padding: 50px 40px;
    margin-bottom: 180px;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
}

.offer__title {
    font-size: 32px;

    margin-bottom: 20px;
}

.offer__text {
    font-size: 18px;
    line-height: 140%;

    width: 50%;
    margin-bottom: 100px;
}

@media (max-width: 1300px) {
    .offer {
        margin-bottom: 100px;
    }
}

@media screen and (max-width: 767px) {
    .offer__title {
        font-size: 18px;
    }

    .offer {
        padding: 20px;
        background-position: 100%;
        margin-bottom: 80px;
    }

    .offer__text {
        font-size: 15px;
        width: 100%;
        margin-bottom: 77px;
    }
}
</style>
