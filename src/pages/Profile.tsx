import { User, MapPin, Package, Heart, LogOut, Settings } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import BottomNav from "@/components/BottomNav";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

const Profile = () => {
  const user = {
    name: "Guest User",
    email: "guest@freshcuts.com",
    isLoggedIn: false,
  };

  const menuItems = [
    { icon: Package, label: "My Orders", href: "/orders" },
    { icon: MapPin, label: "Saved Addresses", href: "/addresses" },
    { icon: Heart, label: "Wishlist", href: "/wishlist" },
    { icon: Settings, label: "Settings", href: "/settings" },
  ];

  return (
    <div className="min-h-screen bg-background pb-20 md:pb-0">
      <Navbar />

      <div className="container mx-auto px-4 py-6 max-w-2xl">
        {/* Profile Header */}
        <div className="bg-card rounded-lg p-6 shadow-sm mb-6">
          <div className="flex items-center gap-4 mb-4">
            <div className="h-16 w-16 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center">
              <User className="h-8 w-8 text-primary-foreground" />
            </div>
            <div className="flex-1">
              {user.isLoggedIn ? (
                <>
                  <h2 className="text-xl font-bold text-foreground">{user.name}</h2>
                  <p className="text-muted-foreground">{user.email}</p>
                </>
              ) : (
                <>
                  <h2 className="text-xl font-bold text-foreground mb-2">Welcome to FreshCuts</h2>
                  <Button asChild>
                    <Link to="/auth">Login / Sign Up</Link>
                  </Button>
                </>
              )}
            </div>
          </div>
        </div>

        {/* Menu Items */}
        <div className="bg-card rounded-lg shadow-sm overflow-hidden">
          {menuItems.map((item, index) => (
            <div key={item.label}>
              <Link
                to={item.href}
                className="flex items-center gap-4 p-4 hover:bg-muted/50 transition-colors"
              >
                <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <item.icon className="h-5 w-5 text-primary" />
                </div>
                <span className="flex-1 font-medium text-foreground">{item.label}</span>
                <span className="text-muted-foreground">›</span>
              </Link>
              {index < menuItems.length - 1 && <Separator />}
            </div>
          ))}
        </div>

        {/* Logout Button */}
        {user.isLoggedIn && (
          <Button
            variant="outline"
            className="w-full mt-6 text-destructive hover:text-destructive"
          >
            <LogOut className="h-4 w-4 mr-2" />
            Logout
          </Button>
        )}

        {/* App Info */}
        <div className="mt-6 text-center text-sm text-muted-foreground">
          <p>FreshCuts v1.0.0</p>
          <p className="mt-2">
            <Link to="/terms" className="hover:text-foreground">Terms of Service</Link>
            {" • "}
            <Link to="/privacy" className="hover:text-foreground">Privacy Policy</Link>
          </p>
        </div>
      </div>

      <BottomNav />
    </div>
  );
};

export default Profile;
