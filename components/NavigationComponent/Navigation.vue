<template>
  <div class="navigation-string">
    <span v-for="(item, index) in navigationItems" :key="index">
      {{ item }}
      <span v-if="index < navigationItems.length - 1" class="separator">/</span>
    </span>
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
.navigation-string {
  display: flex;
  align-items: center;
  font-size: 16px;
}

.separator {
  margin: 0 10px;
  color: #666;
}

.navigation-string span:last-child {
  font-weight: bold;
}
</style>
