<template>
  <div class="burger__container">
    <div
      :class="{ burger_checked: isNavOpen, burger: !isNavOpen }"
      @click="toggleNav"
    >
      <span v-if="!isNavOpen" class="burger__line"></span>
      <span v-if="isNavOpen" class="cross__line"></span>
      <span v-if="!isNavOpen" class="burger__line"></span>
      <span v-if="isNavOpen" class="cross__line"></span>
      <span v-if="!isNavOpen" class="burger__line"></span>
    </div>
    <Nav v-if="isNavOpen" />
  </div>
</template>

<script>
import Nav from "~/components/NavComponent/Nav.vue";

export default {
  components: {
    Nav,
  },
  data() {
    return {
      isNavOpen: false,
    };
  },
  methods: {
    toggleNav() {
      this.isNavOpen = !this.isNavOpen;
    },
  },
};
</script>

<style scoped>
.burger {
  height: 32px;
  width: 80px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.burger:hover {
  cursor: pointer;
}

.burger__line {
  background: var(--text);
  width: 80px;
  height: 3px;
  display: block;
  transition: all 300ms;
}

.burger:hover .burger__line,
.burger_checked:hover .cross__line,
.burger_checked:hover .cross__line:last-child {
  background: var(--accent);
}

.cross__line {
  background: var(--text);
  width: 50px;  
  display: block;
  transition: all 300ms;
  position: relative;
}

.cross__line:first-child {
  height: 4px;  
  transform: rotate(45deg) translateY(2px); 
}

.cross__line:last-child {
  height: 4px; 
  transform: rotate(-45deg) translateY(-3px); 
}
.burger_checked .cross__line:hover {
  background: var(--accent);
}

.burger_checked .burger__line {
  background: transparent;
}

.burger_checked .cross__line {
  background: var(--text);
}

.burger_checked:hover {
  cursor: pointer;
}

.burger__container {
  position: relative;
}

@media screen and (max-width: 767px) {
  .burger {
    height: 27px;
  }
}
</style>
