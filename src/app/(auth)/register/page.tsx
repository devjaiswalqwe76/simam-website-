"use client";
import Link from "next/link";

export default function RegisterPage() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-gray-50 p-8">
      <div className="w-full max-w-md bg-white rounded-xl shadow p-6">
        <h1 className="text-2xl font-bold mb-4">Register</h1>
        <form className="space-y-4">
          <input type="text" placeholder="Full Name" className="w-full border p-2 rounded" />
          <input type="email" placeholder="Email" className="w-full border p-2 rounded" />
          <input type="password" placeholder="Password" className="w-full border p-2 rounded" />
          <button type="submit" className="w-full bg-green-600 text-white p-2 rounded">Create Account</button>
        </form>
        <p className="mt-4 text-sm text-gray-600">
          Already have an account? <Link href="/login" className="text-blue-600">Sign in</Link>
        </p>
      </div>
    </main>
  );
}
