import { Fragment, useEffect, useState } from "react";
import { Popover, Transition } from "@headlessui/react";
import {
  BookmarkAltIcon,
  CalendarIcon,
  ChartBarIcon,
  CursorClickIcon,
  MenuIcon,
  PhoneIcon,
  PlayIcon,
  RefreshIcon,
  ShieldCheckIcon,
  SupportIcon,
  ViewGridIcon,
  XIcon,
} from "@heroicons/react/outline";
import { ArrowCircleDownIcon, ChevronDownIcon } from "@heroicons/react/solid";
import { Link } from "react-router-dom";
import PopNotif from "./PopNotif";

const solutions = [
  {
    name: "Analytics",
    description:
      "Get a better understanding of where your traffic is coming from.",
    href: "#",
    icon: ChartBarIcon,
  },
  {
    name: "Engagement",
    description: "Speak directly to your customers in a more meaningful way.",
    href: "#",
    icon: CursorClickIcon,
  },
  {
    name: "Security",
    description: "Your customers' data will be safe and secure.",
    href: "#",
    icon: ShieldCheckIcon,
  },
  {
    name: "Integrations",
    description: "Connect with third-party tools that you're already using.",
    href: "#",
    icon: ViewGridIcon,
  },
  {
    name: "Automations",
    description:
      "Build strategic funnels that will drive your customers to convert",
    href: "#",
    icon: RefreshIcon,
  },
];

