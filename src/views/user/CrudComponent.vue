<template>
  <!-- Dialog component with a persistent attribute to prevent closing when clicking outside -->
  <v-dialog v-model="dialog" max-width="700px" persistent>
    <!-- Form component for handling create/edit actions -->
    <v-form ref="crudForm" @submit.prevent="submit">
      <v-card>
        <!-- Card title, dynamically showing "Create User" or "Edit User" based on action -->
        <v-card-title>
          <span class="text-h5">{{
            action === "create" ? "Create User" : "Edit User"
          }}</span>
        </v-card-title>

        <v-card-text>
          <v-container>
            <v-row>
              <!-- First Name input field with validation rules -->
              <v-col cols="12" md="6" sm="6">
                <v-text-field
                  v-model="data.firstname"
                  :rules="[
                    (v) => !!v || 'First Name is required',
                    (v) =>
                      (v && v.length >= 2) ||
                      'First Name must be at least 2 characters',
                    (v) =>
                      (v && v.length <= 30) ||
                      'First Name must be less than or equal to 30 characters',
                  ]"
                  variant="outlined"
                  label="First Name"
                ></v-text-field>
              </v-col>
              <!-- Last Name input field with validation rules -->
              <v-col cols="12" md="6" sm="6">
                <v-text-field
                  v-model="data.lastname"
                  :rules="[
                    (v) => !!v || 'Last Name is required',
                    (v) =>
                      (v && v.length >= 2) ||
                      'Last Name must be at least 2 characters',
                    (v) =>
                      (v && v.length <= 30) ||
                      'Last Name must be less than or equal to 30 characters',
                  ]"
                  variant="outlined"
                  label="Last Name"
                ></v-text-field>
              </v-col>
              <!-- Email input field with validation rules -->
              <v-col cols="12" md="6" sm="6">
                <v-text-field
                  variant="outlined"
                  v-model="data.email"
                  label="Email"
                  :rules="[
                    (v) => !!v || 'Email is required',
                    (v) => /.+@.+\..+/.test(v) || 'E-mail must be valid',
                  ]"
                ></v-text-field>
              </v-col>
              <!-- Age input field with validation rules -->
              <v-col cols="12" md="6" sm="6">
                <v-text-field
                  type="number"
                  variant="outlined"
                  v-model.number="data.age"
                  label="Age"
                  :rules="[
                    (v) => !!v || 'Age is required',
                    (v) => v >= 14 || 'Age must be at least 14',
                    (v) => v <= 100 || 'Age must be less than or equal to 100',
                    (v) => /^[0-9]+$/.test(v) || 'Age must be a number',
                  ]"
                ></v-text-field>
              </v-col>
              <!-- Gender selection with radio buttons -->
              <v-col cols="12" md="6" sm="6">
                <v-radio-group
                  v-model="data.gender"
                  inline
                  :rules="[(v) => !!v || 'Gender is required']"
                >
                  <v-radio label="Male" value="Male"></v-radio>
                  <v-radio label="Female" value="Female"></v-radio>
                </v-radio-group>
              </v-col>
            </v-row>
          </v-container>
        </v-card-text>

        <v-card-actions>
          <v-spacer></v-spacer>
          <!-- Cancel button to close the dialog -->
          <v-btn color="blue-darken-1" variant="text" @click="emit('close')">
            Cancel
          </v-btn>
          <!-- Submit button with loading state and dynamic text -->
          <v-btn
            color="blue-darken-1"
            variant="text"
            type="submit"
            :loading="btnLoading"
          >
            {{ action === "create" ? "Create" : "Update" }}
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-form>
  </v-dialog>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { CrudComponentProps, Data } from "./interface";

// Define emits for closing the dialog and saving the item
const emit = defineEmits<{
  (e: "close"): void;
  (e: "save", item: Data): void;
}>();

// Define component props with default values
const props = withDefaults(defineProps<CrudComponentProps>(), {
  dialog: false,
  action: "create",
  data: () => ({
    id: 0,
    age: null,
    email: "",
    firstname: "",
    lastname: "",
    gender: null,
  }),
});

// Reactive variables for dialog visibility, form data, button loading state, and form reference
const dialog = ref(props.dialog);
const data = ref(props.data);
const btnLoading = ref(false);
const crudForm = ref();

// Function to handle form submission
const submit = () => {
  if (crudForm.value) {
    // Validate the form
    crudForm.value?.validate().then(({ valid }: { valid: boolean }) => {
      if (valid) {
        // If valid, show loading state and emit save event after a timeout
        btnLoading.value = true;
        setTimeout(() => {
          emit("save", data.value);
          btnLoading.value = false;
        }, 1000);
      }
    });
  }
};
</script>
