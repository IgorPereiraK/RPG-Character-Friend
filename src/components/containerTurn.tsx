import { useState } from "react";
import ButtonTurn from "./buttons/buttonTurn";
import { IoMdArrowRoundBack, IoMdArrowRoundForward } from "react-icons/io";

type UpdateSkillFunction = () => void;

interface ContainerTurnProps {
    updateCooldown: UpdateSkillFunction
    updateArmaduraDarkinGuren: UpdateSkillFunction
    updateFluxoDaAguaGuren: UpdateSkillFunction
    updateKarmaGuren: UpdateSkillFunction
    updateGuerreiroDoMarGuren: UpdateSkillFunction
}

export default function ContainerTurn({ updateCooldown, updateArmaduraDarkinGuren, updateFluxoDaAguaGuren, updateKarmaGuren, updateGuerreiroDoMarGuren }: ContainerTurnProps) {

    const [numberRound, setNumberRound] = useState<number>(1)

    const handleNextRound = () => {
        setNumberRound(prevRound => {
            updateCooldown();
            updateArmaduraDarkinGuren()
            updateFluxoDaAguaGuren()
            updateKarmaGuren()
            updateGuerreiroDoMarGuren()
            return prevRound + 1;
        });

    }

    const handlePreviousRound = () => {
        if (numberRound > 1) {
            setNumberRound(prevRound => prevRound - 1)
        }
    }

    return (
        <div className="flex justify-center items-center border-b-2 border-black">
            <ButtonTurn text="Anterior" icon={<IoMdArrowRoundBack />} onClick={handlePreviousRound}/>
            <h3 className="w-3/4 text-center text-xl font-bold">Rodada {numberRound}</h3>
            <ButtonTurn text="Próximo" icon2={<IoMdArrowRoundForward />} onClick={handleNextRound}/>
        </div>
    )
}