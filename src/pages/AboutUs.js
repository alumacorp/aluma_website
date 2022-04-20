import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { Fragment } from "react";
import {
  BriefcaseIcon,
  CalendarIcon,
  CheckIcon,
  ChevronDownIcon,
  CurrencyDollarIcon,
  LinkIcon,
  LocationMarkerIcon,
  PencilIcon,
  ArrowCircleRightIcon,
} from "@heroicons/react/solid";
import { Menu, Transition } from "@headlessui/react";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function AboutUs() {
  return (
    <div className="relative bg-black overflow-hidden p-10">
      <div className="max-w-7xl mx-auto ">
        <div className="flex-1 min-w-0 ">
          <h2 className="text-6xl mt-20 font-bold leading-7 text-gray-900 ">
            About Us
          </h2>

          <section class="pt-20 lg:pt-[120px] pb-12 lg:pb-[90px] overflow-hidden">
            <div class="container">
              <div class="flex flex-wrap justify-between items-center -mx-4">
                <div class="w-full lg:w-6/12 px-4">
                  <div class="flex items-center -mx-3 sm:-mx-4">
                    <div class="w-full xl:w-1/2 px-3 sm:px-4">
                      <div class="py-3 sm:py-4">
                        <img
                          src="https://cdn.tailgrids.com/1.0/assets/images/services/image-1.jpg"
                          alt=""
                          class="rounded-2xl w-full"
                        />
                      </div>
                      <div class="py-3 sm:py-4">
                        <img
                          src="https://cdn.tailgrids.com/1.0/assets/images/services/image-2.jpg"
                          alt=""
                          class="rounded-2xl w-full"
                        />
                      </div>
                    </div>
                    <div class="w-full xl:w-1/2 px-3 sm:px-4">
                      <div class="my-4 relative z-10">
                        <img
                          src="https://cdn.tailgrids.com/1.0/assets/images/services/image-3.jpg"
                          alt=""
                          class="rounded-2xl w-full"
                        />
                        <span class="text-orange-400 absolute -right-7 -bottom-7 z-[-1]">
                          <svg
                            width="134"
                            height="106"
                            viewBox="0 0 134 106"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <circle
                              cx="1.66667"
                              cy="104"
                              r="1.66667"
                              transform="rotate(-90 1.66667 104)"
                              fill="orange"
                            />
                            <circle
                              cx="16.3333"
                              cy="104"
                              r="1.66667"
                              transform="rotate(-90 16.3333 104)"
                              fill="orange"
                            />
                            <circle
                              cx="31"
                              cy="104"
                              r="1.66667"
                              transform="rotate(-90 31 104)"
                              fill="orange"
                            />
                            <circle
                              cx="45.6667"
                              cy="104"
                              r="1.66667"
                              transform="rotate(-90 45.6667 104)"
                              fill="orange"
                            />
                            <circle
                              cx="60.3334"
                              cy="104"
                              r="1.66667"
                              transform="rotate(-90 60.3334 104)"
                              fill="orange"
                            />
                            <circle
                              cx="88.6667"
                              cy="104"
                              r="1.66667"
                              transform="rotate(-90 88.6667 104)"
                              fill="orange"
                            />
                            <circle
                              cx="117.667"
                              cy="104"
                              r="1.66667"
                              transform="rotate(-90 117.667 104)"
                              fill="orange"
                            />
                            <circle
                              cx="74.6667"
                              cy="104"
                              r="1.66667"
                              transform="rotate(-90 74.6667 104)"
                              fill="orange"
                            />
                            <circle
                              cx="103"
                              cy="104"
                              r="1.66667"
                              transform="rotate(-90 103 104)"
                              fill="orange"
                            />
                            <circle
                              cx="132"
                              cy="104"
                              r="1.66667"
                              transform="rotate(-90 132 104)"
                              fill="orange"
                            />
                            <circle
                              cx="1.66667"
                              cy="89.3333"
                              r="1.66667"
                              transform="rotate(-90 1.66667 89.3333)"
                              fill="orange"
                            />
                            <circle
                              cx="16.3333"
                              cy="89.3333"
                              r="1.66667"
                              transform="rotate(-90 16.3333 89.3333)"
                              fill="orange"
                            />
                            <circle
                              cx="31"
                              cy="89.3333"
                              r="1.66667"
                              transform="rotate(-90 31 89.3333)"
                              fill="orange"
                            />
                            <circle
                              cx="45.6667"
                              cy="89.3333"
                              r="1.66667"
                              transform="rotate(-90 45.6667 89.3333)"
                              fill="orange"
                            />
                            <circle
                              cx="60.3333"
                              cy="89.3338"
                              r="1.66667"
                              transform="rotate(-90 60.3333 89.3338)"
                              fill="orange"
                            />
                            <circle
                              cx="88.6667"
                              cy="89.3338"
                              r="1.66667"
                              transform="rotate(-90 88.6667 89.3338)"
                              fill="orange"
                            />
                            <circle
                              cx="117.667"
                              cy="89.3338"
                              r="1.66667"
                              transform="rotate(-90 117.667 89.3338)"
                              fill="orange"
                            />
                            <circle
                              cx="74.6667"
                              cy="89.3338"
                              r="1.66667"
                              transform="rotate(-90 74.6667 89.3338)"
                              fill="orange"
                            />
                            <circle
                              cx="103"
                              cy="89.3338"
                              r="1.66667"
                              transform="rotate(-90 103 89.3338)"
                              fill="orange"
                            />
                            <circle
                              cx="132"
                              cy="89.3338"
                              r="1.66667"
                              transform="rotate(-90 132 89.3338)"
                              fill="orange"
                            />
                            <circle
                              cx="1.66667"
                              cy="74.6673"
                              r="1.66667"
                              transform="rotate(-90 1.66667 74.6673)"
                              fill="orange"
                            />
                            <circle
                              cx="1.66667"
                              cy="31.0003"
                              r="1.66667"
                              transform="rotate(-90 1.66667 31.0003)"
                              fill="orange"
                            />
                            <circle
                              cx="16.3333"
                              cy="74.6668"
                              r="1.66667"
                              transform="rotate(-90 16.3333 74.6668)"
                              fill="orange"
                            />
                            <circle
                              cx="16.3333"
                              cy="31.0003"
                              r="1.66667"
                              transform="rotate(-90 16.3333 31.0003)"
                              fill="orange"
                            />
                            <circle
                              cx="31"
                              cy="74.6668"
                              r="1.66667"
                              transform="rotate(-90 31 74.6668)"
                              fill="orange"
                            />
                            <circle
                              cx="31"
                              cy="31.0003"
                              r="1.66667"
                              transform="rotate(-90 31 31.0003)"
                              fill="orange"
                            />
                            <circle
                              cx="45.6667"
                              cy="74.6668"
                              r="1.66667"
                              transform="rotate(-90 45.6667 74.6668)"
                              fill="orange"
                            />
                            <circle
                              cx="45.6667"
                              cy="31.0003"
                              r="1.66667"
                              transform="rotate(-90 45.6667 31.0003)"
                              fill="orange"
                            />
                            <circle
                              cx="60.3333"
                              cy="74.6668"
                              r="1.66667"
                              transform="rotate(-90 60.3333 74.6668)"
                              fill="orange"
                            />
                            <circle
                              cx="60.3333"
                              cy="30.9998"
                              r="1.66667"
                              transform="rotate(-90 60.3333 30.9998)"
                              fill="orange"
                            />
                            <circle
                              cx="88.6667"
                              cy="74.6668"
                              r="1.66667"
                              transform="rotate(-90 88.6667 74.6668)"
                              fill="orange"
                            />
                            <circle
                              cx="88.6667"
                              cy="30.9998"
                              r="1.66667"
                              transform="rotate(-90 88.6667 30.9998)"
                              fill="orange"
                            />
                            <circle
                              cx="117.667"
                              cy="74.6668"
                              r="1.66667"
                              transform="rotate(-90 117.667 74.6668)"
                              fill="orange"
                            />
                            <circle
                              cx="117.667"
                              cy="30.9998"
                              r="1.66667"
                              transform="rotate(-90 117.667 30.9998)"
                              fill="orange"
                            />
                            <circle
                              cx="74.6667"
                              cy="74.6668"
                              r="1.66667"
                              transform="rotate(-90 74.6667 74.6668)"
                              fill="orange"
                            />
                            <circle
                              cx="74.6667"
                              cy="30.9998"
                              r="1.66667"
                              transform="rotate(-90 74.6667 30.9998)"
                              fill="orange"
                            />
                            <circle
                              cx="103"
                              cy="74.6668"
                              r="1.66667"
                              transform="rotate(-90 103 74.6668)"
                              fill="orange"
                            />
                            <circle
                              cx="103"
                              cy="30.9998"
                              r="1.66667"
                              transform="rotate(-90 103 30.9998)"
                              fill="orange"
                            />
                            <circle
                              cx="132"
                              cy="74.6668"
                              r="1.66667"
                              transform="rotate(-90 132 74.6668)"
                              fill="orange"
                            />
                            <circle
                              cx="132"
                              cy="30.9998"
                              r="1.66667"
                              transform="rotate(-90 132 30.9998)"
                              fill="orange"
                            />
                            <circle
                              cx="1.66667"
                              cy="60.0003"
                              r="1.66667"
                              transform="rotate(-90 1.66667 60.0003)"
                              fill="orange"
                            />
                            <circle
                              cx="1.66667"
                              cy="16.3333"
                              r="1.66667"
                              transform="rotate(-90 1.66667 16.3333)"
                              fill="orange"
                            />
                            <circle
                              cx="16.3333"
                              cy="60.0003"
                              r="1.66667"
                              transform="rotate(-90 16.3333 60.0003)"
                              fill="orange"
                            />
                            <circle
                              cx="16.3333"
                              cy="16.3333"
                              r="1.66667"
                              transform="rotate(-90 16.3333 16.3333)"
                              fill="orange"
                            />
                            <circle
                              cx="31"
                              cy="60.0003"
                              r="1.66667"
                              transform="rotate(-90 31 60.0003)"
                              fill="orange"
                            />
                            <circle
                              cx="31"
                              cy="16.3333"
                              r="1.66667"
                              transform="rotate(-90 31 16.3333)"
                              fill="orange"
                            />
                            <circle
                              cx="45.6667"
                              cy="60.0003"
                              r="1.66667"
                              transform="rotate(-90 45.6667 60.0003)"
                              fill="orange"
                            />
                            <circle
                              cx="45.6667"
                              cy="16.3333"
                              r="1.66667"
                              transform="rotate(-90 45.6667 16.3333)"
                              fill="orange"
                            />
                            <circle
                              cx="60.3333"
                              cy="60.0003"
                              r="1.66667"
                              transform="rotate(-90 60.3333 60.0003)"
                              fill="orange"
                            />
                            <circle
                              cx="60.3333"
                              cy="16.3333"
                              r="1.66667"
                              transform="rotate(-90 60.3333 16.3333)"
                              fill="orange"
                            />
                            <circle
                              cx="88.6667"
                              cy="60.0003"
                              r="1.66667"
                              transform="rotate(-90 88.6667 60.0003)"
                              fill="orange"
                            />
                            <circle
                              cx="88.6667"
                              cy="16.3333"
                              r="1.66667"
                              transform="rotate(-90 88.6667 16.3333)"
                              fill="orange"
                            />
                            <circle
                              cx="117.667"
                              cy="60.0003"
                              r="1.66667"
                              transform="rotate(-90 117.667 60.0003)"
                              fill="orange"
                            />
                            <circle
                              cx="117.667"
                              cy="16.3333"
                              r="1.66667"
                              transform="rotate(-90 117.667 16.3333)"
                              fill="orange"
                            />
                            <circle
                              cx="74.6667"
                              cy="60.0003"
                              r="1.66667"
                              transform="rotate(-90 74.6667 60.0003)"
                              fill="orange"
                            />
                            <circle
                              cx="74.6667"
                              cy="16.3333"
                              r="1.66667"
                              transform="rotate(-90 74.6667 16.3333)"
                              fill="orange"
                            />
                            <circle
                              cx="103"
                              cy="60.0003"
                              r="1.66667"
                              transform="rotate(-90 103 60.0003)"
                              fill="orange"
                            />
                            <circle
                              cx="103"
                              cy="16.3333"
                              r="1.66667"
                              transform="rotate(-90 103 16.3333)"
                              fill="orange"
                            />
                            <circle
                              cx="132"
                              cy="60.0003"
                              r="1.66667"
                              transform="rotate(-90 132 60.0003)"
                              fill="orange"
                            />
                            <circle
                              cx="132"
                              cy="16.3333"
                              r="1.66667"
                              transform="rotate(-90 132 16.3333)"
                              fill="orange"
                            />
                            <circle
                              cx="1.66667"
                              cy="45.3333"
                              r="1.66667"
                              transform="rotate(-90 1.66667 45.3333)"
                              fill="orange"
                            />
                            <circle
                              cx="1.66667"
                              cy="1.66683"
                              r="1.66667"
                              transform="rotate(-90 1.66667 1.66683)"
                              fill="orange"
                            />
                            <circle
                              cx="16.3333"
                              cy="45.3333"
                              r="1.66667"
                              transform="rotate(-90 16.3333 45.3333)"
                              fill="orange"
                            />
                            <circle
                              cx="16.3333"
                              cy="1.66683"
                              r="1.66667"
                              transform="rotate(-90 16.3333 1.66683)"
                              fill="orange"
                            />
                            <circle
                              cx="31"
                              cy="45.3333"
                              r="1.66667"
                              transform="rotate(-90 31 45.3333)"
                              fill="orange"
                            />
                            <circle
                              cx="31"
                              cy="1.66683"
                              r="1.66667"
                              transform="rotate(-90 31 1.66683)"
                              fill="orange"
                            />
                            <circle
                              cx="45.6667"
                              cy="45.3333"
                              r="1.66667"
                              transform="rotate(-90 45.6667 45.3333)"
                              fill="orange"
                            />
                            <circle
                              cx="45.6667"
                              cy="1.66683"
                              r="1.66667"
                              transform="rotate(-90 45.6667 1.66683)"
                              fill="orange"
                            />
                            <circle
                              cx="60.3333"
                              cy="45.3338"
                              r="1.66667"
                              transform="rotate(-90 60.3333 45.3338)"
                              fill="orange"
                            />
                            <circle
                              cx="60.3333"
                              cy="1.66683"
                              r="1.66667"
                              transform="rotate(-90 60.3333 1.66683)"
                              fill="orange"
                            />
                            <circle
                              cx="88.6667"
                              cy="45.3338"
                              r="1.66667"
                              transform="rotate(-90 88.6667 45.3338)"
                              fill="orange"
                            />
                            <circle
                              cx="88.6667"
                              cy="1.66683"
                              r="1.66667"
                              transform="rotate(-90 88.6667 1.66683)"
                              fill="orange"
                            />
                            <circle
                              cx="117.667"
                              cy="45.3338"
                              r="1.66667"
                              transform="rotate(-90 117.667 45.3338)"
                              fill="orange"
                            />
                            <circle
                              cx="117.667"
                              cy="1.66683"
                              r="1.66667"
                              transform="rotate(-90 117.667 1.66683)"
                              fill="orange"
                            />
                            <circle
                              cx="74.6667"
                              cy="45.3338"
                              r="1.66667"
                              transform="rotate(-90 74.6667 45.3338)"
                              fill="orange"
                            />
                            <circle
                              cx="74.6667"
                              cy="1.66683"
                              r="1.66667"
                              transform="rotate(-90 74.6667 1.66683)"
                              fill="orange"
                            />
                            <circle
                              cx="103"
                              cy="45.3338"
                              r="1.66667"
                              transform="rotate(-90 103 45.3338)"
                              fill="orange"
                            />
                            <circle
                              cx="103"
                              cy="1.66683"
                              r="1.66667"
                              transform="rotate(-90 103 1.66683)"
                              fill="orange"
                            />
                            <circle
                              cx="132"
                              cy="45.3338"
                              r="1.66667"
                              transform="rotate(-90 132 45.3338)"
                              fill="orange"
                            />
                            <circle
                              cx="132"
                              cy="1.66683"
                              r="1.66667"
                              transform="rotate(-90 132 1.66683)"
                              fill="orange"
                            />
                          </svg>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="w-full lg:w-1/2 xl:w-5/12 px-4">
                  <div class="mt-10 lg:mt-0 text-gray-400">
                    <span class="font-semibold text-gray-200 text-lg text-primary mb-2 block">
                      Vision
                    </span>
                    <h2 class="font-bold text-3xl sm:text-4xl text-dark mb-8">
                      When We say Making Life Easy , we actually mean it .
                    </h2>
                    <p class="text-base text-body-color mb-8">
                      Advancement of Technology in our Day-To-Day Life is
                      Increasing Rapidly and it's becoming a part of our
                      Lifestyle.
                    </p>
                    <p class="text-base text-body-color mb-12">
                      We have Made ordering Food , Beverages , Shopping Online
                      as a Part of Our lifestyle. Which Literally saves our
                      Essential and Important Time. Keeping That in Mind We
                      Created an Idea to Make a Change in Lifestyle in an
                      effective way. What we do is Save Precious Time of our
                      User.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <h2 className="text-6xl mt-20 font-bold leading-7 text-gray-900 ">
            Why to choose us
          </h2>
          <section class="text-gray-400 bg-black body-font">
            <div class="container px-5 py-24 mx-auto">
              <div class="flex flex-col text-center w-full mb-20">
                <h1 class="sm:text-3xl text-2xl font-medium title-font mb-4 text-white">
                  Reasons to choose us
                </h1>
                <p class="lg:w-2/3 mx-auto leading-relaxed text-base">
                  No one likes the Idea of waiting in a queue or a line for
                  their turn to come. How frustrating that would be to spend
                  most of the time of your weekend or holiday waiting to get a
                  haircut isn't it? Now we provide a solution to that like you
                  can literally avoid that waiting time.
                </p>
              </div>
              <div class="flex flex-wrap -m-4 text-center ">
                <div class="p-4 md:w-1/4 sm:w-1/2 w-full">
                  <div class="border-2 border-gray-800 px-4 py-6 rounded-lg">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      class="text-orange-400 w-12 h-12 mb-3 inline-block"
                      viewBox="0 0 24 24"
                    >
                      <path d="M8 17l4 4 4-4m-4-5v9"></path>
                      <path d="M20.88 18.09A5 5 0 0018 9h-1.26A8 8 0 103 16.29"></path>
                    </svg>
                    <h2 class="title-font font-medium text-3xl text-white">
                      2.7K
                    </h2>
                    <p class="leading-relaxed">Downloads</p>
                  </div>
                </div>
                <div class="p-4 md:w-1/4 sm:w-1/2 w-full">
                  <div class="border-2 border-gray-800 px-4 py-6 rounded-lg">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      class="text-orange-400 w-12 h-12 mb-3 inline-block"
                      viewBox="0 0 24 24"
                    >
                      <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"></path>
                      <circle cx="9" cy="7" r="4"></circle>
                      <path d="M23 21v-2a4 4 0 00-3-3.87m-4-12a4 4 0 010 7.75"></path>
                    </svg>
                    <h2 class="title-font font-medium text-3xl text-white">
                      1.3K
                    </h2>
                    <p class="leading-relaxed">Users</p>
                  </div>
                </div>
                <div class="p-4 md:w-1/4 sm:w-1/2 w-full">
                  <div class="border-2 border-gray-800 px-4 py-6 rounded-lg">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      class="text-orange-400 w-12 h-12 mb-3 inline-block"
                      viewBox="0 0 24 24"
                    >
                      <path d="M3 18v-6a9 9 0 0118 0v6"></path>
                      <path d="M21 19a2 2 0 01-2 2h-1a2 2 0 01-2-2v-3a2 2 0 012-2h3zM3 19a2 2 0 002 2h1a2 2 0 002-2v-3a2 2 0 00-2-2H3z"></path>
                    </svg>
                    <h2 class="title-font font-medium text-3xl text-white">
                      74
                    </h2>
                    <p class="leading-relaxed">Files</p>
                  </div>
                </div>
                <div class="p-4 md:w-1/4 sm:w-1/2 w-full">
                  <div class="border-2 border-gray-800 px-4 py-6 rounded-lg">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      class="text-orange-400 w-12 h-12 mb-3 inline-block"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                    </svg>
                    <h2 class="title-font font-medium text-3xl text-white">
                      46
                    </h2>
                    <p class="leading-relaxed">Places</p>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* <p className="mt-10 text-xl leading-7 text-gray-500">
            No one likes the Idea of waiting in a queue or a line for their turn
            to come.
            <br /> How frustrating that would be to spend most of the time of
            your weekend or holiday waiting to get a haircut isn't it?
            <br /> Now we provide a solution to that like you can literally
            avoid that waiting time. Our app "BARBA" contains a Vast and Variety{" "}
            <br />
            List of Barbershop where you can Choose your Favorite shop and
            Select an available Time slot and Book your Appointment for Hair
            Cutting , Grooming , Spa and variety of other services that are
            provided by BARBA .Won't you prefer that? Won't it make it easy for
            you? We know it will . We Keep in check of that and also we have a
            User review and Rating system which will help you in selecting a
            best and available salon in that City or area.
          </p> */}
        </div>
      </div>
    </div>
  );
}
