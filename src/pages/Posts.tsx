import { Card } from "@/components/ui/card";
import Header from "@/components/Header";
import Navigation from "@/components/Navigation";
import { ThumbsUp, MessageSquare, Share2 } from "lucide-react";

const Posts = () => {
  const posts = [
    {
      id: 1,
      title: "Welcome to the Twist Community!",
      content: "Share your thoughts, connect with others, and discover amazing content.",
      author: "TwistAdmin",
      likes: 245,
      comments: 56,
      shares: 12,
    },
    {
      id: 2,
      title: "Tips for New Content Creators",
      content: "Here are some tips to help you get started with creating content on Twist.",
      author: "CreatorHub",
      likes: 189,
      comments: 34,
      shares: 8,
    },
    {
      id: 3,
      title: "Upcoming Features Announcement",
      content: "Check out what's coming next to the Twist platform!",
      author: "TwistTeam",
      likes: 567,
      comments: 89,
      shares: 45,
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="pt-20 pb-24 px-4">
        <div className="max-w-screen-xl mx-auto space-y-4">
          {posts.map((post, index) => (
            <Card
              key={post.id}
              className="p-6 hover:shadow-lg transition-shadow animate-fade-in"
              style={{
                animationDelay: `${index * 150}ms`,
              }}
            >
              <h2 className="text-xl font-semibold mb-2">{post.title}</h2>
              <p className="text-gray-600 mb-4">{post.content}</p>
              <div className="flex items-center justify-between text-sm text-gray-500">
                <span>Posted by {post.author}</span>
                <div className="flex items-center space-x-4">
                  <button className="flex items-center space-x-1 hover:text-twist-teal transition-colors">
                    <ThumbsUp className="w-4 h-4" />
                    <span>{post.likes}</span>
                  </button>
                  <button className="flex items-center space-x-1 hover:text-twist-teal transition-colors">
                    <MessageSquare className="w-4 h-4" />
                    <span>{post.comments}</span>
                  </button>
                  <button className="flex items-center space-x-1 hover:text-twist-teal transition-colors">
                    <Share2 className="w-4 h-4" />
                    <span>{post.shares}</span>
                  </button>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </main>
      <Navigation />
    </div>
  );
};

export default Posts;