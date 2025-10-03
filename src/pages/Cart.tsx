import { Trash2, Plus, Minus, ShoppingBag } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import BottomNav from "@/components/BottomNav";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import chickenImage from "@/assets/category-chicken.jpg";
import muttonImage from "@/assets/category-mutton.jpg";

const Cart = () => {
  // Mock cart data
  const cartItems = [
    {
      id: "1",
      name: "Chicken Curry Cut (Small)",
      image: chickenImage,
      price: 299,
      quantity: 1,
      weight: "500g",
    },
    {
      id: "2",
      name: "Fresh Mutton Curry Cut",
      image: muttonImage,
      price: 599,
      quantity: 2,
      weight: "500g",
    },
  ];

  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const deliveryFee = 49;
  const discount = 100;
  const total = subtotal + deliveryFee - discount;

  return (
    <div className="min-h-screen bg-background pb-32 md:pb-0">
      <Navbar />

      <div className="container mx-auto px-4 py-6">
        <h1 className="text-3xl font-bold text-foreground mb-6">Shopping Cart</h1>

        {cartItems.length === 0 ? (
          <div className="text-center py-12">
            <ShoppingBag className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
            <h2 className="text-xl font-semibold text-foreground mb-2">Your cart is empty</h2>
            <p className="text-muted-foreground mb-6">Add some delicious items to get started!</p>
            <Button asChild>
              <Link to="/categories">Start Shopping</Link>
            </Button>
          </div>
        ) : (
          <div className="grid md:grid-cols-3 gap-6">
            {/* Cart Items */}
            <div className="md:col-span-2 space-y-4">
              {cartItems.map((item) => (
                <div key={item.id} className="bg-card rounded-lg p-4 shadow-sm">
                  <div className="flex gap-4">
                    <div className="w-24 h-24 rounded-lg overflow-hidden bg-muted flex-shrink-0">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    
                    <div className="flex-1 min-w-0">
                      <h3 className="font-bold text-foreground mb-1">{item.name}</h3>
                      <p className="text-sm text-muted-foreground mb-2">{item.weight}</p>
                      <p className="text-lg font-bold text-primary">₹{item.price}</p>
                    </div>

                    <div className="flex flex-col items-end justify-between">
                      <Button variant="ghost" size="icon" className="text-destructive">
                        <Trash2 className="h-4 w-4" />
                      </Button>
                      
                      <div className="flex items-center gap-2">
                        <Button variant="outline" size="icon" className="h-8 w-8">
                          <Minus className="h-3 w-3" />
                        </Button>
                        <span className="w-8 text-center font-medium">{item.quantity}</span>
                        <Button variant="outline" size="icon" className="h-8 w-8">
                          <Plus className="h-3 w-3" />
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Order Summary */}
            <div className="md:sticky md:top-24 h-fit">
              <div className="bg-card rounded-lg p-6 shadow-sm">
                <h2 className="text-xl font-bold text-foreground mb-4">Order Summary</h2>
                
                <div className="space-y-3 mb-4">
                  <div className="flex justify-between text-muted-foreground">
                    <span>Subtotal</span>
                    <span>₹{subtotal}</span>
                  </div>
                  <div className="flex justify-between text-muted-foreground">
                    <span>Delivery Fee</span>
                    <span>₹{deliveryFee}</span>
                  </div>
                  <div className="flex justify-between text-secondary">
                    <span>Discount</span>
                    <span>-₹{discount}</span>
                  </div>
                </div>

                <Separator className="my-4" />

                <div className="flex justify-between text-lg font-bold text-foreground mb-6">
                  <span>Total</span>
                  <span>₹{total}</span>
                </div>

                <Button className="w-full" size="lg">
                  Proceed to Checkout
                </Button>

                <p className="text-xs text-muted-foreground text-center mt-4">
                  Free delivery on orders above ₹999
                </p>
              </div>
            </div>
          </div>
        )}
      </div>

      <BottomNav />
    </div>
  );
};

export default Cart;
