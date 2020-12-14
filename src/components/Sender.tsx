import React, { useState } from "react";

export interface SenderProps {
  name: string;
}

const Sender = ({ name }: SenderProps) => {
  const [message, setMessage] = useState("");
  return (
    <div className="flex flex-col p-8 h-64 w-48 shadow rounded">
      <div className="text-center text-lg font-bold">{name}</div>
    </div>
  );
};

export default Sender;
