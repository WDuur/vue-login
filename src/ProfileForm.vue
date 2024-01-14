<script setup>
import { ref, unref } from "vue";

const emit = defineEmits(["update"]);

const props = defineProps({
  user: {
    type: Object,
    required: true,
  },
});
const user = ref({ ...props.user });
const update = () => {
  emit("update", { ...unref(user) });
};
</script>

<template>
  <form class="card" @submit.prevent="update">
    <div class="space-y-12">
      <div class="container">
        <div>
          <h2 class="title">Profile</h2>
          <p class="description">Update your user profile here.</p>
        </div>

        <div class="content">
          <div class="sm:col-span-3">
            <label for="first-name" class="label">First name</label>
            <div class="mt-2">
              <input
                id="first-name"
                v-model="user.firstName"
                type="text"
                name="first-name"
                autocomplete="given-name"
                class="input"
              />
            </div>
          </div>

          <div class="sm:col-span-3">
            <label for="last-name" class="label">Last name</label>
            <div class="mt-2">
              <input
                id="last-name"
                v-model="user.lastName"
                type="text"
                name="last-name"
                autocomplete="family-name"
                class="input"
              />
            </div>
          </div>

          <div class="sm:col-span-4">
            <label for="email" class="label">Email address</label>
            <div class="mt-2">
              <input
                id="email"
                v-model="user.email"
                name="email"
                type="email"
                autocomplete="email"
                class="input"
              />
            </div>
          </div>

          <div class="col-span-full">
            <label for="about" class="label">About</label>
            <div class="mt-2">
              <textarea
                id="about"
                v-model="user.about"
                name="about"
                rows="3"
                class="input"
              />
            </div>
            <p class="hint">Write a few sentences about yourself.</p>
          </div>
        </div>
      </div>
    </div>
    <div class="buttons">
      <button type="button" class="muted">Cancel</button>
      <button type="submit" class="primary">Save</button>
    </div>
  </form>
</template>
