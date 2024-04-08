"use client";
import React from "react";
import Editor from "@monaco-editor/react";

const CodeEditor = () => {
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

  return (
    <div className="relative mt-24 flex-1 space-y-8 shadow rounded-lg overflow-hidden">
      <Editor height="90vh" defaultLanguage="html" defaultValue={htmlCode} />
    </div>
  );
};

export default CodeEditor;
