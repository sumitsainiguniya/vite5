export interface CrudComponentProps {
  dialog: boolean;
  data?: Data;
  action: "create" | "edit";
}

export interface Data {
  id: number;
  firstname: string;
  lastname: string;
  email: string;
  age: number | null;
  gender: "Male" | "Female" | null;
}

export interface DeleteConfirmationProps {
  dialog: boolean;
  data?: Data;
}
