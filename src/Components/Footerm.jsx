import { FaFacebook, FaInstagram, FaTelegram } from 'react-icons/fa';
import Nimadirmi from "../img/logoyim.svg"

const Footer = () => {
  return (
    <footer className="bg-neutral-800 text-white py-4 sm:py-6 px-4 sm:px-6 md:px-8 flex flex-col sm:flex-row justify-between items-center gap-4 sm:gap-0">
      <div className="flex items-center gap-2 sm:gap-4 ml-0 sm:ml-4 md:ml-20">
        <img 
          className="h-8 sm:h-10 md:h-12 w-auto" 
          src={Nimadirmi} 
          alt="Logo"
        />
        <span className="text-xl sm:text-2xl font-bold">Karra o'sish</span>
      </div>

      <nav className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4 md:gap-6">
        <a href="#" className="text-sm sm:text-base hover:text-blue-400">Asosiy</a>
        <a href="#" className="text-sm sm:text-base hover:text-blue-400">Haqida</a>
        <a href="#" className="text-sm sm:text-base hover:text-blue-400">Modullar</a>
        <a href="#" className="text-sm sm:text-base hover:text-blue-400">Fotogalareya</a>
        <a href="#" className="text-sm sm:text-base hover:text-blue-400">Sharxlar</a>
      </nav>

      <div className="flex gap-4 sm:gap-6 mr-0 sm:mr-4 md:mr-10">
        <a href="#" aria-label="Facebook">
          <FaFacebook className="text-white text-xl sm:text-2xl hover:text-blue-600 transition-colors" />
        </a>
        <a href="#" aria-label="Instagram">
          <FaInstagram className="text-white text-xl sm:text-2xl hover:text-pink-600 transition-colors" />
        </a>
        <a href="#" aria-label="Telegram">
          <FaTelegram className="text-white text-xl sm:text-2xl hover:text-blue-400 transition-colors" />
        </a>
      </div>
    </footer>
  );
};

export default Footer;