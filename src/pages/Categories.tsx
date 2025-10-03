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
      originalPrice: 349,
      weight: "500g",
      pieces: "6-8 Pieces",
      serves: "Serves 2-3",
      inStock: true,
      discount: 15,
      category: "chicken",
    },
    {
      id: "2",
      name: "Chicken Boneless",
      image: chickenImage,
      price: 349,
      originalPrice: 399,
      weight: "500g",
      pieces: "No Bones",
      serves: "Serves 3-4",
      inStock: true,
      discount: 13,
      category: "chicken",
    },
    {
      id: "3",
      name: "Chicken Drumsticks",
      image: chickenImage,
      price: 279,
      originalPrice: 319,
      weight: "500g",
      pieces: "4-6 Pieces",
      serves: "Serves 2",
      inStock: true,
      discount: 13,
      category: "chicken",
    },
    {
      id: "4",
      name: "Chicken Wings",
      image: chickenImage,
      price: 199,
      originalPrice: 249,
      weight: "500g",
      pieces: "8-10 Pieces",
      serves: "Serves 2-3",
      inStock: true,
      discount: 20,
      category: "chicken",
    },
    {
      id: "5",
      name: "Fresh Mutton Curry Cut",
      image: muttonImage,
      price: 599,
      originalPrice: 699,
      weight: "500g",
      pieces: "8-10 Pieces",
      serves: "Serves 2-3",
      inStock: true,
      discount: 14,
      category: "mutton",
    },
    {
      id: "6",
      name: "Mutton Leg Pieces",
      image: muttonImage,
      price: 649,
      originalPrice: 749,
      weight: "500g",
      pieces: "5-7 Pieces",
      serves: "Serves 2-3",
      inStock: true,
      discount: 13,
      category: "mutton",
    },
    {
      id: "7",
      name: "Mutton Boneless",
      image: muttonImage,
      price: 699,
      originalPrice: 799,
      weight: "500g",
      pieces: "No Bones",
      serves: "Serves 3-4",
      inStock: true,
      discount: 13,
      category: "mutton",
    },
    {
      id: "8",
      name: "Mutton Mince (Keema)",
      image: muttonImage,
      price: 549,
      originalPrice: 629,
      weight: "500g",
      serves: "Serves 3-4",
      inStock: true,
      discount: 13,
      category: "mutton",
    },
    {
      id: "9",
      name: "Premium Salmon Fillet",
      image: seafoodImage,
      price: 799,
      originalPrice: 999,
      weight: "250g",
      pieces: "2-3 Pieces",
      serves: "Serves 2",
      inStock: true,
      discount: 20,
      category: "seafood",
    },
    {
      id: "10",
      name: "Fresh Prawns Medium",
      image: seafoodImage,
      price: 549,
      originalPrice: 649,
      weight: "250g",
      pieces: "15-20 Pieces",
      serves: "Serves 2-3",
      inStock: true,
      discount: 15,
      category: "seafood",
    },
    {
      id: "11",
      name: "Pomfret Whole Cleaned",
      image: seafoodImage,
      price: 449,
      originalPrice: 549,
      weight: "400g",
      pieces: "1-2 Pieces",
      serves: "Serves 2",
      inStock: true,
      discount: 18,
      category: "seafood",
    },
    {
      id: "12",
      name: "Basa Fillet Boneless",
      image: seafoodImage,
      price: 299,
      originalPrice: 349,
      weight: "300g",
      pieces: "2-3 Pieces",
      serves: "Serves 2",
      inStock: true,
      discount: 14,
      category: "seafood",
    },
    {
      id: "13",
      name: "Tandoori Chicken (Marinated)",
      image: readyToCookImage,
      price: 399,
      originalPrice: 449,
      weight: "500g",
      pieces: "4-6 Pieces",
      serves: "Serves 2-3",
      inStock: true,
      discount: 11,
      category: "ready-to-cook",
    },
    {
      id: "14",
      name: "BBQ Chicken Wings (Marinated)",
      image: readyToCookImage,
      price: 329,
      originalPrice: 379,
      weight: "500g",
      pieces: "8-10 Pieces",
      serves: "Serves 2-3",
      inStock: true,
      discount: 13,
      category: "ready-to-cook",
    },
    {
      id: "15",
      name: "Chicken Seekh Kebab",
      image: readyToCookImage,
      price: 349,
      originalPrice: 399,
      weight: "400g",
      pieces: "6-8 Pieces",
      serves: "Serves 2-3",
      inStock: true,
      discount: 13,
      category: "ready-to-cook",
    },
    {
      id: "16",
      name: "Mutton Seekh Kebab",
      image: readyToCookImage,
      price: 449,
      originalPrice: 519,
      weight: "400g",
      pieces: "6-8 Pieces",
      serves: "Serves 2-3",
      inStock: true,
      discount: 13,
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
