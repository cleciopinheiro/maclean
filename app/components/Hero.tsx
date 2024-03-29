import Image from "next/image";
import Button from "./Button";
import { BsWhatsapp } from "react-icons/bs";

function Hero() {
    function handleWhatsapp() {
        window.open('https://api.whatsapp.com/send?phone=5521980493492&text=Ol%C3%A1%2C%20gostaria%20de%20saber%20mais%20sobre%20os%20servi%C3%A7os%20da%20empresa%20✨', '_blank');
      }

    return (
        <section id="home" className="flex items-center justify-between bg-[var(--primary)] px-[10%] py-16 pb-24 sm:pt-28 sm:px-6 sm:justify-center sm:flex-col sm:gap-8 sm:pb-8 md:px-6">
            <div className="flex flex-col gap-8 sm:items-center md:items-start">
                <h1 className="font-bold text-[var(--accent)] text-4xl sm:text-3xl sm:text-center md:text-2xl">LIMPEZA & HIGIENIZAÇÃO<br /> <span className="text-white">DE ESTOFADOS É A NOSSA ESPECIALIDADE</span></h1>
                <p className="w-[70%] text-white sm:w-full sm:text-center md:w-full">Utilizando produtos e equipamentos <span className="font-bold">especializados</span>, promovemos uma <span className="font-bold">limpeza profunda</span>, deixando o estofamento <span className="font-bold">totalmente limpo, livre de bactérias, fungos e ácaros.</span></p>
                <Button text="Solicitar orçamento" icon={<BsWhatsapp size={32}/>} onClick={handleWhatsapp} style="w-[50%] text-[18px] sm:w-full md:w-[80%]" />
            </div>
            <Image src="/hero.webp" width={500} height={500} alt="sofa" className="md:w-[350px]" />
        </section>
    );
}

export default Hero;