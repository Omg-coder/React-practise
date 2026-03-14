import React from 'react'

function About() {
  return (
   <>
    <div className="bg-linear-to-r from-purple-900 via-blue-900 to-black text-white rounded-lg shadow-lg min-w-screen min-h-screen flex items-center justify-center">
      <div className="max-w-3xl w-full p-6">
        <h2 className="text-3xl font-bold mb-6 text-center">About Us</h2>
        <p className="text-gray-400 text-lg leading-relaxed">
          We are a passionate team dedicated to creating amazing web experiences. Our mission is to build fast, secure, and beautiful applications that delight users around the world. With a focus on modern technologies and best practices, we strive to deliver high-quality products that exceed expectations.
        </p>
      </div>
    </div>
   </>
  )
}

export default About