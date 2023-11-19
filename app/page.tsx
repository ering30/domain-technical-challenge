import Form from "./components/Form";
import Preview from "./components/Preview";

export default function Home() {
  return (
    <main className="min-h-screen">
      <div className="h-full grid grid-rows-2 lg:grid-cols-2 ">
        <div className="builder w-full px-4 lg:px-8 py-4 place-self-center flex justify-center">
          <Form />
        </div>
        <div className="preview h-[400px] lg:h-full lg:px-8 lg:py-4 bg-lightGrey">
          <Preview />
        </div>
      </div>
    </main>
  );
}
