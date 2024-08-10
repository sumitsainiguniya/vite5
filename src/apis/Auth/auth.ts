import { axiosInstance } from "@/plugins/axios";
export interface LoginRequest {
  email: string;
  password: string;
}

export interface RegisterRequest {
  name: string;
  email: string;
  password: string;
  password_confirmation: string;
  manager_id: string;
}

export interface LoginResponse {
  success: boolean;
  message: string;
  token: string;
}

export interface RegisterResponse {
  success: boolean;
  message: string;
}
export interface RegisterErrorResponse {
  errors: {
    [key: string]: string[];
  };
  message: string;
}

export const AuthAPI = {
  /**
   * Login API
   * This function sends a POST request to the '/login' endpoint with the user's email and password.
   * @function login
   * @param data : LoginRequest
   * @returns A Promise that resolves to the response of the API call.
   */
  login: (data: LoginRequest) => {
    return axiosInstance.post<LoginResponse>("/login", data);
  },

  /**
   * Register API
   * This function sends a POST request to the '/register' endpoint with the user's email and password.
   * @function register
   * @param data : RegisterRequest
   * @returns A Promise that resolves to the response of the API call.
   */
  register: (data: RegisterRequest) =>
    axiosInstance.post<RegisterResponse>("/register", data),

  /**
   * Logout API
   * This function sends a POST request to the '/auth/logout' endpoint to log the user out.
   * @function logout
   * @returns A Promise that resolves to the response of the API call.
   */
  logout: () => axiosInstance.post("/auth/logout"),
};
