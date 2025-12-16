"use client"

import Link from "next/link"
import { LoginForm } from "@/components/login-form"
import { IceCreamIcon } from "@/components/ice-cream-icon"

export default function LoginPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-pink-100 via-blue-100 to-mint-50 flex items-center justify-center px-4">
      <div className="w-full max-w-md">
        <div className="bg-white rounded-3xl shadow-xl p-8 border border-border/50">
          {/* Logo */}
          <Link href="/" className="flex items-center justify-center gap-3 mb-8 group">
            <div className="w-12 h-12 text-primary group-hover:scale-110 transition-transform duration-300">
              <IceCreamIcon />
            </div>
            <span className="font-bold text-xl text-foreground">Scoop Delight</span>
          </Link>

          {/* Heading */}
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-foreground mb-2">Welcome Back</h1>
            <p className="text-muted-foreground">Sign in to your account to continue</p>
          </div>

          {/* Form */}
          <LoginForm />

          {/* Sign up link */}
          <div className="mt-6 text-center">
            <p className="text-muted-foreground">
              Don't have an account?{" "}
              <Link href="/signup" className="text-primary font-semibold hover:underline">
                Sign up
              </Link>
            </p>
          </div>
        </div>
      </div>
    </main>
  )
}
