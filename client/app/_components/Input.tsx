import React from "react";

interface InputProps {
  id: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  value: string;
  label: string;
  type?: string;
}

export default function Input({
  id,
  onChange,
  value,
  label,
  type,
}: InputProps) {
  return (
    <div className="relative">
      <input
        className="block rounded-md px-6 pt-6 pb-1 w-full text-md text-white bg-neutral-700 appearance-none focus:outline-none focus:ring-0 peer"
        id={id}
        type={type}
        value={value}
        onChange={onChange}
        placeholder=" "
      />
      <label
        htmlFor={id}
        className="absolute text-md text-zinc-50 duration-150 transform -translate-y-3 scale-100 top-4 z-10 origin-left left-6 peer-placeholder-shown::scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4"
      >
        {label}
      </label>
    </div>
  );
}
