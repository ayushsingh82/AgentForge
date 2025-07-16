'use client';

import React, { useState } from 'react';
import Link from 'next/link';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/95 backdrop-blur-md border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-[#824CFF] rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">C</span>
              </div>
              <span className="text-white font-bold text-xl">CARV</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <Link href="/List" className="text-white hover:text-[#824CFF] transition-colors duration-200">
                List 
              </Link>
              <Link href="/marketplace" className="text-white hover:text-[#824CFF] transition-colors duration-200">
                Marketplace 
              </Link>
              {/* <Link href="/marketplace" className="text-white hover:text-[#824CFF] transition-colors duration-200">
                Marketplace
              </Link>
              <Link href="/developers" className="text-white hover:text-[#824CFF] transition-colors duration-200">
                Developers
              </Link>
              <Link href="/about" className="text-white hover:text-[#824CFF] transition-colors duration-200">
                About
              </Link> */}
            </div>
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Link 
              href="/"
              className="bg-[#824CFF] hover:bg-[#9a5cff] text-white px-6 py-2 rounded-lg font-medium transition-colors duration-200"
            >
              Get Started
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-white hover:text-[#824CFF] focus:outline-none focus:text-[#824CFF]"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-black/95 border-t border-gray-800">
              <Link 
                href="/features" 
                className="text-white hover:text-[#824CFF] block px-3 py-2 transition-colors duration-200"
                onClick={() => setIsMenuOpen(false)}
              >
                Features
              </Link>
              <Link 
                href="/marketplace" 
                className="text-white hover:text-[#824CFF] block px-3 py-2 transition-colors duration-200"
                onClick={() => setIsMenuOpen(false)}
              >
                Marketplace
              </Link>
              <Link 
                href="/developers" 
                className="text-white hover:text-[#824CFF] block px-3 py-2 transition-colors duration-200"
                onClick={() => setIsMenuOpen(false)}
              >
                Developers
              </Link>
              <Link 
                href="/about" 
                className="text-white hover:text-[#824CFF] block px-3 py-2 transition-colors duration-200"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </Link>
              <div className="pt-4">
                <Link 
                  href="/developers"
                  className="bg-[#824CFF] hover:bg-[#9a5cff] text-white px-6 py-2 rounded-lg font-medium transition-colors duration-200 block text-center"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Get Started
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;