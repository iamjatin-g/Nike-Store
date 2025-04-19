import React from "react";
import Head from "next/head";

const About = () => {
  return (
    <>
      <Head>
        <title>About Us | Nike Sneaker Store</title>
        <meta
          name="description"
          content="Learn more about our sneaker store."
        />
      </Head>
      <div className="bg-black text-white min-h-screen flex items-center justify-center px-4 py-12">
        <div className="w-full max-w-4xl text-center bg-white/5 backdrop-blur-md rounded-3xl p-10 shadow-lg border border-white/10">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-6 tracking-tight">
            About Nike Sneaker Store
          </h1>

          <p className="text-lg md:text-xl text-gray-300 mb-10 leading-relaxed">
            We're not just a sneaker store — we're a lifestyle. Built for
            sneaker lovers, athletes, and streetwear fans alike, we provide the
            latest Nike releases and iconic classics with quality you can trust.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
            <div className="bg-white/10 p-6 rounded-2xl border border-white/10 hover:bg-white/20 transition">
              <h2 className="text-xl font-semibold mb-2">🚀 Our Mission</h2>
              <p className="text-gray-300 text-sm">
                Deliver authentic Nike sneakers and elevate sneaker culture, one
                drop at a time.
              </p>
            </div>

            <div className="bg-white/10 p-6 rounded-2xl border border-white/10 hover:bg-white/20 transition">
              <h2 className="text-xl font-semibold mb-2">👟 What We Offer</h2>
              <p className="text-gray-300 text-sm">
                Curated collections of Air Jordans, Dunks, Air Max & more,
                shipped directly to your doorstep.
              </p>
            </div>

            <div className="bg-white/10 p-6 rounded-2xl border border-white/10 hover:bg-white/20 transition">
              <h2 className="text-xl font-semibold mb-2">🌍 Join Us</h2>
              <p className="text-gray-300 text-sm">
                Follow us, stay in the loop, and never miss a drop again.
              </p>
            </div>
          </div>

          <p className="text-sm text-gray-500 mt-12">
            &copy; {new Date().getFullYear()} Nike Sneaker Store. All rights
            reserved.
          </p>
        </div>
      </div>
    </>
  );
};

export default About;
