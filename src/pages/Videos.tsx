import { Card } from "@/components/ui/card";
import Header from "@/components/Header";
import Navigation from "@/components/Navigation";

const Videos = () => {
  const videos = [
    {
      id: 1,
      title: "Getting Started with Twist",
      thumbnail: "/placeholder.svg",
      duration: "5:30",
      author: "TwistTeam",
      views: "1.2k",
    },
    {
      id: 2,
      title: "Live Streaming Tutorial",
      thumbnail: "/placeholder.svg",
      duration: "10:15",
      author: "StreamPro",
      views: "856",
    },
    {
      id: 3,
      title: "Community Guidelines",
      thumbnail: "/placeholder.svg",
      duration: "3:45",
      author: "TwistModerator",
      views: "2.3k",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="pt-20 pb-24 px-4">
        <div className="max-w-screen-xl mx-auto space-y-4">
          {videos.map((video, index) => (
            <Card
              key={video.id}
              className="p-4 hover:shadow-lg transition-shadow animate-fade-in"
              style={{
                animationDelay: `${index * 150}ms`,
              }}
            >
              <div className="relative">
                <img
                  src={video.thumbnail}
                  alt={video.title}
                  className="w-full h-48 object-cover rounded-lg"
                />
                <span className="absolute bottom-2 right-2 bg-black/75 text-white px-2 py-1 rounded text-sm">
                  {video.duration}
                </span>
              </div>
              <div className="mt-4">
                <h2 className="text-xl font-semibold">{video.title}</h2>
                <div className="flex items-center justify-between mt-2 text-gray-600">
                  <span>{video.author}</span>
                  <span>{video.views} views</span>
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

export default Videos;