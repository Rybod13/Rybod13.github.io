import { Home, Play, List, User } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const Navigation = () => {
  const location = useLocation();
  
  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 py-3 px-6 animate-slide-in">
      <div className="max-w-screen-xl mx-auto">
        <div className="flex justify-between items-center">
          <Link
            to="/"
            className={`flex flex-col items-center transition-colors ${
              isActive("/") ? "text-twist-teal" : "text-gray-600"
            }`}
          >
            <Home className="w-6 h-6" />
            <span className="text-xs mt-1">Home</span>
          </Link>
          <Link
            to="/videos"
            className={`flex flex-col items-center transition-colors ${
              isActive("/videos") ? "text-twist-teal" : "text-gray-600"
            }`}
          >
            <Play className="w-6 h-6" />
            <span className="text-xs mt-1">Videos</span>
          </Link>
          <Link
            to="/posts"
            className={`flex flex-col items-center transition-colors ${
              isActive("/posts") ? "text-twist-teal" : "text-gray-600"
            }`}
          >
            <List className="w-6 h-6" />
            <span className="text-xs mt-1">Posts</span>
          </Link>
          <Link
            to="/profile"
            className={`flex flex-col items-center transition-colors ${
              isActive("/profile") ? "text-twist-teal" : "text-gray-600"
            }`}
          >
            <User className="w-6 h-6" />
            <span className="text-xs mt-1">Profile</span>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;