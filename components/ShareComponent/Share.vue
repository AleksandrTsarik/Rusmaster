<template>
  <div class="navigation__wrapper">
    <div class="navigation-string">
      <span v-for="(item, index) in navigationItems" :key="index">
        {{ item }}
        <span v-if="index < navigationItems.length - 1" class="separator">/</span>
      </span>
    </div>
    <div class="share desk1">
      <div class="share__image">
        <NuxtImg src="/images/share.svg" alt="Поделиться" />
      </div>
      <div class="share__text">
        <p>Поделиться страницей</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    navigationItems: {
      type: Array,
      required: true,
    },
  },
};
</script>

<style scoped>
.navigation__wrapper {
  display: flex;
  justify-content: space-between;
  margin-bottom: 150px;
}

.share {
  display: flex;
  align-items: center;
  justify-content: flex-end;
}

.share__image {
  margin-right: 20px;
  width: 26px;
}

.share__text {
  font-size: 18px;
}

.navigation-string {
  display: flex;
  align-items: center;
  font-size: 16px;
}

.separator {
  margin: 0 10px;
  color: #666;
}
@media (max-width: 1300px) {
  .navigation__wrapper {
    margin-bottom: 50px;
  }
}
@media screen and (max-width: 767px) {
  .navigation__wrapper {
    margin-bottom: 35px;
  }
}
</style>
