import Head from "next/head";
import Header from "../components/layout/Header";

export default function AboutPage() {
  return (
    <>
      <Head>
        <title>About | ALX Project</title>
      </Head>
      <Header />
      <main className="flex flex-col items-center justify-center min-h-screen bg-gray-50">
        <h1 className="text-4xl font-bold text-purple-600">About Page</h1>
        <p className="mt-4 text-lg text-gray-700">
          This project was built with Next.js, TypeScript, and Tailwind CSS.
        </p>
      </main>
    </>
  );
}