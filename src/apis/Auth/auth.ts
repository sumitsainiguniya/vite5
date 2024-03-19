import { axiosInstance } from "@/plugins/axios";

export const AuthAPI = {
  /**
   * Login API
   * This function sends a POST request to the '/auth/login' endpoint with the user's email and password.
   * @function login
   * @param data : { email: string; password: string }
   * @returns A Promise that resolves to the response of the API call.
   */
  login: (data: { email: string; password: string }) =>
    axiosInstance.post("/auth/login", data),

  /**
   * Register API
   * This function sends a POST request to the '/auth/register' endpoint with the user's email and password.
   * @function register
   * @param data : { email: string; password: string }
   * @returns A Promise that resolves to the response of the API call.
   */
  register: (data: { email: string; password: string }) =>
    axiosInstance.post("/auth/register", data),

  /**
   * Logout API
   * This function sends a POST request to the '/auth/logout' endpoint to log the user out.
   * @function logout
   * @returns A Promise that resolves to the response of the API call.
   */
  logout: () => axiosInstance.post("/auth/logout"),
};
