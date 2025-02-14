'use client'

import { signOut } from "next-auth/react"
import { useSession } from "next-auth/react"
import { redirect } from "next/navigation"

export default function AccountPage() {
  const { data: session, status } = useSession()
  
  if (status === "loading") {
    return <div>Loading...</div>
  }
  
  if (!session?.user) {
    redirect('/')
  }

  return (
    <div className="container mx-auto py-10">
      <h1 className="text-2xl font-bold mb-8">Account Settings</h1>
      
      <div className="space-y-6">
        <div className="border rounded-lg p-4">
          <h2 className="text-lg font-semibold mb-4 text-primary">Profile Information</h2>
          <div className="space-y-2">
            <p><span className="font-medium">Name:</span> {session.user.name}</p>
            <p><span className="font-medium">Email:</span> {session.user.email}</p>
          </div>
        </div>
        
        <button
          onClick={() => signOut({ callbackUrl: '/' })}
          className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-md"
        >
          Sign Out
        </button>
      </div>
    </div>
  )
} 