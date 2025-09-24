import React from "react";
import { PostProps } from "@/interfaces";

const PostCard: React.FC<PostProps> = ({ id, title, body, userId }) => {
  return (
    <div className="border rounded-lg p-4 shadow-sm bg-white mb-4">
      <h2 className="text-xl font-semibold mb-2">{title}</h2>
      <p className="text-gray-700 mb-3">{body}</p>
      <div className="text-sm text-gray-500">
        <span>Post ID: {id}</span> | <span>User ID: {userId}</span>
      </div>
    </div>
  );
};

export default PostCard;