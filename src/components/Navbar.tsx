import { Search, ShoppingCart, User, MapPin, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";

const Navbar = () => {
  const [location, setLocation] = useState("Bengaluru");

  return (
    <nav className="sticky top-0 z-50 bg-background border-b shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 gap-4">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 flex-shrink-0">
            <span className="text-2xl font-bold text-primary">FreshCuts</span>
          </Link>

          {/* Location Selector - Desktop */}
          <Button 
            variant="ghost" 
            className="hidden md:flex items-center gap-2 text-sm hover:bg-muted/50"
          >
            <MapPin className="h-4 w-4 text-primary" />
            <div className="text-left">
              <div className="font-medium">{location}</div>
              <div className="text-xs text-muted-foreground">Detecting Location</div>
            </div>
            <ChevronDown className="h-4 w-4 text-muted-foreground" />
          </Button>

          {/* Search Bar - Hidden on mobile */}
          <div className="hidden md:flex flex-1 max-w-xl">
            <div className="relative w-full">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
              <Input
                type="search"
                placeholder="Search for any delicious product"
                className="pl-10 w-full bg-muted/30 border-muted focus:bg-background"
              />
            </div>
          </div>

          {/* Right Actions */}
          <div className="flex items-center gap-2 flex-shrink-0">
            <Button variant="ghost" asChild className="hidden md:flex gap-2">
              <Link to="/categories">
                <span className="text-sm font-medium">Categories</span>
              </Link>
            </Button>
            <Button variant="ghost" asChild className="hidden md:flex gap-2">
              <Link to="/profile">
                <User className="h-5 w-5" />
                <span className="text-sm font-medium">Login</span>
              </Link>
            </Button>
            <Button variant="ghost" size="icon" asChild className="relative">
              <Link to="/cart">
                <ShoppingCart className="h-5 w-5" />
                <span className="absolute -top-1 -right-1 h-4 w-4 rounded-full bg-primary text-primary-foreground text-xs flex items-center justify-center">
                  0
                </span>
              </Link>
            </Button>
          </div>
        </div>

        {/* Mobile Search */}
        <div className="md:hidden pb-3">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
            <Input
              type="search"
              placeholder="Search for any delicious product"
              className="pl-10 w-full bg-muted/30 border-muted"
            />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
