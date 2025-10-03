import { ArrowRight, Leaf, Truck, Shield, Clock } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import BottomNav from "@/components/BottomNav";
import CategoryCard from "@/components/CategoryCard";
import ProductCard from "@/components/ProductCard";
import heroImage from "@/assets/hero-banner.jpg";
import chickenImage from "@/assets/category-chicken.jpg";
import muttonImage from "@/assets/category-mutton.jpg";
import seafoodImage from "@/assets/category-seafood.jpg";
import readyToCookImage from "@/assets/category-ready-to-cook.jpg";

const Index = () => {
  const categories = [
    {
      title: "Fresh Chicken",
      description: "Premium quality, farm-fresh",
      image: chickenImage,
      href: "/categories/chicken",
    },
    {
      title: "Tender Mutton",
      description: "Expertly sourced & cut",
      image: muttonImage,
      href: "/categories/mutton",
    },
    {
      title: "Fish & Seafood",
      description: "Ocean-fresh daily catch",
      image: seafoodImage,
      href: "/categories/seafood",
    },
    {
      title: "Ready to Cook",
      description: "Marinated & ready",
      image: readyToCookImage,
      href: "/categories/ready-to-cook",
    },
  ];

  const featuredProducts = [
    {
      id: "1",
      name: "Chicken Curry Cut (Small)",
      image: chickenImage,
      price: 299,
      weight: "500g",
      inStock: true,
      discount: 15,
    },
    {
      id: "2",
      name: "Fresh Mutton Curry Cut",
      image: muttonImage,
      price: 599,
      weight: "500g",
      inStock: true,
    },
    {
      id: "3",
      name: "Premium Salmon Fillet",
      image: seafoodImage,
      price: 799,
      weight: "250g",
      inStock: true,
      discount: 10,
    },
    {
      id: "4",
      name: "Tandoori Chicken (Marinated)",
      image: readyToCookImage,
      price: 399,
      weight: "500g",
      inStock: true,
    },
  ];

  const features = [
    {
      icon: Leaf,
      title: "100% Fresh",
      description: "Sourced from trusted farms",
    },
    {
      icon: Shield,
      title: "Quality Assured",
      description: "Rigorous hygiene standards",
    },
    {
      icon: Truck,
      title: "Fast Delivery",
      description: "Same-day delivery available",
    },
    {
      icon: Clock,
      title: "48-Hour Freshness",
      description: "Guaranteed freshness promise",
    },
  ];

  return (
    <div className="min-h-screen bg-background pb-20 md:pb-0">
      <Navbar />

      {/* Hero Section */}
      <section className="relative h-[500px] md:h-[600px] overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={heroImage}
            alt="Fresh premium meat selection"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/70 to-transparent" />
        </div>
        
        <div className="relative container mx-auto px-4 h-full flex items-center">
          <div className="max-w-xl">
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-4">
              Premium Fresh Meat
              <span className="text-primary block">Delivered Daily</span>
            </h1>
            <p className="text-lg text-muted-foreground mb-6">
              Farm-fresh chicken, expertly cut mutton, and ocean-fresh seafood at your doorstep. 
              100% quality assured with our 48-hour freshness guarantee.
            </p>
            <Button variant="hero" size="lg" asChild>
              <Link to="/categories">
                Shop Now <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-12 border-b">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {features.map((feature) => (
              <div key={feature.title} className="flex flex-col items-center text-center">
                <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-3">
                  <feature.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-bold text-foreground mb-1">{feature.title}</h3>
                <p className="text-sm text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-bold text-foreground">Shop by Category</h2>
            <Button variant="ghost" asChild>
              <Link to="/categories">
                View All <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {categories.map((category) => (
              <CategoryCard key={category.title} {...category} />
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-12 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-bold text-foreground">Featured Products</h2>
            <Button variant="ghost" asChild>
              <Link to="/categories">
                View All <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} {...product} />
            ))}
          </div>
        </div>
      </section>

      <BottomNav />
    </div>
  );
};

export default Index;
