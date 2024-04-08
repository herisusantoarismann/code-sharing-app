"use client";
import React, { useState } from "react";
import Editor from "@monaco-editor/react";

import Select from "./Select";
import { languageOptions, themeOptions } from "@/utils/code-editor";

const CodeEditor = () => {
  const [lang, setLang] = useState<string>("javascript");
  const [theme, setTheme] = useState<string>("vs");

  const htmlCode = `<html>
  <head>
    <title>HTML Sample</title>
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <style type="text/css">
      h1 {
        color: #CCA3A3;
      }
    </style>
    <script type="text/javascript">
      alert("I am a sample... visit devChallengs.io for more projects");
    </script>
  </head>
  <body>
    <h1>Heading No.1</h1>
    <input disabled type="button" value="Click me" />
  </body>
</html>`;

  const onChangeLang = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setLang(e.target.value);
  };

  const onChangeTheme = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setTheme(e.target.value);
  };

  return (
    <div
      className={`relative mt-24 flex-1 space-y-8 ${
        theme === "vs-dark" ? "bg-[#1e1e1e]" : "bg-white"
      } shadow rounded-lg overflow-hidden`}
    >
      <Editor
        height="60vh"
        theme={theme}
        language={lang}
        defaultValue={htmlCode}
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
      </div>
    </div>
  );
};

export default CodeEditor;
