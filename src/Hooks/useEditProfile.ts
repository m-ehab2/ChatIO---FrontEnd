import { useState } from "react";
import axios, { AxiosResponse, AxiosError } from "axios";
import { toast } from "react-toastify";
import { useUser } from "../Context/UserContext";
import { UserData } from "./useAuth";

interface ErrorResponse {
  message: string;
}

const BASE_URL = "http://localhost:8000/api/v1";

const useEditProfile = () => {
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const { user, loginUser } = useUser();

  const editProfile = async (
    name: string,
    status: string,
    password: string
  ): Promise<void> => {
    setLoading(true);

    if (!user || !user._id) {
      setError("User data is missing or incomplete.");
      setLoading(false);
      return;
    }

    try {
      const response: AxiosResponse<{ data: UserData }> = await axios.patch(
        `${BASE_URL}/users/${user._id}`,
        {
          name,
          status,
          password,
        },
        {
          withCredentials: true,
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      loginUser(response.data.data);
    } catch (err) {
      const errorResponse = err as AxiosError<ErrorResponse>;
      if (errorResponse.response) {
        toast.error("Server returned an error response!");
        setError(
          errorResponse.response?.data.message ||
            "An error occurred while updating the profile"
        );
      } else {
        toast.error("Network error! Please try again later");
        setError("Network error. Please try again later.");
      }
    } finally {
      setLoading(false);
    }
  };

  return { error, loading, editProfile };
};

export default useEditProfile;
