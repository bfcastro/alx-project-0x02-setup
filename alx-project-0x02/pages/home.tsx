import Head from "next/head";
import Header from "@/components/layout/Header";
import Card from "@/components/common/Card";

export default function HomePage() {
  return (
    <>
      <Head>
        <title>Home | ALX Project</title>
      </Head>
      <Header />
      <main className="flex flex-col items-center justify-center min-h-screen bg-gray-50 p-8 space-y-6">
        <h1 className="text-4xl font-bold text-green-600 mb-6">Home Page</h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          <Card
            title="Next.js Setup"
            content="This project was scaffolded with Next.js, TypeScript, and Tailwind CSS."
          />
          <Card
            title="Reusable Components"
            content="The Card component demonstrates how to use props for flexibility."
          />
          <Card
            title="ALX Project"
            content="Learning to structure projects with best practices and clean code."
          />
        </div>
      </main>
    </>
  );
}