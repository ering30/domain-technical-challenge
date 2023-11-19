export type FileInputProps = {
  id: string;
  title: string;
};

export default function FileInput({ id, title }: FileInputProps) {
  return (
    <>
      <label htmlFor={id} className="bg-darkGrey text-white w-[200px] py-3 px-10 place-self-center rounded" tabIndex={0}>
        {title}
        <input type="file" accept="image/*" id={id} hidden/>
      </label>
      
    </>
  );
}
