import React from "react";
import PopCornIcon from "../../assets/images/icons/popcorn.png";
import BgImg from "../../assets/images/HeroSectionBG.jpg";

const HeroSection = () => {
  return (
    <section
      className="h-[100dvh] md:h-[100dvh] flex flex-col"
      style={{
        backgroundImage: `url(${BgImg})`,
        backgroundPosition: "",
        backgroundSize: "cover",
      }}
    >
      <div className="h-[100dvh] bg-black/70 flex flex-col justify-center items-center text-center lg:text-left p-4 text-white">
        <div className="flex flex-col items-center justify-center mt-40 lg:mt-60 gap-8">
          <h1 className="text-2xl md:text-5xl font-extrabold">
            Unlimited movies, TV shows, and more
          </h1>
          <h3 className="md:text-2xl text-xl mt-4">
            Watch anywhere. Cancel anytime
          </h3>
          <h5 className="text-md md:text-lg">
            Ready to watch? Enter you email to create or restart your
            membership.
          </h5>
          <form action="submit" className="flex flex-wrap justify-center gap-4">
            <input
              type="email"
              placeholder="Email address"
              required
              className="p-2 w-[20rem] md:w-[25rem] h-[4rem] px-8 text-sm bg-black/50 border border-white/20 rounded-md"
            />
            <button className="p-2 px-4 w-[20rem] md:w-[8rem] text-white text-md bg-red-600 hover:bg-red-700 rounded-md duration-300">
              Get Started
            </button>
          </form>
        </div>
        <div
          className="flex flex-col lg:flex-row lg:gap-6 w-[90vw] h-[12rem] lg:h-auto mt-12 justify-center items-center py-6"
          style={{
            background:
              "radial-gradient(51.39% 511.66% at 47.68% -217.91%, #ff9900 0%, #e50914 17.27%, #0e1b4f 79.44%, #000413 100%)",
            boxShadow: "0px -8px 25px rgba(0, 0, 0, 0.5)",
            borderRadius: "4px",
            color: "white",
            padding: "22px",
          }}
        >
          <img src={PopCornIcon} alt="popcorn" className="h-[80px]" />
          <div className="flex flex-col justify-center">
            <h4 className="text-xl">The Netflix you love for just €4.99.</h4>
            <h5 className="text-lg">Get the Standard with ads plan.</h5>
            <a href="/" className="text-lg text-blue-600 underline">
              Learn more
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
