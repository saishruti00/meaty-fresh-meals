import { useState } from "react";
import { Filter } from "lucide-react";
import Navbar from "@/components/Navbar";
import BottomNav from "@/components/BottomNav";
import ProductCard from "@/components/ProductCard";
import { Button } from "@/components/ui/button";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import chickenImage from "@/assets/category-chicken.jpg";
import muttonImage from "@/assets/category-mutton.jpg";
import seafoodImage from "@/assets/category-seafood.jpg";
import readyToCookImage from "@/assets/category-ready-to-cook.jpg";

const Categories = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const allProducts = [
    {
      id: "1",
      name: "Chicken Curry Cut (Small)",
      image: chickenImage,
      price: 299,
      weight: "500g",
      inStock: true,
      discount: 15,
      category: "chicken",
    },
    {
      id: "2",
      name: "Chicken Boneless",
      image: chickenImage,
      price: 349,
      weight: "500g",
      inStock: true,
      category: "chicken",
    },
    {
      id: "3",
      name: "Fresh Mutton Curry Cut",
      image: muttonImage,
      price: 599,
      weight: "500g",
      inStock: true,
      category: "mutton",
    },
    {
      id: "4",
      name: "Mutton Leg Pieces",
      image: muttonImage,
      price: 649,
      weight: "500g",
      inStock: true,
      category: "mutton",
    },
    {
      id: "5",
      name: "Premium Salmon Fillet",
      image: seafoodImage,
      price: 799,
      weight: "250g",
      inStock: true,
      discount: 10,
      category: "seafood",
    },
    {
      id: "6",
      name: "Fresh Prawns",
      image: seafoodImage,
      price: 549,
      weight: "250g",
      inStock: true,
      category: "seafood",
    },
    {
      id: "7",
      name: "Tandoori Chicken (Marinated)",
      image: readyToCookImage,
      price: 399,
      weight: "500g",
      inStock: true,
      category: "ready-to-cook",
    },
    {
      id: "8",
      name: "BBQ Chicken Wings",
      image: readyToCookImage,
      price: 329,
      weight: "500g",
      inStock: true,
      discount: 5,
      category: "ready-to-cook",
    },
  ];

  const filteredProducts =
    activeCategory === "all"
      ? allProducts
      : allProducts.filter((p) => p.category === activeCategory);

  return (
    <div className="min-h-screen bg-background pb-20 md:pb-0">
      <Navbar />

      <div className="container mx-auto px-4 py-6">
        {/* Header */}
        <div className="mb-6">
          <h1 className="text-3xl font-bold text-foreground mb-2">All Products</h1>
          <p className="text-muted-foreground">
            Browse our complete selection of premium quality meat and seafood
          </p>
        </div>

        {/* Filters */}
        <div className="mb-6 flex items-center gap-4">
          <Tabs value={activeCategory} onValueChange={setActiveCategory} className="flex-1">
            <TabsList className="w-full grid grid-cols-5">
              <TabsTrigger value="all">All</TabsTrigger>
              <TabsTrigger value="chicken">Chicken</TabsTrigger>
              <TabsTrigger value="mutton">Mutton</TabsTrigger>
              <TabsTrigger value="seafood">Seafood</TabsTrigger>
              <TabsTrigger value="ready-to-cook" className="text-xs">Ready</TabsTrigger>
            </TabsList>
          </Tabs>
          <Button variant="outline" size="icon">
            <Filter className="h-4 w-4" />
          </Button>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>

        {filteredProducts.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted-foreground">No products found in this category.</p>
          </div>
        )}
      </div>

      <BottomNav />
    </div>
  );
};

export default Categories;
