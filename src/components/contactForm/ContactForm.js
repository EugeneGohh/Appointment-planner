import React from "react";

export const ContactForm = ({
  name,
  setName,
  phone,
  setPhone,
  email,
  setEmail,
  handleSubmit
}) => {
  return (
    <form onSubmit={handleSubmit}>
      <label>
        <input 
          type="text"
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          placeholder="Contact Info"
        />
      </label>

      <br />

      <label>
        <input 
          type="tel"
          value={phone}
          name="phone"
          onChange={(e) => setPhone(e.target.value)}
          required
          pattern="^(\+?6?01)[0-46-9]-*[0-9]{7,8}$" // Regex for Malaysia phone number
          placeholder="Enter Your Phone Number Here"
        />
      </label>

      <br />

      <label>
        <input 
          type="email"
          value={email}
          name="email"
          onChange={(e) => setEmail(e.target.value)}
          required
          placeholder="Your Email Here"
        />
      </label>

      <br />
      <input type="submit" value="Add Your Contact" />
    </form>
  );
};
