<template>
  <button class="button">{{ text }}</button>
</template>

<script>
export default {
  props: {
    text: {
      type: String,
      required: true,
    },
  },
};
</script>

<style scoped>
.button {
  box-sizing: border-box;
  border: 1px solid var(--text);
  padding: 15px 34px;
  transition: all 300ms;
  text-transform: uppercase;

  font-size: 14px;
  color: #fff;
}
.button:hover {
  background: rgba(240, 240, 240, 0.3);
}
.accent {
  background-color: var(--accent);
  color: var(--text-dark);
  border: none;
}

.accent:hover {
  background-color: #c56f36;
}
</style>
