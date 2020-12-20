import Head from "next/head";

export default function Home() {
  return (
    <div className="w-screen h-screen">
      <Head>
        <title>Chiranjibi Poudyal</title>
      </Head>

      <main className="w-full h-full bg-brown-100 ">
        <div
          className="object-cover w-full h-full bg-no-repeat bg-cover"
          style={{ backgroundImage: "url('./under_construction.svg')" }}
        >
          <div className="flex items-center justify-center w-full h-full ">
            <h1 className="text-4xl font-bold text-brown-900">
              Site under Construction
            </h1>
          </div>
        </div>
      </main>
    </div>
  );
}
