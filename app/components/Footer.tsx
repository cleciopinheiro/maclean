import { FiInstagram } from "react-icons/fi";
import { BsWhatsapp } from "react-icons/bs";

function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer 
    className="w-full bottom-0 h-12 bg-[var(--primary)] text-white p-4 flex justify-between items-center px-[10%] sm:px-6 sm:justify-center md:px-6"
    >
      <p className="sm:text-center">Copyright © {year} - Maclean Higienização </p>
      <div className="flex gap-4 sm:hidden">
        <a href="https://www.instagram.com/macleanhigienizacao/" target="_blank" rel="noreferrer">
          <FiInstagram size={24} />
        </a>
        <a href="https://api.whatsapp.com/send?phone=5521980493492&text=Ol%C3%A1%2C%20gostaria%20de%20saber%20mais%20sobre%20os%20servi%C3%A7os%20da%20empresa%20✨" target="_blank" rel="noreferrer">
          <BsWhatsapp size={24} />
        </a>
      </div>
    </footer>
  );
}

export default Footer;