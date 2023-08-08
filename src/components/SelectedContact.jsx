import React, { useState, useEffect } from "react";

const SelectedContact = ({ selectedContactId }) => {
  const [contact, setContact] = useState(null);

  useEffect(() => {
    const fetchContactData = async () => {
      try {
        const response = await fetch(`https://fsa-jsonplaceholder-69b5c48f1259.herokuapp.com/users/${selectedContactId}`);
        const data = await response.json();
        setContact(data);
      } catch (error) {
        console.error("Error fetching contact data:", error);
      }
    };

    fetchContactData();
  }, [selectedContactId]);

  return (
    <div className="selected-contact">
      <h2>Selected Contact Details</h2>
      {contact ? (
        <div>
          <p><strong>Name:</strong> {contact.name}</p>
          <p><strong>Email:</strong> {contact.email}</p>
          <p><strong>Phone:</strong> {contact.phone}</p>
        </div>
      ) : (
        <p>Loading contact details...</p>
      )}
    </div>
  );
};

export default SelectedContact;
