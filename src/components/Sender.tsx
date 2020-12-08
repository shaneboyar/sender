import React from "react";

export interface SenderProps {
  name: string;
}

const Sender = ({ name }: SenderProps) => {
  return <div className="h-64 w-48 shadow rounded">{name}</div>;
};

export default Sender;
