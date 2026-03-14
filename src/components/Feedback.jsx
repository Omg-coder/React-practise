import React from 'react'

function Feedback() {
  return (
    <>
    <div className="bg-linear-to-r from-purple-900 via-blue-900 to-black text-white rounded-lg shadow-lg min-w-screen min-h-screen flex items-center justify-center">
      <div className="max-w-md w-full p-6">
        <h2 className="text-3xl font-bold mb-6 text-center">Feedback</h2>
        <form className="space-y-4">
          <div>
            <label className="block mb-1 font-semibold">Your Feedback</label>
            <textarea className="w-full p-3 rounded-lg bg-gray-800 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Enter your feedback here..." rows="5"></textarea>
            <button type="submit" className="mt-4 bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded transition">Submit Feedback</button>
          </div>
        </form>
      </div>
    </div>
   </>
  )
}

export default Feedback