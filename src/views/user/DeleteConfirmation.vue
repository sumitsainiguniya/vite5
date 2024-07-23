<template>
  <v-dialog v-model="dialog" max-width="600px">
    <v-form ref="deleteForm" @submit.prevent="submit">
      <v-card>
        <!-- Dialog title displaying the ID of the item to be deleted -->
        <v-card-title># {{ data.id }} Delete Confirmation</v-card-title>
        <v-card-text>
          <v-row>
            <!-- Confirmation message displaying the email of the item to be deleted -->
            <v-col cols="12">
              Are you sure you want to delete <b>{{ data.email }}</b> this item?
            </v-col>
            <!-- Instruction to type the email for confirmation -->
            <v-col cols="12">
              Please type <b>{{ data.email }}</b> to confirm
            </v-col>
            <!-- Text field for entering the confirmation email -->
            <v-col cols="12">
              <v-text-field
                label="Confirm"
                variant="outlined"
                v-model="confirm"
                :rules="[
                  (v) => !!v || 'Confirmation text is required',
                  (v) => v === data.email || 'Does not match the email id',
                ]"
              ></v-text-field>
            </v-col>
          </v-row>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <!-- Close button to close the dialog -->
          <v-btn color="blue-darken-1" variant="text" @click="emit('close')"
            >Close</v-btn
          >
          <!-- Confirmed button to submit the form, with loading state -->
          <v-btn
            color="blue-darken-1"
            :loading="btnLoading"
            variant="text"
            type="submit"
            >Confirmed</v-btn
          >
        </v-card-actions>
      </v-card>
    </v-form>
  </v-dialog>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { DeleteConfirmationProps, Data } from "./interface";

// Define emits for close and confirmed events
const emit = defineEmits<{
  (e: "close"): void;
  (e: "confirmed", item: Data): void;
}>();

// Define component props with default values
const props = withDefaults(defineProps<DeleteConfirmationProps>(), {
  dialog: false,
  data: () => ({
    id: 0,
    age: null,
    email: "",
    firstname: "",
    lastname: "",
    gender: null,
  }),
});

// Reactive variables for dialog visibility, form reference, button loading state, and confirmation text
const dialog = ref(props.dialog);
const deleteForm = ref();
const btnLoading = ref(false);
const confirm = ref("");

// Function to handle form submission
const submit = () => {
  if (deleteForm.value) {
    // Validate the form
    deleteForm.value?.validate().then(({ valid }: { valid: boolean }) => {
      if (valid) {
        // If valid, show loading state and emit confirmed event after a timeout
        btnLoading.value = true;
        setTimeout(() => {
          btnLoading.value = false;
          emit("confirmed", props.data);
        }, 1000);
      }
    });
  }
};
</script>
