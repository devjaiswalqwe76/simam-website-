"use client";

import { useState } from "react";

export default function ContactForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log(form);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-xl mx-auto bg-white p-6 rounded-xl shadow"
    >
      <input
        type="text"
        placeholder="Name"
        className="w-full mb-4 p-2 border rounded"
        onChange={(e) => setForm({ ...form, name: e.target.value })}
      />

      <input
        type="email"
        placeholder="Email"
        className="w-full mb-4 p-2 border rounded"
        onChange={(e) => setForm({ ...form, email: e.target.value })}
      />

      <textarea
        placeholder="Message"
        className="w-full mb-4 p-2 border rounded"
        onChange={(e) => setForm({ ...form, message: e.target.value })}
      />

      <button className="bg-blue-600 text-white px-4 py-2 rounded">
        Send Message
      </button>
    </form>
  );
}