"use client";

import { useEffect, useRef } from "react";
import { BsArrow90DegDown } from "react-icons/bs";


import EmailForm from "./components/EmailForm";


export default function Home() {

  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    // Delay the video playing by 3 seconds.
    const timer = setTimeout(() => {
      videoRef.current?.play();
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <main>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center p-8">
        {/* Background Video */}
        <video
          ref={videoRef}
          className="absolute inset-0 w-full h-full object-cover 2xl:object-[50%_20%]"
          muted
          playsInline
          // No loop attribute, so the video plays only once
          // Optionally, add a poster attribute for a fallback image:
          // poster="/unsplash_01.avif"
        >
          <source src="/hero_video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>


        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-gray-900" />

        {/* Header with Title */}
        <div className="absolute top-0 left-0 p-8">
          <h2 className="text-3xl font-semibold text-white">Ether Frames</h2>
        </div>

        {/* Email Form on the Right Side */}
        <div className="absolute invisible md:visible md:right-5 md:top-1/4 transform -translate-y-1/2 p-8">
          <EmailForm />
        </div>

        <div className="relative max-w-3xl">

          {/*<div className='md:invisible flex justify-center items-center'>
            <EmailForm />
          </div>*/}

          <h1 className="text-4xl sm:text-5xl pt-[6em] sm:pt-5 font-bold text-white">
            Coming Soon
          </h1>

          <p className='text-base lg:text-lg mt-[2em] lg:mt-5'>
            <span className='font-bold'>Bring your portraits to life! —— </span>Inspired by the magical paintings of fantasy, Ether Frames transforms still images into subtly animated, lifelike portraits. Our upcoming product captures the illusion of movement and presence—your photo, gently breathing, blinking, alive. This is just the beginning. Soon, Ether Frames will listen, speak, and respond—ushering in a new era of interactive storytelling and ambient AI. Be among the first to witness portraits that do more than remember. They live.
          </p>

        </div>

        {/* Email Form on the Right Side
        <div className="absolute invisible md:visible md:right-5 md:top-1/4 transform -translate-y-1/2 p-8">
          <EmailForm />
        </div>*/}

        {/*<div>
          <p className='text-4xl fixed bottom-10 -translate-y-1/2'>
            Explore The Idea
          </p>
        </div>*/}

        {/* "Explore The Idea" at the Bottom */}
        {/*<div className="absolute bottom-8 left-0 right-0 flex justify-center">
          <p className="text-white text-4xl">Explore The Idea</p>
        </div>*/}

        {/* "Explore The Idea" Button */}
        <a
          href="#content"
          className="absolute bottom-8 left-0 right-0 flex justify-center items-center space-x-2 cursor-pointer"
        >
          <BsArrow90DegDown className="animate-bounce text-white text-2xl" />
          <span className="text-white text-2xl font-semibold animate-bounce">
            Explore The Idea
          </span>
        </a>


      </section>

      {/* Content Section */}

      <section id="content" className="bg-gray-900 p-8">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row gap-8 items-center">
          {/* Left: Images */}
          <div className="flex flex-col gap-4 md:w-1/2">
            <img
              src="/image1.avif" // Replace with your actual image path
              alt="Animated Portrait Example 1"
              className="w-full rounded object-cover"
            />
            <img
              src="/image2.avif" // Replace with your actual image path
              alt="Animated Portrait Example 2"
              className="w-full rounded object-cover"
            />
          </div>

          {/* Right: Text Paragraph */}
          <div className="md:w-1/2 text-white">
            <h2 className="text-2xl font-bold mb-4">A Glimpse Into the Future</h2>
            <p className="text-base leading-relaxed">
              We started with history. Watch as a still image of a long-gone figure subtly stirs—eyes shifting, breath rising.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-gray-800 p-8">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row-reverse gap-8 items-center">
          {/* Right Column on large screens: Images */}
          <div className="flex flex-col gap-4 md:w-1/2">
            <img
              src="/image3.avif" // Replace with your actual image path
              alt="Animated Portrait Example 3"
              className="w-full rounded object-cover"
            />
            <img
              src="/image4.avif" // Replace with your actual image path
              alt="Animated Portrait Example 4"
              className="w-full rounded object-cover"
            />
          </div>

          {/* Left Column on large screens: Text */}
          <div className="md:w-1/2 text-white">
            <h2 className="text-2xl font-bold mb-4">A Glimpse Into a New Vision</h2>
            <p className="text-base leading-relaxed">
              Then we tried it on ourselves. A simple selfie, suddenly alive.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-gray-900 p-8">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row gap-8 items-center">
          {/* Left: Images */}
          <div className="flex flex-col gap-4 md:w-1/2">
            <img
              src="/image5.avif"  // Replace with your actual image path
              alt="Animated Portrait Example 5"
              className="w-full rounded object-cover"
            />
            <img
              src="/image6.avif"  // Replace with your actual image path
              alt="Animated Portrait Example 6"
              className="w-full rounded object-cover"
            />
          </div>

          {/* Right: Text Paragraph */}
          <div className="md:w-1/2 text-white">
            <h2 className="text-2xl font-bold mb-4">A Journey of Living Memories</h2>
            <p className="text-base leading-relaxed">
              And finally, a painted portrait from another era, brought to life with a flicker of movement.
            </p>
          </div>
        </div>
      </section>

    </main>
  );
}
