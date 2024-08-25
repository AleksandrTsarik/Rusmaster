<template>
    <div class="scheme">
        <div class="scheme__container">
            <div class="scheme__intro">
                <h2 class="scheme__intro__title title">
                    Как мы выстраиваем сотрудничество?
                </h2>
                <div class="scheme__intro__subtitle subtitle large">
                    Мы потрудились над схемой нашего взаимодействия, чтобы вы экономили
                    своё время, а ваш проект был реализован своевременно и по
                    привлекательной цене
                </div>
                <div class="scheme__buttons">
                    <button
                            v-for="(button, index) in buttons"
                            :key="index"
                            :class="[
              'scheme__button',
              { 'scheme__button--active': index === activeStep },
            ]"
                            @click="changeStep(index)"
                    >
                        <span class="scheme__button__count">{{ button.count }}</span>
                        <span class="scheme__button__text">{{ button.text }}</span>
                    </button>
                </div>
            </div>
            <div class="scheme__wrapper">
                <div class="scheme__steps large">
                    <div
                            v-for="(step, index) in steps"
                            :key="index"
                            :class="[
              'scheme__step',
              { 'scheme__step--active': index === activeStep },
            ]"
                    >
                        <div class="scheme-step__content">
                            <div class="scheme-step__content-top">
                                <h4 class="scheme-step__title">{{ step.title }}</h4>
                                <div class="scheme-step__desc">{{ step.desc }}</div>
                            </div>
                            <SchemeStepImage v-if="index === 0" :phone="step.form.phone"/>
                            <Form
                                    v-if="step.form"
                                    :formTitle="step.form.title"
                                    :inputs="step.form.inputs"
                                    :submitButtonText="step.form.buttonText"
                                    formWrapp="scheme-form-wrapp"
                            />
                            <div class="scheme-step__steps-buttons">
                                <button
                                        v-if="index !== 0"
                                        @click="changeStep(activeStep - 1)"
                                        class="scheme-step__step-button scheme-step__step-button--prev"
                                >
                                    Предыдущий шаг
                                </button>
                                <button
                                        v-if="index !== steps.length - 1"
                                        @click="changeStep(activeStep + 1)"
                                        class="scheme-step__step-button scheme-step__step-button--next"
                                >
                                    Следующий шаг
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Form from "~/components/FormComponent/Form.vue";
import SchemeStepImage from "~/components/SchemeComponent/SchemeStepImage.vue";

export default {
    components: {
        Form,
        SchemeStepImage,
    },
    data() {
        return {
            activeStep: 0,
            formData: {},
            buttons: [
                {count: "1", text: "Знакомство"},
                {count: "2", text: "Решение"},
                {count: "3", text: "Договор"},
                {count: "4", text: "Производство"},
                {count: "5", text: "Доставка и сборка"},
            ],
            steps: [
                {
                    title: "1 ЗНАКОМСТВО",
                    desc: "На данном этапе мы выявляем основные потребности наших Заказчиков и рассказываем о наших возможностях. После  анализа потребностей и возможностей, за каждым клиентом мы закрепляем персонального менеджера, который ведёт заказ от момента согласования до момента сдачи заказа.",
                    form: {
                        phone: " +7 909 271-46-30",
                        title: "Заказ обратного звонка",
                    },
                },
                {
                    title: "2 РЕШЕНИЕ",
                    desc: "Прежде чем приступить к выполнению заказа, наши конструкторы и дизайнеры всегда предлагают несколько вариантов решения задач, поставленных Заказчиком. Мы внимательно относимся не только к вопросам дизайна мебели, но и к ее качественным и техническим характеристикам. Ваша будущая мебель должна быть красивой и удобной.",
                },
                {
                    title: "3 ДОГОВОР",
                    desc: "Все вопросы, которые были решены во время согласования проекта, фиксируются в Договоре, заключаемом сторонами. Мы подробно прописываем условия и сроки проведения работ по изготовлению и установке мебели. К договору всегда приложена спецификация на выпускаемый товар, в которой присутствует подробное ТЗ и чертежи будущей мебели. Данные меры позволяют Вам рассчитывать именно на тот результат, который и был запланирован.",
                },
                {
                    title: "4 ПРОИЗВОДСТВО",
                    desc: "Вся техническая документация из Договора, передается на производство, где Ваш заказ будет поставлен в график. Мы  производим  мебель в оговоренный срок и надлежащего качества. При возникновении незапланированных ситуаций,  мы всегда держим связь с Заказчиком и предпринимаем все необходимые меры для устранения возможных  недочётов.",
                },
                {
                    title: "5 ДОСТАВКА И СБОРКА",
                    desc: "По готовности заказа он посиупант на склад, откуда может быть доставлен к Вам как нашим автотранспортом, так и транспортной компанией",
                },
            ],
        };
    },
    methods: {
        changeStep(index) {
            this.activeStep = index;
        },
        submitForm() {
            console.log("Form submitted", this.formData);
        },
    },
};
</script>

