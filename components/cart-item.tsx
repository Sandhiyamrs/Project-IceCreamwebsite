"use client"
import { Trash2, Plus, Minus } from "lucide-react"

interface CartItemProps {
  id: string
  name: string
  price: number
  quantity: number
  rating: number
  onQuantityChange: (quantity: number) => void
  onRemove: () => void
}

export function CartItem({ id, name, price, quantity, rating, onQuantityChange, onRemove }: CartItemProps) {
  return (
    <div className="bg-white rounded-2xl p-6 border border-border/50 flex items-center justify-between hover:shadow-md transition-shadow">
      <div className="flex-1">
        <h3 className="font-bold text-foreground mb-1">{name}</h3>
        <div className="flex items-center gap-3">
          <span className="text-2xl font-bold text-primary">₹{price}</span>
          <span className="text-sm text-muted-foreground flex items-center gap-1">
            <span className="text-yellow-400">★</span>
            {rating}
          </span>
        </div>
      </div>

      <div className="flex items-center gap-4">
        {/* Quantity Controls */}
        <div className="flex items-center gap-2 bg-muted rounded-full p-2">
          <button
            onClick={() => onQuantityChange(Math.max(1, quantity - 1))}
            className="p-1 hover:bg-white rounded-full transition-colors"
            aria-label="Decrease quantity"
          >
            <Minus className="w-4 h-4" />
          </button>
          <span className="px-4 font-semibold text-foreground min-w-8 text-center">{quantity}</span>
          <button
            onClick={() => onQuantityChange(quantity + 1)}
            className="p-1 hover:bg-white rounded-full transition-colors"
            aria-label="Increase quantity"
          >
            <Plus className="w-4 h-4" />
          </button>
        </div>

        {/* Subtotal */}
        <span className="font-bold text-foreground min-w-20 text-right">₹{(price * quantity).toFixed(0)}</span>

        {/* Remove Button */}
        <button
          onClick={onRemove}
          className="p-2 hover:bg-destructive/10 rounded-full transition-colors text-destructive"
          aria-label="Remove item"
        >
          <Trash2 className="w-5 h-5" />
        </button>
      </div>
    </div>
  )
}
