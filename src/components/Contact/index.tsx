"use client";

import { useState } from "react";

const Contact = () => {
  const [interestType, setInterestType] = useState<string>("");

  return (
    <section id="contact" className="overflow-hidden py-16 md:py-20 lg:py-28">
      <div className="container">
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4">
            <div
              className="mb-12 rounded-sm bg-white px-8 py-11 shadow-three dark:bg-gray-dark sm:p-[55px] lg:mb-5 lg:px-8 xl:p-[55px]"
              data-wow-delay=".15s"
            >
              <h2 className="mb-3 text-2xl font-bold text-black dark:text-white sm:text-3xl lg:text-2xl xl:text-3xl">
                Partner with CheckMate
              </h2>
              <p className="mb-12 text-base font-medium text-body-color">
                Tell us about your organization and how we can work together.
              </p>
              <form>
                <div className="-mx-4 flex flex-wrap">
                  <div className="w-full px-4">
                    <div className="mb-8">
                      <label className="mb-3 block text-sm font-medium text-dark dark:text-white">
                        I am interested in:
                      </label>
                      <div className="space-y-4">
                        <label className="flex items-center">
                          <input
                            type="radio"
                            name="interest"
                            value="api"
                            checked={interestType === "api"}
                            onChange={(e) => setInterestType(e.target.value)}
                            className="mr-3"
                          />
                          <span className="text-base text-body-color">
                            Tapping on CheckMate's API
                          </span>
                        </label>
                        <label className="flex items-center">
                          <input
                            type="radio"
                            name="interest"
                            value="community"
                            checked={interestType === "community"}
                            onChange={(e) => setInterestType(e.target.value)}
                            className="mr-3"
                          />
                          <span className="text-base text-body-color">
                            Deploying the community solution in your country
                          </span>
                        </label>
                        <label className="flex items-center">
                          <input
                            type="radio"
                            name="interest"
                            value="partnership"
                            checked={interestType === "partnership"}
                            onChange={(e) => setInterestType(e.target.value)}
                            className="mr-3"
                          />
                          <span className="text-base text-body-color">
                            Other Partnerships
                          </span>
                        </label>
                      </div>
                    </div>
                  </div>
                  <div className="w-full px-4 md:w-1/2">
                    <div className="mb-8">
                      <label
                        htmlFor="name"
                        className="mb-3 block text-sm font-medium text-dark dark:text-white"
                      >
                        Organization Name
                      </label>
                      <input
                        type="text"
                        placeholder="Enter your organization name"
                        className="border-stroke w-full rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:text-body-color-dark dark:shadow-two dark:focus:border-primary dark:focus:shadow-none"
                      />
                    </div>
                  </div>
                  <div className="w-full px-4 md:w-1/2">
                    <div className="mb-8">
                      <label
                        htmlFor="email"
                        className="mb-3 block text-sm font-medium text-dark dark:text-white"
                      >
                        Contact Email
                      </label>
                      <input
                        type="email"
                        placeholder="Enter your contact email"
                        className="border-stroke w-full rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:text-body-color-dark dark:shadow-two dark:focus:border-primary dark:focus:shadow-none"
                      />
                    </div>
                  </div>
                  <div className="w-full px-4">
                    <div className="mb-8">
                      <label
                        htmlFor="message"
                        className="mb-3 block text-sm font-medium text-dark dark:text-white"
                      >
                        Tell us more about your needs
                      </label>
                      <textarea
                        name="message"
                        rows={5}
                        placeholder="Please provide more details about your organization and requirements"
                        className="border-stroke w-full resize-none rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:text-body-color-dark dark:shadow-two dark:focus:border-primary dark:focus:shadow-none"
                      ></textarea>
                    </div>
                  </div>
                  <div className="w-full px-4">
                    <button className="rounded-sm bg-primary px-9 py-4 text-base font-medium text-white shadow-submit duration-300 hover:bg-primary/90 dark:shadow-submit-dark">
                      Submit Inquiry
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
