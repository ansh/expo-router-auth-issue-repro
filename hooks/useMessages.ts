import { useQuery, useMutation, useQueryClient } from "react-query";
import { trpc, trpcQuery } from "../config/api";
import { useState } from "react";

interface Message {
  id: string;
  text: string;
  sender: "user" | "ai";
}

const sendMessage = async (message: Message) => {
  
  return message;
};

export const useMessages = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const queryClient = useQueryClient();

  const sendMessageMutation = useMutation(sendMessage, {
    onSuccess: (newMessage) => {
      queryClient.setQueryData("messages", (oldMessages: any) => [...oldMessages, newMessage]);
    },
  });

  return { messages, sendMessageMutation };
};
