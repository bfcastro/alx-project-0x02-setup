import React from "react";
import PostCard from "@/components/common/PostCard";
import { PostProps } from "@/interfaces";
import Header from "@/components/layout/Header";

interface PostsPageProps {
  posts: PostProps[];
}

const PostsPage: React.FC<PostsPageProps> = ({ posts }) => {
  return (
    <div>
      <Header />
      <div className="max-w-3xl mx-auto mt-8">
        <h1 className="text-2xl font-bold mb-6">Posts</h1>
        {posts.length > 0 ? (
          posts.map((post) => (
            <PostCard
              key={post.id}
              id={post.id}
              title={post.title}
              body={post.body}
              userId={post.userId}
            />
          ))
        ) : (
          <p>No posts available.</p>
        )}
      </div>
    </div>
  );
};

//Fetch posts at build time
export async function getStaticProps() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts?_limit=5");
  const posts: PostProps[] = await res.json();

  return {
    props: {
      posts,
    },
  };
}

export default PostsPage;