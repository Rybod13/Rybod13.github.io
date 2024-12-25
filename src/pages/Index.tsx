import { Card } from "@/components/ui/card";
import Header from "@/components/Header";
import Navigation from "@/components/Navigation";

const Index = () => {
  const posts = [
    {
      id: 1,
      title: "Welcome to Twist!",
      content: "A new way to connect, share and watch together.",
      type: "announcement",
    },
    {
      id: 2,
      title: "Live Streaming Now Available",
      content: "Start your first stream today and connect with your audience.",
      type: "feature",
    },
    {
      id: 3,
      title: "Join the Community",
      content: "Create an account to start posting and interacting with others.",
      type: "community",
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
              <p className="text-gray-600">{post.content}</p>
              <div className="mt-4">
                <span className="inline-block bg-twist-teal/10 text-twist-teal px-3 py-1 rounded-full text-sm">
                  {post.type}
                </span>
              </div>
            </Card>
          ))}
        </div>
      </main>
      <Navigation />
    </div>
  );
};

export default Index;