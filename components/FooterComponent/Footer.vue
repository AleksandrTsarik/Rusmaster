<template>
  <div class="footer">
    <div class="footer__container">
      <div class="footer__wrapper flex">
        <div class="footer__content">
          <div class="footer__top-wrapper">
            <div class="footer__top-wrapper-contact">
              <h4 class="footer__title title">РусМастер</h4>
              <div class="footer__contact-info">
                <div class="footer__contact-info-wrapp">
                  <div class="footer__contact-info-item">
                    <div class="footer__contact-info-item__title">
                      Адрес производства:
                    </div>
                    <div class="footer__contact-info-item__content">
                      г. Тверь, пр-т Калинина, 45, с. 2
                    </div>
                  </div>
                  <div class="footer__contact-info-item-phone">
                    <div class="footer__contact-info-item__title">Телефон:</div>
                    <div class="footer__contact-info-item__content">
                      <a href="tel:+7 (909) 271-46-30" class="footer__link">
                        +7 909 271-46-30
                      </a>
                      <NuxtLink to="https://t.me/PELIZMA" target="_blank">
                        <svg
                          class="social-icon"
                          width="30"
                          height="30"
                          viewBox="0 0 30 30"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <rect
                            x="0.220588"
                            y="0.220588"
                            width="29.5588"
                            height="29.5588"
                            stroke="#E4D9C7"
                            stroke-width="0.441176"
                          />
                          <path
                            d="M8.22796 15.2799L11.2167 16.3609L12.3818 19.9971C12.4325 20.2428 12.7364 20.292 12.939 20.1445L14.6107 18.8178C14.7627 18.6704 15.016 18.6704 15.2186 18.8178L18.2074 20.9307C18.41 21.0782 18.7139 20.9799 18.7646 20.7342L20.9935 10.4153C21.0441 10.1696 20.7909 9.92391 20.5376 10.0222L8.22796 14.6411C7.92401 14.7394 7.92401 15.1816 8.22796 15.2799ZM12.2299 15.8204L18.106 12.3317C18.2073 12.2825 18.3087 12.4299 18.2074 12.4791L13.395 16.8523C13.243 16.9997 13.091 17.1963 13.091 17.442L12.939 18.6213C12.939 18.7687 12.6858 18.8178 12.6351 18.6213L12.0272 16.4592C11.8752 16.2135 11.9766 15.9187 12.2299 15.8204Z"
                            fill="#C37F53"
                          />
                        </svg>
                      </NuxtLink>
                      <NuxtLink to="https://wa.me/79092714630" target="_blank">
                        <svg
                          class="social-icon"
                          width="30"
                          height="30"
                          viewBox="0 0 30 30"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <rect
                            x="0.220588"
                            y="0.220588"
                            width="29.5588"
                            height="29.5588"
                            stroke="#E4D9C7"
                            stroke-width="0.441176"
                          />
                          <path
                            d="M20.0976 10.8958C18.8746 9.67708 17.2439 9 15.5226 9C11.9442 9 9.0453 11.8889 9.0453 15.4549C9.0453 16.5833 9.36237 17.7118 9.90592 18.6597L9 22L12.4425 21.0972C13.3937 21.5938 14.4355 21.8646 15.5226 21.8646C19.101 21.8646 22 18.9757 22 15.4097C21.9547 13.7396 21.3206 12.1146 20.0976 10.8958ZM18.6481 17.7569C18.5122 18.1181 17.878 18.4792 17.561 18.5243C17.2892 18.5694 16.9268 18.5694 16.5645 18.4792C16.338 18.3889 16.0209 18.2986 15.6585 18.1181C14.0279 17.441 12.9861 15.816 12.8955 15.6806C12.8049 15.5903 12.216 14.8229 12.216 14.0104C12.216 13.1979 12.6237 12.8368 12.7596 12.6562C12.8955 12.4757 13.0767 12.4757 13.2125 12.4757C13.3031 12.4757 13.439 12.4757 13.5296 12.4757C13.6202 12.4757 13.7561 12.4306 13.892 12.7465C14.0279 13.0625 14.3449 13.875 14.3902 13.9201C14.4355 14.0104 14.4355 14.1007 14.3902 14.191C14.3449 14.2812 14.2996 14.3715 14.2091 14.4618C14.1185 14.5521 14.0279 14.6875 13.9826 14.7326C13.892 14.8229 13.8014 14.9132 13.892 15.0486C13.9826 15.2292 14.2997 15.7257 14.7979 16.1771C15.4321 16.7187 15.9303 16.8993 16.1115 16.9896C16.2927 17.0799 16.3833 17.0347 16.4739 16.9444C16.5645 16.8542 16.8815 16.4931 16.9721 16.3125C17.0627 16.1319 17.1986 16.1771 17.3345 16.2222C17.4704 16.2674 18.2857 16.6736 18.4216 16.7639C18.6028 16.8542 18.6934 16.8993 18.7387 16.9444C18.784 17.0799 18.784 17.3958 18.6481 17.7569Z"
                            fill="#C37F53"
                          />
                        </svg>
                      </NuxtLink>
                    </div>
                  </div>
                </div>
                <Button
                  class="button accent"
                  text="записаться на встречу"
                  @click="openModalForm"
                />
              </div>
            </div>
          </div>
        </div>
        <div class="footer__image">
          <NuxtImg
            class="desk1"
            src="/images/footer/footer-preview.png"
            alt="footer"
          />
          <NuxtImg
            class="mob1"
            src="/images/footer/footer-mob.jpg"
            alt="footer"
          />
          <button class="play" @click="openModalVideo">
            <div class="circle-with-triangle"></div>
          </button>
        </div>
      </div>
    </div>
  </div>
  <ModalContent :show="isModalOpenVideo" @close="closeModalVideo">
    <template #video>
      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/6PRwbLbeu18"
        frameborder="0"
        allowfullscreen
      ></iframe>
    </template>
  </ModalContent>

  <ModalContent :show="isModalOpenForm" @close="closeModalForm">
    <template #form>
      <h1 class="mo-title">ЗАПИСАТЬСЯ НА ВСТРЕЧУ</h1>
      <h2 class="mo-subtitle">чтобы рассчитать проект...</h2>
      <SchemeStepImage :phone="phoneNumber" />
      <Form />
    </template>
  </ModalContent>
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
  data() {
    return {
      isModalOpenForm: false,
      isModalOpenVideo: false,
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
    openModalVideo() {
      this.isModalOpenVideo = true;
    },

    closeModalVideo() {
      this.isModalOpenVideo = false;
    },
  },
};
</script>

