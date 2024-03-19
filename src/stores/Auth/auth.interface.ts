export interface User {
  _id: string;
  first_name: string;
  last_name: string;
  email: string;
  password: string;
  user_type: UserType;
  phones: [];
  addresses: [];
  createdAt: Date;
  updatedAt: Date;
}

export interface UserType {
  _id: string;
  name: string;
}
