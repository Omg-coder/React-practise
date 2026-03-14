import React from 'react'

function Features() {
  return (

    <div className=" bg-linear-to-r from-purple-900 via-blue-900 to-black text-white rounded-lg shadow-lg min-w-screen min-h-screen  flex flex-col items-center justify-center p-10">
        <h2 className="text-4xl font-bold text-center mb-10">
          Powerful Features
        </h2>

        <p className="text-center text-gray-400 mb-12">
          Everything you need to build modern web applications.
        </p>
      <div className="grid md:grid-cols-4 gap-8">


        <div className="bg-gray-900 p-6 rounded-xl text-center hover:scale-105 transition">
          <h3 className="text-xl font-semibold mb-2">Fast Performance</h3>
          <p className="text-gray-400">
            Optimized for speed and efficiency.
          </p>
        </div>

        <div className="bg-gray-900 p-6 rounded-xl text-center hover:scale-105 transition">
          <h3 className="text-xl font-semibold mb-2">Modern UI</h3>
          <p className="text-gray-400">
            Beautiful design using Tailwind CSS.
          </p>
        </div>

        <div className="bg-gray-900 p-6 rounded-xl text-center hover:scale-105 transition">
          <h3 className="text-xl font-semibold mb-2">Secure</h3>
          <p className="text-gray-400">
            Built with modern security standards.
          </p>
        </div>

        <div className="bg-gray-900 p-6 rounded-xl text-center hover:scale-105 transition">
          <h3 className="text-xl font-semibold mb-2">Responsive</h3>
          <p className="text-gray-400">
            Works perfectly on all devices.
          </p>
        </div>

      </div>
    </div>

  )
}

export default Features