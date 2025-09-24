import Head from "next/head";
import Header from "@/components/layout/Header";

export default function PostsPage() {
  return (
    <>
      <Head>
        <title>Posts | ALX Project</title>
      </Head>
      <Header />
      <main className="flex flex-col items-center justify-center min-h-screen bg-gray-50 p-8">
        <h1 className="text-4xl font-bold text-blue-600 mb-4">Posts Page</h1>
        <p className="text-lg text-gray-700">
          This is the Posts page where future blog posts or articles can be
          listed.
        </p>
      </main>
    </>
  );
}