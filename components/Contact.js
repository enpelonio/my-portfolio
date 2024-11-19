"use client";
import React, { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");

    const response = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    if (response.ok) {
      setStatus("Message sent successfully!");
      setFormData({ name: "", email: "", message: "" });
    } else {
      setStatus("Failed to send the message. Please try again.");
    }
  };

  return (
    <div className="flex flex-col p-10 min-h-[100vh] relative bg-secondary-light">
      <div className="custom-shape-divider-top-1731926415">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
            className="shape-fill"
          ></path>
        </svg>
      </div>
      <div className="mt-14">
        <p className="font-heading text-3xl mb-3">Contact Me</p>
        <div className="flex justify-center">
          <div className="w-[70vh]">
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                className="p-2 border border-gray-300 rounded font-body"
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                className="p-2 border border-gray-300 rounded font-body"
                required
              />
              <textarea
                name="message"
                placeholder="Your Message"
                value={formData.message}
                onChange={handleChange}
                className="p-2 border border-gray-300 rounded font-body"
                rows="5"
                required
              ></textarea>
              <button
                type="submit"
                className="p-2 bg-[#8CC84B] rounded text-white hover:bg-base hover:text-black font-body"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
