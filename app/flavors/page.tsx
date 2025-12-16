"use client"

import { useState } from "react"
import Link from "next/link"
import { FlavorModal } from "@/components/flavor-modal"
import { flavorsData } from "@/lib/flavors-data"
import { Heart } from "lucide-react"
import { PageTransition } from "@/components/page-transition"

export default function FlavorsPage() {
  const [selectedFlavor, setSelectedFlavor] = useState(null)
  const [favorites, setFavorites] = useState<string[]>([])
  const [cart, setCart] = useState<string[]>([])

  const handleAddToCart = (brandId: string) => {
    setCart([...cart, brandId])
    setSelectedFlavor(null)
    alert(`Added to cart! Total items: ${cart.length + 1}`)
  }

  const handleAddToFavorites = (flavorId: string) => {
    setFavorites((prev) => (prev.includes(flavorId) ? prev.filter((id) => id !== flavorId) : [...prev, flavorId]))
  }

  return (
    <PageTransition>
      <main className="min-h-screen relative bg-gradient-to-br from-pink-50 via-blue-50 to-mint-50">
        <video className="fixed inset-0 w-full h-full object-cover opacity-15 -z-10" autoPlay loop muted playsInline>
          <source src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/flavors-bg-233LXigPwFVa1j1FJgFrcFFuXtS3gy.mp4" type="video/mp4" />
        </video>

        {/* Navigation */}
        <nav className="sticky top-0 z-40 backdrop-blur-sm bg-white/80 border-b border-border">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
            <Link href="/" className="font-bold text-lg text-foreground">
              Scoop Delight
            </Link>
            <div className="flex items-center gap-4">
              <span className="text-sm font-medium text-muted-foreground">Cart: {cart.length}</span>
              <Link href="/cart" className="text-sm font-medium hover:text-primary transition-colors">
                View Cart
              </Link>
            </div>
          </div>
        </nav>

        {/* Header */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4 animate-slide-in">Our Flavors</h1>
          <p className="text-xl text-muted-foreground animate-slide-in" style={{ animationDelay: "100ms" }}>
            Choose from our delicious collection of ice cream flavors
          </p>
        </section>

        {/* Flavors Grid */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20 relative z-10">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {flavorsData.map((flavor, index) => (
              <div
                key={flavor.id}
                onClick={() => setSelectedFlavor(flavor)}
                className="bg-white rounded-3xl shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-border/50 cursor-pointer overflow-hidden group animate-pop-in"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <div
                  className={`${flavor.color} h-40 flex items-center justify-center text-6xl group-hover:scale-110 transition-transform duration-300`}
                >
                  {flavor.icon}
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-foreground mb-2">{flavor.name}</h3>
                  <p className="text-muted-foreground mb-4">{flavor.description}</p>
                  <div className="flex items-center justify-between">
                    <button
                      onClick={(e) => {
                        e.stopPropagation()
                        handleAddToFavorites(flavor.id)
                      }}
                      className="p-2 hover:bg-muted rounded-full transition-colors duration-200"
                    >
                      <Heart
                        className={`w-6 h-6 transition-all duration-300 ${
                          favorites.includes(flavor.id)
                            ? "fill-primary text-primary scale-110"
                            : "text-muted-foreground"
                        }`}
                      />
                    </button>
                    <button className="text-primary font-semibold hover:underline transition-colors duration-200">
                      View Options →
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Modal */}
        {selectedFlavor && (
          <FlavorModal
            flavor={selectedFlavor}
            isOpen={!!selectedFlavor}
            onClose={() => setSelectedFlavor(null)}
            onAddToCart={handleAddToCart}
            onAddToFavorites={handleAddToFavorites}
            isFavorite={favorites.includes(selectedFlavor.id)}
          />
        )}

        {/* Footer */}
        <footer className="bg-card border-t border-border relative z-10">
          <div className="max-w-6xl mx-auto px-4 py-12 text-center text-muted-foreground">
            <p>© 2025 Scoop Delight. All rights reserved.</p>
          </div>
        </footer>
      </main>
    </PageTransition>
  )
}
