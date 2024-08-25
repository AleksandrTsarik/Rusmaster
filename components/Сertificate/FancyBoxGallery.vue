<script>
import * as f from '@fancyapps/ui';
import '@fancyapps/ui/dist/fancybox/fancybox.css';

const {Fancybox: Fancybox} = f;
export default {
  props: {
    options: Object,
  },
  mounted() {
    Fancybox.bind(this.$refs.container, '[data-fancybox]', {
      ...(this.options || {}),
    });
  },
  updated() {
    Fancybox.unbind(this.$refs.container);
    Fancybox.close();

    Fancybox.bind(this.$refs.container, '[data-fancybox]', {
      ...(this.options || {}),
    });
  },
  unmounted() {
    Fancybox.destroy();
  },
};
</script>

<template>
  <div ref="container">
    <slot></slot>
  </div>
</template>

<style lang="scss">
  .fancybox__content {
  }
</style>