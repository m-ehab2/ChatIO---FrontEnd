import { useState, useEffect } from "react";
import axios, { AxiosError } from "axios";
import { UserData } from "./useFetchAllUsers";
axios.defaults.withCredentials = true;
axios.defaults.withXSRFToken = true;

export interface MessageData {
  _id: string;
  chat: string;
  content: string;
  media: string;
  createdAt: string;
  seen: string[];
  sender: UserData;
}

export interface OneChat {
  chatImage: string;
  chatName: string;
  data: MessageData[];
}

interface ErrorResponse {
  message: string;
}
const useFetchOneChat = (id: string) => {
  const [chat, setChat] = useState<OneChat | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const chatsURL = "https://chatio-backend-9h8j.onrender.com/api/v1/chat/" + id;
  const fetchChat = async () => {
    try {
      setChat(null);
      const response =
        id &&
        (await axios.get(chatsURL, {
          headers: {
            "Access-Control-Allow-Origin": "http://127.0.0.1:5173",
            "Content-Type": "application/json",
          },
        }));
      setChat(response.data);
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
    fetchChat();
  }, []);

  return { error, chat, loading, fetchChat };
};

export default useFetchOneChat;
