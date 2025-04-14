"use client";

import { useEffect, useRef } from "react";
import { BsArrow90DegDown } from "react-icons/bs";
import { BsArrowRightCircle } from "react-icons/bs";

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
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#6B4A2F]" />

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

          <h1 className="text-4xl sm:text-5xl pt-[3em] md:pt-5 font-bold text-white">
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


        {/* "Explore The Idea" at the Bottom */}
        {/*<div className="absolute bottom-8 left-0 right-0 flex justify-center">
          <p className="text-white text-4xl">Explore The Idea</p>
        </div>*/}

        {/* "Explore The Idea" Button */}
        <a
          href="#content"
          className="absolute bottom-[4em] sm:bottom-8 left-0 right-0 flex justify-center items-center space-x-2 cursor-pointer"
        >
          <BsArrow90DegDown className="animate-bounce text-white text-2xl" />
          <span className="text-white text-2xl sm:text-3xl font-semibold animate-bounce">
            Explore The Idea
          </span>
        </a>


      </section>

      {/* Content Section */}

      {/* FIRST CONTENT SECTION */}
      <section id="content" className="bg-[#6B4A2F] p-8">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row gap-8 items-center">
          {/* Text: On mobile, shown first; on desktop, moved to the right with extra left margin */}
          <div className="order-1 md:order-2 md:w-1/2 text-white md:ml-[8em]">
            <h2 className="text-2xl font-bold mb-4">A Glimpse Into the Past</h2>
            <p className="text-base leading-relaxed">
              We started with history. Watch as a still image of a long-gone figure subtly stirs—eyes shifting, breath rising.
            </p>
          </div>
          {/* Comparison Container: On mobile, appears second; on desktop, placed on the left */}
          <div className="order-2 md:order-1 flex flex-col gap-4 md:flex-row md:w-1/2 items-center">
            <img
              src="/moe_still.png" // Replace with your actual image path
              alt="Animated Portrait Example"
              className="w-full md:w-1/2 rounded object-cover"
            />
            {/* Icon inserted only on medium screens and up */}
            <div className="hidden md:flex">
              <BsArrowRightCircle className="text-white text-3xl animate-pulse" />
            </div>
            <video
              className="w-full md:w-1/2 rounded object-cover"
              autoPlay
              loop
              muted
              playsInline
            >
              <source src="/moe_animated.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </section>

      {/* SVG Divider Between Sections */}
      <div className="w-full overflow-hidden leading-none bg-[#04151F]">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
          className="w-full"
        >
          <path
            fill="#6b4a2f"
            fillOpacity="1"
            d="M0,160L120,133.3C240,107,480,53,720,37.3C960,21,1200,43,1320,53.3L1440,64L1440,0L1320,0C1200,0,960,0,720,0C480,0,240,0,120,0L0,0Z"
          ></path>
        </svg>
      </div>

      {/* SECOND CONTENT SECTION – Mirrored layout with bg-gray-800 */}
      <section className="bg-[#04151F] p-8">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row gap-8 items-center lg:mt-[-12em]">
          {/* Text: Always first in order so it appears on top on mobile and on the left on larger screens */}
          <div className="order-1 md:w-1/2 text-white md:mr-[8em]">
            <h2 className="text-2xl font-bold mb-4">A Glimpse Into a New Vision</h2>
            <p className="text-base leading-relaxed">
              Then we tried it on ourselves. A simple selfie, suddenly alive.
            </p>
          </div>
          {/* Comparison Container: On mobile, appears second; on desktop, placed on the right */}
          <div className="order-2 md:w-1/2 flex flex-col gap-4 md:flex-row items-center">
            <img
              src="/moe_still.png" // Replace with your actual image path
              alt="Animated Portrait Example 3"
              className="w-full md:w-1/2 rounded object-cover"
            />
            {/* Icon inserted only on medium screens and up */}
            <div className="hidden md:flex">
              <BsArrowRightCircle className="text-white text-3xl animate-pulse" />
            </div>
            <video
              className="w-full md:w-1/2 rounded object-cover"
              autoPlay
              loop
              muted
              playsInline
            >
              <source src="/moe_animated.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </section>

      <div className="w-full overflow-hidden leading-none bg-[#6B4A2F]">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path fill="#04151F" fillOpacity="1" d="M0,96L120,101.3C240,107,480,117,720,106.7C960,96,1200,64,1320,48L1440,32L1440,0L1320,0C1200,0,960,0,720,0C480,0,240,0,120,0L0,0Z"></path>
        </svg>
      </div>

      {/* THIRD CONTENT SECTION – Same as first pattern with bg-gray-900 */}
      <section className="bg-[#6B4A2F] p-8">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row gap-8 items-center lg:mt-[-12em]">
          {/* Text: On mobile, shown first; on desktop, moved to the right */}
          <div className="order-1 md:order-2 md:w-1/2 text-white md:ml-[8em]">
            <h2 className="text-2xl font-bold mb-4">A Journey of Living Memories</h2>
            <p className="text-base leading-relaxed">
              And finally, a painted portrait from another era, brought to life with a flicker of movement.
            </p>
          </div>
          {/* Comparison Container */}
          <div className="order-2 md:order-1 flex flex-col gap-4 md:flex-row md:w-1/2 items-center">
            <img
              src="/moe_still.png" // Replace with your actual image path
              alt="Animated Portrait Example 5"
              className="w-full md:w-1/2 rounded object-cover"
            />
            {/* Icon inserted only on medium screens and up */}
            <div className="hidden md:flex">
              <BsArrowRightCircle className="text-white text-3xl animate-pulse" />
            </div>
            <video
              className="w-full md:w-1/2 rounded object-cover"
              autoPlay
              loop
              muted
              playsInline
            >
              <source src="/moe_animated.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </section>

      <div className="w-full overflow-hidden leading-none bg-[#04151F]">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path fill="#6b4a2f" fillOpacity="1" d="M0,192L80,186.7C160,181,320,171,480,149.3C640,128,800,96,960,112C1120,128,1280,192,1360,224L1440,256L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"></path>
        </svg>
      </div>

