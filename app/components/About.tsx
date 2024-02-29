import Image from "next/image";
import { GoStarFill } from "react-icons/go";
import { RiChatSmile2Line } from "react-icons/ri";
import { FaSprayCanSparkles } from "react-icons/fa6";
import { FaRegHandshake } from "react-icons/fa6";
import Whatsapp from "./Whatsapp";

function About() {
    return (
        <section id="about" className="flex items-center justify-between px-[10%] py-16 pt-28 sm:mx-6 sm:flex-col sm:pt-12 sm:items-center sm:justify-center sm:gap-8 md:px-6 md:gap-4">
            <Image src="/sobre.webp" width={500} height={500} alt="sofa" className="md:w-[350px]" />
            <div className="flex flex-col gap-8 items-center sm:justify-center">
                <div className="flex flex-col gap-4">
                    <h1 className="text-[var(--primary)] text-4xl font-bold text-center sm:text-3xl md:text-2xl">SOBRE A MACLEAN</h1>
                    <div className="flex gap-2 self-center">
                        {Array(5).fill(0).map((_, i) => (
                            <GoStarFill key={i} size={24} className="text-yellow-400" />
                        ))}
                    </div>
                </div>
                <p className="w-[80%] sm:w-full sm:text-center md:leading-tight md:w-full">Somos uma empresa <span className="font-bold">especializada</span> em levar mais saúde para o seu lar, através da <span className="font-bold">limpeza e higienização</span> de sofás, colchões, tapetes e estofados em geral. Realizamos a higienização do seu estofado com máquina extratora e escova rotativa, produto <span className="font-bold">mundialmente conhecido</span> e aprovado da marca IPC BRASIL.</p>
                <div className="flex justify-between w-[80%] items-center gap-8 sm:w-full md:w-full">
                    <div className="flex flex-col justify-between items-center text-center leading-tight gap-2">
                        <FaSprayCanSparkles size={50} className="text-[var(--accent)]" />
                        <p className="font-bold text-[var(--primary)]">Produtos de Qualidade</p>
                    </div>
                    <div className="flex flex-col justify-between items-center text-center leading-tight gap-2">
                        <RiChatSmile2Line size={54} className="text-[var(--accent)]" />
                        <p className="font-bold text-[var(--primary)]">Atendimento Personalizado</p>
                    </div>
                    <div className="flex flex-col justify-between items-center text-center leading-tight gap-2">
                        <FaRegHandshake size={54} className="text-[var(--accent)]" />
                        <p className="font-bold text-[var(--primary)]">Excelente Relacionamento</p>
                    </div>
                 </div>
                <Whatsapp />
            </div>
        </section>
    );
}

export default About;