"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import type { Flavor } from "@/lib/flavors-data"
import { X, Heart, ShoppingCart, Star } from "lucide-react"

interface FlavorModalProps {
  flavor: Flavor
  isOpen: boolean
  onClose: () => void
  onAddToCart: (brandId: string) => void
  onAddToFavorites: (flavorId: string) => void
  isFavorite: boolean
}

export function FlavorModal({ flavor, isOpen, onClose, onAddToCart, onAddToFavorites, isFavorite }: FlavorModalProps) {
  const [selectedBrand, setSelectedBrand] = useState(flavor.brands[0])

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-sm">
      <div className="bg-white rounded-3xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="sticky top-0 bg-white border-b border-border/50 p-6 flex items-center justify-between rounded-t-3xl">
          <h2 className="text-3xl font-bold text-foreground">{flavor.name}</h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-muted rounded-full transition-colors"
            aria-label="Close modal"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 space-y-6">
          {/* Description */}
          <p className="text-muted-foreground text-lg">{flavor.description}</p>

          {/* Brand Selection */}
          <div>
            <h3 className="text-lg font-semibold text-foreground mb-4">Available Brands</h3>
            <div className="space-y-3">
              {flavor.brands.map((brand) => (
                <button
                  key={brand.id}
                  onClick={() => setSelectedBrand(brand)}
                  className={`w-full p-4 rounded-2xl border-2 transition-all text-left ${
                    selectedBrand.id === brand.id
                      ? "border-primary bg-primary/10"
                      : "border-border hover:border-primary/50 bg-white"
                  }`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-semibold text-foreground">{brand.name}</span>
                    <span className="font-bold text-primary">₹{brand.price}</span>
                  </div>
                  <div className="flex items-center gap-1 text-sm">
                    <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    <span className="text-muted-foreground">{brand.rating} rating</span>
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Selected Brand Details */}
          {selectedBrand && (
            <div className="bg-muted/50 rounded-2xl p-4 space-y-3">
              <div>
                <h4 className="font-semibold text-foreground mb-2">Ingredients</h4>
                <p className="text-sm text-muted-foreground">{selectedBrand.ingredients.join(", ")}</p>
              </div>
              <div>
                <h4 className="font-semibold text-foreground mb-2">Price</h4>
                <p className="text-2xl font-bold text-primary">₹{selectedBrand.price}</p>
              </div>
            </div>
          )}

          {/* Action Buttons */}
          <div className="flex gap-3 pt-4">
            <Button
              onClick={() => onAddToCart(selectedBrand.id)}
              className="flex-1 bg-accent hover:bg-accent/90 text-accent-foreground rounded-full py-3 font-semibold flex items-center justify-center gap-2"
            >
              <ShoppingCart className="w-5 h-5" />
              Add to Cart
            </Button>
            <Button
              onClick={() => onAddToFavorites(flavor.id)}
              variant="outline"
              className={`flex-1 rounded-full py-3 font-semibold flex items-center justify-center gap-2 ${
                isFavorite ? "bg-pink-50 border-pink-300" : ""
              }`}
            >
              <Heart className={`w-5 h-5 ${isFavorite ? "fill-pink-500 text-pink-500" : ""}`} />
              {isFavorite ? "Favorited" : "Favorite"}
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
