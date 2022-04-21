import React, { useEffect, useState } from "react";

export default function PopNotif({ text, togglePopNotif }) {
  const [isButtonClicked, setIsButtonClicked] = useState(togglePopNotif);
  useEffect(() => setTimeout(() => setIsButtonClicked(false), 3000), []);
  return isButtonClicked ? (
    <div
      class="flex p-4 mb-4 text-sm text-orange-700 bg-orange-100 rounded-lg dark:bg-orange-200 dark:text-orange-800"
      role="alert"
    >
      <svg
        class="inline flex-shrink-0 mr-3 w-5 h-5"
        fill="currentColor"
        viewBox="0 0 20 20"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill-rule="evenodd"
          d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
          clip-rule="evenodd"
        ></path>
      </svg>
      <div>
        <span class="font-medium">Info alert!</span>
        {text}
      </div>
    </div>
  ) : null;
}
