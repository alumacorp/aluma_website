import React from "react";
import Header from "../components/Header";

export default function OurTeam() {
  const teamMembers = [
    {
      name: "Rishabh Verma",
      designation: "@Founder",
      instagram: "https://www.instagram.com/rishabh__07__/",

      linkedin: "https://www.linkedin.com/in/rishabh-verma-138676238",
      photo: require("../assets/rishab.jpeg"),
      description: "Founded the Brand",
    },
    {
      name: "Sudeep Tripathi",
      designation: "@CEO",
      instagram: "https://instagram.com/sudeeptripathi._?igshid=YmMyMTA2M2Y=",

      linkedin: "https://www.linkedin.com/in/sudeep-tripathi-326ab8157",
      photo: require("../assets/sudeep.jpeg"),
      description: "CEO of the company",
    },
    {
      name: "Aditya Aggarwal",
      designation: "@Member",
      instagram: "https://www.instagram.com/aditya._.agrawal._/",

      linkedin: "https://www.linkedin.com/in/aditya-agrawal-9097291a1",
      description: "Taking care of the Technical stuff",
    },
    {
      name: "Adi Patel",
      designation: "@Member",
      instagram: "",
      linkedin: "",
      photo: require("../assets/adi.jpg"),
      description: "I am the member of the aluma team",
    },
    {
      name: "Abhishek Das",
      designation: "@Member",
      instagram: "https://instagram.com/_abhishekdas__?igshid=YmMyMTA2M2Y=",
      linkedin: "",
      photo: require("../assets/das.jpg"),
      description: "I am the member of the aluma team",
    },
    {
      name: "Maanvendra Singh",
      designation: "@Member",
      instagram: "https://instagram.com/manu_singh0222?r=nametag",
      linkedin: "https://www.linkedin.com/in/maanvendra-singh-18384a152",
      photo: require("../assets/manu.jpeg"),
      description: "I am the member of the aluma team",
    },
    {
      name: "Sarvesh Chaubey",
      designation: "@Member",
      instagram: "",
      linkedin: "",
      photo: require("../assets/sarvesh.jpeg"),
      description: "I am the member of the aluma team",
    },
    {
      name: "Aryan Singh",
      designation: "@Member",
      instagram: "https://www.instagram.com/aryan.py",
      linkedin: "https://www.linkedin.com/in/aryan-singh-0b441a166/",
      description: "Tech stuff is under my control",
      github: "https://github.com/aryan0078",
    },
  ];
  return (
    <div className="relative bg-black overflow-hidden p-10">
      <div className="max-w-7xl mx-auto ">
        <section class="text-gray-400 bg-black body-font">
          <div class="container px-5 py-24 mx-auto">
            <div class="flex flex-col text-center w-full mb-20">
              <h1 class="text-2xl font-medium title-font mb-4 text-white tracking-widest">
                OUR TEAM
              </h1>
              <p class="lg:w-2/3 mx-auto leading-relaxed text-base">
                Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical
                gentrify, subway tile poke farm-to-table. Franzen you probably
                haven't heard of them.
              </p>
            </div>
            <div class="flex flex-wrap -m-4">
              {teamMembers.map((team) => (
                <div class="p-4 lg:w-1/2">
                  <div class="h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left">
                    <img
                      alt="team"
                      class="flex-shrink-0 rounded-lg w-48 h-48 object-cover object-center sm:mb-0 mb-4"
                      src={
                        team.photo
                          ? team.photo
                          : "https://dummyimage.com/200x200"
                      }
                    />
                    <div class="flex-grow sm:pl-8">
                      <h2 class="title-font font-medium text-lg text-white">
                        {team.name}
                      </h2>
                      <h3 class="text-gray-500 mb-3">{team.designation}</h3>
                      <p class="mb-4">{team.description}</p>
                      <span class="inline-flex">
                        <a
                          class="text-gray-500"
                          target={"_blank"}
                          href={team.instagram}
                        >
                          <svg
                            aria-hidden="true"
                            focusable="false"
                            data-prefix="fab"
                            data-icon="instagram"
                            class="w-3.5"
                            role="img"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 448 512"
                          >
                            <path
                              fill="currentColor"
                              d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"
                            ></path>
                          </svg>
                        </a>
                        <a
                          class="ml-2 text-gray-500"
                          target={"_blank"}
                          href={team.linkedin}
                        >
                          <svg
                            aria-hidden="true"
                            focusable="false"
                            data-prefix="fab"
                            data-icon="linkedin-in"
                            class="w-3.5"
                            role="img"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 448 512"
                          >
                            <path
                              fill="currentColor"
                              d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"
                            ></path>
                          </svg>
                        </a>
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
