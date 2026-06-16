"use client";

import { FaWhatsapp } from "react-icons/fa";
import { Button } from "../ui/Button";
import { useState } from "react";

const whatsappNumber = "918090028409";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const whatsappMessage = `
*New Portfolio Inquiry*

Name: ${formData.name}

Email: ${formData.email}

Message:
${formData.message}
`;

    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
      whatsappMessage
    )}`;

    window.open(whatsappUrl, "_blank");

    setFormData({
      name: "",
      email: "",
      message: "",
    });
  };


  return (
    <section
      id="contact"
      className="container mx-auto px-6 py-24"
    >
      {/* Heading */}
      <div className="font-nav text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold">
          Get In{" "}
          <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            Touch
          </span>
        </h2>

        <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
          Have a project in mind or want to collaborate? Feel free to send me
          a message. I&apos;ll get back to you as soon as possible.
        </p>
      </div>

      {/* Contact Card */}
      <div className="font-logo max-w-4xl mx-auto">
        <div className="rounded-3xl border border-white/10 bg-background/50 backdrop-blur-xl p-8 md:p-12 shadow-xl">
          <div className="grid md:grid-cols-2 gap-10">
            {/* Left Side */}
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold">
                Let's Build Something Amazing
              </h3>

              <p className="text-muted-foreground leading-relaxed">
                I'm always interested in new opportunities, freelance work,
                and exciting projects involving MERN Stack, Java, Spring Boot,
                and modern web technologies.
              </p>

              <a
                href={`https://wa.me/${whatsappNumber}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button className="w-full md:w-fit flex items-center gap-2">
                  <FaWhatsapp className="text-lg" />
                  Chat on WhatsApp
                </Button>
              </a>
            </div>

            {/* Right Side */}
            <form
              onSubmit={handleSubmit}
              method="POST"
              className="space-y-5"
            >
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                required
                value={formData.name}
                onChange={handleChange}
                className="w-full rounded-xl border border-border bg-background px-4 py-3 outline-none focus:ring-2 focus:ring-primary"
              />

              <input
                type="email"
                name="email"
                placeholder="Your Email"
                required
                value={formData.email}
                onChange={handleChange}
                className="w-full rounded-xl border border-border bg-background px-4 py-3 outline-none focus:ring-2 focus:ring-primary"
              />

              <textarea
                name="message"
                rows={5}
                placeholder="Your Message"
                required
                value={formData.message}
                onChange={handleChange}
                className="w-full rounded-xl border border-border bg-background px-4 py-3 outline-none resize-none focus:ring-2 focus:ring-primary"
              />

              <Button
                type="submit"
                className="w-full"
              >
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;