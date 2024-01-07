<script setup>
import { reactive, computed } from "vue";
import { useAuth } from "./composables/useAuth";

const { login, isUserLoggedIn } = useAuth();

const emit = defineEmits(["update"]);

const props = defineProps({
  user: {
    type: Object,
    required: true,
  },
});

const errors = reactive({
  email: null,
  password: null,
});

const validations = reactive({
  email: "required",
  password: "required",
});

const validateRules = (rule) => {
  if (rule === "required") return /^ *$/;
  return null;
};

const validateField = (field) => {
  errors[field] = null;
  const rule = validations[field];
  const validation = validateRules(rule);
  if (validation && validation.test(user[field] || "")) {
    errors[field] = `${field} is ${rule}!`;
  }
  return true;
};

const isValid = computed(() => {
  const allFieldsFilled = Object.values(user).every(
    (value) => value !== null && value !== ""
  );
  const noErrors = !Object.values(errors).some((error) => error !== null);
  let vaild = allFieldsFilled && noErrors;
  return vaild;
});

const clearErrors = () => {
  Object.keys(errors).forEach((key) => {
    errors[key] = null;
  });
};

const user = reactive({ ...props.user });
</script>

<template>
  <form @submit.prevent="login(user)" class="card">
    is loggedIn: {{ isUserLoggedIn }}
    <h2 class="title">Login</h2>
    <div class="sm:col-span-4">
      <label for="email" class="label">Email</label>
      <div class="mt-2">
        <input
          v-model="user.email"
          id="email"
          name="email"
          type="email"
          autocomplete="email"
          class="input"
          @blur="validateField('email')"
        />
        <span class="form-error">{{ errors.email }}</span>
      </div>
    </div>
    <div class="sm:col-span-4">
      <label for="last-name" class="label">Password</label>
      <div class="mt-2">
        <input
          v-model="user.password"
          type="password"
          name="last-name"
          id="last-name"
          autocomplete="family-name"
          class="input"
          @blur="validateField('password')"
        />
        <span class="form-error">{{ errors.password }}</span>
      </div>
    </div>
    <span v-if="isUserLoggedIn === 'error'" class="form-error"
      >Your username or password is incorrect</span
    >
    <div class="buttons">
      <button type="button" class="muted">Cancel</button>
      <button
        type="submit"
        :class="[isValid ? 'primary' : 'primary--muted']"
        :disabled="!isValid"
      >
        Save
      </button>
    </div>
  </form>
</template>
