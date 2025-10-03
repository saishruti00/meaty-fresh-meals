import { ShoppingCart, Heart } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

interface ProductCardProps {
  id: string;
  name: string;
  image: string;
  price: number;
  weight: string;
  inStock: boolean;
  discount?: number;
}

const ProductCard = ({ id, name, image, price, weight, inStock, discount }: ProductCardProps) => {
  const discountedPrice = discount ? price - (price * discount) / 100 : price;

  return (
    <div className="group relative bg-card rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden">
      {discount && (
        <Badge className="absolute top-2 left-2 z-10 bg-primary text-primary-foreground">
          {discount}% OFF
        </Badge>
      )}
      
      <Button
        variant="ghost"
        size="icon"
        className="absolute top-2 right-2 z-10 bg-background/80 hover:bg-background"
      >
        <Heart className="h-4 w-4" />
      </Button>

      <Link to={`/product/${id}`}>
        <div className="aspect-square overflow-hidden">
          <img
            src={image}
            alt={name}
            className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
          />
        </div>
      </Link>

      <div className="p-4">
        <Link to={`/product/${id}`}>
          <h3 className="font-bold text-foreground mb-1 hover:text-primary transition-colors">
            {name}
          </h3>
        </Link>
        <p className="text-sm text-muted-foreground mb-2">{weight}</p>
        
        <div className="flex items-center justify-between">
          <div className="flex items-baseline gap-2">
            <span className="text-lg font-bold text-primary">₹{discountedPrice}</span>
            {discount && (
              <span className="text-sm text-muted-foreground line-through">₹{price}</span>
            )}
          </div>
        </div>

        <Button
          className="w-full mt-3"
          disabled={!inStock}
        >
          <ShoppingCart className="h-4 w-4 mr-2" />
          {inStock ? "Add to Cart" : "Out of Stock"}
        </Button>
      </div>
    </div>
  );
};

export default ProductCard;
