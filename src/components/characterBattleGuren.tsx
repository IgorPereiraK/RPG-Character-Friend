import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
  } from "./ui/dialog"
import { useState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatarSmall"
import { gurenStatus } from "./data/characterStatus";
import { characterInfo } from "./data/characterInfo";
import SelectArmorButton from "./selects/selectArmorButton";
import SelectItemButton from "./selects/selectItemButton";
import { skillsGuren } from "./data/skillsCharacters";
import SkillBattle from "./skillBattle";
import ButtonProficienciaGuren from "./buttons/buttonProficienciaGuren";
import { talentosGuren } from "./data/talentosCharacterGuren";
import { secondSkillsGuren } from "./data/secondSkillsCharacter";
import ContainerTurn from "./containerTurn";
import ModalSkill from "./modals/modalSkill";
import ModalSkillKarma from "./modals/modalSkillKarma";



export default function CharacterBattleGuren() {

    const [numberGurenHP, setNumberGurenHP] = useState<number>(gurenStatus.hp)
    const [numberGurenMP, setNumberGurenMP] = useState<number>(gurenStatus.mp)
    const [numberGurenCA, setNumberGurenCA] = useState<number>(gurenStatus.ca)
    const [numberGurenAtaque, setNumberGurenAtaque] = useState<number>(gurenStatus.destrezaModificador)
    const [numberGurenEscudo, setNumberGurenEscudo] = useState<number>(0)
    const [incrementGuren, setIncrementGuren] = useState<number>(0);
    const [subtractGuren, setSubtractGuren] = useState<number>(0);
    const [incrementManaGuren, setIncrementManaGuren] = useState<number>(0);

    const healthPercentageguren = (numberGurenHP / gurenStatus.hp) * 100
    const manaPercentageguren = (numberGurenMP / gurenStatus.mp) * 100

    const [modificadorForcaGuren, setModificadorForcaGuren] = useState<number>(gurenStatus.forcaModificador)
    const [modificadorDestrezaGuren, setModificadorDestrezaGuren] = useState<number>(gurenStatus.destrezaModificador)
    const [modificadorInteligenciaGuren, setModificadorInteligenciaGuren] = useState<number>(gurenStatus.inteligenciaModificador)
    const [modificadorConstituicaoGuren, setModificadorConstituicaoGuren] = useState<number>(gurenStatus.constituicaoModificador)
    const [modificadorSabedoriaGuren, setModificadorSabedoriaGuren] = useState<number>(gurenStatus.sabedoriaModificador)
    const [showModalEmpunhaduraDuplaGuren, setShowModalEmpunhaduraDuplaGuren] = useState(false);
    const [showModalKarma, setShowModalKarma] = useState(false);

    const handleChangeIncrementGuren = (event: React.ChangeEvent<HTMLInputElement>) => {
        const value = parseInt(event.target.value);
        setIncrementGuren(value);
    };

    const handleChangeSubtractGuren = (event: React.ChangeEvent<HTMLInputElement>) => {
        const value = parseInt(event.target.value);
        setSubtractGuren(value);
    };

    const handleChangeIncrementManaGuren = (event: React.ChangeEvent<HTMLInputElement>) => {
        const value = parseInt(event.target.value);
        setIncrementManaGuren(value);
    };
    const handleChangeNumberEscudo = (event: React.ChangeEvent<HTMLInputElement>) => {
        const value = parseInt(event.target.value);
        setNumberGurenEscudo(value);
    };

    const handleSubtractGuren = () => {
        const newValue = numberGurenHP - subtractGuren;
        setLimitedNumberGurenHP(newValue);
    };

    const handleIncrementGuren = () => {
        const newValue = numberGurenHP + incrementGuren;
        setLimitedNumberGurenHP(newValue);
    };

    const handleIncrementManaGuren = () => {
        const newValue = numberGurenMP + incrementManaGuren;
        setLimitedNumberGurenMP(newValue);
    };

    const setLimitedNumberGurenHP = (newHP: number) => {
        setNumberGurenHP(() => Math.max(0, Math.min(newHP, gurenStatus.hp)));
    };

    const setLimitedNumberGurenMP = (newMP: number | ((prevMP: number) => number)) => {
        if (typeof newMP === 'function') {
            setNumberGurenMP((prevMP: number) => {
                const result = newMP(prevMP);
                return Math.max(0, Math.min(result, gurenStatus.mp));
            });
        } else {
            setNumberGurenMP(Math.max(0, Math.min(newMP, gurenStatus.mp)));
        }
    }

    const setLimitedNumberGurenEscudo = (newEscudo: number | ((prevEscudo: number) => number)) => {
        if (typeof newEscudo === 'function') {
            setNumberGurenEscudo((prevEscudo: number) => {
                const result = newEscudo(prevEscudo);
                return Math.max(0, Math.min(result, numberGurenEscudo));
            });
        } else {
            setNumberGurenEscudo(Math.max(0, Math.min(newEscudo, numberGurenEscudo)));
        }
    }

    const [clickGurenPassiva, setClickGurenPassiva] = useState(0);
    const [buttonBorderColorGurenPassiva, setButtonBorderColorGurenPassiva] = useState("");


    const guerreiroDoMar = () => {
        if (clickGurenPassiva === 2) {
            alert("Passiva do Guren pronta!");
            setClickGurenPassiva(3);
            setButtonBorderColorGurenPassiva("red");
        } else if (clickGurenPassiva < 2) {
            setClickGurenPassiva(clickGurenPassiva + 1);
            setButtonBorderColorGurenPassiva("");
        } else if (clickGurenPassiva === 3) {
            setClickGurenPassiva(0);
            setButtonBorderColorGurenPassiva("");
            const shield = Math.floor(Math.random() * 12) + 1;
            const shielding = numberGurenEscudo + shield;
            setNumberGurenEscudo(shielding)

            alert(`O escudo gerado de 1d12 pela habilidade Vontade do Guerreiro do Mar foi: ${shield} de escudo!`)
        }
    }

    const updateGuerreiroDoMarGuren = () => {
        if(numberGurenEscudo > 0) {
            setLimitedNumberGurenEscudo(prevEscudo => prevEscudo - 6)
        }
    }

    const [clickGurenFocoFarao, setClickGurenFocoFarao] = useState(6);
    const [buttonBorderColorGurenFocoFarao, setButtonBorderColorGurenFocoFarao] = useState("red")

    const updateCooldown = () => {
        if (clickGurenFocoFarao > 1 && clickGurenFocoFarao < 6) {
            setClickGurenFocoFarao(prevCooldown => prevCooldown - 1);
        } else if (clickGurenFocoFarao === 1) {
            alert("Golpe atordoante está pronto!!");
            setClickGurenFocoFarao(6);
            setButtonBorderColorGurenFocoFarao("red");
        }
    };


    const focoDoFarao = () => {
        if (clickGurenFocoFarao === 6) {
            setClickGurenFocoFarao(5);
            setButtonBorderColorGurenFocoFarao("");
        } else if (clickGurenFocoFarao === 1) {
            alert("Golpe atordoante está pronto!!");
            setClickGurenFocoFarao(6);
            setButtonBorderColorGurenFocoFarao("red");
        } else if (clickGurenFocoFarao > 1) {
            setClickGurenFocoFarao(clickGurenFocoFarao - 1);
        }
    }; 

    const [clickGurenEvolucaoEspiritual, setClickGurenEvolucaoEspiritual] = useState(0);
    const [buttonBorderColorGurenEvolucaoEspiritual, setButtonBorderColorGurenEvolucaoEspiritual] = useState("");
    
    const evolucaoEspiritualGuren = () => {
        if (clickGurenEvolucaoEspiritual === 1) {
            setModificadorForcaGuren((statusForca) => statusForca - 2)
            setModificadorDestrezaGuren((statusDestreza) => statusDestreza - 2)
            setModificadorInteligenciaGuren((statusInteligencia) => statusInteligencia - 2)
            setModificadorConstituicaoGuren((statusConstituicao) => statusConstituicao - 2)
            setModificadorSabedoriaGuren((statusSabedoria) => statusSabedoria - 2)
            setNumberGurenCA((gurenCA) => gurenCA - 2)
            setNumberGurenAtaque((gurenAtaque) => gurenAtaque - 2)
            setButtonBorderColorGurenEvolucaoEspiritual("")
            setClickGurenEvolucaoEspiritual(0)
        } else {
            setClickGurenEvolucaoEspiritual(clickGurenEvolucaoEspiritual + 1)
            setModificadorForcaGuren((statusForca) => statusForca + 2)
            setModificadorDestrezaGuren((statusDestreza) => statusDestreza + 2)
            setModificadorInteligenciaGuren((statusInteligencia) => statusInteligencia + 2)
            setModificadorConstituicaoGuren((statusConstituicao) => statusConstituicao + 2)
            setModificadorSabedoriaGuren((statusSabedoria) => statusSabedoria + 2)
            setNumberGurenCA((gurenCA) => gurenCA + 2)
            setNumberGurenAtaque((gurenAtaque) => gurenAtaque + 2)
            setButtonBorderColorGurenEvolucaoEspiritual("red")
        }
    }

    const [buttonBorderColorGurenEmpunhaduraDupla, setButtonBorderColorGurenEmpunhaduraDupla] = useState("");
    const [previousChoice, setPreviousChoice] = useState<'CA' | 'ATAQUE' | null>(null);

    const empunhaduraDuplaGuren = () => {
       setShowModalEmpunhaduraDuplaGuren(true)
    };

    const handleModalSelectEmpunhaduraDuplaGuren = (choice: 'CA' | 'ATAQUE') => {
        if (previousChoice === 'CA') {
            setNumberGurenCA((prevCA) => prevCA - 1);
            setButtonBorderColorGurenEmpunhaduraDupla("")
        } else if (previousChoice === 'ATAQUE') {
            setNumberGurenAtaque((prevAtaque) => prevAtaque - 1);
            setButtonBorderColorGurenEmpunhaduraDupla("")
        }

        if (choice === 'CA') {
            setNumberGurenCA((prevCA) => prevCA + 1);
            setButtonBorderColorGurenEmpunhaduraDupla("red")
        } else if (choice === 'ATAQUE') {
            setNumberGurenAtaque((prevAtaque) => prevAtaque + 1);
            setButtonBorderColorGurenEmpunhaduraDupla("red")
        }
        
        setPreviousChoice(choice);
        setShowModalEmpunhaduraDuplaGuren(false)
    }

    const handleModalCloseEmpunhaduraDuplaGuren = () => {
        if (previousChoice === 'CA') {
            setNumberGurenCA((prevCA) => prevCA - 1);
            setButtonBorderColorGurenEmpunhaduraDupla("")
        } else if (previousChoice === 'ATAQUE') {
            setNumberGurenAtaque((prevAtaque) => prevAtaque - 1);
            setButtonBorderColorGurenEmpunhaduraDupla("")
        }
        setPreviousChoice(null);
        setShowModalEmpunhaduraDuplaGuren(false);

    };

    const handleModalCloseXEmpunhaduraDuplaGuren = () => {
        setShowModalEmpunhaduraDuplaGuren(false);
    }

    const [buttonBorderColorGurenKarma, setButtonBorderColorGurenKarma] = useState("");
    const [previousChoiceKarma, setPreviousChoiceKarma] = useState<'Nível 1' | 'Nível 2' | null>(null);

    const karmaGuren = () => {
        setShowModalKarma(true)
    }

    const handleModalSelectKarma = (choice: 'Nível 1' | 'Nível 2') => {
        if (previousChoiceKarma === 'Nível 1') {
            setNumberGurenCA((prevCA) => prevCA - 1);
            setNumberGurenAtaque((prevAtaque) => prevAtaque - 1);
            setButtonBorderColorGurenKarma("")
        } else if (previousChoiceKarma === 'Nível 2') {
            setNumberGurenCA((prevCA) => prevCA - 2);
            setNumberGurenAtaque((prevAtaque) => prevAtaque - 1);
            setButtonBorderColorGurenKarma("")
        }

        if (choice === 'Nível 1') {
            setNumberGurenCA((prevCA) => prevCA + 1);
            setNumberGurenAtaque((prevAtaque) => prevAtaque + 1);
            setButtonBorderColorGurenKarma("red")
        } else if (choice === 'Nível 2') {
            setNumberGurenCA((prevCA) => prevCA + 2);
            setNumberGurenAtaque((prevAtaque) => prevAtaque + 1);
            setButtonBorderColorGurenKarma("red")
        }
        
        setPreviousChoiceKarma(choice);
        setShowModalKarma(false)
    }

    const handleModalCloseKarma = () => {
        if (previousChoiceKarma === 'Nível 1') {
            setNumberGurenCA((prevCA) => prevCA - 1);
            setNumberGurenAtaque((prevAtaque) => prevAtaque - 1);
            setButtonBorderColorGurenKarma("")
        } else if (previousChoiceKarma === 'Nível 2') {
            setNumberGurenCA((prevCA) => prevCA - 2);
            setNumberGurenAtaque((prevAtaque) => prevAtaque - 1);
            setButtonBorderColorGurenKarma("")
        }
        setPreviousChoiceKarma(null);
        setShowModalKarma(false);

    };

    const handleModalCloseXKarma = () => {
        setShowModalKarma(false);
    }

    const updateKarmaGuren = () => {
        if(previousChoiceKarma === "Nível 2") {
            setLimitedNumberGurenMP((prevMP) => prevMP - 1)
        }
    }
    
    const gladiadorImortal = () => {
        const heal = Math.floor(Math.random() * 6) + 1;
        const healing = numberGurenHP + heal;
        setLimitedNumberGurenHP(healing)

        alert(`A cura gerada de 1d6 pela habilidade Gladiador Imortal foi: ${heal} de vida`)
    };

    const [clickGurenArmaduraDarkin, setClickGurenArmaduraDarkin] = useState(false);
    const [buttonBorderColorGurenArmaduraDarkin, setButtonBorderColorGurenArmaduraDarkin] = useState("");

    const armaduraDarkinGuren = () => {
        if (clickGurenArmaduraDarkin) {
            setNumberGurenCA((gurenCA) => gurenCA - 2);
            setClickGurenArmaduraDarkin(false);
            setButtonBorderColorGurenArmaduraDarkin("")
        } else {
            setNumberGurenCA((gurenCA) => gurenCA + 2);
            setButtonBorderColorGurenArmaduraDarkin("red")
            setClickGurenArmaduraDarkin(true);
        }
    }

    const updateArmaduraDarkinGuren = () => {
        if (clickGurenArmaduraDarkin) {
            setLimitedNumberGurenMP((gurenMP) => gurenMP - 1);
        }
    };

    const corteDeMiasmaGuren = () => {
        setLimitedNumberGurenMP((gurenMP) => gurenMP - 4);
    };

    const espinhosGuren = () => {
        setLimitedNumberGurenMP((gurenMP) => gurenMP - 4);
    }

    const ritmoDeDueloGuren = () => {
        setLimitedNumberGurenMP((gurenMP) => gurenMP - 2);
    }

    const corteTriploGuren = () => {
        setLimitedNumberGurenMP((gurenMP) => gurenMP - 5);
    }

    const quebraOndaGuren = () => {
        setLimitedNumberGurenMP((gurenMP) => gurenMP - 6);
    }

    const [clickGurenFluxoDaAgua, setClickGurenFluxoDaAgua] = useState(false);
    const [buttonBorderColorGurenFluxoDaAgua, setButtonBorderColorGurenFluxoDaAgua] = useState("");
    const [fluxoDaAguaRounds, setFluxoDaAguaRounds] = useState(0);

    const fluxoDaAguaGuren = () => {
        if(clickGurenFluxoDaAgua) {
            setClickGurenFluxoDaAgua(false)
            setButtonBorderColorGurenFluxoDaAgua("")
        } else {
            setLimitedNumberGurenMP((gurenMP) => gurenMP - 6);
            setButtonBorderColorGurenFluxoDaAgua("red")
            setClickGurenFluxoDaAgua(true)
            setFluxoDaAguaRounds(4)
        }
    }

    const updateFluxoDaAguaGuren = () => {
        if (clickGurenFluxoDaAgua) {
            setFluxoDaAguaRounds((prevRounds) => {
                if (prevRounds - 1 <= 0) {
                    setClickGurenFluxoDaAgua(false);
                    setButtonBorderColorGurenFluxoDaAgua("");
                    alert("A habilidade Fluxo de Água acabou!");
                    return 0;
                }
                return prevRounds - 1;
            });
        }
    };


    const [clickUltGuren, setClickUltGuren] = useState(0);
    const [buttonBorderColorUltGuren, setButtonBorderColorUltGuren] = useState("");

    const madeInHellAndMeiaLuaGuren = () => {
        if (clickUltGuren === 4) {
            alert("Ultimente do Guren carregada!");
            setClickUltGuren(5);
            setButtonBorderColorUltGuren("red");
          } else if (clickUltGuren < 4) {
            setClickUltGuren(clickUltGuren + 1);
            setButtonBorderColorUltGuren("");
          } else if (clickUltGuren === 5) {
            setClickUltGuren(0)
            setButtonBorderColorUltGuren("")
          }
    }

    return (
        <div>
            <ContainerTurn updateCooldown={updateCooldown} updateArmaduraDarkinGuren={updateArmaduraDarkinGuren} updateFluxoDaAguaGuren={updateFluxoDaAguaGuren} updateKarmaGuren={updateKarmaGuren} updateGuerreiroDoMarGuren={updateGuerreiroDoMarGuren}/>
            <div className="grid grid-cols-10 mt-20 items-end gap-1 px-6 2xl:px-10 xl:px-5">
                <div className="col-span-1 h-60">
                    <Dialog>
                            <DialogTrigger className="w-full">
                            <img src={gurenStatus.perfil} alt={gurenStatus.name} className="border-2 border-black rounded-lg h-60"/>
                            </DialogTrigger>
                            <DialogContent className="bg-gray-baldurBgSecond text-gray-baldurText">
                                <DialogHeader>
                                <DialogTitle>Perfil</DialogTitle>
                                <DialogDescription className="pt-4">
                                    <div className="flex gap-4 items-center">
                                        <Avatar className="border-2 border-black">
                                            <AvatarImage src={gurenStatus.perfil}></AvatarImage>
                                            <AvatarFallback>VL</AvatarFallback>
                                        </Avatar>
                                        <div className="w-full text-gray-baldurText text-base">
                                            <div className="border-b-2 border-black flex gap-10 mb-2">
                                                <h3>Nome: <span>{characterInfo['Guren'].name}</span></h3>
                                                <h3>Level: <span>{characterInfo['Guren'].level}</span></h3>
                                            </div>
                                            <div className="border-b-2 border-black flex gap-10">
                                                <h3>Classe: <span>{characterInfo['Guren'].classe}</span></h3>
                                                <h3>Alinhamento: <span>{characterInfo['Guren'].alinhamento}</span></h3>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="text-center mt-8">
                                        <h2 className="text-xl text-gray-baldurText font-extrabold mb-2">Talentos</h2>
                                        <div>
                                            <div className="flex items-center gap-2 mb-4">
                                                <button  className="border-2 rounded-md border-gray-900"><img src="./image/talentoDuelistaG.png" className="w-16 h-14"/></button>
                                                <h3 className="text-gray-baldurText">{talentosGuren[0].talento}</h3>
                                            </div>
                                            <div className="flex items-center gap-2 mb-4">
                                                <button  className="border-2 rounded-md border-gray-900"><img src="./image/duelistaG.png" className="w-[70px] h-14"/></button>
                                                <h3 className="text-gray-baldurText">{talentosGuren[1].talento}</h3>
                                            </div>
                                            <div className="flex items-center gap-2 mb-4">
                                                <button  className="border-2 rounded-md border-gray-900"><img src="./image/talentoSorteG.png" className="w-[92px] h-14"/></button>
                                                <h3 className="text-gray-baldurText">{talentosGuren[2].talento}</h3>
                                            </div>
                                            <div className="flex items-center gap-2">
                                                <button  className="border-2 rounded-md border-gray-900"><img src="./image/focoMovimentoG.png" className="w-14 h-14"/></button>
                                                <h3 className="text-gray-baldurText">{talentosGuren[3].talento}</h3>
                                            </div>
                                        </div>
                                    </div>
                                </DialogDescription>
                                </DialogHeader>
                            </DialogContent>
                        </Dialog>
                </div>
                <div className="flex h-24 mb-4">
                    <SelectArmorButton />
                    <SelectItemButton />
                </div>
                <div className="col-span-6">
                    <div className="pb-12 text-center">
                        <input
                            id="incrementSubtract"
                            type="number"
                            value={subtractGuren}
                            onChange={handleChangeSubtractGuren}
                            className="w-14 rounded-lg ml-1 py-1 mr-1 bg-gray-300 border-2 border-gray-700 text-black"
                        />
                        <button onClick={handleSubtractGuren} className="bg-red-600 px-2 py-1 rounded-lg font-semibold uppercase mr-12 text-gray-baldurText">dano</button>
                        <input
                            id="incrementInput"
                            type="number"
                            value={incrementGuren}
                            onChange={handleChangeIncrementGuren}
                            className="w-14 rounded-lg ml-1 py-1 mr-1 bg-gray-300 border-2 border-gray-700 text-black"
                        />
                        <button onClick={handleIncrementGuren} className="bg-green-600 px-2 py-1 rounded-lg font-semibold uppercase mr-12 text-gray-baldurText">cura</button>
                        <input
                            id="incrementInput"
                            type="number"
                            value={incrementManaGuren}
                            onChange={handleChangeIncrementManaGuren}
                            className="w-14 rounded-lg ml-1 py-1 mr-1 bg-gray-300 border-2 border-gray-700 text-black"
                        />
                        <button onClick={handleIncrementManaGuren} className="bg-blue-600 px-2 py-1 rounded-lg font-semibold uppercase text-gray-baldurText">mana</button>
                    </div>
                    <div className="flex justify-between">
                        <div className="h-20 flex p-2 gap-2 mb-0.5">
                            {secondSkillsGuren.map((skill) => (
                                <SkillBattle key={skill.name}
                                    name={skill.name}
                                    image={skill.image}
                                    magic={skill.magic}
                                    description={skill.description}
                                    type={skill.type}
                                    mana={skill.mana} 
                                    onClick={() => {
                                        // Chama a função correta com base no nome da habilidade
                                        switch (skill.name) {
                                            case "Empunhadura Dupla":
                                                empunhaduraDuplaGuren();
                                                break;
                                            case "Karma":
                                                karmaGuren();
                                                break;
                                            case "Corte de Miasma":
                                                corteDeMiasmaGuren();
                                                break;
                                            case "Espinhos":
                                                espinhosGuren();
                                                break;
                                            case "Ritmo de Duelo":
                                                ritmoDeDueloGuren();
                                                break;
                                            case "Corte triplo":
                                                corteTriploGuren();
                                                break;
                                            default:
                                                console.log("Habilidade não encontrada!");
                                        }
                                    }}
                                    borderColorGurenEmpunhaduraDupla={skill.name ==="Empunhadura Dupla" ? buttonBorderColorGurenEmpunhaduraDupla : null}
                                    buttonBorderColorGurenKarma={skill.name ==="Karma" ? buttonBorderColorGurenKarma : null}
                                    />
                            ))}
                        </div>
                        <div className="flex gap-4">
                            <div className="text-center">
                                <p className="text-gray-baldurText font-bold uppercase">Ataque</p>
                                <p className="text-gray-baldurText text-2xl font-bold">+{numberGurenAtaque}</p>
                            </div>
                            <div className="text-center">
                                <p className="text-gray-baldurText font-bold uppercase">Escudo</p>
                                <p className="text-gray-baldurText text-2xl font-bold 2xl:ml-3">
                                    <input
                                    id="incrementInput"
                                    type="number"
                                    value={numberGurenEscudo}
                                    onChange={handleChangeNumberEscudo}
                                    className="w-14 bg-gray-baldurBg text-gray-baldurText text-center" 
                                    />
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="flex justify-between">
                        <div className="h-20 flex p-2 gap-2 mb-0.5">
                            {skillsGuren.map((skill) => (
                                <SkillBattle key={skill.name}
                                    name={skill.name}
                                    image={skill.image}
                                    magic={skill.magic}
                                    description={skill.description}
                                    type={skill.type}
                                    mana={skill.mana} 
                                    onClick={() => {
                                        // Chama a função correta com base no nome da habilidade
                                        switch (skill.name) {
                                            case "Vontade do Guerreiro do Mar":
                                                guerreiroDoMar();
                                                break;
                                            case "Foco do Faraó":
                                                focoDoFarao();
                                                break;
                                            case "Gladiador Imortal":
                                                gladiadorImortal();
                                                break;
                                            case "Mega Evolução Espiritual":
                                                evolucaoEspiritualGuren();
                                                break;
                                            case "Armadura Darkin":
                                                armaduraDarkinGuren();
                                                break;
                                            case "Quebra Onda":
                                                quebraOndaGuren();
                                                break;
                                            case "Fluxo da Água":
                                                fluxoDaAguaGuren();
                                                break;
                                            case "Made in Hell":
                                                madeInHellAndMeiaLuaGuren();
                                                break;
                                            case "Sábio da Meia Lua":
                                                madeInHellAndMeiaLuaGuren();
                                                break;
                                            default:
                                                console.log("Habilidade não encontrada!");
                                        }
                                    }}
                                    clickGurenPassiva={skill.name === "Vontade do Guerreiro do Mar" ? clickGurenPassiva : null}
                                    borderColorGurenPassiva={skill.name === "Vontade do Guerreiro do Mar" ? buttonBorderColorGurenPassiva : null}
                                    clickGurenUlt={skill.name ==="Made in Hell" || skill.name === "Sábio da Meia Lua" ? clickUltGuren : null}
                                    borderColorGurenUlt={skill.name ==="Made in Hell" || skill.name === "Sábio da Meia Lua" ? buttonBorderColorUltGuren : null}
                                    borderColorGurenArmaduraDarkin={skill.name ==="Armadura Darkin" ? buttonBorderColorGurenArmaduraDarkin : null}
                                    clickGurenFocoFarao={skill.name === "Foco do Faraó" ? clickGurenFocoFarao : null}
                                    borderColorGurenFocoFarao={skill.name === "Foco do Faraó" ? buttonBorderColorGurenFocoFarao : null}
                                    borderColorGurenEvolucaoEspirirual={skill.name === "Mega Evolução Espiritual" ? buttonBorderColorGurenEvolucaoEspiritual : null}
                                    borderColorGurenFluxoDaAgua={skill.name === "Fluxo da Água" ? buttonBorderColorGurenFluxoDaAgua : null}
                                    fluxoDaAguaRounds={skill.name === "Fluxo da Água" ? fluxoDaAguaRounds : null}
                                    />
                            ))}
                        </div>
                        <div className="px-5 bg-[url('/image/escudo-ca-battle.png')] bg-cover bg-center">
                            <p className="text-black text-2xl font-bold py-6 ">{numberGurenCA}</p>
                        </div>
                    </div>
                    <div className="w-full h-10 border-2 bg-gray-300 text-center text-xl font-bold text-black border-black relative">
                        <div
                        className="bg-green-500 h-full"
                        style={{ width: `${healthPercentageguren > 100 ? 100 : healthPercentageguren}%` }}>
                            <p className="absolute top-0 left-0 w-full h-full flex justify-center items-center">{numberGurenHP}</p>
                        </div>
                    </div>
                    <div className="w-full h-10 border-x-2 border-b-2 bg-gray-300 text-center text-xl font-bold text-black border-black relative">
                        <div
                        className="bg-blue-500 h-full"
                        style={{ width: `${manaPercentageguren > 100 ? 100 : manaPercentageguren}%` }}>
                            <p className="absolute top-0 left-0 w-full h-full flex justify-center items-center">{numberGurenMP}</p>
                        </div>
                    </div>
                </div>
                <div className="grid col-span-2">
                    <table className="table-auto">
                        <thead>
                            <tr className="bg-gray-baldur3 text-gray-baldurText">
                                <th className="border border-gray-baldurBorder 2xl:px-4 py-2 xl:px-0">Atributo</th>
                                <th className="border border-gray-baldurBorder 2xl:px-4 py-2 xl:px-2">Valor</th>
                                <th className="border border-gray-baldurBorder 2xl:px-4 py-2 xl:px-2">Modificador</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className="bg-gray-baldur4 text-gray-baldurText">
                                <td className="border border-gray-baldurBorder 2xl:px-4 py-2 xl:px-2">Força</td>
                                <td className="border border-gray-baldurBorder 2xl:px-8 py-2 xl:px-0 text-center">{gurenStatus.forcaValor}</td>
                                <td className="border border-gray-baldurBorder 2xl:px-12 py-2 xl:px-0 text-center">+{modificadorForcaGuren}</td>
                            </tr>
                            <tr className="bg-gray-baldur5 text-gray-baldurText">
                                <td className="border border-gray-baldurBorder 2xl:px-4 py-2 xl:px-2">Destreza</td>
                                <td className="border border-gray-baldurBorder 2xl:px-8 py-2 xl:px-0 text-center">{gurenStatus.destrezaValor}</td>
                                <td className="border border-gray-baldurBorder 2xl:px-12 py-2 xl:px-0 text-center">+{modificadorDestrezaGuren}</td>
                            </tr>
                            <tr className="bg-gray-baldur4 text-gray-baldurText">
                                <td className="border border-gray-baldurBorder 2xl:px-4 py-2 xl:px-2">Constituição</td>
                                <td className="border border-gray-baldurBorder 2xl:px-8 py-2 xl:px-0 text-center">{gurenStatus.constituicaoValor}</td>
                                <td className="border border-gray-baldurBorder 2xl:px-12 py-2 xl:px-0 text-center">+{modificadorConstituicaoGuren}</td>
                            </tr>
                            <tr className="bg-gray-baldur5 text-gray-baldurText">
                                <td className="border border-gray-baldurBorder 2xl:px-4 py-2 xl:px-2">Inteligência</td>
                                <td className="border border-gray-baldurBorder 2xl:px-8 py-2 xl:px-0 text-center">{gurenStatus.inteligenciaValor}</td>
                                <td className="border border-gray-baldurBorder 2xl:px-12 py-2 xl:px-0 text-center">+{modificadorInteligenciaGuren}</td>
                            </tr>
                            <tr className="bg-gray-baldur4 text-gray-baldurText">
                                <td className="border border-gray-baldurBorder 2xl:px-4 py-2 xl:px-2">Carisma</td>
                                <td className="border border-gray-baldurBorder 2xl:px-8 py-2 xl:px-0 text-center">{gurenStatus.carismaValor}</td>
                                <td className="border border-gray-baldurBorder 2xl:px-12 py-2 xl:px-0 text-center">+{gurenStatus.carismaModificador}</td>
                            </tr>
                            <tr className="bg-gray-baldur5 text-gray-baldurText">
                                <td className="border border-gray-baldurBorder 2xl:px-4 py-2 xl:px-2">Sabedoria</td>
                                <td className="border border-gray-baldurBorder 2xl:px-8 py-2 xl:px-0 text-center">{gurenStatus.sabedoriaValor}</td>
                                <td className="border border-gray-baldurBorder 2xl:px-12 py-2 xl:px-0 text-center">+{modificadorSabedoriaGuren}</td>
                            </tr>
                        </tbody>
                    </table>
                    <ButtonProficienciaGuren gurenStatus={gurenStatus}/>
                </div>
                <ModalSkill
                    show={showModalEmpunhaduraDuplaGuren}
                    onClose={handleModalCloseEmpunhaduraDuplaGuren}
                    onSelect={handleModalSelectEmpunhaduraDuplaGuren}
                    onCloseX={handleModalCloseXEmpunhaduraDuplaGuren}
                />
                <ModalSkillKarma 
                show={showModalKarma}
                onClose={handleModalCloseKarma}
                onSelect={handleModalSelectKarma}
                onCloseX={handleModalCloseXKarma}
                />
                </div>
            </div>
    )
}