const resources = [
  {
    name: "Contracts",
    description:
      "Get all of your questions answered in our forums or contact support.",
    href: "#",
    icon: SupportIcon,
  },
  {
    name: "Leagal",
    description:
      "Learn how to maximize our platform to get the most out of it.",
    href: "#",
    icon: BookmarkAltIcon,
  },
  {
    name: "Privacy Policy",
    description:
      "See what meet-ups and other events we might be planning near you.",
    href: "/privacy-policy",
    icon: CalendarIcon,
  },
  {
    name: "Security",
    description: "Understand how we take your privacy seriously.",
    href: "#",
    icon: ShieldCheckIcon,
  },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Header() {
  const [isButtonClicked, setIsButtonClicked] = useState(false);
  return (
    <Popover className="relative bg-black z-20">
      <PopNotif togglePopNotif={isButtonClicked} text={"App Realeasing Soon"} />
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex justify-between items-center z-20   py-6 md:justify-start md:space-x-10">
          <div className="flex justify-start lg:w-0 lg:flex-1">
            <Link to="/">
              <a href="#">
                <span className="sr-only">Workflow</span>
                <img
                  className="h-8 w-auto sm:h-10"
                  src={require("../assets/logo.png")}
                  alt=""
                />
              </a>
            </Link>
          </div>

          <div className="-mr-2 -my-2 md:hidden">
            <Popover.Button className="bg-black rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-orange-500">
              <span className="sr-only">Open menu</span>
              <MenuIcon className="h-6 w-6" aria-hidden="true" />
            </Popover.Button>
          </div>
          <Popover.Group as="nav" className="hidden md:flex space-x-10">
            <Link to={"/about-us"}>
              <a
                href="#"
                className="text-base font-medium text-gray-500 hover:text-white"
              >
                About us
              </a>
            </Link>
            <Link to={"/our-team"}>
              <a
                href="#"
                className="text-base font-medium text-gray-500 hover:text-white"
              >
                Our Team
              </a>
            </Link>
            <Link to={"/contact-us"}>
              <a
                href="#"
                className="text-base font-medium text-gray-500 hover:text-white"
              >
                Contact us
              </a>
            </Link>
            <Popover className="relative">
              {({ open }) => (
                <>
                  <Popover.Button
                    className={classNames(
                      open ? "text-white" : "text-gray-500",
                      "group bg-black rounded-md inline-flex items-center text-base font-medium hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500"
                    )}
                  >
                    <span>More</span>
                    <ChevronDownIcon
                      className={classNames(
                        open ? "text-gray-600" : "text-white",
                        "ml-2 h-5 w-5 group-hover:text-white"
                      )}
                      aria-hidden="true"
                    />
                  </Popover.Button>

                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-200"
                    enterFrom="opacity-0 translate-y-1"
                    enterTo="opacity-100 translate-y-0"
                    leave="transition ease-in duration-150"
                    leaveFrom="opacity-100 translate-y-0"
                    leaveTo="opacity-0 translate-y-1"
                  >
                    <Popover.Panel className="absolute z-10 left-1/2 transform -translate-x-1/2 mt-3 px-2 w-screen max-w-md sm:px-0">
                      <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
                        <div className="relative grid gap-6 bg-gray-800 px-5 py-6 sm:gap-8 sm:p-8">
                          {resources.map((item) => (
                            <a
                              key={item.name}
                              href={item.href}
                              className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50"
                            >
                              <item.icon
                                className="flex-shrink-0 h-6 w-6 text-orange-600"
                                aria-hidden="true"
                              />
                              <div className="ml-4">
                                <p className="text-base font-medium text-gray-300">
                                  {item.name}
                                </p>
                                <p className="mt-1 text-sm text-gray-500">
                                  {item.description}
                                </p>
                              </div>
                            </a>
                          ))}
                        </div>
                      </div>
                    </Popover.Panel>
                  </Transition>
                </>
              )}
            </Popover>
          </Popover.Group>
          <div
            onClick={() => setIsButtonClicked(true)}
            className="hidden md:flex items-center justify-end md:flex-1 lg:w-0"
          >
            <a className="ml-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-orange-400 hover:bg-orange-700">
              Download App
            </a>
          </div>
        </div>
      </div>

      <Transition
        as={Fragment}
        enter="duration-200 ease-out"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="duration-100 ease-in"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
      >
        <Popover.Panel
          focus
          className="absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden"
        >
          <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-gray-800 divide-y-2 divide-gray-100">
            <div className="pt-5 pb-6 px-5">
              <div className="flex items-center justify-between">
                <div>
                  <img
                    className="h-8 w-auto"
                    src={require("../assets/logo.png")}
                    alt="Workflow"
                  />
                </div>
                <div className="-mr-2">
                  <Popover.Button className="bg-orange-400 rounded-md p-2 inline-flex items-center justify-center text-gray-800 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-orange-500">
                    <span className="sr-only">Close menu</span>
                    <XIcon className="h-6 w-6" aria-hidden="true" />
                  </Popover.Button>
                </div>
              </div>
              <div className="mt-6">
                <nav className="grid gap-y-8">
                  {solutions.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="-m-3 p-3 flex items-center rounded-md hover:bg-gray-500"
                    >
                      <item.icon
                        className="flex-shrink-0 h-6 w-6 text-orange-600"
                        aria-hidden="true"
                      />
                      <span className="ml-3 text-base font-medium text-white">
                        {item.name}
                      </span>
                    </a>
                  ))}
                </nav>
              </div>
            </div>
            <div className="py-6 px-5 space-y-6">
              <div className="grid grid-cols-2 gap-y-4 gap-x-8">
                <a
                  href="/about-us"
                  className="text-base font-medium text-gray-300 hover:text-white"
                >
                  About us
                </a>

                <Link to={"/our-team"}>
                  <a
                    href="#"
                    className="text-base font-medium text-gray-300 hover:text-white"
                  >
                    Our Team
                  </a>
                </Link>
                <Link to={"/contact-us"}>
                  <a
                    href="#"
                    className="text-base font-medium text-gray-300 hover:text-white"
                  >
                    Contact us
                  </a>
                </Link>

                {resources.map((item) => (
                  <Link to={item.href}>
                    <a
                      key={item.name}
                      href={item.href}
                      className="text-base font-medium text-gray-300 hover:text-gray-700"
                    >
                      {item.name}
                    </a>
                  </Link>
                ))}
              </div>
              <div onClick={() => setIsButtonClicked(true)}>
                <a
                  href="#"
                  className="w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-orange-600 hover:bg-orange-700"
                >
                  Download App
                </a>
              </div>
            </div>
          </div>
        </Popover.Panel>
      </Transition>
    </Popover>
  );
}
