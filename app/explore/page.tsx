"use client"

import { useState, useMemo } from "react"
import Link from "next/link"
import { flavorsData } from "@/lib/flavors-data"
import { Search, Sliders } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { PageTransition } from "@/components/page-transition"

interface FilterState {
  searchTerm: string
  brand: string
  minRating: number
  maxPrice: number
}

export default function ExplorePage() {
  const [filters, setFilters] = useState<FilterState>({
    searchTerm: "",
    brand: "all",
    minRating: 0,
    maxPrice: 100,
  })

  const [showFilters, setShowFilters] = useState(true)

  const brands = ["Amul", "Arun", "Kwality Walls"]
  const priceRange = [30, 70]

  const allBrandOptions = Array.from(
    new Set(flavorsData.flatMap((flavor) => flavor.brands.map((brand) => brand.name.split(" ")[0]))),
  )

  const filteredResults = useMemo(() => {
    return flavorsData.flatMap((flavor) =>
      flavor.brands
        .filter((brand) => {
          const matchesSearch =
            filters.searchTerm === "" ||
            flavor.name.toLowerCase().includes(filters.searchTerm.toLowerCase()) ||
            brand.name.toLowerCase().includes(filters.searchTerm.toLowerCase())

          const matchesBrand = filters.brand === "all" || brand.name.includes(filters.brand)

          const matchesRating = brand.rating >= filters.minRating

          const matchesPrice = brand.price <= filters.maxPrice

          return matchesSearch && matchesBrand && matchesRating && matchesPrice
        })
        .map((brand) => ({
          ...brand,
          flavorId: flavor.id,
          flavorName: flavor.name,
          flavorIcon: flavor.icon,
          flavorColor: flavor.color,
        })),
    )
  }, [filters])

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
              All Flavors
            </Link>
          </div>
        </nav>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Sidebar Filters */}
            <div className={`lg:w-64 ${showFilters ? "block" : "hidden lg:block"}`}>
              <div className="bg-white rounded-2xl p-6 border border-border/50 sticky top-20 animate-slide-in">
                <div className="flex items-center justify-between mb-6 lg:mb-0">
                  <h3 className="text-lg font-bold text-foreground">Filters</h3>
                  <button
                    onClick={() => setShowFilters(!showFilters)}
                    className="lg:hidden p-2 hover:bg-muted rounded-full"
                  >
                    <Sliders className="w-5 h-5" />
                  </button>
                </div>

                <div className="space-y-6 hidden lg:block">
                  {/* Brand Filter */}
                  <div>
                    <h4 className="font-semibold text-foreground mb-3">Brand</h4>
                    <div className="space-y-2">
                      <button
                        onClick={() => setFilters({ ...filters, brand: "all" })}
                        className={`block w-full text-left px-3 py-2 rounded-lg transition-all duration-200 ${
                          filters.brand === "all"
                            ? "bg-primary/10 text-primary font-medium scale-105"
                            : "hover:bg-muted text-muted-foreground"
                        }`}
                      >
                        All Brands
                      </button>
                      {allBrandOptions.map((brand) => (
                        <button
                          key={brand}
                          onClick={() => setFilters({ ...filters, brand })}
                          className={`block w-full text-left px-3 py-2 rounded-lg transition-all duration-200 ${
                            filters.brand === brand
                              ? "bg-primary/10 text-primary font-medium scale-105"
                              : "hover:bg-muted text-muted-foreground"
                          }`}
                        >
                          {brand}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Rating Filter */}
                  <div>
                    <h4 className="font-semibold text-foreground mb-3">Min Rating</h4>
                    <div className="space-y-2">
                      {[0, 3, 3.5, 4, 4.5].map((rating) => (
                        <button
                          key={rating}
                          onClick={() => setFilters({ ...filters, minRating: rating })}
                          className={`block w-full text-left px-3 py-2 rounded-lg transition-all duration-200 text-sm ${
                            filters.minRating === rating
                              ? "bg-primary/10 text-primary font-medium"
                              : "hover:bg-muted text-muted-foreground"
                          }`}
                        >
                          {rating === 0 ? "All Ratings" : `${rating}+ Stars`}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Price Filter */}
                  <div>
                    <h4 className="font-semibold text-foreground mb-3">Max Price</h4>
                    <div className="space-y-2">
                      <input
                        type="range"
                        min="30"
                        max="70"
                        value={filters.maxPrice}
                        onChange={(e) => setFilters({ ...filters, maxPrice: Number.parseInt(e.target.value) })}
                        className="w-full h-2 bg-muted rounded-lg appearance-none cursor-pointer"
                      />
                      <p className="text-sm text-muted-foreground">
                        ₹{priceRange[0]} - ₹{filters.maxPrice}
                      </p>
                    </div>
                  </div>

                  {/* Reset Button */}
                  <Button
                    onClick={() => setFilters({ searchTerm: "", brand: "all", minRating: 0, maxPrice: 100 })}
                    variant="outline"
                    className="w-full rounded-full transition-all duration-300 hover:scale-105"
                  >
                    Reset Filters
                  </Button>
                </div>
              </div>
            </div>

            {/* Main Content */}
            <div className="flex-1">
              {/* Search Bar */}
              <div className="mb-8 animate-slide-in">
                <div className="relative">
                  <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                  <Input
                    type="text"
                    placeholder="Search flavors or brands..."
                    value={filters.searchTerm}
                    onChange={(e) => setFilters({ ...filters, searchTerm: e.target.value })}
                    className="pl-12 pr-4 py-3 w-full rounded-full border-border bg-white text-foreground placeholder:text-muted-foreground focus:ring-2 focus:ring-primary transition-all duration-300"
                  />
                </div>
              </div>

              {/* Results Header */}
              <div
                className="flex items-center justify-between mb-6 animate-slide-in"
                style={{ animationDelay: "50ms" }}
              >
                <h2 className="text-2xl font-bold text-foreground">{filteredResults.length} Results</h2>
                <button
                  onClick={() => setShowFilters(!showFilters)}
                  className="lg:hidden flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary font-medium hover:bg-primary/20 transition-all duration-300"
                >
                  <Sliders className="w-4 h-4" />
                  Filters
                </button>
              </div>

              {/* Results Grid */}
              {filteredResults.length > 0 ? (
                <div className="grid md:grid-cols-2 gap-6">
                  {filteredResults.map((item, index) => (
                    <Link
                      key={`${item.flavorId}-${item.id}`}
                      href={`/flavors?flavor=${item.flavorId}`}
                      className="bg-white rounded-2xl p-6 border border-border/50 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group cursor-pointer animate-pop-in"
                      style={{ animationDelay: `${index * 30}ms` }}
                    >
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex items-center gap-3">
                          <div
                            className={`w-16 h-16 ${item.flavorColor} rounded-xl flex items-center justify-center text-2xl group-hover:scale-110 transition-transform duration-300`}
                          >
                            {item.flavorIcon}
                          </div>
                          <div>
                            <h3 className="font-bold text-foreground">{item.flavorName}</h3>
                            <p className="text-sm text-muted-foreground">{item.name}</p>
                          </div>
                        </div>
                        <span className="font-bold text-primary text-lg">₹{item.price}</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-1">
                          <span className="text-yellow-400">★</span>
                          <span className="text-sm font-medium text-foreground">{item.rating}</span>
                        </div>
                        <button className="text-primary font-semibold text-sm hover:underline transition-all duration-200">
                          Add to Cart →
                        </button>
                      </div>
                    </Link>
                  ))}
                </div>
              ) : (
                <div className="text-center py-12 animate-slide-in">
                  <p className="text-lg text-muted-foreground">No results found. Try adjusting your filters.</p>
                </div>
              )}
            </div>
          </div>
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
