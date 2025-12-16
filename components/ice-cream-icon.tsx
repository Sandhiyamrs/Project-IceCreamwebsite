export function IceCreamIcon() {
  return (
    <svg className="w-full h-full" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Cone */}
      <path d="M40 50 L35 85 Q50 88 65 85 L60 50 Z" fill="currentColor" className="text-orange-400" />
      {/* Ice cream scoop */}
      <circle cx="50" cy="42" r="18" fill="currentColor" className="text-pink-300" />
      {/* Highlight */}
      <ellipse cx="45" cy="35" rx="6" ry="5" fill="white" opacity="0.6" />
    </svg>
  )
}
