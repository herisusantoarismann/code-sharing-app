import React from "react";
import Image from "next/image";

import Background from "@/assets/Hero-Background-notecode@2x.png";
import Logo from "@/assets/NoteCodeLogo.svg";
import { CodeEditor } from "@/components";

const CodeDetail = ({ params }: { params: { id: string } }) => {
  return (
    <div className="relative min-w-screen min-h-screen flex justify-center items-center bg-purple-600">
      <div className="absolute top-0 left-0 w-full h-full">
        <Image
          src={Background}
          alt="background-image"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="relative py-16 w-2/4 p-4 text-[#121826] Z-10">
        <div className="flex flex-col justify-center items-center gap-2 lg:gap-4">
          <Image src={Logo} style={{ objectFit: "cover" }} alt="logo" />
          <h1 className="mt-6 text-lg lg:text-4xl font-semibold">
            Create & Share
          </h1>
          <h1 className="text-lg lg:text-4xl font-semibold">
            Your Code easily
          </h1>
        </div>

        <CodeEditor />
      </div>
    </div>
  );
};

export default CodeDetail;
