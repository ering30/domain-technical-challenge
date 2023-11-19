import { ChangeEvent } from "react";

export type FileInputProps = {
  id: string;
  name: string;
  title: string;
  handleChangeFunction: (event: ChangeEvent<HTMLInputElement>) => void;
};

export default function FileInput({ id, name, title, handleChangeFunction }: FileInputProps) {
  return (
    <>
      <label htmlFor={id} className="bg-darkGrey text-white w-[200px] py-3 px-10 place-self-center rounded hover:bg-lightGrey" tabIndex={0}>
        {title}
        <input type="file" accept="image/*" id={id} name={name} hidden onChange={handleChangeFunction}/>
      </label>
      
    </>
  );
}
