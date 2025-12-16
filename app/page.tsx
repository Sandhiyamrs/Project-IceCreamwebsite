"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { IceCreamIcon } from "@/components/ice-cream-icon"
import { PageTransition } from "@/components/page-transition"

export default function Home() {
  const [isScrolled, setIsScrolled] = useState(false)

  return (
    <PageTransition>
      <main className="min-h-screen bg-gradient-to-br from-pink-50 via-blue-50 to-mint-50">
        {/* Navigation */}
        <nav
          className="sticky top-0 z-50 backdrop-blur-sm bg-white/80 border-b border-border transition-shadow duration-300"
          style={{
            boxShadow: isScrolled ? "0 4px 12px rgba(0,0,0,0.05)" : "none",
          }}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
            <Link href="/" className="flex items-center gap-2 group">
              <div className="w-8 h-8 text-primary group-hover:scale-110 transition-transform duration-300">
                <IceCreamIcon />
              </div>
              <span className="font-bold text-lg text-foreground">Scoop Delight</span>
            </Link>
            <div className="flex items-center gap-4">
              <Link href="/explore" className="text-sm font-medium hover:text-primary transition-colors duration-200">
                Explore
              </Link>
              <Link href="/login" className="text-sm font-medium hover:text-primary transition-colors duration-200">
                Login
              </Link>
              <Link href="/cart" className="text-sm font-medium hover:text-primary transition-colors duration-200">
                Cart
              </Link>
            </div>
          </div>
        </nav>

        {/* Hero Section with Background Video */}
        <section className="relative overflow-hidden pt-20 pb-32 px-4">
          <video
            className="absolute inset-0 w-full h-full object-cover opacity-20 -z-10"
            autoPlay
            loop
            muted
            playsInline
          >
            <source src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/icecream-bg-RzxBNeQU8mmlb9FbLMTGmypWre5m2j.mp4" type="video/mp4" />
          </video>

          <div className="max-w-4xl mx-auto text-center space-y-8 relative z-10">
            <div className="inline-block">
              <div className="w-32 h-32 mx-auto text-pink-400 animate-float">
                <IceCreamIcon />
              </div>
            </div>
            <h1
              className="text-5xl md:text-6xl font-bold tracking-tight text-foreground animate-slide-in"
              style={{ animationDelay: "100ms" }}
            >
              Where Flavor Meets Function
            </h1>
            <p
              className="text-xl text-muted-foreground max-w-2xl mx-auto animate-slide-in"
              style={{ animationDelay: "200ms" }}
            >
              Your scoop, your way. Discover delicious ice cream flavors from multiple brands, save your favorites, and
              order with ease.
            </p>
            <div className="flex gap-4 justify-center flex-wrap animate-slide-in" style={{ animationDelay: "300ms" }}>
              <Link href="/flavors">
                <Button
                  size="lg"
                  className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-8 transition-all duration-300 hover:shadow-lg hover:scale-105"
                >
                  Explore Flavors
                </Button>
              </Link>
              <Link href="/explore">
                <Button
                  size="lg"
                  variant="outline"
                  className="rounded-full px-8 transition-all duration-300 hover:shadow-lg hover:scale-105 bg-transparent"
                >
                  Shop Now
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Featured Scoops */}
        <section className="py-20 px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-16 text-foreground animate-slide-in">Featured Scoops</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {["Chocolate", "Mango", "Strawberry"].map((flavor, index) => {
                const imageMap = {
                  Chocolate: "/images/chocolate.jpg",
                  Mango: "/images/mango.jpg",
                  Strawberry: "/images/strawberry.jpg",
                }
                return (
                  <div
                    key={flavor}
                    className="bg-white rounded-3xl shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-border/50 group cursor-pointer overflow-hidden animate-slide-in"
                    style={{ animationDelay: `${(index + 1) * 100}ms` }}
                  >
                    <div className="w-full h-48 overflow-hidden">
                      <img
                        src={imageMap[flavor] || "/placeholder.svg"}
                        alt={`${flavor} ice cream`}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                      />
                    </div>
                    <div className="p-6">
                      <h3 className="text-2xl font-bold text-center text-foreground mb-2">{flavor}</h3>
                      <p className="text-center text-muted-foreground mb-6">Premium quality scoop</p>
                      <Link href="/flavors" className="block">
                        <Button className="w-full bg-accent hover:bg-accent/90 text-accent-foreground rounded-full transition-all duration-300 hover:shadow-md">
                          View Details
                        </Button>
                      </Link>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

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
