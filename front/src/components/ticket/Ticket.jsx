import { useState } from "react";
import MainTitle from "../MainTitle";
import TicketForm from "./TicketForm";


function Ticket(){

// GET TASKS
  const [task, setTask] = useState([]);
  const [error, setError] = useState("");

  const fetchById = async () => {
    try {
      const response = await fetch("http://localhost:3000/atendees" + 1);
      if (!response.ok) {
        throw new Error(`Error! Response status: ${response.status}`);
      }
      const results = await response.json();
      setTask(results);
    } catch (error) {
      setError(error.messsage);
    }
  };

return (
    <>
    <main>
    <header>
    <MainTitle/>
    </header>
    <TicketForm/>
    </main>
    </>
);
}

export default Ticket;