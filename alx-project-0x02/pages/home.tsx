import Head from "next/head";
import Header from "../components/layout/Header";

export default function HomePage() {
  return (
    <>
      <Head>
        <title>Home | ALX Project</title>
      </Head>
      <Header />
      <main className="flex flex-col items-center justify-center min-h-screen bg-gray-50">
        <h1 className="text-4xl font-bold text-green-600">Home Page</h1>
        <p className="mt-4 text-lg text-gray-700">
          Welcome to the Home page of ALX Project
        </p>
      </main>
    </>
  );
}