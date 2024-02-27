import Image from "next/image";
import Button from "./Button";
import { BsWhatsapp } from "react-icons/bs";

function Menu() {
  function handleWhatsapp() {
    window.open('https://api.whatsapp.com/send?phone=5521980493492&text=Ol%C3%A1%2C%20gostaria%20de%20saber%20mais%20sobre%20os%20servi%C3%A7os%20da%20empresa%20✨', '_blank');
  }

  return (
    <nav className="w-full h-16 bg-[var(--primary)] py-10 flex justify-between items-center px-[10%] sm:px-6 sm:fixed sm:z-50">
      <a href="#">
        <Image src="/logomarca.webp" alt="Logo" width={150} height={40} />
      </a>
      <div className="flex items-center gap-8 sm:hidden">
        <a href="#" className="text-white hover:text-[var(--accent)] transition duration-300 ease-in-out">Início</a>
        <a href="#" className="text-white hover:text-[var(--accent)] transition duration-300 ease-in-out">Quem somos</a>
        <a href="#" className="text-white hover:text-[var(--accent)] transition duration-300 ease-in-out">Serviços</a>
        <a href="#" className="text-white hover:text-[var(--accent)] transition duration-300 ease-in-out">Resultados</a>
        <Button text="Orçamento" style="py-2" onClick={handleWhatsapp} icon={<BsWhatsapp size={18} />} />
      </div>
      <Button text="Orçamento" style="py-2 lg:hidden md:hidden sm:py-3" onClick={handleWhatsapp} icon={<BsWhatsapp size={18} />} />
    </nav>
  );
}

export default Menu;