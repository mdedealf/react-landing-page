import { FC } from "react";

interface Message {
  message?: string | null | undefined;
}

const RequestMessage: FC<Message> = ({ message }) => {
  return (
    <div className="flex items-center justify-center text-dark-black text-27px font-bold h-[calc(100vh-80px)] w-full">
      {message}
    </div>
  );
};

export default RequestMessage;
