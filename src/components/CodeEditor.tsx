"use client";
import React, { useState } from "react";
import Editor from "@monaco-editor/react";

import Select from "./Select";
import { languageOptions } from "@/utils/code-editor";

const CodeEditor = () => {
  const [lang, setLang] = useState<string>("javascript");
  const [theme, setTheme] = useState<string>("light");

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

  return (
    <div className="relative mt-24 flex-1 space-y-8 shadow rounded-lg overflow-hidden">
      <Editor
        height="90vh"
        defaultLanguage={lang}
        defaultValue={htmlCode}
        className="pb-20"
      />
      <div className="absolute bottom-4 left-4 right-4 flex justify-between items-center gap-6">
        <div className="flex-1 flex items-center gap-3">
          <Select
            options={languageOptions}
            theme={theme}
            onChange={(event: React.ChangeEvent<HTMLSelectElement>) =>
              onChangeLang(event)
            }
          />
        </div>
      </div>
    </div>
  );
};

export default CodeEditor;
