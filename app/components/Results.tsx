import BeforeAfter from "./BeforeAfter";

function Results() {
    return (
        <section id="results" className="flex flex-col items-center justify-center px-[10%] py-8 gap-8 sm:px-6">
            <h1 className="text-[var(--primary)] text-3xl font-bold text-center sm:text-3xl">VEJA O <span className="text-[var(--accent)]">RESULTADO</span> DO NOSSO SERVIÇO</h1>
            <BeforeAfter />
        </section>
    );
}

export default Results;