{/* FULL-WIDTH IMAGE SECTION */}
{/*<section className="w-full">
  <img
    src="/frame_image3.png" // Replace with your actual full-width image path
    alt="Transition Image"
    className="w-full object-cover"
  />
</section>*/}

{/*<section className="w-full relative">
  <img
    src="/frame_image3.png"
    alt="Transition Image"
    className="w-full object-cover lg:mt-[-4em]"
  />
  <div
    className="absolute inset-0">
    style={{
      background: "linear-gradient(to top, transparent 80%, #04151F 100%)",
    }}
  </div>
</section>*/}

<section className="relative w-full">
  <img
    src="/frame_image3.png"
    alt="Transition Image"
    className="w-full h-[96vh] object-cover xl:mt-[-2em] 2xl:mt-[-4em] md:object-[50%_80%]"
  />
  <div
    className="absolute inset-0"
    style={{
      background: "linear-gradient(to top, transparent 80%, #04151F 100%)",
    }}
  ></div>
</section>


      {/* FOURTH CONTENT SECTION */}
{/*
      <section className="bg-[#6B4A2F] p-8">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row gap-8 items-center">
          {/* Left: Text Paragraph */}
{/*          <div className="md:w-1/2 text-white">
            <h2 className="text-2xl font-bold mb-4">Our Vision</h2>
            <p className="text-base leading-relaxed">
              Our immediate goal is to revolutionize how you experience art and personal memories. With our upcoming digital frame,
              Ether Frames aims to bridge the gap between digital innovation and home living—displaying living portraits that breathe
              life and emotion into your space. Imagine a device crafted for your home that not only showcases your favorite images but
              transforms them into immersive, dynamic stories, redefining the way art interacts with your everyday world.
            </p>
          </div>

          {/* Right: Image */}
{/*          <div className="md:w-1/2 md:ml-[14em]">
            <img
              src="/frame_image2.png"
              alt="Digital Frame Product Concept"
              className="w-full rounded object-cover"
            />
          </div>
        </div>
      </section>
*/}


{/* FOURTH CONTENT SECTION */}
<section className="bg-[#6B4A2F] p-8">
  <div className="max-w-5xl mx-auto flex flex-col md:flex-row gap-8 items-center">
    {/* Left: Text Paragraph */}
    <div className="w-full md:w-[60%] text-white">
      <h2 className="text-2xl font-bold mb-4">Our Vision</h2>
      <p className="text-base leading-relaxed">
        Our immediate goal is to revolutionize how you experience art and personal memories. With our upcoming digital frame,
        Ether Frames aims to bridge the gap between digital innovation and home living—displaying living portraits that breathe
        life and emotion into your space. Imagine a device crafted for your home that not only showcases your favorite moments
        but transforms them into immersive, dynamic stories, redefining the way art interacts with your everyday world.
      </p>
    </div>

    {/* Right: Image */}
    <div className="w-full md:w-[40%] lg:ml-[5em]">
      <img
        src="/frame_image2.png"
        alt="Digital Frame Product Concept"
        className="w-full max-w-[400px] rounded object-cover"
      />
    </div>
  </div>
</section>




    </main>
  );
}
