import React from "react";

export const ContactPicker = ({ name, contacts, onChange }) => {
  return (
    <select onChange={onChange} name={name}>
      <option value="" key={-1} selected="selected">
        No contact here
      </option>
      {contacts.map((contact) => {
        return (
          <option value={contact} key={contact}>
            {contact}
          </option>
        );
      })}
    </select>
  );
};
