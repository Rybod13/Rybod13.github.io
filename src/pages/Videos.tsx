import { Card } from "@/components/ui/card";
import Header from "@/components/Header";
import Navigation from "@/components/Navigation";
import { useAuth } from "@/contexts/AuthContext";
import { Link } from "react-router-dom";

const Videos = () => {
  const { isAuthenticated } = useAuth();

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Header />
        <main className="pt-20 pb-24 px-4">
          <div className="max-w-screen-xl mx-auto">
            <Card className="p-6 text-center space-y-4 animate-fade-in">
              <h2 className="text-xl font-semibold">Please log in to view videos</h2>
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
        <div className="max-w-screen-xl mx-auto">
          <Card className="p-6 text-center animate-fade-in">
            <h2 className="text-xl font-semibold">No videos available</h2>
            <p className="text-gray-600 mt-2">Start creating and sharing your videos!</p>
          </Card>
        </div>
      </main>
      <Navigation />
    </div>
  );
};

export default Videos;