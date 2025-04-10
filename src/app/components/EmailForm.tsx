"use client";

import React from "react";
import { useForm, ValidationError } from "@formspree/react";

export default function EmailForm() {
  const [state, handleSubmit] = useForm("xpwpkrwr");

  if (state.succeeded) {
    return <p className="text-white font-bold text-xl pr-[5em] lg:pr-[8em]">Thanks for joining!</p>;
  }

  return (
    <form onSubmit={handleSubmit} className="bg-gray-900/40 p-4 rounded max-w-md">
      <label htmlFor="email" className="block text-white text-lg  mb-2">
        Sign up for key updates.
      </label>
      <input
        id="email"
        type="email"
        name="email"
        placeholder="Your email"
        required
        className="text-black w-full p-2 mb-2 rounded"
      />
      <ValidationError prefix="Email" field="email" errors={state.errors} />

      {/* Uncomment the following lines if you want to include a message field */}
      {/*
      <label htmlFor="message" className="block text-white mb-2">
        Message
      </label>
      <textarea
        id="message"
        name="message"
        className="w-full p-2 mb-2 rounded"
      />
      <ValidationError prefix="Message" field="message" errors={state.errors} />
      */}

      <button
        type="submit"
        disabled={state.submitting}
        className="mt-2 text-black bg-button px-4 py-2 rounded hover:bg-gray-500 font-bold"
      >
        Stay Posted
      </button>
    </form>
  );
}
