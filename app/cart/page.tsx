"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { CartItem } from "@/components/cart-item"
import { ChevronRight, ShoppingCart } from "lucide-react"
import { Input } from "@/components/ui/input"
import { PageTransition } from "@/components/page-transition"

interface CartItemData {
  id: string
  name: string
  price: number
  rating: number
  quantity: number
}

export default function CartPage() {
  const [cartItems, setCartItems] = useState<CartItemData[]>([
    { id: "amul-1", name: "Amul Chocolate", price: 45, rating: 4.5, quantity: 1 },
    { id: "kwality-2", name: "Kwality Mango Fest", price: 52, rating: 4.8, quantity: 2 },
  ])

  const [orderPlaced, setOrderPlaced] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    address: "",
    phone: "",
    paymentMethod: "card",
  })

  const updateQuantity = (id: string, quantity: number) => {
    setCartItems((prev) => prev.map((item) => (item.id === id ? { ...item, quantity } : item)))
  }

  const removeItem = (id: string) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id))
  }

  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0)
  const tax = subtotal * 0.05
  const total = subtotal + tax

  const handleCheckout = (e: React.FormEvent) => {
    e.preventDefault()
    if (formData.name && formData.email && formData.address && formData.phone) {
      setOrderPlaced(true)
      setTimeout(() => {
        alert("Order confirmed! Your ice cream will be delivered soon.")
      }, 500)
    }
  }

  if (orderPlaced) {
    return (
      <PageTransition>
        <main className="min-h-screen bg-gradient-to-br from-pink-50 via-blue-50 to-mint-50 flex items-center justify-center px-4">
          <div className="bg-white rounded-3xl shadow-xl p-12 max-w-md border border-border/50 text-center space-y-6 animate-pop-in">
            <div className="w-16 h-16 mx-auto bg-accent/20 rounded-full flex items-center justify-center animate-bounce">
              <ShoppingCart className="w-8 h-8 text-accent" />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-foreground mb-2">Order Confirmed!</h1>
              <p className="text-muted-foreground mb-6">
                Thank you for your order. Your delicious ice cream will be delivered soon.
              </p>
              <div className="bg-muted/50 rounded-2xl p-4 mb-6 space-y-2">
                <p className="text-sm text-muted-foreground">Order Total</p>
                <p className="text-3xl font-bold text-primary">₹{total.toFixed(0)}</p>
              </div>
            </div>
            <Link href="/">
              <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground rounded-full py-3 font-semibold transition-all duration-300 hover:scale-105">
                Continue Shopping
              </Button>
            </Link>
          </div>
        </main>
      </PageTransition>
    )
  }

  return (
    <PageTransition>
      <main className="min-h-screen bg-gradient-to-br from-pink-50 via-blue-50 to-mint-50">
        {/* Navigation */}
        <nav className="sticky top-0 z-40 backdrop-blur-sm bg-white/80 border-b border-border">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
            <Link href="/" className="font-bold text-lg text-foreground">
              Scoop Delight
            </Link>
            <Link href="/flavors" className="text-sm font-medium hover:text-primary transition-colors">
              Back to Flavors
            </Link>
          </div>
        </nav>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <h1 className="text-4xl font-bold text-foreground mb-12 animate-slide-in">Your Cart</h1>

          {cartItems.length === 0 ? (
            <div className="text-center py-20 animate-slide-in">
              <ShoppingCart className="w-16 h-16 mx-auto text-muted-foreground/50 mb-4" />
              <h2 className="text-2xl font-bold text-foreground mb-2">Your cart is empty</h2>
              <p className="text-muted-foreground mb-6">Add some delicious ice cream to get started</p>
              <Link href="/flavors">
                <Button className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-8 transition-all duration-300 hover:scale-105">
                  Browse Flavors
                </Button>
              </Link>
            </div>
          ) : (
            <div className="grid lg:grid-cols-3 gap-8">
              {/* Cart Items */}
              <div className="lg:col-span-2 space-y-4">
                {cartItems.map((item, index) => (
                  <div key={item.id} className="animate-pop-in" style={{ animationDelay: `${index * 50}ms` }}>
                    <CartItem
                      id={item.id}
                      name={item.name}
                      price={item.price}
                      quantity={item.quantity}
                      rating={item.rating}
                      onQuantityChange={(qty) => updateQuantity(item.id, qty)}
                      onRemove={() => removeItem(item.id)}
                    />
                  </div>
                ))}
              </div>

              {/* Order Summary & Checkout */}
              <div className="lg:col-span-1">
                <div className="bg-white rounded-3xl p-8 border border-border/50 sticky top-24 space-y-6 animate-slide-in">
                  <h2 className="text-2xl font-bold text-foreground">Order Summary</h2>

                  <div className="space-y-3 pb-6 border-b border-border">
                    <div className="flex justify-between text-muted-foreground">
                      <span>Subtotal</span>
                      <span>₹{subtotal.toFixed(0)}</span>
                    </div>
                    <div className="flex justify-between text-muted-foreground">
                      <span>Tax (5%)</span>
                      <span>₹{tax.toFixed(0)}</span>
                    </div>
                  </div>

                  <div className="flex justify-between items-center">
                    <span className="text-lg font-semibold text-foreground">Total</span>
                    <span className="text-3xl font-bold text-primary">₹{total.toFixed(0)}</span>
                  </div>

                  <form onSubmit={handleCheckout} className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">Full Name</label>
                      <Input
                        type="text"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="John Doe"
                        className="rounded-lg border-border bg-white transition-all duration-300 focus:shadow-md"
                        required
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">Email</label>
                      <Input
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="your@email.com"
                        className="rounded-lg border-border bg-white transition-all duration-300 focus:shadow-md"
                        required
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">Address</label>
                      <textarea
                        value={formData.address}
                        onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                        placeholder="Your delivery address"
                        rows={3}
                        className="w-full px-3 py-2 rounded-lg border border-border bg-white text-foreground transition-all duration-300 focus:shadow-md"
                        required
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">Phone Number</label>
                      <Input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+91 9876543210"
                        className="rounded-lg border-border bg-white transition-all duration-300 focus:shadow-md"
                        required
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">Payment Method</label>
                      <select
                        value={formData.paymentMethod}
                        onChange={(e) => setFormData({ ...formData, paymentMethod: e.target.value })}
                        className="w-full px-3 py-2 rounded-lg border border-border bg-white text-foreground transition-all duration-300 focus:shadow-md"
                      >
                        <option value="card">Credit/Debit Card</option>
                        <option value="upi">UPI</option>
                        <option value="wallet">Digital Wallet</option>
                        <option value="cod">Cash on Delivery</option>
                      </select>
                    </div>

                    <Button
                      type="submit"
                      className="w-full bg-accent hover:bg-accent/90 text-accent-foreground rounded-full py-3 font-semibold flex items-center justify-center gap-2 transition-all duration-300 hover:scale-105 hover:shadow-lg"
                    >
                      Place Order
                      <ChevronRight className="w-5 h-5" />
                    </Button>
                  </form>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Footer */}
        <footer className="bg-card border-t border-border mt-20">
          <div className="max-w-6xl mx-auto px-4 py-12 text-center text-muted-foreground">
            <p>© 2025 Scoop Delight. All rights reserved.</p>
          </div>
        </footer>
      </main>
    </PageTransition>
  )
}
