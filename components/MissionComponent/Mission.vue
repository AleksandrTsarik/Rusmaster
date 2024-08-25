<template>
    <div class="mission">
        <h2 class="mission__title title">
            Наша миссия — сделать оснащение учебных <br/>
            заведений доступным и эффективным
        </h2>
        <div class="mission__content">
            <div class="mission__quote">
                <div class="quote-text">
                    <span class="quote-mark">“</span>
                    <p>
                        Для меня дизайн — это соединение инженерии и визуальной составляющей. Именно с таким пониманием
                        мы подходим к разработке концепций и проектов. По этой причине мебель становится удобной,
                        практичной и визуально привлекательной. Ключевой объект — человек, который будет пользоваться. И
                        мы думаем в первую очередь о нем или о ней.
                    </p>
                </div>
                <p class="quote-author">Шанаурина Надежда Валерьевна</p>
                <p class="quote-job">Дизайнер бренда</p>
            </div>
            <div class="mission__image">
                <NuxtImg src="/images/mission.jpg" alt="mission" class="mission__image-photo"/>
            </div>
        </div>
    </div>
</template>

<style scoped>
.mission {
    margin-bottom: 180px;
}

.mission__title {
    margin-bottom: 60px;
}

.mission__content {
    display: flex;
    justify-content: center;
    position: relative;
}

.mission__quote {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    left: 0;
    width: 28%;
}

.quote-text {
    font-family: var(--font-family);

    font-size: 18px;
    line-height: 140%;
}

.quote-text p {
    font-size: 18px;
    line-height: 140%;

    margin-bottom: 40px;
}

.quote-text p:first-child {
    margin-top: 0;
}

.quote-mark {
    font-size: 80px;
    color: var(--accent);
    position: absolute;
    top: -10px;
}

.quote-author {
    font-size: 24px;
}

.quote-job {
    font-size: 20px;
}

.mission__image {
    width: 63%;
}

@media (max-width: 1300px) {
    .mission {
        margin-bottom: 100px;
    }

    .mission__title {
        margin-bottom: 30px;
    }

    .mission__content {
        flex-direction: column-reverse;
    }

    .mission__quote {
        position: relative;
        width: 100%;
        margin-bottom: 0;
        margin-top: 156px;
    }

    .mission__image {
        width: 100%;
    }

    .quote-text p {
        margin-bottom: 10px;
    }
}

@media screen  and (max-width: 767px) {
    .mission__title {
        width: 100%;
    }

    .quote-text p {
        font-size: 15px;
    }

    .quote-author {
        font-size: 22px;
    }

    .quote-job {
        font-size: 18px;
    }

    .mission {
        margin-bottom: 80px;
    }
}
</style>
