import { IoMdClose } from "react-icons/io";

type propsModal = {
    show: boolean
    onClose: () => void
    onSelect: (choice: 'CA' | 'ATAQUE') => void
    onCloseX: () => void
}

export default function ModalSkill({show, onClose, onSelect, onCloseX}: propsModal) {

    if(!show) {
        return null
    }

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
            <div className="bg-gray-baldur5 p-4 rounded">
                <div className="flex mb-8 gap-6">
                    <h2 className="text-xl text-gray-baldurText mt-4">Escolha seu bônus:</h2>
                    <button onClick={onCloseX} className="text-black text-2xl justify-end mb-4">
                        <IoMdClose />
                    </button>
                </div>
                <button
                    onClick={() => onSelect('CA')}
                    className="block w-full mb-2 p-2 bg-blue-700 text-gray-baldurText rounded font-semibold"
                >
                    +1 CA
                </button>
                <button
                    onClick={() => onSelect('ATAQUE')}
                    className="block w-full p-2 bg-green-700 text-gray-baldurText  rounded font-semibold"
                >
                    +1 Ataque
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