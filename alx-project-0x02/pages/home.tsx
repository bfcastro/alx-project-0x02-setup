import Head from "next/head";
import Header from "@/components/layout/Header";
import Card from "@/components/common/Card";
import PostModal from "@/components/common/PostModal";
import { useState } from "react";

type Post = {
  title: string;
  content: string;
};

export default function HomePage() {
  const [posts, setPosts] = useState<Post[]>([
    { title: "Next.js Setup", content: "This project was scaffolded with Next.js, TypeScript, and Tailwind CSS." },
    { title: "Reusable Components", content: "The Card component demonstrates how to use props for flexibility." },
    { title: "ALX Project", content: "Learning to structure projects with best practices and clean code." },
  ]);

  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleAddPost = (title: string, content: string) => {
    setPosts([...posts, { title, content }]);
  };

  return (
    <>
      <Head>
        <title>Home | ALX Project</title>
      </Head>
      <Header />

      <main className="flex flex-col items-center justify-center min-h-screen bg-gray-50 p-8 space-y-6">
        <h1 className="text-4xl font-bold text-green-600 mb-6">Home Page</h1>

        {/* Button to open modal */}
        <button
          onClick={() => setIsModalOpen(true)}
          className="mb-6 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
        >
          + Add Post
        </button>

        {/* Modal */}
        <PostModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          onSubmit={handleAddPost}
        />

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {posts.map((post, index) => (
            <Card key={index} title={post.title} content={post.content} />
          ))}
        </div>
      </main>
    </>
  );
}