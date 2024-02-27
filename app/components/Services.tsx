import Image from "next/image";
import Button from "./Button";
import { BsWhatsapp } from "react-icons/bs";
import services from "../constants/Services";

function Services() {
    function handleWhatsapp() {
        window.open('https://api.whatsapp.com/send?phone=5521980493492&text=Ol%C3%A1%2C%20gostaria%20de%20saber%20mais%20sobre%20os%20servi%C3%A7os%20da%20empresa%20✨', '_blank');
      }

    return (
        <section className="flex flex-col items-center justify-center px-[10%] py-24 gap-12">
            <h1 className="text-[var(--primary)] text-3xl font-bold text-center">O QUE VOCÊ <span className="text-[var(--accent)]">PRECISA?</span></h1>
            <div className="flex flex-wrap gap-12 justify-between pb-12">
                {
                    services.map((service, index) => (
                        <div key={index} className="flex flex-col justify-between items-center cursor-pointer hover:scale-125 transition duration-500 ease-in-out">
                            <Image src={service.image} width={240} height={240} alt={service.text} />
                            <h2 className="font-bold text-[var(--primary)] text-xl">{service.text}</h2>
                        </div>
                    ))
                }  
            </div>
            <Button text="Solicitar orçamento" icon={<BsWhatsapp size={32}/>} onClick={handleWhatsapp} style="w-[40%] text-[18px]" />
        </section>
    );
}

export default Services;