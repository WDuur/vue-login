<script setup>
import LoginForm from "@/LoginForm.vue";
import Profile from "@/currentUser.vue";
import { useAuth } from "@/composables/useAuth";
import { ref } from "vue";

const { isUserLoggedIn, currentUser } = useAuth();

let user = ref({
  password: "",
  email: "",
  image: "/sully.webp",
});

const updateUserData = (data) => {
  user.value = data;
};
</script>
<template>
  <div class="wrapper">
    <LoginForm
      v-if="isUserLoggedIn !== 'success'"
      :user="user"
      @update="updateUserData"
    />
    <Profile v-else :user="currentUser" />
  </div>
</template>
