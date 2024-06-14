import React from 'react';

const HiroSection = () => (
  <div>
    <section className="">
      <div className="grid max-w-screen-xl gap-8 px-6 lg:px-4  py-8 mx-auto lg:gap-12 xl:gap-12 lg:py-16 lg:grid-cols-12">
        <div className=" place-self-center lg:col-span-7 text-center lg:text-start">
          <h1 className=" mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl ">
            Solo wallet is a Transact offline
          </h1>
          <p className=" mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
            SoloSafe is a simple, secure, and reliable way to transact offline.
            Using the Zero Knowledge Proof (ZKP) technology and the power of
            Starknet, SoloSafe ensures that your transactions are secure over
            the internet or bluetooth.
          </p>

          <a
            href="#"
            className="inline-flex my-4 items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center text-white rounded-lg bg-solo-safe-1 hover:bg-solo-safe-1 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900"
          >
            <img
              src="https://uploads-ssl.webflow.com/645cabbed83c80ab1d03c69d/645cabbed83c80f49003c6eb_ios.svg"
              alt="app srtore"
            />
          </a>

          <a
            href="#"
            className="inline-flex my-4 items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center text-white rounded-lg bg-solo-safe-1 hover:bg-solo-safe-1 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900"
          >
            <img
              src="https://uploads-ssl.webflow.com/645cabbed83c80ab1d03c69d/645cabbed83c805fcd03c6ea_android.svg"
              alt="app srtore"
            />
          </a>
        </div>
        <div className=" lg:mt-0 lg:col-span-5 lg:flex">
          <div className="app-hero">
            <div className="app-hero-wrapper">
              <div className="app-hero-content-3">
                <img
                  src="https://uploads-ssl.webflow.com/645cabbed83c80ab1d03c69d/64e4ab10c60f8e004d9df01a_Level%20up%20(2).png"
                  alt=""
                  className="image-app-hero"
                />
                <div className="app-hero-shadow" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
);

export default HiroSection;
