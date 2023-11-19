export default function FormSectionTitle({ title }: { title: string }) {
  const formattedTitle = title.toUpperCase();
  return (
    <>
      <p className="text-xs text-darkGrey">{formattedTitle}</p>
      <hr className="text-lightGrey" />
    </>
  );
}
