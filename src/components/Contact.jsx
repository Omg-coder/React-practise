import React from 'react'

function Contact() {
  return (
    <>
      <div className="bg-linear-to-r from-purple-900 via-blue-900 to-black text-white rounded-lg shadow-lg min-w-screen min-h-screen flex items-center justify-center">
        <div className="max-w-md w-full p-6">
          <h2 className="text-3xl font-bold mb-6 text-center">Contact Us</h2>
          <form className="space-y-4">
            <div>
              <label className="block mb-1 font-semibold">Name</label>
              <input type="text" className="w-full p-3 rounded-lg bg-gray-800 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Your Name" />
            </div>
            <div>
              <label className="block mb-1 font-semibold">Email</label>
              <input type="email" className="w-full p-3 rounded-lg bg-gray-800 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="enter your email" />
            </div>
          </form>
        </div>
      </div>
    </>
  )
}

export default Contact