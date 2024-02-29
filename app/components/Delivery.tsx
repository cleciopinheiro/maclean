import Image from "next/image";
import Button from "./Button";
import { BsWhatsapp } from "react-icons/bs";

function Delivery() {
    function handleWhatsapp() {
        window.open('https://api.whatsapp.com/send?phone=5521980493492&text=Ol%C3%A1%2C%20gostaria%20de%20saber%20mais%20sobre%20os%20servi%C3%A7os%20da%20empresa%20✨', '_blank');
      }

    return (
        <section className="flex items-center justify-center px-[10%] py-8 sm:px-6 sm:flex-col sm:justify-center sm:items-center md:px-6">
            <Image src="/domicilio.webp" width={480} height={480} alt="domicilio" className="rounded-lg sm:order-1 md:w-[350px]" />
            <div className="bg-[var(--primary)] flex flex-col gap-4 rounded-xl p-4 w-[400px] sm:w-full sm:gap-6 sm:text-center sm:py-8 md:w-[320px] md:h-[300px]">
                <h2 className="text-white text-xl font-bold">NÓS VAMOS ATÉ VOCÊ!</h2>
                <p className="text-white">Higienizamos, eliminando bactérias, fungos e ácaros. O produto é auto-secante, sem necessidade de exposição ao sol. Seu estofado estará totalmente seco em apenas algumas horas.
                </p>
                <p className="text-white">Atendemos no Rio de Janeiro, Capital e Grande Rio.</p>
                <Button text="Solicitar orçamento" icon={<BsWhatsapp size={32}/>} onClick={handleWhatsapp} style="w-[340px] text-[18px] sm:w-full sm:py-3 md:w-full md:py-2" />
            </div>
        </section>
    );
}

export default Delivery;