export type FormInputLabelProps = {
  labelFor: string;
  title: string;
}

export default function FormInputLabel({labelFor, title}: FormInputLabelProps) {
  const formattedTitle = title.toUpperCase();
  return (
    <label htmlFor={labelFor} className="text-sm text-navy">{formattedTitle}</label>
  )
}
