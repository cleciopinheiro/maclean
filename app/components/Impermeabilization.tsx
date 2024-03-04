import Image from "next/image";

function Impermeabilization() {
    return (
        <section className="flex flex-col items-center justify-center px-[10%] py-8 gap-8 sm:px-6 md-px-6">
            <p className="text-[var(--primary)] text-4xl font-bold text-center sm:text-3xl md:text-2xl">PROTEJA SEU ESTOFADO COM NOSSA <span className="text-[var(--accent)]">IMPERMEABILIZAÇÃO</span> PROFISSIONAL</p>
            <Image src="/impermeabilizacao.webp" alt="Impermeabilização" width={800} height={600} className="rounded-3xl" />
        </section>
    );
}

export default Impermeabilization;