import React from 'react'
import { PiInstagramLogoFill } from "react-icons/pi"
import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa"
import { FaXTwitter } from "react-icons/fa6"
import { CgMail } from "react-icons/cg"

const Contact = () => {
    return (
        <div className="max-w-4xl mx-auto px-4 py-10 text-center">
            <h1 className="text-2xl font-bold text-blue-700 mb-6">Reach Me by Filling This Form</h1>

            {/* Contact Form Section */}
            <div className="bg-white shadow-md border border-blue-300 rounded-xl p-6 mb-10">
                <form action="https://formspree.io/f/mvgrlvev" method='post' className="space-y-4">
                    <div className="text-left">
                        <label htmlFor="name" className="block text-gray-700 font-semibold">Name:</label>
                        <input type="text" id="name" name="name" className="w-full border border-gray-300 rounded px-3 py-2 mt-1 focus:outline-none focus:ring-2 focus:ring-blue-400" />
                    </div>

                    <div className="text-left">
                        <label htmlFor="email" className="block text-gray-700 font-semibold">Email:</label>
                        <input type="email" id="email" name="email" className="w-full border border-gray-300 rounded px-3 py-2 mt-1 focus:outline-none focus:ring-2 focus:ring-blue-400" />
                    </div>

                    <div className="text-left">
                        <label htmlFor="mass" className="block text-gray-700 font-semibold">Message:</label>
                        <textarea id="mass" name="massage"  className="w-full border border-gray-300 rounded px-3 py-2 mt-1 focus:outline-none focus:ring-2 focus:ring-blue-400"></textarea>
                    </div>

                    <button type="submit" className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition duration-300">Send</button>
                </form>
            </div>

            {/* OR Separator */}
            <h1 className="text-xl font-bold text-gray-700 mb-4">OR</h1>

            {/* Social Section */}
            <div>
                <h1 className="text-2xl font-bold text-blue-700 mb-6">Reach Me On</h1>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 justify-items-center">
                    <a href="#" className="flex items-center gap-2 border border-pink-500 text-pink-600 px-4 py-2 rounded-lg shadow hover:scale-105 transition-transform">
                        <PiInstagramLogoFill className="text-xl" /> Instagram
                    </a>

                    <a href="#" className="flex items-center gap-2 border border-blue-600 text-blue-600 px-4 py-2 rounded-lg shadow hover:scale-105 transition-transform">
                        <FaFacebook className="text-xl" /> Facebook
                    </a>

                    <a href="https://x.com/_kartik_patil" className="flex items-center gap-2 border border-black text-black px-4 py-2 rounded-lg shadow hover:scale-105 transition-transform">
                        <FaXTwitter className="text-xl" /> X (Twitter)
                    </a>

                    <a href="https://github.com/Kartikp12" className="flex items-center gap-2 border border-gray-700 text-gray-700 px-4 py-2 rounded-lg shadow hover:scale-105 transition-transform">
                        <FaGithub className="text-xl" /> GitHub
                    </a>

                    <a href="http://linkedin.com/in/kartik-patil-6808121b6/" className="flex items-center gap-2 border border-blue-700 text-blue-700 px-4 py-2 rounded-lg shadow hover:scale-105 transition-transform">
                        <FaLinkedin className="text-xl" /> LinkedIn
                    </a>

                    <a href="kartikpatil1006@gmail.com" className="flex items-center gap-2 border border-red-500 text-red-600 px-4 py-2 rounded-lg shadow hover:scale-105 transition-transform">
                        <CgMail className="text-xl" /> Email
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Contact
