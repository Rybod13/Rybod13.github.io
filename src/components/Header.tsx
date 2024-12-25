import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="bg-gradient-to-r from-twist-teal to-twist-green p-4">
        <div className="max-w-screen-xl mx-auto flex justify-between items-center">
          <Link to="/" className="text-white text-2xl font-bold">
            Twist
          </Link>
          <div className="space-x-2">
            <Button
              variant="ghost"
              className="text-white hover:text-white hover:bg-white/20"
              asChild
            >
              <Link to="/login">Log in</Link>
            </Button>
            <Button
              variant="outline"
              className="text-white hover:text-white border-white hover:bg-white/20"
              asChild
            >
              <Link to="/signup">Sign up</Link>
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;