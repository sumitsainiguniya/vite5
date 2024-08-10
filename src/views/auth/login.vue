<template>
  <v-row justify="center">
    <v-col cols="12" sm="6" md="4">
      <v-form ref="formRef" @submit.prevent="login">
        <v-card class="elevation-12">
          <v-toolbar dark color="primary">
            <v-toolbar-title>Login</v-toolbar-title>
          </v-toolbar>
          <v-card-text>
            <v-text-field
              v-model="form.email"
              label="Email"
              :rules="[rules.required]"
              :error-messages="formError.email"
            ></v-text-field>
            <v-text-field
              v-model="form.password"
              label="Password"
              :rules="[rules.required]"
              type="password"
              :error-messages="formError.password"
            ></v-text-field>
          </v-card-text>
          <v-card-actions>
            <v-spacer />
            <v-btn color="secondry" :to="{ name: 'register' }">Register</v-btn>
            <v-btn color="primary" type="submit" :loading="loading"
              >Login</v-btn
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
import { AuthAPI } from "@apis/Auth/auth";
import { axiosInstance } from "@plugins/axios";
import { ref } from "vue";
const form = ref({
  email: "test",
  password: "test",
});
const formError = ref({
  email: "",
  password: "",
});
const snackbar = ref({
  status: false,
  message: "",
  color: "",
});
const formRef = ref();
const loading = ref(false);
const rules = {
  required: (value: any) => !!value || "Required",
};
const login = () => {
  if (formRef.value) {
    formRef.value.validate().then(({ valid }: any) => {
      if (valid) {
        loading.value = true;
        AuthAPI.login(form.value)
          .then((response) => {
            if (response.data.success) {
              axiosInstance.defaults.headers.common["Authorization"] =
                "Bearer " + response.data.token;
            }
            loading.value = false;
          })
          .catch((error) => {
            loading.value = false;
            console.log(error);
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
