"use client"

import Link from "next/link"
import { SignupForm } from "@/components/signup-form"
import { IceCreamIcon } from "@/components/ice-cream-icon"

export default function SignupPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-pink-100 via-blue-100 to-mint-50 flex items-center justify-center px-4">
      <div className="w-full max-w-md">
        <div className="bg-white rounded-3xl shadow-xl p-8 border border-border/50">
          <Link href="/" className="flex items-center justify-center gap-3 mb-8 group">
            <div className="w-12 h-12 text-primary group-hover:scale-110 transition-transform duration-300">
              <IceCreamIcon />
            </div>
            <span className="font-bold text-xl text-foreground">Scoop Delight</span>
          </Link>

          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-foreground mb-2">Create Account</h1>
            <p className="text-muted-foreground">Join us to start exploring flavors</p>
          </div>

          <SignupForm />

          <div className="mt-6 text-center">
            <p className="text-muted-foreground">
              Already have an account?{" "}
              <Link href="/login" className="text-primary font-semibold hover:underline">
                Login
              </Link>
            </p>
          </div>
        </div>
      </div>
    </main>
  )
}
