import { ChangeEvent } from "react";


export type FileInputProps = {
  id: string;
  handleChange: (event: HTMLInputElement) => void;
};

export default function FileInput({ id, handleChange }: FileInputProps) {
  return (
    <>
      <label htmlFor={id} className="bg-gray-500 text-white w-[200px] py-3 px-10" tabIndex={0}>
        Upload Avatar
      </label>
      <input type="file" accept="image/*" id={id} hidden className="hidden" onChange={() => handleChange}/>
    </>
  );
}
