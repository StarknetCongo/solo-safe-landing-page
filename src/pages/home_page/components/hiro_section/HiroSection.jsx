import React from "react";

const HiroSection = () => {
  return (
    <div>
      <section className="">
        <div className="grid max-w-screen-xl gap-12  py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
          <div className="mr-auto place-self-center lg:col-span-7 text-center lg:text-start">
            <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">
              Solo wallet is a Transact offline
            </h1>
            <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
              SoloSafe is a simple, secure, and reliable way to transact
              offline.
            </p>
            <a
              href="#"
              className="inline-flex my-4 items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center text-white rounded-lg bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900"
            >
              Play
            </a>
            <a
              href="#"
              className="inline-flex my-4 items-center justify-center px-5 py-3 text-base font-medium text-center text-gray-900 border border-gray-300 rounded-lg hover:bg-green-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-green-700 dark:focus:ring-gray-800"
            >
              App store
            </a>
          </div>
          <div className=" lg:mt-0 lg:col-span-5 lg:flex">
            <div className="app-hero">
              <div className="app-hero-wrapper">
                <div className="app-hero-content-1">
                  <img
                    src="https://uploads-ssl.webflow.com/645cabbed83c80ab1d03c69d/64e487a88e22f3525685fcd3_Focus%20Session%20(2).png"
                    alt=""
                    className="image-app-hero"
                  />
                  <div className="app-hero-shadow"></div>
                </div>
                <div className="app-hero-content-2">
                  <img
                    src="https://uploads-ssl.webflow.com/645cabbed83c80ab1d03c69d/64e4ac6fedf60ae33fd78f31_Wallet%20(4).png"
                    alt=""
                    className="image-app-hero"
                  />
                  <div className="app-hero-shadow"></div>
                </div>
                <div className="app-hero-content-3">
                  <img
                    src="https://uploads-ssl.webflow.com/645cabbed83c80ab1d03c69d/64e4ab10c60f8e004d9df01a_Level%20up%20(2).png"
                    alt=""
                    className="image-app-hero"
                  />
                  <div className="app-hero-shadow"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HiroSection;
