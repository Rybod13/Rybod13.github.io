import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Navigation from "@/components/Navigation";
import { Settings, Edit, Image, Video, FileText, BadgeCheck } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const Profile = () => {
  // TODO: Replace with actual auth state
  const isAuthenticated = false;
  const username = ""; // Will come from auth
  const isVerifiedTwist = username.toLowerCase() === "twist";

  const userStats = {
    followers: 0,
    following: 0,
    posts: 0,
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Header />
        <main className="pt-20 pb-24 px-4">
          <div className="max-w-screen-xl mx-auto">
            <Card className="p-6 text-center space-y-4 animate-fade-in">
              <h2 className="text-xl font-semibold">Please log in to edit your profile</h2>
              <div className="space-y-2">
                <p>
                  <Link to="/signup" className="text-twist-green hover:underline">
                    Don't have an account? Sign up
                  </Link>
                </p>
                <p>
                  <Link to="/login" className="text-gray-600 hover:underline">
                    Have an account? Log in
                  </Link>
                </p>
              </div>
            </Card>
          </div>
        </main>
        <Navigation />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="pt-20 pb-24 px-4">
        <div className="max-w-screen-xl mx-auto space-y-6">
          <Card className="p-6 animate-fade-in">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center space-x-4">
                <div className="w-20 h-20 rounded-full bg-gradient-to-r from-twist-teal to-twist-green flex items-center justify-center text-white text-2xl font-bold">
                  {username.charAt(0).toUpperCase()}
                </div>
                <div className="flex items-center gap-2">
                  <h1 className="text-2xl font-bold">{username}</h1>
                  {isVerifiedTwist && (
                    <BadgeCheck className="w-6 h-6 text-blue-500" />
                  )}
                  <p className="text-gray-600">@{username.toLowerCase()}</p>
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