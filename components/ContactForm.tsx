"use client";
import React from "react";
import { useForm } from "react-hook-form";

export default function ContactForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data: unknown) => console.log(data);
  console.log(errors);

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="mt-12 font-medium text-xl leading-relaxed font-inter">
      Hello! My name is{" "}
      <input
        type="text"
        placeholder="Your Name"
        {...register("First name", { required: true, maxLength: 80 })}
        className="outline-none border-0 p-0 mx-2 focus:ring-0 placeholder:text-center placeholder:text-lg bg-transparent border-b"
      />{" "}
      and I want to discuss a potential project. You can email me at{" "}
      <input
        type="text"
        placeholder="Email@email.com"
        {...register("Email", { required: true, pattern: /^\S+@\S+$/i })}
        className="outline-none border-0 p-0 mx-2 focus:ring-0 placeholder:text-center placeholder:text-lg bg-transparent border-b"
      />{" "}
      or reach out to me on{" "}
      <input
        type="tel"
        placeholder="Phone number"
        {...register("Mobile number", {
          minLength: 6,
          maxLength: 12,
        })}
        className="outline-none border-0 p-0 mx-2 focus:ring-0 placeholder:text-center placeholder:text-lg bg-transparent border-b"
      />{" "}
      Here are some details about my project: <br />
      <textarea
        {...register}
        rows={5}
        placeholder="Details about project"
        className="w-full outline-none border p-0 mx-2 focus:ring-0 placeholder:text-lg bg-transparent border-b"
      />
      <button
        className="inline-block mt-8 px-8 py-4 bg-yellow-400 font-medium text-xl text-secondary rounded-lg cursor-pointer"
        type="submit">
        Send Request
      </button>
    </form>
  );
}
