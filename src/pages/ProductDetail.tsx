import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { ArrowLeft, ShoppingCart, Heart, Truck, Shield, Clock } from "lucide-react";
import Navbar from "@/components/Navbar";
import BottomNav from "@/components/BottomNav";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import chickenImage from "@/assets/category-chicken.jpg";

const ProductDetail = () => {
  const { id } = useParams();
  const [quantity, setQuantity] = useState(1);
  const [selectedWeight, setSelectedWeight] = useState("500g");

  // Mock product data
  const product = {
    id: id || "1",
    name: "Chicken Curry Cut (Small)",
    image: chickenImage,
    price: 299,
    originalPrice: 349,
    discount: 15,
    inStock: true,
    rating: 4.5,
    reviews: 234,
    description: "Premium quality chicken curry cut, perfect for your favorite curries and gravies. Fresh, tender, and hygienically processed.",
    weights: ["250g", "500g", "1kg"],
    benefits: [
      "100% fresh and antibiotic-free",
      "Cut to perfection by experts",
      "Cleaned and ready to cook",
      "48-hour freshness guarantee",
    ],
  };

  return (
    <div className="min-h-screen bg-background pb-20 md:pb-0">
      <Navbar />

      <div className="container mx-auto px-4 py-6">
        {/* Back Button */}
        <Button variant="ghost" asChild className="mb-4">
          <Link to="/categories">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Products
          </Link>
        </Button>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Product Image */}
          <div className="relative">
            {product.discount && (
              <Badge className="absolute top-4 left-4 z-10 bg-primary text-primary-foreground">
                {product.discount}% OFF
              </Badge>
            )}
            <div className="aspect-square rounded-xl overflow-hidden bg-muted">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Product Info */}
          <div className="flex flex-col">
            <div className="flex-1">
              <h1 className="text-3xl font-bold text-foreground mb-2">{product.name}</h1>
              
              <div className="flex items-center gap-2 mb-4">
                <div className="flex items-center text-sm">
                  <span className="text-yellow-500 mr-1">★</span>
                  <span className="font-medium">{product.rating}</span>
                  <span className="text-muted-foreground ml-1">({product.reviews} reviews)</span>
                </div>
              </div>

              <div className="flex items-baseline gap-3 mb-6">
                <span className="text-3xl font-bold text-primary">₹{product.price}</span>
                <span className="text-lg text-muted-foreground line-through">
                  ₹{product.originalPrice}
                </span>
                <Badge variant="secondary">{product.discount}% OFF</Badge>
              </div>

              {/* Weight Selection */}
              <div className="mb-6">
                <label className="text-sm font-medium text-foreground mb-2 block">
                  Select Weight
                </label>
                <div className="flex gap-2">
                  {product.weights.map((weight) => (
                    <Button
                      key={weight}
                      variant={selectedWeight === weight ? "default" : "outline"}
                      onClick={() => setSelectedWeight(weight)}
                    >
                      {weight}
                    </Button>
                  ))}
                </div>
              </div>

              {/* Quantity */}
              <div className="mb-6">
                <label className="text-sm font-medium text-foreground mb-2 block">
                  Quantity
                </label>
                <div className="flex items-center gap-3">
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  >
                    -
                  </Button>
                  <span className="text-lg font-medium w-12 text-center">{quantity}</span>
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={() => setQuantity(quantity + 1)}
                  >
                    +
                  </Button>
                </div>
              </div>

              {/* Trust Badges */}
              <div className="grid grid-cols-3 gap-4 mb-6 p-4 bg-muted/50 rounded-lg">
                <div className="text-center">
                  <Shield className="h-6 w-6 text-primary mx-auto mb-1" />
                  <p className="text-xs text-muted-foreground">Quality Assured</p>
                </div>
                <div className="text-center">
                  <Clock className="h-6 w-6 text-primary mx-auto mb-1" />
                  <p className="text-xs text-muted-foreground">48hr Fresh</p>
                </div>
                <div className="text-center">
                  <Truck className="h-6 w-6 text-primary mx-auto mb-1" />
                  <p className="text-xs text-muted-foreground">Fast Delivery</p>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-3 sticky bottom-0 bg-background py-4 border-t md:border-0">
              <Button variant="outline" size="icon">
                <Heart className="h-5 w-5" />
              </Button>
              <Button className="flex-1" size="lg">
                <ShoppingCart className="h-5 w-5 mr-2" />
                Add to Cart
              </Button>
            </div>
          </div>
        </div>

        {/* Product Details Tabs */}
        <Tabs defaultValue="description" className="mt-8">
          <TabsList className="w-full grid grid-cols-2">
            <TabsTrigger value="description">Description</TabsTrigger>
            <TabsTrigger value="benefits">Benefits</TabsTrigger>
          </TabsList>
          <TabsContent value="description" className="mt-4">
            <div className="prose prose-sm max-w-none">
              <p className="text-muted-foreground">{product.description}</p>
            </div>
          </TabsContent>
          <TabsContent value="benefits" className="mt-4">
            <ul className="space-y-2">
              {product.benefits.map((benefit, index) => (
                <li key={index} className="flex items-start gap-2">
                  <span className="text-primary mt-1">✓</span>
                  <span className="text-muted-foreground">{benefit}</span>
                </li>
              ))}
            </ul>
          </TabsContent>
        </Tabs>
      </div>

      <BottomNav />
    </div>
  );
};

export default ProductDetail;
