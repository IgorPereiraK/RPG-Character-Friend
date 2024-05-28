/* eslint-disable @typescript-eslint/no-explicit-any */
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
  } from "../ui/dialog"

type StatusCharacter = {
    gurenStatus: any
}

export default function ButtonProficienciaGuren({gurenStatus}: StatusCharacter) {
    return (
        <button className="bg-gray-baldur4 border-gray-baldurBorder py-2 text-center text-gray-baldurText border-x border-b">
                        <Dialog>
                            <DialogTrigger className="w-full">
                            <h3>Proficiência</h3>
                            </DialogTrigger>
                            <DialogContent className="bg-gray-baldurBgSecond text-gray-baldurText">
                                <DialogHeader>
                                <DialogTitle>Suas Proficiência</DialogTitle>
                                <DialogDescription className="mx-auto">
                                <table className="table-auto mt-10 w-full">
                                    <thead>
                                        <tr>
                                            <th className="px-4 py-2 text-gray-baldurText border-gray-baldurBorder bg-gray-baldur3 border text-center">Proficiências</th>
                                            <th className="px-4 py-2 text-gray-baldurText border-gray-baldurBorder bg-gray-baldur3 border text-center">Modificador</th>
                                            <th className="px-4 py-2 text-gray-baldurText border-gray-baldurBorder bg-gray-baldur3 border text-center">Total</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr className="bg-gray-baldur4 text-gray-baldurText">
                                            <td className="border border-gray-baldurBorder px-4 py-2">{gurenStatus.proficienciaAcro}</td>
                                            <td className="border border-gray-baldurBorder px-4 py-2 text-center">{gurenStatus.ModificadorAcro}</td>
                                            <td className="border border-gray-baldurBorder px-4 py-2 text-center">+{gurenStatus.ModificadorAcro + parseInt(gurenStatus.destrezaModificador)}</td>
                                        </tr>
                                        <tr className="bg-gray-baldur5 text-gray-baldurText">
                                            <td className="border border-gray-baldurBorder px-4 py-2">{gurenStatus.proficienciaArca}</td>
                                            <td className="border border-gray-baldurBorder px-4 py-2 text-center">{gurenStatus.ModificadorArca}</td>
                                            <td className="border border-gray-baldurBorder px-4 py-2 text-center">+{gurenStatus.ModificadorArca + parseInt(gurenStatus.inteligenciaModificador)}</td>
                                        </tr>
                                        <tr className="bg-gray-baldur4 text-gray-baldurText">
                                            <td className="border border-gray-baldurBorder px-4 py-2">{gurenStatus.proficienciaAtle}</td>
                                            <td className="border border-gray-baldurBorder px-4 py-2 text-center">{gurenStatus.ModificadorAtle}</td>
                                            <td className="border border-gray-baldurBorder px-4 py-2 text-center">+{gurenStatus.ModificadorAtle + parseInt(gurenStatus.forcaModificador)}</td>
                                        </tr>
                                        <tr className="bg-gray-baldur5 text-gray-baldurText">
                                            <td className="border border-gray-baldurBorder px-4 py-2">{gurenStatus.proficienciaAtua}</td>
                                            <td className="border border-gray-baldurBorder px-4 py-2 text-center">{gurenStatus.ModificadorAtua}</td>
                                            <td className="border border-gray-baldurBorder px-4 py-2 text-center">+{gurenStatus.ModificadorAtua + parseInt(gurenStatus.carismaModificador)}</td>
                                        </tr>
                                        <tr className="bg-gray-baldur4 text-gray-baldurText">
                                            <td className="border border-gray-baldurBorder px-4 py-2">{gurenStatus.proficienciaEnga}</td>
                                            <td className="border border-gray-baldurBorder px-4 py-2 text-center">{gurenStatus.ModificadorEnga}</td>
                                            <td className="border border-gray-baldurBorder px-4 py-2 text-center">+{gurenStatus.ModificadorEnga + parseInt(gurenStatus.carismaModificador)}</td>
                                        </tr>
                                        <tr className="bg-gray-baldur5 text-gray-baldurText">
                                            <td className="border border-gray-baldurBorder px-4 py-2">{gurenStatus.proficienciaFurt}</td>
                                            <td className="border border-gray-baldurBorder px-4 py-2 text-center">{gurenStatus.ModificadorFurt}</td>
                                            <td className="border border-gray-baldurBorder px-4 py-2 text-center">+{gurenStatus.ModificadorFurt + parseInt(gurenStatus.destrezaModificador)}</td>
                                        </tr>
                                        <tr className="bg-gray-baldur4 text-gray-baldurText">
                                            <td className="border border-gray-baldurBorder px-4 py-2">{gurenStatus.proficienciaHist}</td>
                                            <td className="border border-gray-baldurBorder px-4 py-2 text-center">{gurenStatus.ModificadorHist}</td>
                                            <td className="border border-gray-baldurBorder px-4 py-2 text-center">+{gurenStatus.ModificadorHist + parseInt(gurenStatus.inteligenciaModificador)}</td>
                                        </tr>
                                        <tr className="bg-gray-baldur5 text-gray-baldurText">
                                            <td className="border border-gray-baldurBorder px-4 py-2">{gurenStatus.proficienciaInti}</td>
                                            <td className="border border-gray-baldurBorder px-4 py-2 text-center">{gurenStatus.ModificadorInti}</td>
                                            <td className="border border-gray-baldurBorder px-4 py-2 text-center">+{gurenStatus.ModificadorInti + parseInt(gurenStatus.carismaModificador)}</td>
                                        </tr>
                                        <tr className="bg-gray-baldur4 text-gray-baldurText">
                                            <td className="border border-gray-baldurBorder px-4 py-2">{gurenStatus.proficienciaIntu}</td>
                                            <td className="border border-gray-baldurBorder px-4 py-2 text-center">{gurenStatus.ModificadorIntu}</td>
                                            <td className="border border-gray-baldurBorder px-4 py-2 text-center">+{gurenStatus.ModificadorIntu + parseInt(gurenStatus.inteligenciaModificador)}</td>
                                        </tr>
                                        <tr className="bg-gray-baldur5 text-gray-baldurText">
                                            <td className="border border-gray-baldurBorder px-4 py-2">{gurenStatus.proficienciaInve}</td>
                                            <td className="border border-gray-baldurBorder px-4 py-2 text-center">{gurenStatus.ModificadorInve}</td>
                                            <td className="border border-gray-baldurBorder px-4 py-2 text-center">+{gurenStatus.ModificadorInve + parseInt(gurenStatus.inteligenciaModificador)}</td>
                                        </tr>
                                        <tr className="bg-gray-baldur4 text-gray-baldurText">
                                            <td className="border border-gray-baldurBorder px-4 py-2">{gurenStatus.proficienciaAnim}</td>
                                            <td className="border border-gray-baldurBorder px-4 py-2 text-center">{gurenStatus.ModificadorAnim}</td>
                                            <td className="border border-gray-baldurBorder px-4 py-2 text-center">+{gurenStatus.ModificadorAnim + parseInt(gurenStatus.sabedoriaModificador)}</td>
                                        </tr>
                                        <tr className="bg-gray-baldur5 text-gray-baldurText">
                                            <td className="border border-gray-baldurBorder px-4 py-2">{gurenStatus.proficienciaMedi}</td>
                                            <td className="border border-gray-baldurBorder px-4 py-2 text-center">{gurenStatus.ModificadorMedi}</td>
                                            <td className="border border-gray-baldurBorder px-4 py-2 text-center">+{gurenStatus.ModificadorMedi + parseInt(gurenStatus.inteligenciaModificador)}</td>
                                        </tr>
                                        <tr className="bg-gray-baldur4 text-gray-baldurText">
                                            <td className="border border-gray-baldurBorder px-4 py-2">{gurenStatus.proficienciaNatu}</td>
                                            <td className="border border-gray-baldurBorder px-4 py-2 text-center">{gurenStatus.ModificadorNatu}</td>
                                            <td className="border border-gray-baldurBorder px-4 py-2 text-center">+{gurenStatus.ModificadorNatu + parseInt(gurenStatus.inteligenciaModificador)}</td>
                                        </tr>
                                        <tr className="bg-gray-baldur5 text-gray-baldurText">
                                            <td className="border border-gray-baldurBorder px-4 py-2">{gurenStatus.proficienciaPerc}</td>
                                            <td className="border border-gray-baldurBorder px-4 py-2 text-center">{gurenStatus.ModificadorPerc}</td>
                                            <td className="border border-gray-baldurBorder px-4 py-2 text-center">+{gurenStatus.ModificadorPerc + parseInt(gurenStatus.inteligenciaModificador)}</td>
                                        </tr>
                                        <tr className="bg-gray-baldur4 text-gray-baldurText">
                                            <td className="border border-gray-baldurBorder px-4 py-2">{gurenStatus.proficienciaPers}</td>
                                            <td className="border border-gray-baldurBorder px-4 py-2 text-center">{gurenStatus.ModificadorPers}</td>
                                            <td className="border border-gray-baldurBorder px-4 py-2 text-center">+{gurenStatus.ModificadorPers + parseInt(gurenStatus.carismaModificador)}</td>
                                        </tr>
                                        <tr className="bg-gray-baldur5 text-gray-baldurText">
                                            <td className="border border-gray-baldurBorder px-4 py-2">{gurenStatus.proficienciaPres}</td>
                                            <td className="border border-gray-baldurBorder px-4 py-2 text-center">{gurenStatus.ModificadorPres}</td>
                                            <td className="border border-gray-baldurBorder px-4 py-2 text-center">+{gurenStatus.ModificadorPres + parseInt(gurenStatus.destrezaModificador)}</td>
                                        </tr>
                                        <tr className="bg-gray-baldur4 text-gray-baldurText">
                                            <td className="border border-gray-baldurBorder px-4 py-2">{gurenStatus.proficienciaReli}</td>
                                            <td className="border border-gray-baldurBorder px-4 py-2 text-center">{gurenStatus.ModificadorReli}</td>
                                            <td className="border border-gray-baldurBorder px-4 py-2 text-center">+{gurenStatus.ModificadorReli + parseInt(gurenStatus.inteligenciaModificador)}</td>
                                        </tr>
                                        <tr className="bg-gray-baldur5 text-gray-baldurText">
                                            <td className="border border-gray-baldurBorder px-4 py-2">{gurenStatus.proficienciaSobr}</td>
                                            <td className="border border-gray-baldurBorder px-4 py-2 text-center">{gurenStatus.ModificadorSobr}</td>
                                            <td className="border border-gray-baldurBorder px-4 py-2 text-center">+{gurenStatus.ModificadorSobr + parseInt(gurenStatus.inteligenciaModificador)}</td>
                                        </tr>
                                    </tbody>
                                </table>
                                </DialogDescription>
                                </DialogHeader>
                            </DialogContent>
                        </Dialog>
                    </button>
    )
}