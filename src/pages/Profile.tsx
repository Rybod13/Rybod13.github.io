import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Navigation from "@/components/Navigation";
import { Settings, Edit, Image, Video, FileText } from "lucide-react";

const Profile = () => {
  const userStats = {
    followers: 1234,
    following: 567,
    posts: 89,
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="pt-20 pb-24 px-4">
        <div className="max-w-screen-xl mx-auto space-y-6">
          <Card className="p-6 animate-fade-in">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center space-x-4">
                <div className="w-20 h-20 rounded-full bg-gradient-to-r from-twist-teal to-twist-green flex items-center justify-center text-white text-2xl font-bold">
                  U
                </div>
                <div>
                  <h1 className="text-2xl font-bold">Username</h1>
                  <p className="text-gray-600">@username</p>
                </div>
              </div>
              <Button variant="outline" className="flex items-center space-x-2">
                <Settings className="w-4 h-4" />
                <span>Edit Profile</span>
              </Button>
            </div>
            <div className="grid grid-cols-3 gap-4 text-center mb-6">
              <div>
                <div className="font-bold text-xl">{userStats.followers}</div>
                <div className="text-gray-600">Followers</div>
              </div>
              <div>
                <div className="font-bold text-xl">{userStats.following}</div>
                <div className="text-gray-600">Following</div>
              </div>
              <div>
                <div className="font-bold text-xl">{userStats.posts}</div>
                <div className="text-gray-600">Posts</div>
              </div>
            </div>
            <p className="text-gray-600 mb-6">
              Welcome to my Twist profile! I love sharing content and connecting with others.
            </p>
            <div className="grid grid-cols-3 gap-4">
              <Button variant="outline" className="flex items-center justify-center space-x-2">
                <Image className="w-4 h-4" />
                <span>Photos</span>
              </Button>
              <Button variant="outline" className="flex items-center justify-center space-x-2">
                <Video className="w-4 h-4" />
                <span>Videos</span>
              </Button>
              <Button variant="outline" className="flex items-center justify-center space-x-2">
                <FileText className="w-4 h-4" />
                <span>Posts</span>
              </Button>
            </div>
          </Card>
        </div>
      </main>
      <Navigation />
    </div>
  );
};

export default Profile;