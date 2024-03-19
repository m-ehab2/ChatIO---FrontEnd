import { useState } from "react";
import axios, { AxiosResponse, AxiosError } from "axios";

export interface UserData {
  id: number;
  name: string;
  email: string;
  image: string;
}

interface ErrorResponse {
  message: string;
}

const BASE_URL = "http://localhost:8000/api/v1/auth";

const useAuth = () => {
  const [user, setUser] = useState<UserData | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  const login = async (email: string, password: string): Promise<void> => {
    setLoading(true);
    try {
      const response: AxiosResponse<{ data: UserData }> = await axios.post(
        `${BASE_URL}/login`,
        {
          email,
          password,
        },
        {
          withCredentials: true,
          headers: {
            "Access-Control-Allow-Origin": "*",
            "Content-Type": "application/json",
          },
        }
      );
      setUser(response.data.data);
    } catch (err) {
      const errorResponse = err as AxiosError<ErrorResponse>;
      setError(
        errorResponse.response?.data.message || "An error occurred during login"
      );
    } finally {
      setLoading(false);
    }
  };

  const register = async (
    name: string,
    email: string,
    password: string,
    passwordConfirm: string
  ): Promise<void> => {
    setLoading(true);
    try {
      const response: AxiosResponse<{ data: UserData }> = await axios.post(
        `${BASE_URL}/signup`,
        {
          name,
          email,
          password,
          passwordConfirm,
        },
        {
          withCredentials: true,
          headers: {
            "Access-Control-Allow-Origin": "*",
            "Content-Type": "application/json",
          },
        }
      );
      setUser(response.data.data);
    } catch (err) {
      const errorResponse = err as AxiosError<ErrorResponse>;
      setError(
        errorResponse.response?.data.message ||
          "An error occurred during registration"
      );
    } finally {
      setLoading(false);
    }
  };

  const logout = (): void => {
    setUser(null);
  };

  return { user, error, loading, login, register, logout };
};

export default useAuth;
