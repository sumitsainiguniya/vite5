<template>
  <v-row justify="center">
    <v-col cols="12" sm="6" md="4">
      <v-form ref="formRef" lazy-validation @submit.prevent="register">
        <v-card class="elevation-12">
          <v-toolbar dark color="primary">
            <v-toolbar-title>Register</v-toolbar-title>
          </v-toolbar>
          <v-card-text>
            <v-text-field
              v-model="form.name"
              :rules="[rules.required]"
              label="Name"
              required
              :error-messages="formError.name"
            ></v-text-field>
            <v-text-field
              v-model="form.email"
              :rules="rules.emailRules"
              label="Email"
              required
              :error-messages="formError.email"
            ></v-text-field>
            <v-radio-group v-model="userType" inline :rules="[rules.required]">
              <template v-slot:label> User Type </template>
              <v-radio label="Manager" :value="1"></v-radio>
              <v-radio label="User" :value="2"></v-radio>
            </v-radio-group>
            <v-text-field
              v-if="userType === 2"
              v-model="form.manager_id"
              :rules="[rules.required]"
              label="Manager ID"
              type="Manager ID"
              required
              :error-messages="formError.manager_id"
            >
            </v-text-field>
            <v-text-field
              v-model="form.password"
              :rules="[rules.required]"
              label="Password"
              type="password"
              :error-messages="formError.password"
              required
            ></v-text-field>
            <v-text-field
              v-model="form.password_confirmation"
              :rules="rules.confirmPasswordRules"
              label="Confirm Password"
              type="password"
              :error-messages="formError.password_confirmation"
              required
            ></v-text-field>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn type="button" color="secondry" :to="{ name: 'login' }"
              >Login</v-btn
            >
            <v-btn type="submit" color="primary" :loading="loading"
              >Register</v-btn
            >
          </v-card-actions>
        </v-card>
      </v-form>
    </v-col>
    <v-snackbar :color="snackbar.color" v-model="snackbar.status">
      {{ snackbar.message }}

      <template v-slot:actions>
        <v-btn variant="text" @click="snackbar.status = false"> Close </v-btn>
      </template>
    </v-snackbar>
  </v-row>
</template>

<script setup lang="ts">
import { AuthAPI, RegisterRequest } from "@apis/Auth/auth";

import { ref } from "vue";
const form = ref<RegisterRequest>({
  name: "",
  email: "",
  password: "",
  password_confirmation: "",
  manager_id: "",
});
const formError = ref({
  name: "",
  email: "",
  password: "",
  password_confirmation: "",
  manager_id: "",
});
const snackbar = ref({
  status: false,
  message: "",
  color: "",
});
const userType = ref(1);
const loading = ref(false);
const formRef = ref();
const rules = {
  required: (value: any) => !!value || "Required",
  emailRules: [
    (v: any) => !!v || "Email is required",
    (v: any) => /.+@.+\..+/.test(v) || "Email must be valid",
  ],
  confirmPasswordRules: [
    (v: any) => !!v || "Confirm Password is required",
    (v: any) => v === form.value.password || "Passwords do not match",
  ],
};

const register = () => {
  if (formRef.value) {
    formRef.value.validate().then(({ valid }: { valid: boolean }) => {
      if (valid) {
        loading.value = true;
        AuthAPI.register(form.value)
          .then((response) => {
            if (response.data.success) {
              formRef.value.reset();
              snackbar.value = {
                status: true,
                message: response.data.message,
                color: "success",
              };
            } else {
              snackbar.value = {
                status: true,
                message: "Something went wrong",
                color: "error",
              };
            }
            loading.value = false;
          })
          .catch((error) => {
            loading.value = false;
            if (error?.response?.data?.errors) {
              formError.value = error?.response?.data?.errors;
            }
            snackbar.value = {
              status: true,
              message: error?.response?.data?.message || "Something went wrong",
              color: "error",
            };
          });
      }
    });
  }
};
</script>
