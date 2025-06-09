"use client";
import { useState } from "react";
import { Text } from "./components/text";

export default function Home() {
  const [text, setText] = useState("");
  const [textFromWebsite, setTextFromWebsite] = useState("");
  // const [result, setResult] = useState<string[]>([]);
  const [existText, setExistText] = useState<string[]>([]);
  const [notExistText, setNotExistText] = useState<string[]>([]);

  const checkText = () => {
    const textFromWebsiteArray = textFromWebsite.split("\n");
    const textArray = text.split("\n");

    const existTextArray = [];
    const notExistTextArray = [];

    for (let idx = 0; idx < textArray.length; idx++) {
      if (textFromWebsiteArray.includes(textArray[idx])) {
        existTextArray.push(textArray[idx]);
      } else {
        notExistTextArray.push(textArray[idx]);
      }
    }
    setExistText(existTextArray);
    setNotExistText(notExistTextArray);
  };

  return (
    <div className="p-4">
      <div className="grid grid-cols-2 gap-2">
        <div>
          <label
            htmlFor="message"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Text lấy từ file check
          </label>
          <textarea
            id="message"
            rows={10}
            className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Paste text..."
            value={text}
            onChange={(e) => setText(e.target.value)}
          ></textarea>
        </div>
        <div>
          <label
            htmlFor="message"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Text lấy từ website
          </label>
          <textarea
            id="message"
            rows={10}
            className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Paste text..."
            value={textFromWebsite}
            onChange={(e) => setTextFromWebsite(e.target.value)}
          ></textarea>
        </div>
      </div>
      <button
        type="button"
        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 cursor-pointer my-2"
        onClick={checkText}
      >
        Kiểm tra
      </button>
      <div className="grid grid-cols-2 gap-2 divide-x">
        <div>
          <h2>Những text không tồn tại trong website:</h2>
          <div className="flex flex-col gap-2">
            {notExistText.map((item, index) => (
              <Text key={index} text={item} />
            ))}
          </div>
        </div>
        <div>
          <h2>Những text tồn tại trong website:</h2>
          <div className="flex flex-col gap-2">
            {existText.map((item, index) => (
              <Text key={index} text={item} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
