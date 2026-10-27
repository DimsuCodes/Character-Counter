// components/TextInput/TextInput.tsx
import type { ChangeEvent } from "react";
import type { TextInputProps } from "../../types";

export default function TextInput({ onTextChange, placeholder, initialValue }: TextInputProps) {
  const handleChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    onTextChange(e.target.value);
  };

  return (
    <textarea
      aria-label="Text to analyze"
      className="w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
      placeholder={placeholder}
      defaultValue={initialValue}
      onChange={handleChange}
      rows={6}
    />
  );
}