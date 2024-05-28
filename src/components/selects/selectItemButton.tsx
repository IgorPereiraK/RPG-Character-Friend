import { useState } from "react"
import { armasDeGuren } from "../data/itensBattleCharacters"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
  } from "../ui/dialog"


export default function SelectItemButton() {
    
    const [selectedArmaIndex, setSelectedArmaIndex] = useState(0)

    const handleSelectedArma = (index: number) => {
        setSelectedArmaIndex(index)
    }

    return (
        <button className="">
                    <Dialog>
                        <DialogTrigger className="w-[91px]">
                           <img src={armasDeGuren[selectedArmaIndex].imagem} alt={armasDeGuren[selectedArmaIndex].name} className="h-28 border-2 border-black w-full"/>
                        </DialogTrigger>
                        <DialogContent className="bg-gray-baldurBgSecond text-gray-baldurText">
                            <DialogHeader>
                            <DialogTitle>Escolha a sua Arma de Combate</DialogTitle>
                            <DialogDescription>
                                <div className="w-full py-4 mt-4">
                                    <div className="grid grid-cols-3 gap-6 px-6 cursor-pointer">
                                        {armasDeGuren.map((arma, index) => (
                                            <div key={index} onClick={() => handleSelectedArma(index)}>
                                                <img src={arma.imagem} alt={arma.name} className="h-36 w-28 border-2 border-black"/>
                                            </div>
                                        ))}
                                    </div>
                                    <div className=" mt-6 border-t-2 border-gray-baldurBorder grid grid-cols-1 gap-4 py-4 px-6">
                                        {selectedArmaIndex !== null && (
                                            <div>
                                                <div className="flex gap-4">
                                                    <img src={armasDeGuren[selectedArmaIndex].imagem} alt={armasDeGuren[selectedArmaIndex].name} className="h-32 w-28 border-2 border-black"/>
                                                    <div>
                                                        <h3 className="text-2xl text-gray-100 font-bold mb-1">{armasDeGuren[selectedArmaIndex].name}</h3>
                                                        <p className="text-xl text-gray-100">{armasDeGuren[selectedArmaIndex].dano}</p>
                                                    </div>
                                                </div>
                                                <p className="text-gray-baldurText text-lg mt-4">{armasDeGuren[selectedArmaIndex].texto}</p>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </DialogDescription>
                            </DialogHeader>
                        </DialogContent>
                    </Dialog>
                </button>
    )
}