<template>
  <div class="form">
    <h4 class="form__title">{{ formTitle }}</h4>
    <form @submit.prevent="submitForm" class="form__form">
      <div class="form__inputs">
        <div v-for="(input, i) in inputs" :key="i" class="form__input">
          <input
            v-model="formData[input.name]"
            :placeholder="input.placeholder"
            class="form__input-field"
            @input="applyMask(input.name, $event)"
          />
        </div>
      </div>
      <div class="form__wrapp">
        <div class="form__wrapp--checkbox" :class="formWrapp">
          <input
            type="checkbox"
            v-model="formData.checkbox"
            id="custom-checkbox"
            class="custom-checkbox"
            checked
          />
          <label for="custom-checkbox" class="custom-checkbox-label"></label>
          <span class="form__assept">
            Я соглашаюсь с <span>политикой <br> обработки персональных данных</span>
          </span>
        </div>
        <Button text="обратный звонок" class="accent form__submit">
          {{ submitButtonText }}
        </Button>
      </div>
    </form>
  </div>
</template>

<script>
import Button from "~/components/ButtonComponent/Button.vue";
export default {
  components: {
    Button,
  },
  props: {
    formTitle: String,
    inputs: {
      type: Array,
      default: () => [
        { name: "name", placeholder: "Введите ваше имя" },
        { name: "phone", placeholder: "Введите ваш телефон" },
      ],
    },
    submitButtonText: {
      type: String,
      default: "обратный звонок",
    },
    formWrapp: {
      type: String,
    },
  },
  data() {
    return {
      formData: {
        checkbox: false,
      },
    };
  },
  methods: {
    applyMask(inputName, event) {
      let value = event.target.value;
      const key = event.inputType;

      switch (inputName) {
        case "phone":
          value = value.replace(/\D/g, "");

          if (
            key === "deleteContentBackward" ||
            key === "deleteContentForward"
          ) {
            break;
          }

          if (value.length > 0) {
            if (value[0] === "8") {
              value = "+7" + value.slice(1);
            }
            if (value.length > 11) {
              value = value.slice(0, 11);
            }
            value = value.replace(
              /^(\d{1})(\d{3})(\d{0,3})(\d{0,2})(\d{0,2})/,
              "+$1 ($2) $3-$4-$5"
            );
          }
          break;
      }
      this.formData[inputName] = value;
    },
    submitForm() {
      console.log("Form submitted", this.formData);
    },
  },
};
</script>

<style>
.form__title {
  font-size: 20px;
  margin-bottom: 14px;
}

.form__inputs {
  display: flex;
  margin-bottom: 21px;
  gap: 40px;
}

.form__input-field::placeholder {
  color: var(--text);
}

.form__wrapp {
  display: flex;
  align-items: flex-start;
  gap: 40px;
}

.form__wrapp--checkbox {
  display: flex;
  align-items: baseline;
  max-width: 50%;
  cursor: pointer;
}
.scheme-form-wrapp {
  max-width: 55%;
}
.form__input-field {
  background: inherit;
  border-bottom: 1px solid #939393;
  padding-bottom: 8px;
  font-size: 15px;
  color: #f0f0f0;
  width: 259px;
}

.form__assept {
  margin-left: 8px;
  font-size: 14px;
}
.form__assept span {
  text-decoration: underline;
}
 
.custom-checkbox {
  display: none;
}

.custom-checkbox-label {
  display: inline-block;
  width: 10px;
  height: 10px;
  border: 1px solid;
  position: relative;
  cursor: pointer;
  margin-right: 8px;
  vertical-align: middle;
}

.custom-checkbox-label::before {
  content: "";
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 10px;
  height: 10px;
  background-color: transparent;
}

.custom-checkbox:checked + .custom-checkbox-label::before {
  background-color: #000;
}
.form__form button {
    width: 259px;
  }

@media screen and (max-width: 767px) {
  .form__inputs {
    flex-direction: column;
    gap:0
  }
  .form__wrapp {
    flex-direction: column-reverse;
    gap: 8px;
  }
  .form__assept {
    font-size: 13px;
  }
  .form__wrapp--checkbox {
    margin-top: 8px;
  }
  .form__form {
    width: 100%;
  }
  .form__wrapp--checkbox {
    max-width: 100%;
    margin-bottom: 45px;
  }
  .form__input:not(:last-child) {
    margin-bottom: 22px;
  }
  .form__input-field {
    width: 100%;
  }
  .form__wrapp button {
    width: 100%;
  }
  .form {
    width: 100%;
  }
}
</style>
