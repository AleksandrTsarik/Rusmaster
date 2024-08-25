<template>
  <div class="factors">
    <h2 class="factors__title title">Что делает нашу мебель привлекательной для вас?</h2>
    <div class="factors__card-container">
      <div v-for="(card, index) in cards" :key="index" class="factors__card">
        <img
          :src="card.image"
          :alt="'Image ' + (index + 1)"
          class="factors__card-image"
        />
        <div class="factors__card-content">
          <h3 class="factors__card-title">{{ card.title }}</h3>
          <p class="factors__card-text">{{ card.text }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      cards: [
        {
          image: "/images/design.jpg",
          title: "Дизайн",
          text: "Вы получите современные решения и идеи для своего пространства",
        },
        {
          image: "/images/factors.png",
          title: "Инжиниринг",
          text: "Благодаря конструкторам и производству даже смелые идеи найдут воплощение",
        },
        {
          image: "/images/customisation.jpg",
          title: "Кастомизация",
          text: "Решаем вашу задачу построения пространства, поэтому вы получите то, что нужно вам",
        },
      ],
    };
  },
};
</script>

<style scoped>
.factors {
  display: flex;
  flex-direction: column;
  margin-bottom: 180px;
}

.factors__title {
  margin-bottom: 60px;
  width: 40%;
}

.factors__card-container {
  display: flex; 
  justify-content: space-between
}

.factors__card {
  width: 517px;
  max-width: 100%;
  background-color: var(--accent2);
  padding: 25px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.factors__card-image {
  width: 100%;
  height: auto;
}

.factors__card-title {
  font-size: 24px;

  margin-bottom: 4px;
}

.factors__card-text {
  font-size: 18px;
  line-height: 130%;
  margin-bottom: 0;
}

@media (max-width: 1300px) {
  .factors {
    margin-bottom: 100px;
  }
  .factors__card-container {
    flex-direction: column;
  }
  .factors__title {
    margin-bottom: 40px;
    width: 100%;
  }
  .factors__card {
    width: 100%;
    gap: 15px;
    padding: 20px 25px;
  }
  .factors__card-container {
    gap: 20px;
  }
}
@media screen and (max-width: 767px) {
  .factors {
    margin-bottom: 80px;
  }
  .factors__card-title {
    font-size: 22px;
  }
  .factors__card {
    padding: 20px;
    gap: 10px;
  }
}
</style>
