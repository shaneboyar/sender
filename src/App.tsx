import React, { ReactElement, useState } from "react";
import Sender, { SenderProps } from "./components/Sender";

function App() {
  const [senders, setSenders] = useState<ReactElement<SenderProps>[]>([]);
  const [name, setName] = useState("");

  const createSender = () => {
    setName("");
    setSenders((senders) => [<Sender name={name} />, ...senders]);
  };

  return (
    <div className="container mx-auto">
      <header className="flex flex-col items-center">
        <h1 className="font-bold">Senders</h1>
        <div className="flex flex-col w-1/5 my-8 space-y-4">
          <input
            className="p-2 border-2"
            placeholder="name"
            value={name}
            onChange={({ target: { value } }) => setName(value)}
          />
          <div
            className="border flex items-center justify-center"
            onClick={createSender}
          >
            Create
          </div>
        </div>
      </header>
      <div className="flex flex-row flex-wrap space-x-8">
        {senders.map((sender) => sender)}
      </div>
    </div>
  );
}

export default App;
