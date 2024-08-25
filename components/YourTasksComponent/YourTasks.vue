<template>
    <div class="task-section">
        <h2 class="task-section__title title">Какие у вас задачи?</h2>
        <div class="card-container">
            <NuxtLink
                    v-for="(card, index) in cards"
                    :key="index"
                    :class="{ 'white-background': index === 3 }"
                    class="card"
                    :to="card.url"
            >
                <NuxtImg :src="card.image" alt="Card Image" class="card__image" v-if="card.image"/>
                <p class="card__text">{{ card.text }}</p>
                <div v-if="index === 3" class="task-section__cta">
                    <span class="task-section__cta-text">Есть задача?</span>
                    <Button
                            class="contact-button accent"
                            text="Связаться"
                            @click="openModalForm"
                    ></Button>
                </div>
            </NuxtLink>
            <div
                    class="white-background card"
                    to="#"
            >
                <NuxtImg src="/images/your-tasks-4.png" alt="Card Image" class="card__image"/>
                <div class="task-section__cta">
                    <span class="task-section__cta-text">Есть задача?</span>
                    <Button
                            class="contact-button accent"
                            text="Связаться"
                            @click="openModalForm"
                    ></Button>
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
import Button from "~/components/ButtonComponent/Button.vue";
import ModalContent from "~/components/ModalComponent/ModalContent.vue";
import Form from "~/components/FormComponent/Form.vue";
import SchemeStepImage from "~/components/SchemeComponent/SchemeStepImage.vue";
import api from "~/api/api.js";

export default {
    components: {
        Button,
        ModalContent,
        SchemeStepImage,
        Form,
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

    async setup() {
        const categories = [
            api("category/create-edu-area/"),
            api("category/space-for-business/"),
            api("category/sozdat-yut-doma/")
        ];
        const cards = (await Promise.all(categories))
            .map(cat => {
                return {
                    image: cat.picture,
                    text: cat.title,
                    url: "/category" + cat.localUrl
                };
            });

        return {
            cards
        };
    }
};
</script>

<style scoped>
.task-section {
    margin-bottom: 165px;
}

.task-section__title {
    margin-bottom: 65px;
}

.card-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
}

.card {
    width: calc(50% - 10px);
    margin-bottom: 30px;
    position: relative;
}

.card__image {
    width: 100%;
    height: max-content;
}

.card__text {
    margin-top: 10px;
    font-size: 24px;
}

.task-section__cta {
    position: absolute;
    left: 50%;
    top: 43%;
    transform: translateX(-50%);
    display: flex;
    gap: 40px;
    align-items: center;
    font-weight: 400;
}

.task-section__cta-text {
    font-size: 24px;
    white-space: nowrap;
}

@media (max-width: 1300px) {
    .card-container {
        flex-direction: column;
    }

    .task-section__title {
        margin-bottom: 40px;
        font-size: 36px;
        line-height: 120%;
    }

    .card {
        width: 100%;
    }

    .card__image {
        width: 100%;
        height: max-content;
    }

    .card__text {
        margin-top: 0;
    }

    .task-section {
        margin-bottom: 114px;
    }
}

@media screen and (max-width: 767px) {
    .task-section__title {
        font-size: 26px;
        width: 100%;
    }

    .card__text {
        font-size: 18px;
    }

    .card {
        margin-bottom: 18px;
    }

    .task-section__cta-text {
        font-size: 18px;
    }

    .task-section__cta {
        top: 25%;
        flex-direction: column;
        gap: 15px;
        width: 70%;
    }

    .task-section {
        margin-bottom: 80px;
    }
}
</style>
