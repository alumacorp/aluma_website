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

export default function PrivacyPolicy() {
  return (
    <div className="relative bg-black overflow-hidden">
      <div className="max-w-7xl mx-auto ">
        <div className="flex-1 min-w-0 mb-10 p-10">
          <h2 className="text-6xl mt-10 font-bold leading-15 text-gray-600 ">
            Privacy Policy
          </h2>
          <p className="mt-10 text-xl leading-7 text-gray-500">
            We view protection of your privacy as a very important principle. We
            understand clearly that you and your Personal Information is one of
            our most important assets. We store and process your Information
            including any sensitive financial information collected as defined
            under the Information Technology Act, 2000 and Rules there under. We
            may share personal information with our other corporate entities and
            affiliates.
          </p>
          <h1 className="mt-10 text-xl leading-7 text-gray-500">
            Please note that we may disclose information about you to third
            parties or government authorities if we believe that such a
            disclosure is reasonably necessary to:
          </h1>
          <div className="flex flex-row align-center m-5">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="gray"
              strokeWidth={3}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              />
            </svg>
            <p className="text-gray-400 font-bold ml-2">
              Take actions regarding suspected illegal activities
            </p>
          </div>
          <div className="flex flex-row align-center m-5">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="gray"
              strokeWidth={3}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              />
            </svg>
            <p className="text-gray-400 font-bold ml-2">
              Enforce or apply our Terms and Conditions
            </p>
          </div>
          <div className="flex flex-row align-center m-5">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="gray"
              strokeWidth={3}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              />
            </svg>
            <p className="text-gray-400 font-bold ml-2">
              Comply with legal process or other government inquiry, such as a
              search warrant, subpoena, statute, judicial proceeding, or other
              legal process/notice served on us
            </p>
          </div>
          <div className="flex flex-row align-center m-5">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="gray"
              strokeWidth={3}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              />
            </svg>
            <p className="text-gray-400 font-bold ml-2">
              Protect our rights, reputation, and property, or that of our
              users, affiliates, or the general public
            </p>
          </div>
          <p className="mt-10 text-xl leading-7 text-gray-500">
            We and our affiliates will share/sell some or all of your personal
            information with another business entity should we (or our assets)
            plan to merge with, or be acquired by that business entity, or
            re-organization, amalgamation, restructuring of business. We have
            developed this Privacy Policy to protect Your personal/financial
            information and keep it confidential. By visiting Our BARBA
            platform, you are accepting and consenting to the practices
            described in this Privacy Policies. The following Privacy Policy and
            Cookie Policy outlines the information we may process and how we may
            use that information to better serve you while using our
            BARBAplatform.
          </p>
          <p className="mt-10 text-xl leading-7 text-gray-500">
            Third Party. At times we may tie-up with third parties, brand owners
            or other partners and make available certain offers, incentives or
            events or special schemes. In such instances, your personal
            information may be shared with such third parties and/or may become
            available to them or be disclosed to them, such third parties may
            have their own applicable privacy rules and We shall not be liable
            for the use or misuse of Your information by such third parties.
          </p>
          <p className="mt-10 text-xl leading-7 text-gray-500">
            Note: We only collect your Personal Information to conduct our
            business and to enable us to deliver and improve our services. We do
            not for any reason whatsoever sell your Correspondence Information
            to any third party.
          </p>
        </div>
      </div>
    </div>
  );
}
