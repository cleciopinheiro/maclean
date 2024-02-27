import { FiInstagram } from "react-icons/fi";
import { BsWhatsapp } from "react-icons/bs";

function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer 
    className="w-full bottom-0 h-12 bg-[var(--primary)] text-white p-4 flex justify-between items-center px-[10%]"
    >
      <p>Copyright © {year} - Maclean Higienização </p>
      <div className="flex gap-4">
        <a href="https://www.instagram.com/macleanhigienizacao/" target="_blank" rel="noreferrer">
          <FiInstagram size={24} />
        </a>
        <a href="https://api.whatsapp.com/send?phone=5519999999999" target="_blank" rel="noreferrer">
          <BsWhatsapp size={24} />
        </a>
      </div>
    </footer>
  );
}

export default Footer;