<style scoped>
.scheme {
    margin-bottom: 180px;
}

.scheme__container {
    display: flex;
    justify-content: space-between;
}

.scheme__intro {
    width: 50%;
}

.scheme__intro__title {
    margin-bottom: 20px;
    width: 75%;
}

.scheme__intro__subtitle {
    font-size: 20px;
    width: 75%;
    margin-bottom: 30px;
}

.scheme__buttons {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
}

.scheme__button {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 200px;
    height: 110px;
    padding: 10px;
    background-color: var(--accent2);
    color: var(--text);
    cursor: pointer;
    transition: background-color 0.3s ease;
}

.scheme__button:hover {
    background-color: #21282d;
}

.scheme__button--active {
    background-color: var(--accent);
    color: var(--text-dark);
}

.scheme__button--active:hover {
    background-color: #c56f36;
    color: var(--text-dark);
}

.scheme__button__count {
    font-size: 18px;
}

.scheme__button__text {
    font-size: 18px;
}

.scheme__wrapper {
    width: 49%;
    height: max-content;
}

.scheme__steps.large {
}

.scheme__step {
    display: none;
}

.scheme__step--active {
    display: flex;
    flex: 0 0 50%;
}

.scheme-step__content {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
    padding: 60px 80px;
    background-color: var(--accent2);
    width: 100%;
}

.scheme-step__title {
    font-size: 24px;
    margin-bottom: 7px;
}

.scheme-step__desc {
    font-size: 18px;
    line-height: 140%;
    margin-bottom: 29px;
}

.scheme-step__image {
    display: flex;
    gap: 7px;
    margin-bottom: 23px;
    align-items: center;
    text-align: center;
}

.scheme-step__image img {
    width: 30px;
    height: 30px;
}

.scheme-step__steps-buttons {
    display: flex;
    justify-content: space-between;
    margin-top: 20px;
}

.scheme-step__step-button {
    cursor: pointer;
    border: none;
    background: none;
    font-size: 18px;
    display: flex;
    align-items: center;
}

.scheme-step__step-button--prev {
    margin-right: 10px;
}

.scheme-step__step-button--next,
.scheme-step__step-button--prev {
    font-size: 14px;
    color: var(--text);
    border-bottom: 1px solid #e89f71;
    padding-bottom: 3px;
    text-transform: uppercase;
}

.scheme-step__form__input-field::placeholder {
    padding-bottom: 8px;
}

.scheme-step__form__submit {
}

@media (max-width: 1300px) {
    .scheme__intro__title,
    .scheme__intro__subtitle {
        width: 100%;
    }

    .scheme {
        margin-bottom: 100px;
    }

    .scheme__container {
        flex-direction: column;
    }

    .scheme__intro {
        width: 70%;
    }

    .scheme__wrapper {
        width: 100%;
    }

    .scheme__buttons {
        margin-bottom: 30px;
    }

    .scheme-step__content {
        padding: 55px 66px;
    }
}

@media screen and (max-width: 767px) {
    .scheme__intro {
        width: 100%;
        display: flex;
        flex-direction: column;
    }

    .scheme-step__content {
        padding: 20px;
    }

    .scheme-step__title {
        font-size: 22px;
    }

    .scheme-step__desc {
        font-size: 15px;
    }

    .scheme__button {
        width: clamp(167px, 100%, 167px);
        height: 76px;
        justify-content: space-between;
    }

    .scheme__intro__title {
        width: 100%;
    }

    .scheme__intro__subtitle {
        font-size: 18px;
    }

    .scheme__button__count,
    .scheme__button__text {
        font-size: 15px;
    }

    .scheme {
        margin-bottom: 80px;
    }
}
</style>
