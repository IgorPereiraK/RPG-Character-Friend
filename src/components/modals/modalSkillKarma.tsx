import { IoMdClose } from "react-icons/io";

type propsModalKarma = {
    show: boolean
    onClose: () => void
    onSelect: (choice: 'Nível 1' | 'Nível 2') => void
    onCloseX: () => void
}

export default function ModalSkillKarma({show, onClose, onSelect, onCloseX}: propsModalKarma) {

    if(!show) {
        return null
    }

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
            <div className="bg-gray-baldur5 p-4 rounded">
                <div className="flex mb-8 gap-6">
                    <h2 className="text-xl text-gray-baldurText mt-4">Escolha o Nível do seu Karma:</h2>
                    <button onClick={onCloseX} className="text-black text-2xl justify-end mb-4">
                        <IoMdClose />
                    </button>
                </div>
                <button
                    onClick={() => onSelect('Nível 1')}
                    className="block w-full mb-2 p-2 bg-blue-700 text-gray-baldurText rounded font-semibold"
                >
                    Nível 1
                </button>
                <button
                    onClick={() => onSelect('Nível 2')}
                    className="block w-full p-2 bg-green-700 text-gray-baldurText  rounded font-semibold"
                >
                    Nível 2
                </button>
                <button
                    onClick={onClose}
                    className="mt-4 block w-full p-2 bg-red-700 text-gray-baldurText rounded font-semibold"
                >
                    Cancelar
                </button>
            </div>
        </div>
    )
}