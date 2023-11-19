import Form from "./components/Form";
import Preview from "./components/Preview";

export default function Home() {
  return (
    <main className="">
      <div className="grid grid-rows-2 lg:grid-cols-2">
        <div className="builder px-8 py-4 place-self-center">
          <h1 className="text-3xl my-4 font-bold">hCard Builder</h1>
          <Form />
        </div>
        <div className="preview px-8 py-4 bg-gray-200">
          <Preview />
        </div>
      </div>
    </main>
  );
}
