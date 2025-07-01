import React from 'react'
import { MdEmail } from "react-icons/md"
import { FaPhoneAlt } from "react-icons/fa"

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="text-center space-y-3">
        <p className="flex items-center justify-center gap-2 text-sm">
          <MdEmail className="text-lg" />
          <span>Email: <a href="mailto:kartikpatil1006@gmail.com" className="underline hover:text-blue-400">kartikpatil1006@gmail.com</a></span>
        </p>
        <p className="flex items-center justify-center gap-2 text-sm">
          <FaPhoneAlt className="text-sm" />
          <span>Phone: <a href="tel:9370341258" className="underline hover:text-blue-400">9370341258</a></span>
        </p>
        <p className="text-sm">
          Address: <span className="font-light">Malkapur 443101, Maharashtra, India</span>
        </p>
        <p className="text-xs text-gray-400 mt-4">
          © {new Date().getFullYear()} Kartik. All rights reserved.
        </p>
      </div>
    </footer>
  )
}

export default Footer
