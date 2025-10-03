import { Plus, Clock } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

interface ProductCardProps {
  id: string;
  name: string;
  image: string;
  price: number;
  originalPrice?: number;
  weight: string;
  pieces?: string;
  serves?: string;
  inStock: boolean;
  discount?: number;
  deliveryTime?: string;
}

const ProductCard = ({ 
  id, 
  name, 
  image, 
  price, 
  originalPrice,
  weight, 
  pieces,
  serves,
  inStock, 
  discount,
  deliveryTime = "Tomorrow 6AM - 8AM"
}: ProductCardProps) => {
  return (
    <div className="group relative bg-card rounded-lg shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden border border-border/50">
      <Link to={`/product/${id}`}>
        <div className="aspect-square overflow-hidden bg-muted">
          <img
            src={image}
            alt={name}
            className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
        </div>
      </Link>

      <Button
        size="icon"
        className="absolute top-2 right-2 z-10 h-8 w-8 rounded-full bg-background hover:bg-background shadow-md"
        variant="outline"
      >
        <Plus className="h-4 w-4 text-primary" />
      </Button>

      <div className="p-3">
        <Link to={`/product/${id}`}>
          <h3 className="font-semibold text-foreground mb-1 text-sm hover:text-primary transition-colors line-clamp-2">
            {name}
          </h3>
        </Link>
        
        <div className="flex items-center gap-1 text-xs text-muted-foreground mb-2">
          <span className="font-medium">{weight}</span>
          {pieces && (
            <>
              <span>|</span>
              <span>{pieces}</span>
            </>
          )}
          {serves && (
            <>
              <span>|</span>
              <span>{serves}</span>
            </>
          )}
        </div>
        
        <div className="flex items-center gap-2 mb-2">
          <span className="text-lg font-bold text-foreground">₹{price}</span>
          {originalPrice && (
            <>
              <span className="text-sm text-muted-foreground line-through">₹{originalPrice}</span>
              {discount && (
                <span className="text-xs font-semibold text-secondary">{discount}% off</span>
              )}
            </>
          )}
        </div>

        {deliveryTime && (
          <div className="flex items-center gap-1 text-xs text-muted-foreground">
            <Clock className="h-3 w-3" />
            <span>{deliveryTime}</span>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductCard;
