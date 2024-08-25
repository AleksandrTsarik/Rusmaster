<template>
  <div class="modal" v-if="show" @click="closeOnOverlay($event)">
    <div class="modal__overlay">
      <div class="modal-content">
        <div class="modal__body">
          <template v-if="isVideo">
            <iframe
              frameborder="0"
              allowfullscreen
              :src="'https://www.youtube.com/embed/' + image.videoId"
              :title="'Video ' + index"
              width="560"
              height="315"
            ></iframe>
          </template>
          <template v-else>
            <img :src="image.src" :alt="image.alt" />
          </template>
          <button @click="close"></button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    show: {
      type: Boolean,
      required: true,
    },
    image: {
      type: Object,
      required: true,
    },
    index: {
      type: Number,
      required: true,
    },
  },
  computed: {
    isVideo() {
      return this.image.type === "video";
    },
  },
  methods: {
    close() {
      this.$emit("close");
    },
    closeOnOverlay(event) {
      if (event.target.classList.contains("modal__overlay")) {
        this.close();
      }
    },
  },
};
</script>

<style scoped>
.modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 100;
}

.modal__overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.8);
  z-index: 1000;
  display: flex;
  justify-content: center;
  align-items: center;
}

.modal__content {
  background: var(--accent2);
  color: var(--text);
  border-radius: 5px;
  width: max-content;
  height: max-content;
  max-width: 90%;
  max-height: 90%;
  overflow: auto;
  position: relative;
}

.modal-content {
  width: clamp(200px, 90%, 900px);
}

.modal__body {
  padding: 25px;
  height: 100%;
}

.modal__close-btn {
  position: absolute;
  top: 30px;
  right: 30px;
  width: 30px;
  height: 30px;
  cursor: pointer;
  z-index: 999;
  background-color: transparent;
}

.modal__close-btn::before,
.modal__close-btn::after {
  content: "";
  position: absolute;
  top: 50%;
  left: 50%;
  width: 26px;
  height: 1px;
  background-color: var(--text);
  transform: translate(-50%, -50%) rotate(45deg);
}

.modal__close-btn::after {
  transform: translate(-50%, -50%) rotate(-45deg);
}
</style>
