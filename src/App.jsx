import "./App.css";
import { useState } from "react";
import ContactList from "./components/ContactList";


export default function App() {
  const [selectedContactId, setSelectedContactId] = useState(null);

  return (
    <div className="App">
      <h1>Contact App</h1>
      {selectedContactId ? (
        <div>
          Selected Contact View
        </div>
      ) : (
        <ContactList setSelectedContactId={setSelectedContactId} />
      )}
    </div>
  );
}
