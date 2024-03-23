import { useState, useEffect } from "react";
import axios, { AxiosError } from "axios";
axios.defaults.withCredentials = true;
axios.defaults.withXSRFToken = true;
export interface UserData {
  _id: string;
  email: string;
  image: string;
  name: string;
  status: string;
}
interface ErrorResponse {
  message: string;
}
const useFetchAllUsers = () => {
  const [users, setUsers] = useState<UserData[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const usersURL = "https://chatio-backend-9h8j.onrender.com/api/v1/user";
  const fetchUsers = async () => {
    try {
      const response = await axios.get(usersURL, {
        headers: {
          "Access-Control-Allow-Origin": "http://127.0.0.1:5173",
          "Content-Type": "application/json",
        },
      });
      setUsers(response.data.data);
      setLoading(false);
    } catch (error) {
      const errorResponse = error as AxiosError<ErrorResponse>;
      setError(
        errorResponse.response?.data.message ||
          "An error occurred during Fetching Chats"
      );
      setLoading(false);
    }
  };
  useEffect(() => {
    fetchUsers();
  }, []);

  return { error, users, loading, fetchUsers };
};

export default useFetchAllUsers;
