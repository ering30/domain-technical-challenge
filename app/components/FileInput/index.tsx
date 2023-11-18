export type FileInputProps = {
  id: string;
};

export default function FileInput({ id }: FileInputProps) {
  return (
    <>
      <label htmlFor={id} className="bg-gray-500 text-white w-[200px] py-3 px-10 place-self-center" tabIndex={0}>
        Upload Avatar
      </label>
      <input type="file" accept="image/*" id={id} hidden className="hidden"/>
    </>
  );
}