<style scoped>
.footer {
  padding-bottom: 189px;
}

.footer__content {
  padding-bottom: 60px;
}

.footer__top-wrapper {
  display: flex;
}

.footer__top-wrapper-contact {
  display: flex;
  flex-direction: column;
  white-space: nowrap;
}

.footer__contact-info {
  display: flex;
  align-items: end;
}

.footer__contact-info-item-phone {
  display: flex;
  flex-direction: column;
  margin-right: 65px;
}

.footer__contact-info-item__title {
  font-size: 24px;

  margin-bottom: 6px;
}

.footer__contact-info-item__content {
  font-size: 20px;
gap: 8px;
  display: flex;
  align-items: end;
  cursor: pointer;
}
.footer__contact-info-item__content img {
  width: 30px;
  height: 30px;
  display: inline-block;
  vertical-align: middle;
}
.footer__contact-info-item__content a { 
  height: 30px; 
}
 
.footer__contact-info-item__content img:last-child {
  margin-left: 7px;
}

.footer__image {
  position: relative;
}

.play {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.footer__image img {
  width: 100%;
}

.footer__title {
  margin-bottom: 20px;
}

.footer__link {
  font-size: 20px;
  color: var(--text);
}

.footer__link:not(:last-child) {
  margin-right: 20px;
}

.footer__btn {
  width: 100%;
}

.circle-with-triangle {
  width: 153px;
  height: 153px;
  border-radius: 50%;
  background-color: rgba(217, 217, 217, 0.5);
  position: relative;
}

.circle-with-triangle:hover {
  background: rgba(240, 240, 240, 0.7);
}

.circle-with-triangle:before {
  content: "";
  position: absolute;
  top: 50%;
  left: 50%;
  width: 0;
  height: 0;
  border-top: 20px solid transparent;
  border-left: 29px solid #1a2125;
  border-bottom: 20px solid transparent;
  transform: translate(-50%, -50%);
}
.footer__contact-info-wrapp {
  display: flex;
  gap: 70px;
  align-items: end;
  margin-right: 63px;
}
@media screen and (max-width: 1800px) {
  .footer__contact-info-wrapp {
    margin-right: 103px;
  }
}
@media screen and (max-width: 1760px) {
  .footer__contact-info-wrapp {
    margin-right: 84px;
  }
}
@media screen and (max-width: 1743px) {
  .footer__contact-info-wrapp {
    margin-right: 76px;
  }
}

@media screen and (max-width: 1720px) {
  .footer__contact-info-wrapp {
    margin-right: 60px;
  }
}

@media screen and (max-width: 1697px) {
  .footer__contact-info-wrapp {
    margin-right: 111px;
  }
}

@media screen and (max-width: 1677px) {
  .footer__contact-info-wrapp {
    margin-right: 94px;
  }
}

@media screen and (max-width: 1653px) {
  .footer__contact-info-wrapp {
    margin-right: 87px;
  }
}
@media screen and (max-width: 1640px) {
  .footer__contact-info-wrapp {
    margin-right: 83px;
  }
}
@media screen and (max-width: 1631px) {
  .footer__contact-info-wrapp {
    margin-right: 77px;
  }
}
@media screen and (max-width: 1616px) {
  .footer__contact-info-wrapp {
    margin-right: 72px;
  }
}
@media screen and (max-width: 1605px) {
  .footer__contact-info-wrapp {
    margin-right: 64px;
  }
}
@media screen and (max-width: 1600px) {
  .footer__contact-info-wrapp {
    margin-right: 58px;
  }
}
@media screen and (max-width: 1560px) {
  .footer__contact-info-wrapp {
    margin-right: 44px;
  }
}
@media (max-width: 1300px) {
  .footer {
    padding-bottom: 46px;
  }
  .footer__contact-info {
    gap: 25px;
    align-items: start;
    flex-direction: column;
  }
  .footer__content {
    padding-bottom: 40px;
  }
  .footer__title {
    margin-bottom: 15px;
  }
}

@media screen and (max-width: 767px) {
  .circle-with-triangle {
    width: 83px;
    height: 83px;
  }
  .footer__title {
    font-size: 26px;
  }
  .footer__contact-info-item__title {
    font-size: 22px;
  }
  .footer__contact-info-item__content {
    font-size: 18px;
  }
  .footer__link {
    font-size: 18px;
  }
  .footer__content {
    padding-bottom: 30px;
  }
  .button {
    width: 100%;
  }
  .circle-with-triangle:before {
    left: 55%;
  }
  .play {
    width: auto;
  }
  .footer {
    padding-bottom: 45px;
  }
  .footer__contact-info-item-phone {
    margin-right: 0;
  }
  .footer__contact-info-wrapp {
    gap: 20px;
  }
  .footer__wrapper {
    flex-direction: column;
    align-items: center;
  }
  .footer__top-wrapper-contact {
    width: 100%;
  }
}
@media screen and (max-width: 688px) {
  .footer__contact-info-wrapp {
    flex-direction: column;
    align-items: start;
  }
}
</style>
