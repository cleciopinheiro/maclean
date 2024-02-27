import Image from "next/image";
import { BsWhatsapp } from "react-icons/bs";


function Whatsapp() {
  function handleWhatsapp() {
    window.open('https://api.whatsapp.com/send?phone=5521980493492&text=Ol%C3%A1%2C%20gostaria%20de%20saber%20mais%20sobre%20os%20servi%C3%A7os%20da%20empresa%20✨', '_blank');
  }   
  return (
    <div
      onClick={handleWhatsapp}
      className="flex bg-[var(--primary)] w-[80%] h-16 rounded-md text-white justify-between items-center px-4 py-4 cursor-pointer"
    >
      <div className="flex gap-4">
        <Image 
          src="/atendente.webp" 
          width={50}
          height={50}
          alt="atendente"
          className="rounded-full"
        />
        <div>
          <p className="text-[12px]">Agende seu serviço conosco:</p>
          <h2 className="font-bold text-2xl">(21) 98049-3492</h2>
        </div>
      </div>
      <BsWhatsapp size={40} className="text-[var(--accent)]" />
    </div>
  );
}

export default Whatsapp;