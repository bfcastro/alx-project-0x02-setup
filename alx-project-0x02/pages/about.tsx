import Head from "next/head";
import Header from "@/components/layout/Header";
import Button from "@/components/common/Button";

export default function AboutPage() {
  return (
    <>
      <Head>
        <title>About | ALX Project</title>
      </Head>
      <Header />
      <main className="flex flex-col items-center justify-center min-h-screen bg-gray-50 p-8 space-y-6">
        <h1 className="text-4xl font-bold text-purple-600 mb-6">About Page</h1>
        <p className="text-lg text-gray-700 mb-6">
          This project demonstrates reusable components in Next.js with
          TypeScript and Tailwind CSS.
        </p>

        <div className="flex space-x-4">
          <Button label="Small Button" size="small" shape="rounded-sm" />
          <Button label="Medium Button" size="medium" shape="rounded-md" />
          <Button label="Large Button" size="large" shape="rounded-full" />
        </div>
      </main>
    </>
  );
}