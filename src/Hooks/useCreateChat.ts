import { useState } from "react";
import axios, { AxiosError } from "axios";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

interface ErrorResponse {
  message: string;
}

const useCreateChat = () => {
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const createChat = async (id: string) => {
    try {
      setLoading(true);

      const response = await axios.post("http://localhost:8000/api/v1/chat", {
        userId: id,
      });
      setError(null);
      setLoading(false);
      navigate(`/chat/${response.data.data._id}`);
    } catch (error) {
      setLoading(false);
      const errorResponse = error as AxiosError<ErrorResponse>;
      setError(
        errorResponse.response?.data.message ||
          "An error occurred while sending the message"
      );
      toast.error("Error Sending Message");
    }
  };

  return { error, loading, createChat };
};

export default useCreateChat;
