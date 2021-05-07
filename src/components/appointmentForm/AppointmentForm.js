import React from "react";
import { ContactPicker } from "../contactPicker/ContactPicker";

export const AppointmentForm = ({
  contacts,
  title,
  setTitle,
  contact,
  setContact,
  date,
  setDate,
  time,
  setTime,
  handleSubmit,
}) => {
  const getTodayString = () => {
    const [month, day, year] = new Date()
      .toLocaleDateString("en-US")
      .split("/");
    return `${year}-${month.padStart(2, "0")}-${day.padStart(2, "0")}`;
  };

  // Get contact name with this function
  const getContact = () => {
    return contacts.map((contact) => contact.name);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        <input
          type="text"
          name="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
          placeholder="What is your appointment?"
        />
      </label>

      <br />

      <label>
        <ContactPicker
          name="contact"
          value={contact}
          contacts={getContact()}
          onChange={(e) => setContact(e.target.value)}
          placeholder="Appointment contact"
        />
      </label>

      <br />

      <label>
        <input
          type="date"
          name="date"
          min={getTodayString()}
          onChange={(e) => setDate(e.target.value)}
          required
          value={date}
        />
      </label>

      <br />
      <input
        type="time"
        name="time"
        onChange={(e) => setTime(e.target.value)}
        required
        value={time}
      />

      <br />
      <input type="submit" value="Add Your Appointment Here" />
    </form>
  );
};
