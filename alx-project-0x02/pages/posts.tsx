import Header from "@/components/layout/Header"
import React, { useEffect, useState } from "react";
import PostCard from "@/components/common/PostCard";
import { PostProps } from "@/interfaces";
const Posts: React.FC = () => {
     const [posts, setPosts] = useState<PostProps[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts?_limit=10")
      .then((res) => res.json())
      .then((data) => {
        const formatted = data.map((post: any) => ({
          userId: post.userId,
          id: post.id,
          title: post.title,
          content: post.body,
        }));
        setPosts(formatted);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching posts:", err);
        setLoading(false);
      });
  }, []);
    return(
        <div>
            <Header/>
<div className="p-6 space-y-6">
      <h1 className="text-2xl font-bold">Posts</h1>
      {loading ? (
        <p>Loading...</p>
      ) : (
        posts.map((post) => (
          <PostCard
            key={post.id}
            userId={post.userId}
            title={post.title}
            content={post.content}
          />
        ))
      )}
    </div>
        </div>
    )
}

export default Posts