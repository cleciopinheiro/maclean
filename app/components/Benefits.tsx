import { PiClockCountdownBold } from "react-icons/pi";
import { TbTexture } from "react-icons/tb";
import { PiVirus } from "react-icons/pi";


function Benefits() {
    return (
        <div className="self-center absolute top-[570px] flex bg-[var(--primary-soft)] w-[60%] h-24 rounded-3xl p-8 items-center justify-between text-white">
            <div className="flex gap-2 items-center">
                <PiClockCountdownBold className="text-4xl" />
                <h3 className="font-bold leading-tight">Processo rápido <br /> e prático</h3>
            </div>
            <div className="flex gap-2 items-center">
                <TbTexture className="text-4xl" />
                <h3 className="font-bold leading-tight">Não modifica a cor,<br />textura e toque</h3>
            </div>
            <div className="flex gap-2 items-center">
                <PiVirus className="text-4xl" />
                <h3 className="font-bold leading-tight">Remove manchas que não<br />agrediram a fibra do tecido</h3>
            </div>
        </div>
    );
}

export default Benefits;