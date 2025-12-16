export interface FlavorBrand {
  id: string
  name: string
  price: number
  rating: number
  ingredients: string[]
}

export interface Flavor {
  id: string
  name: string
  color: string
  icon: string
  brands: FlavorBrand[]
  description: string
}

export const flavorsData: Flavor[] = [
  {
    id: "chocolate",
    name: "Chocolate",
    color: "bg-orange-400",
    icon: "🍫",
    description: "Rich and decadent chocolate flavor",
    brands: [
      {
        id: "amul-1",
        name: "Amul Chocolate",
        price: 45,
        rating: 4.5,
        ingredients: ["milk", "cocoa", "sugar", "vanilla"],
      },
      {
        id: "arun-1",
        name: "Arun Ice Cream",
        price: 50,
        rating: 4.3,
        ingredients: ["cream", "cocoa", "sugar", "eggs"],
      },
      {
        id: "kwality-1",
        name: "Kwality Walls",
        price: 55,
        rating: 4.7,
        ingredients: ["milk fat", "cocoa", "sugar", "stabilizers"],
      },
    ],
  },
  {
    id: "mango",
    name: "Mango",
    color: "bg-yellow-400",
    icon: "🥭",
    description: "Tropical mango flavor with natural sweetness",
    brands: [
      {
        id: "amul-2",
        name: "Amul Mango",
        price: 40,
        rating: 4.6,
        ingredients: ["mango puree", "milk", "sugar", "cream"],
      },
      { id: "arun-2", name: "Arun Mango", price: 48, rating: 4.4, ingredients: ["mango", "milk", "sugar", "vanilla"] },
      {
        id: "kwality-2",
        name: "Kwality Mango Fest",
        price: 52,
        rating: 4.8,
        ingredients: ["mango", "cream", "sugar", "natural flavors"],
      },
    ],
  },
  {
    id: "strawberry",
    name: "Strawberry",
    color: "bg-pink-400",
    icon: "🍓",
    description: "Fresh strawberry flavor with real fruit pieces",
    brands: [
      {
        id: "amul-3",
        name: "Amul Strawberry",
        price: 42,
        rating: 4.4,
        ingredients: ["strawberry", "milk", "sugar", "cream"],
      },
      {
        id: "arun-3",
        name: "Arun Strawberry",
        price: 49,
        rating: 4.2,
        ingredients: ["strawberry puree", "milk", "sugar"],
      },
      {
        id: "kwality-3",
        name: "Kwality Strawberry",
        price: 53,
        rating: 4.6,
        ingredients: ["strawberry", "cream", "sugar", "stabilizers"],
      },
    ],
  },
  {
    id: "vanilla",
    name: "Vanilla",
    color: "bg-amber-200",
    icon: "🍨",
    description: "Classic vanilla flavor made with real vanilla beans",
    brands: [
      {
        id: "amul-4",
        name: "Amul Vanilla",
        price: 38,
        rating: 4.3,
        ingredients: ["milk", "vanilla", "sugar", "cream"],
      },
      { id: "arun-4", name: "Arun Vanilla", price: 45, rating: 4.1, ingredients: ["vanilla beans", "milk", "sugar"] },
      {
        id: "kwality-4",
        name: "Kwality Vanilla",
        price: 50,
        rating: 4.5,
        ingredients: ["vanilla", "cream", "sugar", "natural flavors"],
      },
    ],
  },
  {
    id: "blueberry",
    name: "Blueberry",
    color: "bg-blue-500",
    icon: "🫐",
    description: "Antioxidant-rich blueberry flavor",
    brands: [
      {
        id: "amul-5",
        name: "Amul Blueberry",
        price: 46,
        rating: 4.5,
        ingredients: ["blueberry", "milk", "sugar", "cream"],
      },
      {
        id: "arun-5",
        name: "Arun Blueberry",
        price: 51,
        rating: 4.3,
        ingredients: ["blueberry puree", "milk", "sugar"],
      },
      {
        id: "kwality-5",
        name: "Kwality Blueberry",
        price: 56,
        rating: 4.7,
        ingredients: ["blueberry", "cream", "sugar", "stabilizers"],
      },
    ],
  },
  {
    id: "cookies-cream",
    name: "Cookies & Cream",
    color: "bg-slate-300",
    icon: "🍪",
    description: "Creamy vanilla with chocolate cookie chunks",
    brands: [
      {
        id: "amul-6",
        name: "Amul Cookies",
        price: 48,
        rating: 4.6,
        ingredients: ["cookies", "milk", "sugar", "cream", "vanilla"],
      },
      {
        id: "arun-6",
        name: "Arun Cookies & Cream",
        price: 53,
        rating: 4.4,
        ingredients: ["cookies", "vanilla", "milk", "sugar"],
      },
      {
        id: "kwality-6",
        name: "Kwality Cookies",
        price: 58,
        rating: 4.8,
        ingredients: ["cookies", "cream", "sugar", "vanilla", "stabilizers"],
      },
    ],
  },
]
