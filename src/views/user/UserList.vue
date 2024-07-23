<template>
  <!-- Data table component displaying headers and items with pagination -->
  <v-data-table
    :headers="headers"
    :items="data"
    items-per-page="10"
    :items-per-page-options="[5, 10, 15, 20, 25]"
    :loading="tableLoading"
  >
    <!-- Loading slot for skeleton loader -->
    <template v-slot:loading>
      <v-skeleton-loader type="table-row@10"></v-skeleton-loader>
    </template>
    <!-- Toolbar slot for adding a title and an "Add Item" button -->
    <template v-slot:top>
      <v-toolbar flat>
        <v-toolbar-title>User CRUD</v-toolbar-title>
        <v-spacer></v-spacer>
        <v-btn @click="createItem">Add Item</v-btn>
      </v-toolbar>
    </template>
    <!-- Actions slot for edit and delete icons for each row -->
    <template v-slot:item.actions="{ item }">
      <v-icon class="me-2" size="small" @click="editItem(item)">
        mdi-pencil
      </v-icon>
      <v-icon size="small" @click="deleteItem(item)"> mdi-delete </v-icon>
    </template>
    <!-- No data slot for displaying a button to reset data -->
    <template v-slot:no-data>
      <v-btn color="primary" @click="initialize"> Reset </v-btn>
    </template>
  </v-data-table>

  <!-- CrudComponent for creating or editing items -->
  <CrudComponent
    v-if="crudDialog.dialog"
    :action="crudDialog.action"
    :data="crudDialog.data"
    :dialog="crudDialog.dialog"
    @close="closeCrudDialog"
    @save="saveItem"
  ></CrudComponent>

  <!-- DeleteConfirmation component for confirming item deletions -->
  <DeleteConfirmation
    v-if="deleteDialog.dialog"
    :data="deleteDialog.data"
    :dialog="deleteDialog.dialog"
    @close="closeDeleteConfirmationDialog"
    @confirmed="deleteItemFromData"
  ></DeleteConfirmation>

  <!-- Snackbar for displaying success messages -->
  <v-snackbar v-model="snackbar.status" :timeout="3000" color="success">
    {{ snackbar.text }}
    <template v-slot:actions>
      <v-btn variant="text" @click="snackbar.status = false"> Close </v-btn>
    </template>
  </v-snackbar>
</template>

<script setup lang="ts">
import CrudComponent from "./CrudComponent.vue";
import DeleteConfirmation from "./DeleteConfirmation.vue";
import { ref, onMounted } from "vue";
import { CrudComponentProps, Data, DeleteConfirmationProps } from "./interface";

// Define headers for the data table
const headers = ref([
  { title: "ID", key: "id" },
  { title: "First Name", key: "firstname" },
  { title: "Last Name", key: "lastname" },
  { title: "Email", key: "email" },
  { title: "Age", key: "age" },
  { title: "Gender", key: "gender" },
  { title: "Actions", key: "actions", sortable: false },
]);

// Reactive variable for storing data items and table loading
const data = ref<Data[]>([]);
const tableLoading = ref(false)

// Reactive variable for controlling the CRUD dialog
const crudDialog = ref<CrudComponentProps>({
  action: "create",
  data: undefined,
  dialog: false,
});

// Reactive variable for controlling the delete confirmation dialog
const deleteDialog = ref<DeleteConfirmationProps>({
  data: undefined,
  dialog: false,
});

// Reactive variable for managing snackbar notifications
const snackbar = ref({
  status: false,
  text: "",
});

// Function to handle item editing
const editItem = (item: Data) => {
  crudDialog.value.action = "edit";
  crudDialog.value.data = { ...item };
  crudDialog.value.dialog = true;
};

// Function to handle creating a new item
const createItem = () => {
  crudDialog.value.action = "create";
  crudDialog.value.data = {
    id: data.value.length + 1,
    age: null,
    email: "",
    firstname: "",
    gender: null,
    lastname: "",
  };
  crudDialog.value.dialog = true;
};

// Function to handle item deletion confirmation
const deleteItem = (item: Data) => {
  deleteDialog.value = {
    dialog: true,
    data: { ...item },
  };
};

// Function to save a new or edited item
const saveItem = (item: Data) => {
  if (crudDialog.value.action === "create") {
    data.value.unshift(item); // Add new item to the start of the list
  } else {
    // Update existing item in the list
    const index = data.value.findIndex((e) => e.id === item.id);
    data.value[index] = item;
  }
  crudDialog.value.dialog = false;
  snackbar.value = {
    status: true,
    text: crudDialog.value.action === "create"
      ? `#${item.id} New Item Added`
      : `#${item.id} Item Updated Successfully`,
  };
};

// Function to delete an item from the data list
const deleteItemFromData = (item: Data) => {
  data.value = data.value.filter((e) => e.id != item.id);
  deleteDialog.value.dialog = false;
};

// Function to close the CRUD dialog
const closeCrudDialog = () => {
  crudDialog.value.dialog = false;
};

// Function to close the delete confirmation dialog
const closeDeleteConfirmationDialog = () => {
  deleteDialog.value.dialog = false;
};

// Function to initialize the data with sample items
const initialize = () => {
  tableLoading.value = true
  setTimeout(
    ()=> {
      tableLoading.value = false
      data.value = [
        { id: 1, firstname: "John", lastname: "Doe", email: "john.doe@example.com", gender: "Male", age: 44 },
        { id: 2, firstname: "Michael", lastname: "Brown", email: "michael.brown@example.com", gender: "Male", age: 54 },
        { id: 3, firstname: "Emily", lastname: "Johnson", email: "emily.johnson@example.com", gender: "Female", age: 54 },
        { id: 4, firstname: "Chris", lastname: "Lee", email: "chris.lee@example.com", gender: "Male", age: 54 },
        { id: 5, firstname: "Sarah", lastname: "Martinez", email: "sarah.martinez@example.com", gender: "Female", age: 34 },
        { id: 6, firstname: "David", lastname: "Garcia", email: "david.garcia@example.com", gender: "Male", age: 12 },
        { id: 7, firstname: "Olivia", lastname: "Martinez", email: "olivia.martinez@example.com", gender: "Female", age: 43 },
        { id: 8, firstname: "James", lastname: "Anderson", email: "james.anderson@example.com", gender: "Male", age: 22 },
        { id: 9, firstname: "Sophia", lastname: "Thomas", email: "sophia.thomas@example.com", gender: "Female", age: 14 },
      ];
    }, 1000
  )
};

// Initialize data when the component is mounted
onMounted(initialize);
</script>
