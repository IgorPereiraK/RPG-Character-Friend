import { Skills } from "../types/Skills";

export const secondSkillsGuren: Skills[] = [
    {
        name: 'Empunhadura Dupla',
        image: './image/empunhaduraG.png',
        magic: 'Magia de Evocação',
        description: (
            <div>
                <p>Quando Guren está usando <span className="text-yellow-300">duas espadas</span> ele ganha a Empunhadura Dupla que possibilita 
                ele a escolhe <span className="text-yellow-300">+1 de bônus</span> em sua <span className="text-yellow-300">CA</span> ou no <span className="text-yellow-300">Ataque</span></p>
            </div>
        ),
        type: (
            <div>
                <span className="inline-block w-3 h-3 bg-red-600 rounded-full mr-1"></span>
                <span>Passiva</span>
            </div>
        ),
    },
    {
        name: 'Karma',
        image: './image/karmaG.png',
        magic: 'Magia de Evocação',
        description: (
            <div>
                <p>Com o Karma ativado várias marcas aparecem no corpo de Guren fortalecendo o seu corpo, atualmente Guren 
                    tem 2 níveis do Karma, no <span className="text-yellow-300">nível 1</span> ele ganha <span className="text-yellow-300">bônus de +1 em sua CA e Ataque</span>, no <span className="text-yellow-300">nível 2</span> ele 
                    ganha <span className="text-yellow-300">bônus de +2 em sua CA e +1 no seu Ataque</span>, mas consome <span className="text-blue-500">1 de mana por rodada</span>.</p>
            </div>
        ),
        type: (
            <div>
                <span className="inline-block w-3 h-3 bg-orange-500 rounded-full mr-1"></span>
                <span>Ação Bônus</span>
            </div>
        ),
        mana: (
            <div>
                <span className="inline-block w-3 h-3 bg-blue-500 rounded-full mr-1"></span>
                <span>1-Mana</span>
            </div>
        ),
    },
]