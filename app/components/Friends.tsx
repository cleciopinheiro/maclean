import Image from "next/image";
import DividerBottom from "./DividerBottom";
import DividerTop from "./DividerTop";
import { LuSofa } from "react-icons/lu";
import { FaBacteria } from "react-icons/fa6";
import { BsHourglassSplit } from "react-icons/bs";

function Friends() {
    return (
        <section className="relative bg-gray-100 flex flex-col gap-8 items-center justify-between">
            <DividerTop />
            <div className="flex justify-between items-center gap-8 mt-36 sm:mt-32 sm:flex-col">
                <Image src="/amigos.webp" width={700} height={700} alt="Amigos" className="" />
                <div className="flex flex-col mr-[10%] gap-4 sm:m-0 sm:px-6 sm:items-center">
                    <h1 className="text-[var(--primary)] text-2xl font-bold sm:text-center sm:text-xl">NADA MELHOR QUE CHEGAR EM CASA E TER UM CANTINHO ACONCHEGANTE E CONFORTÁVEL PARA RELAXAR APÓS UM DIA DE TRABALHO</h1>
                    <div className="bg-green-50 border border-green-400 flex rounded-md p-3 items-center gap-4 text-green-600 sm:w-full">
                        <BsHourglassSplit size={36} />
                        <p className="font-bold leading-tight">Você quer que eles permaneçam bem cuidados com o passar do tempo?</p>
                    </div>
                    <div className="bg-green-50 border border-green-400 flex rounded-md p-3 items-center gap-4 text-green-600 sm:w-full">
                        <LuSofa size={36} />
                        <p className="font-bold leading-tight">Quer deixá-lo sempre limpo e aconchegante?</p>
                    </div>
                    <div className="bg-green-50 border border-green-400 flex rounded-md p-3 items-center gap-4 text-green-600 sm:w-full">
                        <FaBacteria size={36} />
                        <p className="font-bold leading-tight">Quer eliminar fungos, bactérias e ácaros?</p>
                    </div>
                </div>
            </div>
            <div className="flex mb-36 mx-[10%] mt-20 gap-8 items-center sm:flex-col sm:mt-8 sm:justify-start sm:items-center sm:mx-6">
                <h1 className="text-[var(--primary)] text-2xl font-bold sm:text-center">É ISSO QUE SAI DO SOFÁ QUANDO VOCÊ FAZ A HIGIENIZAÇÃO</h1>
                <Image src="/sujeira.webp" width={540} height={540} alt="Sofá" className="rounded-lg" />
            </div>
            <DividerBottom />
        </section >
    );
}

export default Friends;