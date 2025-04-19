import React, { useState } from "react";
import Head from "next/head";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    subscribeEmail: "",
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required.";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required.";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid.";
    }
    if (!formData.message.trim()) newErrors.message = "Message is required.";

    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    setErrors({});
    setSubmitted(true);
    // Here you'd send the form data to an API if needed
    setTimeout(() => setSubmitted(false), 3000);
    setFormData({ name: "", email: "", message: "", subscribeEmail: "" });
  };

  return (
    <>
      <Head>
        <title>Contact Us | Nike Sneaker Store</title>
        <meta name="description" content="Get in touch with us." />
      </Head>
      <div className="bg-black min-h-screen py-16 px-4 flex items-center justify-center">
        <div className="w-full max-w-4xl bg-white/5 backdrop-blur-md rounded-3xl p-10 shadow-lg border border-white/10 text-white">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-10 text-center">
            Contact Us
          </h1>

          {submitted && (
            <div className="bg-green-500/10 text-green-300 text-sm p-3 mb-6 rounded-xl text-center border border-green-400/30">
              Thanks for reaching out! We’ll get back to you shortly.
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block font-semibold mb-1">Name</label>
              <input
                type="text"
                placeholder="Your name"
                className="w-full p-3 rounded-lg bg-white/10 border border-white/10 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-white/20"
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
              />
              {errors.name && (
                <p className="text-red-400 text-sm mt-1">{errors.name}</p>
              )}
            </div>

            <div>
              <label className="block font-semibold mb-1">Email</label>
              <input
                type="email"
                placeholder="you@example.com"
                className="w-full p-3 rounded-lg bg-white/10 border border-white/10 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-white/20"
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
              />
              {errors.email && (
                <p className="text-red-400 text-sm mt-1">{errors.email}</p>
              )}
            </div>

            <div>
              <label className="block font-semibold mb-1">Message</label>
              <textarea
                rows="5"
                placeholder="Write your message..."
                className="w-full p-3 rounded-lg bg-white/10 border border-white/10 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-white/20"
                value={formData.message}
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
              ></textarea>
              {errors.message && (
                <p className="text-red-400 text-sm mt-1">{errors.message}</p>
              )}
            </div>

            <button
              type="submit"
              className="w-full py-3 bg-white text-black font-semibold rounded-lg hover:bg-gray-200 transition active:scale-95"
            >
              Send Message
            </button>
          </form>

          {/* Newsletter Section */}
          <div className="mt-16 border-t border-white/10 pt-10 text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Stay in the loop
            </h2>
            <p className="text-gray-300 mb-6 text-sm md:text-base">
              Subscribe to our newsletter and never miss a drop.
            </p>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                alert("Subscribed!");
                setFormData({ ...formData, subscribeEmail: "" });
              }}
              className="flex flex-col sm:flex-row items-center justify-center gap-4"
            >
              <input
                type="email"
                placeholder="you@example.com"
                className="w-full sm:w-auto px-4 py-2 rounded-lg bg-white/10 border border-white/10 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-white/20"
                value={formData.subscribeEmail}
                onChange={(e) =>
                  setFormData({ ...formData, subscribeEmail: e.target.value })
                }
              />
              <button
                type="submit"
                className="px-6 py-2 bg-white text-black font-medium rounded-lg hover:bg-gray-200 transition active:scale-95"
              >
                Subscribe
              </button>
            </form>
          </div>

          <p className="text-sm text-gray-500 mt-10 text-center">
            &copy; {new Date().getFullYear()} Nike Sneaker Store. All rights
            reserved.
          </p>
        </div>
      </div>
    </>
  );
};

export default Contact;
