import React, { useState, useEffect } from 'react'
import logo from "../../assets/svg.png"

const Nav = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [prevScrollPos, setPrevScrollPos] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      
      setIsScrolled(currentScrollPos > 0);
      
      setIsVisible(prevScrollPos > currentScrollPos || currentScrollPos < 10);
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [prevScrollPos]);

  return (
    <div className={`w-full flex justify-between items-center h-20 px-4 md:px-20 fixed z-50 transition-all duration-300 ${
      isScrolled ? 'bg-[#E5CCC8]' : 'bg-white'
    } ${isVisible ? 'translate-y-0' : '-translate-y-full'}`}>
      {/* Logo - Left aligned */}
      <div className="flex items-center">
        <img className='w-[100px] md:w-[150px]' src={logo} alt="" />
      </div>

      {/* Hamburger for mobile */}
      <div className="md:hidden">
        <button 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className={`flex flex-col gap-1.5 p-2 transition-transform duration-300 ${
            isMenuOpen ? 'rotate-180' : ''
          }`}
        >
          <span className={`block w-6 h-0.5 bg-[#6F3B48] transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
          <span className={`block w-6 h-0.5 bg-[#6F3B48] transition-all duration-300 ${isMenuOpen ? 'opacity-0' : ''}`}></span>
          <span className={`block w-6 h-0.5 bg-[#6F3B48] transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
        </button>
      </div>

      {/* Desktop Center Menu */}
      <div className="hidden md:flex items-center justify-center gap-8 text-[#6F3B48]">
        <a href="#" className="hover:text-black">Home</a>
        <a href="#" className="hover:text-black">About</a>
        <a href="#" className="hover:text-black">Products</a>
        <a href="#" className="hover:text-black">Contact</a>
      </div>

      {/* Desktop Right Section - Auth & Cart */}
      <div className="hidden md:flex items-center gap-6 text-[#6F3B48]">
        <a href="#" className="hover:text-black">Login</a>
        <a href="#" className="hover:text-black">Sign up</a>
        <a href="#" className="hover:text-black">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
          </svg>
        </a>
      </div>

      {/* Mobile Menu - Full Screen */}
      <div className={`fixed top-0 left-0 h-screen w-full bg-[#E5CCC8] transform transition-transform duration-300 ease-in-out ${
        isMenuOpen ? 'translate-x-0' : 'translate-x-full'
      } md:hidden`}>
        {/* Logo in mobile menu */}
        <div className="absolute top-6 left-6">
          <img className='w-[100px]' src={logo} alt="" />
        </div>
        
        {/* Close button */}
        <button 
          onClick={() => setIsMenuOpen(false)}
          className="absolute top-6 right-6 text-[#6F3B48]"
        >
          <svg 
            className="w-8 h-8" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>

        <div className="flex flex-col items-center justify-center h-full gap-8 text-[#6F3B48] text-lg">
          <a href="#" className="hover:text-black">Home</a>
          <a href="#" className="hover:text-black">About</a>
          <a href="#" className="hover:text-black">Products</a>
          <a href="#" className="hover:text-black">Contact</a>
          <a href="#" className="hover:text-black">Login</a>
          <a href="#" className="hover:text-black">Sign up</a>
          <a href="#" className="hover:text-black">Cart</a>
        </div>
      </div>
    </div>
  )
}

export default Nav
