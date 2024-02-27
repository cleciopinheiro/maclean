import Image from "next/image";
import Button from "./Button";
import { BsWhatsapp } from "react-icons/bs";

function Hero() {
    function handleWhatsapp() {
        window.open('https://api.whatsapp.com/send?phone=5521980493492&text=Ol%C3%A1%2C%20gostaria%20de%20saber%20mais%20sobre%20os%20servi%C3%A7os%20da%20empresa%20✨', '_blank');
      }    
    return (
        <section className="flex items-center justify-between bg-[var(--primary)] px-[10%] py-16 pb-24">
            <div className="flex flex-col gap-8">
                <h1 className="font-bold text-[var(--accent)] text-4xl">LIMPEZA & HIGIENIZAÇÃO<br /> <span className="text-white">DE ESTOFADOS É A NOSSA ESPECIALIDADE</span></h1>
                <p className="w-[70%] text-white">Utilizando produtos e equipamentos <span className="font-bold">especializados</span>, promovemos uma <span className="font-bold">limpeza profunda</span>, deixando o estofamento <span className="font-bold">totalmente limpo, livre de bactérias, fungos e ácaros.</span></p>
                <Button text="Solicitar orçamento" icon={<BsWhatsapp size={32}/>} onClick={handleWhatsapp} style="w-[50%] text-[18px]" />
            </div>
            <Image src="/hero.webp" width={500} height={500} alt="sofa" />
        </section>
    );
}

export default Hero;