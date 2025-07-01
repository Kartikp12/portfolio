import React from 'react'
import Link from 'next/link'

const NavBar = () => {
  return (
    <nav className="bg-white shadow-md sticky top-0 z-50 h-16">
      <div className="container mx-auto px-6 py-4 flex items-center justify-between h-full">
        {/* Logo */}
        <Link href="/">
          <h1 className="text-2xl font-extrabold text-blue-600 hover:text-blue-800 transition-colors duration-300 cursor-pointer">
            Kartik.Dev
          </h1>
        </Link>

        {/* Navigation Links */}
        <div className="flex gap-8">
          <Link href="/about">
            <h1 className="text-lg font-medium text-gray-700 hover:text-blue-600 transition duration-300 cursor-pointer">
              About
            </h1>
          </Link>
          <Link href="/contact">
            <h1 className="text-lg font-medium text-gray-700 hover:text-blue-600 transition duration-300 cursor-pointer">
              Contact
            </h1>
          </Link>
        </div>
      </div>
    </nav>
  )
}

export default NavBar
