import { useState } from "react";
import axios, { AxiosError } from "axios";
import { toast } from "react-toastify";

export interface SendMessageData {
  chatId: string;
  content: string;
}

interface ErrorResponse {
  message: string;
}

const useSendMessage = () => {
  const [message, setMessage] = useState<string>("");
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const sendMessage = async (messageData: SendMessageData) => {
    try {
      setMessage(messageData.content);
      setLoading(true);
      const formData = new FormData();
      formData.append("chatId", messageData.chatId);
      formData.append("content", messageData.content);

      const response = await axios.post(
        "http://localhost:8000/api/v1/message",
        formData
      );
      toast.success("Message Sent Successfully");
      setLoading(false);
      console.log("Message sent successfully:", response.data);
    } catch (error) {
      setLoading(false);
      const errorResponse = error as AxiosError<ErrorResponse>;
      setError(
        errorResponse.response?.data.message ||
          "An error occurred while sending the message"
      );
    }
  };

  return { error, loading, sendMessage, message };
};

export default useSendMessage;
