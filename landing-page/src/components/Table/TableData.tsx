import { FC } from "react";

interface Data {
  id: string;
  name: string;
  email: string;
  subject: string;
  message: string;
}

const TableData: FC<Data> = ({ id, name, email, subject, message }) => {
  return (
    <>
      <td className="py-2 px-4 border-b border-gray-400">{id}</td>
      <td className="py-2 px-4 border-b border-gray-400">{name}</td>
      <td className="py-2 px-4 border-b border-gray-400">{email}</td>
      <td className="py-2 px-4 border-b border-gray-400">{subject}</td>
      <td className="py-2 px-4 border-b border-gray-400">{message}</td>
    </>
  );
};

export default TableData;
