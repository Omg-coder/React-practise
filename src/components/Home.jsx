import React from 'react'
import heroImage from '../assets/hero.png'
import Features from './Features';
import About from './About';
import Contact from './Contact';
import Feedback from './Feedback';

function Home() {
  return (
    <>
      <section className='min-h-screen bg-linear-to-r from-purple-900 via-blue-900 to-black text-white flex items-center ' id='Hero'>
        <div className='max-w-6xl mx-auto grid md:grid-cols-2 gap-10 px-6'>
          <div className='flex flex-col justify-center'>
            <h1 className='text-4xl md:text-6xl font-bold mb-6'>Welcome to Our Website</h1>
            <p className='text-lg md:text-xl mb-8'>Discover amazing features and connect with us today!</p>
            <a href="/features" className='bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded max-w-3xs transition'>Explore Features</a>
          </div>
          <div>
            <img src={heroImage} alt="Home" className='rounded-lg shadow-lg opacity-80' />
          </div>
        </div> 
      </section>
      <section id='features' className='min-h-screen'><Features/></section>
      <section id='about' className='min-h-screen'><About/></section>
      <section id='contact' className='min-h-screen'><Contact/></section>
      <section id='feedback' className='min-h-screen'><Feedback/></section>
    </>
  );
}

export default Home