<template>
  <header class="header">
    <div class="header__left">
      <nuxt-link to="/">
        <NuxtImg src="/images/logo.svg" alt="logo" />
      </nuxt-link>
      <h1 class="heading">Мебельная фабрика</h1>
    </div>
    <div class="header__right">
      <Button
        class="header__button desk"
        text="Связаться"
        @click="openModalForm"
      />
      <button class="header__button mob" @click="openModalForm">
        <NuxtImg
          class="subscribe-section__social-icon"
          src="/images/social/phone.svg"
          alt="phone"
        />
      </button>
      <Burger />
    </div>
    <ModalContent :show="isModalOpenForm" @close="closeModalForm">
      <template #form>
        <h1 class="mo-title">ОСТАВЬТЕ КОНТАКТНЫЕ ДАННЫЕ ДЛЯ СВЯЗИ</h1>
        <h2 class="mo-subtitle">чтобы рассчитать проект...</h2>
        <SchemeStepImage :phone="phoneNumber" />
        <Form />
      </template>
    </ModalContent>
  </header>
</template>

<script>
import { RouterLink } from "vue-router";
import Button from "~/components/ButtonComponent/Button.vue";
import Burger from "~/components/BurgerComponent/Burger.vue";
import ModalContent from "~/components/ModalComponent/ModalContent.vue";
import Form from "~/components/FormComponent/Form.vue";
import SchemeStepImage from "~/components/SchemeComponent/SchemeStepImage.vue";

export default {
  components: {
    RouterLink,
    Button,
    Burger,
    ModalContent,
    Form,
    SchemeStepImage,
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
.header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-shrink: 1;
  margin: 40px 0 70px 0;
}
@media screen and (min-width: 2036px) {
  .header__left {
    gap: 346px;
    display: flex;
    align-items: center;
  }
}
@media screen and (min-width: 2500px) {
  .header__left {
    gap: 400px;
    display: flex;
    align-items: center;
  }
}
@media screen and (max-width: 2500px) {
  .header__left {
    display: flex;
    align-items: center;
    gap: 309px;
  }
}
@media screen and (max-width: 1920px) {
  .header__left {
    gap: 281px;
  }
}
@media screen and (max-width: 1800px) {
  .header__left {
    gap: 260px;
  }
}
@media screen and (max-width: 1782px) {
  .header__left {
    gap: 256px;
  }
}

@media screen and (max-width: 1760px) {
  .header__left {
    gap: 247px;
  }
}
@media screen and (max-width: 1735px) {
  .header__left {
    gap: 232px;
  }
}
@media screen and (max-width: 1700px) {
  .header__left {
    gap: 243px;
  }
}
@media screen and (max-width: 1606px) {
  .header__left {
    gap: 236px;
  }
}
.header__left img {
  height: 31px;
}
.header__right {
  display: flex;
  align-items: center;
  gap: 50px;
}

.heading {
  font-size: 30px;
  text-transform: uppercase;

  white-space: nowrap;
}

@media (max-width: 1300px) {
  .header__left {
    gap: 14px;
  }

  .header__right {
    gap: 26px;
  }

  .header {
    margin-bottom: 20px;
  }

  .top__right img {
    position: relative;
    top: 20px;
    z-index: -1;
  }
  .header__button {
    width: 30px;
    height: 30px;
  }
}
@media screen and (max-width: 767px) {
  .heading {
    display: none;
  }
  .header {
    margin-bottom: 35px;
    margin-top: 21px;
  }
}
</style>
