export type SubmitInputProps = {
  text: string 
}

export default function Submit({text}: SubmitInputProps) {
  return (
    <input type="submit" value={text} className="bg-blue-500 text-white w-[200px] py-3 px-10"/>
  )
}
