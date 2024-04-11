"use client";
import React, { useState } from "react";
import Editor from "@monaco-editor/react";

import Select from "./Select";
import { languageOptions, themeOptions } from "@/utils/code-editor";

interface IProps {
  code: string | undefined;
  language: string | undefined;
  theme: string | undefined;
  id?: string;
}

const CodeEditor = ({
  code,
  language = "javascript",
  theme = "vs",
  id,
}: IProps) => {
  const [showAlert, setShowAlert] = useState<boolean>(false);

  const onChangeLang = (e: React.ChangeEvent<HTMLSelectElement>) => {
    language = e.target.value;
  };

  const onChangeTheme = (e: React.ChangeEvent<HTMLSelectElement>) => {
    theme = e.target.value;
  };

  const onShare = () => {
    console.log(theme);
    console.log(code);
    console.log(language);
  };

  const onCopyLink = () => {
    setShowAlert(true);

    setTimeout(() => {
      setShowAlert(false);
    }, 3000);
  };

  return (
    <div className="mt-24">
      <div
        className={` ${
          showAlert ? "flex" : "hidden"
        } p-4 mt-4 text-sm text-blue-800 rounded-lg bg-blue-50`}
        role="alert"
      >
        <span className="font-medium">Link copied successfully</span>
      </div>
      <div
        className={`mt-2 relative flex-1 space-y-8 ${
          theme === "vs-dark" ? "bg-[#1e1e1e]" : "bg-white"
        } shadow rounded-lg overflow-hidden`}
      >
        <Editor
          height="60vh"
          theme={theme}
          language={language}
          defaultValue={code}
        />
        <div className="px-4 pb-4 flex justify-between items-center gap-6">
          <div className="flex-1 flex items-center gap-3">
            <Select
              options={languageOptions}
              theme={theme}
              onChange={(event: React.ChangeEvent<HTMLSelectElement>) =>
                onChangeLang(event)
              }
            />
            <Select
              options={themeOptions}
              theme={theme}
              onChange={(event: React.ChangeEvent<HTMLSelectElement>) =>
                onChangeTheme(event)
              }
            />
          </div>
          <div className="flex items-center gap-4">
            <div
              className={`${
                id ? "visible" : "invisible"
              } flex items-center gap-3 cursor-pointer`}
              onClick={onCopyLink}
            >
              <button>
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M7.75725 13.4142L5.63593 11.2929C4.07383 9.7308 4.07383 7.19814 5.63593 5.63604V5.63604C7.19803 4.07395 9.73069 4.07395 11.2928 5.63604L13.4141 7.75736"
                    stroke="#677489"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M14.8282 14.8285L9.17139 9.17163"
                    stroke="#677489"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M10.5858 16.2426L12.7071 18.3639C14.2692 19.926 16.8019 19.926 18.364 18.3639V18.3639C19.9261 16.8019 19.9261 14.2692 18.364 12.7071L16.2426 10.5858"
                    stroke="#677489"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </button>
              <span
                className={`${
                  theme === "vs-dark" ? "text-[#CED6E1]" : "text-black"
                } text-sm`}
              >
                .../{id?.substring(0, 10)}....
              </span>
            </div>
            <button
              className={`py-2 px-5 font-semibold flex items-center gap-2 ${
                theme === "vs-dark"
                  ? "text-[#F8FAFC] bg-[#364153] hover:bg-[#364153]/55"
                  : "text-white bg-[#406AFF] hover:bg-[#406AFF]/85"
              } rounded-full `}
              onClick={onShare}
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12.0001 9.33333C11.6062 9.33593 11.2178 9.42576 10.8628 9.59636C10.5077 9.76696 10.1949 10.0141 9.94677 10.32L6.54677 8.75333C6.70662 8.26383 6.70662 7.73616 6.54677 7.24666L9.94677 5.68C10.3478 6.16397 10.907 6.49071 11.5255 6.60255C12.1441 6.7144 12.7822 6.60415 13.3274 6.29126C13.8726 5.97838 14.2897 5.48298 14.5051 4.89249C14.7206 4.302 14.7205 3.65438 14.505 3.06393C14.2894 2.47348 13.8722 1.97816 13.327 1.66537C12.7818 1.35259 12.1436 1.24246 11.5251 1.35441C10.9065 1.46636 10.3474 1.79321 9.94646 2.27726C9.54547 2.76131 9.32835 3.37145 9.33343 3.99999C9.33544 4.15882 9.35105 4.31717 9.3801 4.47333L5.8601 6.09333C5.48482 5.72638 5.0096 5.47834 4.49397 5.38028C3.97834 5.28222 3.44525 5.33851 2.96147 5.54208C2.47769 5.74566 2.06474 6.08747 1.77437 6.5247C1.48399 6.96193 1.3291 7.47513 1.3291 8C1.3291 8.52486 1.48399 9.03806 1.77437 9.47529C2.06474 9.91252 2.47769 10.2543 2.96147 10.4579C3.44525 10.6615 3.97834 10.7178 4.49397 10.6197C5.0096 10.5217 5.48482 10.2736 5.8601 9.90666L9.3801 11.5267C9.35105 11.6828 9.33544 11.8412 9.33343 12C9.33343 12.5274 9.48983 13.043 9.78285 13.4815C10.0759 13.92 10.4923 14.2618 10.9796 14.4637C11.4669 14.6655 12.0031 14.7183 12.5203 14.6154C13.0376 14.5125 13.5128 14.2586 13.8857 13.8856C14.2587 13.5127 14.5126 13.0375 14.6155 12.5202C14.7184 12.003 14.6656 11.4668 14.4638 10.9795C14.2619 10.4922 13.9202 10.0758 13.4816 9.78274C13.0431 9.48973 12.5275 9.33333 12.0001 9.33333ZM12.0001 2.66666C12.2638 2.66666 12.5216 2.74486 12.7409 2.89137C12.9601 3.03788 13.131 3.24612 13.2319 3.48975C13.3329 3.73339 13.3593 4.00147 13.3078 4.26012C13.2564 4.51876 13.1294 4.75633 12.9429 4.9428C12.7564 5.12927 12.5189 5.25626 12.2602 5.30771C12.0016 5.35916 11.7335 5.33275 11.4899 5.23183C11.2462 5.13092 11.038 4.96002 10.8915 4.74076C10.745 4.52149 10.6668 4.2637 10.6668 3.99999C10.6668 3.64637 10.8072 3.30723 11.0573 3.05719C11.3073 2.80714 11.6465 2.66666 12.0001 2.66666V2.66666ZM4.0001 9.33333C3.73639 9.33333 3.47861 9.25513 3.25934 9.10862C3.04007 8.96211 2.86918 8.75387 2.76826 8.51024C2.66734 8.2666 2.64094 7.99852 2.69239 7.73987C2.74383 7.48123 2.87082 7.24366 3.05729 7.05719C3.24376 6.87072 3.48134 6.74373 3.73998 6.69228C3.99862 6.64083 4.26671 6.66724 4.51034 6.76816C4.75398 6.86907 4.96222 7.03997 5.10873 7.25923C5.25523 7.4785 5.33343 7.73629 5.33343 8C5.33343 8.35362 5.19296 8.69276 4.94291 8.9428C4.69286 9.19285 4.35372 9.33333 4.0001 9.33333ZM12.0001 13.3333C11.7364 13.3333 11.4786 13.2551 11.2593 13.1086C11.0401 12.9621 10.8692 12.7539 10.7683 12.5102C10.6673 12.2666 10.6409 11.9985 10.6924 11.7399C10.7438 11.4812 10.8708 11.2437 11.0573 11.0572C11.2438 10.8707 11.4813 10.7437 11.74 10.6923C11.9986 10.6408 12.2667 10.6672 12.5103 10.7682C12.754 10.8691 12.9622 11.04 13.1087 11.2592C13.2552 11.4785 13.3334 11.7363 13.3334 12C13.3334 12.3536 13.193 12.6928 12.9429 12.9428C12.6929 13.1929 12.3537 13.3333 12.0001 13.3333Z"
                  fill="#F8FAFC"
                />
              </svg>
              Share
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CodeEditor;
