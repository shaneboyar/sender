import React, { useState } from "react";

export interface SenderProps {
  name: string;
}

const Sender = ({ name }: SenderProps) => {
  const [message, setMessage] = useState("");

  const sendNotification = () => {
    fetch("http://localhost:3001", {
      method: "POST",
      body: JSON.stringify({
        message: "test",
      }),
    });
  };

  return (
    <div className="flex flex-col p-8 h-64 w-48 shadow rounded">
      <div className="text-center text-lg font-bold">{name}</div>
      <div className="border rounded" onClick={sendNotification}>
        Send Message
      </div>
    </div>
  );
};

export default Sender;
