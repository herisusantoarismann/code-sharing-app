"use client";
import React from "react";

export interface Option {
  value: string;
  label: string;
}

interface IProps {
  options: Option[];
  theme?: string;
  value?: string;
  onChange?: React.ChangeEventHandler<HTMLSelectElement>;
}

const Select = ({ options, theme = "light", value, onChange }: IProps) => {
  return (
    <select
      className={`w-fit bg-transparent border border-gray-300 text-xs ${
        theme === "vs-dark" ? "text-gray-200 placeholder-gray-400" : ""
      } rounded-lg block p-2.5`}
      value={value}
      onChange={onChange}
    >
      {options.map((option: Option, index: number) => {
        return (
          <option
            value={option.value}
            className={`${theme === "vs-dark" ? "text-black" : ""}`}
            key={index}
          >
            {option.label}
          </option>
        );
      })}
    </select>
  );
};

export default Select;
