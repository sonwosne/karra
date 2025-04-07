import { useState } from 'react';
import Nimadirmi from "../img/logoyim.svg"

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-neutral-900 text-white py-3 px-4 sm:px-8 flex flex-wrap justify-between items-center sticky top-0 z-50">
   
      <div className="flex items-center">
        <img
          className="h-12 w-auto ml-4 sm:ml-28"
          src={Nimadirmi}
          alt="Logo"
        />
        <span className="text-xl font-semibold ml-2">Karra o'sish</span>
      </div>

      <button 
        className="md:hidden p-2 mr-4"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        aria-label="Toggle menu"
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          {isMenuOpen ? (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          ) : (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          )}
        </svg>
      </button>
      <nav className={`${isMenuOpen ? 'block' : 'hidden'} md:flex gap-7 text-lg w-full md:w-auto mt-4 md:mt-0 bg-neutral-900 md:bg-transparent pb-4 md:pb-0`}>
        <a 
          href="#" 
          className="block py-2 px-4 hover:text-blue-400" 
          onClick={() => {
            document.getElementById("main-section")?.scrollIntoView({ behavior: "smooth" });
            setIsMenuOpen(false);
          }}
        >
          Asosiy
        </a>
        <a 
          href="#" 
          className="block py-2 px-4 hover:text-blue-400" 
          onClick={() => {
            document.getElementById("about-section")?.scrollIntoView({ behavior: "smooth" });
            setIsMenuOpen(false);
          }}
        >
          Haqida
        </a>
        <a 
          href="#" 
          className="block py-2 px-4 hover:text-blue-400" 
          onClick={() => {
            document.getElementById("modules-section")?.scrollIntoView({ behavior: "smooth" });
            setIsMenuOpen(false);
          }}
        >
          Modullar
        </a>
        <a 
          href="#" 
          className="block py-2 px-4 hover:text-blue-400" 
          onClick={() => {
            document.getElementById("photogallery-section")?.scrollIntoView({ behavior: "smooth" });
            setIsMenuOpen(false);
          }}
        >
          Fotogalareya
        </a>
        <a 
          href="#" 
          className="block py-2 px-4 hover:text-blue-400" 
          onClick={() => {
            document.getElementById("comments-section")?.scrollIntoView({ behavior: "smooth" });
            setIsMenuOpen(false);
          }}
        >
          Sharxlar
        </a>
      </nav>

      <button 
        className={`${isMenuOpen ? 'hidden' : 'block'} md:block text-lg bg-blue-400 text-white py-2 px-4 rounded-full mr-4 sm:mr-28 hover:bg-blue-500 transition-colors mt-4 md:mt-0 w-full md:w-auto text-center`}
        onClick={() => {
          document.getElementById("registration-form")?.scrollIntoView({ behavior: "smooth" });
          setIsMenuOpen(false);
        }}
      >
        Qabulga yozilish
      </button>
      
    </header>
  );
};

export default Header;