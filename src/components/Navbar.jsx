import React from 'react'

function Navbar() {
  return (
    <>
      <nav className='flex justify-between items-center p-5 bg-linear-to-r from-purple-900 via-blue-900 to-black text-white sticky top-0 z-10'>

        <h1 className='text-2xl font-bold'>My App</h1>

        <ul className='flex gap-5'>
          <li className='hover:cursor-pointer' onClick={() => {
            const el = document.getElementById('Hero');
            if (el) el.scrollIntoView({ behavior: 'smooth' });
          }}>Home</li>
          <li className='hover:cursor-pointer' onClick={() => {
            const el = document.getElementById('features');
            if (el) el.scrollIntoView({ behavior: 'smooth' });
          }}>Features</li>
          <li className='hover:cursor-pointer' onClick={() => {
            const el = document.getElementById('about');
            if (el) el.scrollIntoView({ behavior: 'smooth' });
          }}>About</li>
          <li className='hover:cursor-pointer' onClick={() => {
            const el = document.getElementById('contact');
            if (el) el.scrollIntoView({ behavior: 'smooth' });
          }}>Contact</li>
          <li className='hover:cursor-pointer' onClick={() => {
            const el = document.getElementById('feedback');
            if (el) el.scrollIntoView({ behavior: 'smooth' });
          }}>Feedback</li>
        </ul>

        <div className='flex gap-5'>
          <button className='border p-2 border-gray-800 rounded-lg hover:border-amber-50'>Login</button>
          <button className='border p-2 border-gray-800 rounded-lg hover:border-amber-50'>Sign-up</button>
        </div>

      </nav>
    </>
  )
}

export default Navbar