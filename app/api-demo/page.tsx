import React, { Suspense } from "react";
import { ThumbsUp, Eye, Hash } from "lucide-react";
import { Skeleton } from "@/components/ui/skeleton";

interface Post {
  id: number;
  title: string;
  body: string;
  tags: string[];
  reactions: {
    likes: number;
    dislikes: number;
  };
  views: number;
}

interface PostsResponse {
  posts: Post[];
  total: number;
  skip: number;
  limit: number;
}

async function getPosts(): Promise<Post[]> {
  await new Promise((resolve) => setTimeout(resolve, 2000));

  try {
    const res = await fetch("https://dummyjson.com/posts?limit=12", {
      cache: "no-store",
    });

    if (!res.ok) {
      throw new Error("Failed to fetch posts");
    }

    const data: PostsResponse = await res.json();
    return data.posts;
  } catch (error) {
    console.error("Error fetching posts:", error);
    return [];
  }
}

const PostsSkeleton = () => {
  return (
    <div className="grid grid-cols-1 w-full md:grid-cols-2 lg:grid-cols-3 gap-6">
      {[...Array(6)].map((_, i) => (
        <div
          key={i}
          className="bg-white rounded-xl border w-full border-gray-200 overflow-hidden flex flex-col h-[300px]"
        >
          <div className="p-6 flex-1 flex flex-col gap-4 w-full">
            <div className="flex gap-2">
              <Skeleton className="h-5 w-16" />
              <Skeleton className="h-5 w-12" />
            </div>

            <div className="space-y-2">
              <Skeleton className="h-6 w-full" />
              <Skeleton className="h-6 w-3/4" />
            </div>

            <div className="space-y-2 flex-1">
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-2/3" />
            </div>

            <div className="pt-4 border-t border-gray-100 flex justify-between">
              <Skeleton className="h-4 w-20" />
              <Skeleton className="h-4 w-16" />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

const PostList = async () => {
  const posts = await getPosts();

  if (posts.length === 0) {
    return (
      <div className="text-center py-20">
        <h2 className="text-xl text-gray-400">Unable to load posts.</h2>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 w-full md:grid-cols-2 lg:grid-cols-3 gap-6">
      {posts.map((post) => (
        <div
          key={post.id}
          className="bg-white rounded-xl border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow duration-300 flex flex-col"
        >
          <div className="p-6 flex-1 flex flex-col">
            <div className="flex flex-wrap gap-2 mb-3">
              {post.tags.slice(0, 3).map((tag) => (
                <span
                  key={tag}
                  className="inline-flex items-center px-2 py-1 rounded-md bg-blue-50 text-blue-600 text-xs font-medium capitalize"
                >
                  <Hash size={10} className="mr-0.5" />
                  {tag}
                </span>
              ))}
            </div>

            <h3 className="text-lg font-bold text-gray-900 mb-2 line-clamp-2 leading-tight">
              {post.title}
            </h3>

            <p className="text-gray-600 text-sm line-clamp-4 mb-4 flex-1">
              {post.body}
            </p>

            <div className="flex items-center justify-between pt-4 border-t border-gray-100 mt-auto text-gray-400 text-xs font-medium">
              <div className="flex items-center space-x-3">
                <span className="flex items-center hover:text-green-600 transition-colors">
                  <ThumbsUp size={14} className="mr-1" />
                  {post.reactions.likes}
                </span>
                <span className="flex items-center hover:text-blue-600 transition-colors">
                  <Eye size={14} className="mr-1" />
                  {post.views}
                </span>
              </div>
              <button className="text-blue-600 hover:text-blue-800 flex items-center transition-colors">
                Read more
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

const ApiDemoPage = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col font-sans mt-[58px]">
      <div className="bg-white border-b border-gray-200 sticky top-[58px] z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col gap-1">
            <h1 className="text-2xl font-bold text-gray-900">Live API Demo</h1>
            <p className="text-sm text-gray-500">
              Server-side fetching from{" "}
              <code className="bg-gray-100 px-1 py-0.5 rounded text-blue-600">
                dummyjson.com/posts
              </code>
            </p>
          </div>
        </div>
      </div>

      <main className="flex-1 w-full px-4 sm:px-6 lg:px-8 py-8">
        <Suspense fallback={<PostsSkeleton />}>
          <PostList />
        </Suspense>
      </main>
    </div>
  );
};

export default ApiDemoPage;
