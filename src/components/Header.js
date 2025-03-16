import { Bars3Icon } from '@heroicons/react/24/solid';
import { useState } from 'react';

export default function Header() {
  const [toggleMenu, setToggleMenu] = useState(false);

  // Function to scroll smoothly to sections
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setToggleMenu(false); // Close mobile menu after clicking
    }
  };

  return (
    <header className="flex justify-between px-6 py-4 bg-primary text-white shadow-md fixed top-0 w-full z-50">
      <a className="font-bold text-lg text-white cursor-pointer" onClick={() => scrollToSection('home')}>
        Sasmitha K
      </a>

      <nav className="hidden md:block">
        <ul className="flex space-x-6">
          <li><a className="hover:text-blue-300 cursor-pointer" onClick={() => scrollToSection('home')}>Home</a></li>
          <li><a className="hover:text-blue-300 cursor-pointer" onClick={() => scrollToSection('about')}>About</a></li>
          <li><a className="hover:text-blue-300 cursor-pointer" onClick={() => scrollToSection('details')}>Projects</a></li>
          <li><a className="hover:text-blue-300 cursor-pointer" onClick={() => scrollToSection('resume')}>Resume</a></li>
          <li><a className="hover:text-blue-300 cursor-pointer" onClick={() => scrollToSection('contact')}>Contact</a></li>
        </ul>
      </nav>

      {/* Mobile Menu */}
      {toggleMenu && (
        <nav className="block md:hidden mobile-nav absolute top-12 left-0 w-full bg-gray-800 p-5 shadow-lg">
          <ul className="flex flex-col items-center space-y-3">
            <li><a className="hover:text-blue-400 cursor-pointer" onClick={() => scrollToSection('home')}>Home</a></li>
            <li><a className="hover:text-blue-400 cursor-pointer" onClick={() => scrollToSection('about')}>About</a></li>
            <li><a className="hover:text-blue-400 cursor-pointer" onClick={() => scrollToSection('details')}>Projects</a></li>
            <li><a className="hover:text-blue-400 cursor-pointer" onClick={() => scrollToSection('resume')}>Resume</a></li>
            <li><a className="hover:text-blue-400 cursor-pointer" onClick={() => scrollToSection('contact')}>Contact</a></li>
          </ul>
        </nav>
      )}

      <button onClick={() => setToggleMenu(!toggleMenu)} className="block md:hidden">
        <Bars3Icon className="text-white h-6" />
      </button>
    </header>
  );
}
