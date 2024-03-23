import { useState } from "react";
import axios, { AxiosError } from "axios";
import { toast } from "react-toastify";

export interface SendMessageData {
  chatId: string;
  content: string | null;
  media: File | null;
}

interface ErrorResponse {
  message: string;
}

const useSendMessage = () => {
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  const sendMessage = async (messageData: SendMessageData) => {
    try {
      setLoading(true);
      const formData = new FormData();
      formData.append("chatId", messageData.chatId);
      messageData.content && formData.append("content", messageData.content);
      messageData.media && formData.append("media", messageData.media);
      const response = await axios.post(
        "https://chatio-backend-9h8j.onrender.com/api/v1/message",
        formData
      );
      setError(null);
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
      toast.error("Error Sending Message");
    }
  };

  return { error, loading, sendMessage };
};

export default useSendMessage;
