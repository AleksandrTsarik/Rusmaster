<template>
    <div class="faq">
        <div class="faq__container">
            <div class="faq__wrapper">
                <div class="faq__not-found less">
                    <h2 class="faq-form__title title desk">Ответы на частые вопросы</h2>
                    <h3 class="faq-form__subtitle">
                        Если в списке ниже вы не нашли ответ на свой вопрос, задайте его нам
                    </h3>
                    <Form/>
                </div>
                <div data-spollers class="faq__spoilers faq-spoilers large">
                    <h2 class="faq-form__title title mob">Ответы на частые вопросы</h2>
                    <div
                            class="faq-spoilers__spoiler"
                            v-for="(question, index) in questions"
                            :key="index"
                    >
                        <button
                                data-spoller-button
                                class="faq-spoilers__button"
                                @click="toggleSpoiler(index)"
                                :class="{ isOpen: activeIndex === index }"
                        >
                            <span>{{ question.title }}</span>
                            <span class="plus-box" :class="{ rotated: activeIndex === index }">
                <NuxtImg src="/images/plus.svg" alt="plus" class="plus"/>
              </span>
                        </button>
                        <div
                                data-spoller-body
                                class="faq-spoilers__content"
                                :class="{ isOpen: activeIndex === index }"
                                v-html="question.answer"
                        >
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Form from "~/components/FormComponent/Form.vue";

export default {
    components: {
        Form,
    },
    data() {
        return {
            activeIndex: null,
            questions: [
                {
                    title: "1. Можно ли пригласить Вас в тендер.",
                    answer: `Да. Мы аккредитованы на всех государственных и части коммерческих торговых площадках. Работаем по 44 ФЗ и 223 ФЗ.
<br>
Производимая нами продукция внесена в реестр минпромторга РФ, поэтому наша компания занимается поставкой оборудования в рамках, регулируемых 616 ПП по 44 ФЗ.
<br>
Кроме того мы помогаем своим Заказчикам уже на стадии подготовки к конкурсной процедуре: готовим грамотное ТЗ и составляем КП.
<br>
Для того, чтобы мы смогли помочь и Вам, достаточно написать нам на электронную почту или позвонить по телефону и наш менеджер всё Вам расскажет.`
                },
                {
                    title: "2. Насколько точен предварительный расчет.",
                    answer: `Предварительный расчет производится как правильно по предоставленной Вами информации ( размеры, желаемая конструкция и дизайн). Расчет стоимости является точным и фиксируется в КП. В случае если на дополнительных замерах  были выявлены неучтенные моменты ( увеличены габариты, не был учтен коэффициент сложности установки при наличии " проблемных" мест в помещении и т д) или Вы изменили технические характеристики, то возможно изменение в цене, что всегда оговаривается честно, прозрачно и открыто.`
                },
                {
                    title: "3. Как Вы работаете с другими регионами?",
                    answer: `В нашем распоряжении имеется собственный автотранспорт, что позволяет гибко реагировать на Ваши запросе о доставке.<br>
Предварительно оговариваются условия поставки товара ( доставка, сборка, монтаж). При достижении договоренностей, устраивающих обе стороны, данная информация вноситься в Договор и четко исполняется нами.`
                },
                {
                    title: "4. Есть ли у Вас шоу рум?",
                    answer: `Мы всегда рады гостям.<br>
При производстве у нас есть офис с небольшим выставочным залом, где Вы всегда можете познакомиться с качеством мебели, ее функциональными и техническими характеристиками, оценить внешний вид и дизайн.<br>
Так же в нашем офисе есть большое количество образцов различных материалов для изготовления мебели.`
                },
                {
                    title: "5. Сроки изготовления.",
                    answer: `Сроки изготовления мебели всегда оговариваются индивидуально. На срок изготовления может повлиять:<br>
• объем производимой продукции<br>
• сложность изготовления<br>
• наличие выбранных Вами материалов<br>
• загруженность производства.<br>
В среднем срок изготовления заказа составляет от трёх недель до двух месяцев.`
                },
            ],
        };
    },
    methods: {
        toggleSpoiler(index) {
            this.activeIndex = this.activeIndex === index ? null : index;
        },
    },
};
</script>

<style scoped>
.faq {
    margin-bottom: 180px;
}

.faq__wrapper {
    display: flex;
    justify-content: space-between;
    gap: 27px;
}

.faq-spoilers__spoiler {
    background-color: var(--accent2);
    overflow: hidden;
    margin-bottom: 10px;
}

.faq-spoilers__button {
    color: var(--text);
    align-items: center;
    display: flex;
    justify-content: space-between;
    padding: 40px 50px;
    text-align: left;
    transition: padding 0.3s;
    width: 100%;

    font-size: 24px;
}

.faq-spoilers__button.isOpen {
    padding-bottom: 18px;
}

.faq-spoilers__button .plus-box {
    background-color: var(--accent);
    padding: 8px;
    width: 33px;
    height: 33px;
    display: flex;
    align-items: center;
    justify-content: center;
}

.faq-spoilers__button .plus-box:hover {
    background-color: #c56f36;
    transition: all 300ms;
}

.faq-spoilers__content {
    height: 0;
    opacity: 0;
    overflow: hidden;
    padding: 0 92px 0 50px;
    pointer-events: none;
    transition: height 0.3s, opacity 0.3s;
}

.faq-spoilers__content.isOpen {
    opacity: 1;
    pointer-events: auto;

    font-size: 18px;
    line-height: 140%;

    min-height: 150px;
    height: max-content;
}

.faq__not-found {
    display: flex;
    height: 450px;
    overflow: hidden;
    flex-direction: column;
    text-align: start;
    width: 50%;
}

.faq__spoilers {
    width: 50%;
}

.faq-form__subtitle {
    font-family: var(--second-family);

    font-size: 24px;
    width: 70%;
    margin-bottom: 41px;
}

.faq-form__title {
    margin-bottom: 21px;
}

.plus-box .plus {
    transition: transform 0.3s;
    width: 100%;
}

.plus-box.rotated .plus {
    transform: rotate(45deg);
}

@media (max-width: 1300px) {
    .faq {
        margin-bottom: 100px;
    }

    .faq__not-found {
        width: 100%;
        height: auto;
    }

    .faq__wrapper {
        flex-direction: column-reverse;
    }

    .faq__spoilers {
        width: 100%;
    }

    .faq-form__title {
        margin-bottom: 40px;
    }

    .faq-form__subtitle {
        width: 70%;
        margin-top: 30px;
        margin-bottom: 20px;
    }

    .form__input-field {
        width: 250px;
    }

    .form__assept {
        width: 250px;
    }

    .faq-spoilers__button {
        padding: 40px;
    }
}

@media screen and (max-width: 767px) {
    .faq-spoilers__button {
        padding: 17px 20px;
    }

    .faq-spoilers__button .plus-box {
        width: 26px;
        height: 20px;
        padding: 6px;
    }

    .faq-spoilers__button {
        font-size: 18px;
    }

    .faq-spoilers__content.isOpen {
        font-size: 15px;
        padding: 13px;
    }

    .faq-form__title {
        margin-bottom: 32px;
        width: 80%;
    }
}

.faq {
    margin-bottom: 80px;
}
</style>
