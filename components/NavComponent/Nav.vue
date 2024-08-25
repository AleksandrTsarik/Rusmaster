<template>
  <div class="nav">
    <ul class="nav__items">
      <li v-for="page in pages" :key="page.id" class="nav__item">
        <nuxt-link :to="page.link" class="nav__link">{{ page.title }}</nuxt-link>
      </li>
    </ul>
  </div>
</template>

<script setup>
const pages = [
  { id: 1, title: "Главная", link: "/" },
  { id: 2, title: "Школа", link: "/category/create-edu-area/" },
  { id: 3, title: "Каталог", link: "/catalog" },
  { id: 5, title: "Кейсы", link: "/cases" },
  // { id: 6, title: "Блог", link: "/blog" },
];
</script>

<style scoped>
.nav {
  padding: 7px;
  position: absolute;
  top: 48px;
  right: 0;
  z-index: 30;
  min-width: 220px;
}

.nav__items {
  list-style: none;
  height: fit-content;
  display: flex;
  gap: 15px;
  flex-direction: column;
  z-index: 10;
  background-color: #1a212a;
  padding: 50px;
  width: 300px;
  margin: 0; 
}

.nav__item {
  text-transform: uppercase;
  transition: all 300ms;
  display: flex;
}

.nav__item a {
  font-size: 24px;
  color: var(--text);
}
 
@media screen and (max-width: 767px) {
  .nav {
    padding: 0;
  } 

  .nav__items {
    width: calc(100vw - 14px);
    max-width: none;
    padding: 15px;
    height: 100vh;
    display: flex;
    align-items: center;
    text-align: start;
  }
}
</style>
