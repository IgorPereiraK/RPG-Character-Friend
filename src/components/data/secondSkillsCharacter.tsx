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
    {
        name: 'Corte de Miasma',
        image: './image/corteMiasmaG.png',
        magic: 'Ação de Arma Mahiru',
        description: (
            <div>
                <p>Mahiru se transforma em Katana, Guren acumula miasma negro em sua espada e <span className="text-yellow-300">lança um corte que "voa"</span> na direção do corte (estilo o Getsuga Tenshō do ichigo).</p>
            </div>
        ),
        type: (
            <div>
                <span className="inline-block w-3 h-3 bg-green-500 rounded-full mr-1"></span>
                <span>Ação</span>
            </div>
        ),
        mana: (
            <div>
                <span className="inline-block w-3 h-3 bg-blue-500 rounded-full mr-1"></span>
                <span>4-Mana</span>
            </div>
        ),
    },
    {
        name: 'Espinhos',
        image: './image/correntesG.png',
        magic: 'Ação de Arma Mahiru',
        description: (
            <div>
                <p>Mahiru se transforma em Kusarigama, quando Guren <span className="text-yellow-300">enrola as correntes</span> da Kusarigama nos inimigos ele ativa a sua habilidade (a sua vontade) e suga energia vital 
                    <span className="text-yellow-300"> se curando e curando aliados que tocarem nas correntes</span>.</p>
            </div>
        ),
        type: (
            <div>
                <span className="inline-block w-3 h-3 bg-green-500 rounded-full mr-1"></span>
                <span>Ação</span>
            </div>
        ),
        mana: (
            <div>
                <span className="inline-block w-3 h-3 bg-blue-500 rounded-full mr-1"></span>
                <span>4-Mana</span>
            </div>
        ),
    },
    {
        name: 'Ritmo de Duelo',
        image: './image/manoplaG.png',
        magic: 'Ação de Arma Mahiru',
        description: (
            <div>
                <p>Mahiru se transforma em Manoplas, caso o jogador tire <span className="text-yellow-300">18 no dado de acerto natural</span> e acerte o inimigo ele 
                    pode <span className="text-yellow-300">jogar novamente</span> gastando <span className="text-blue-500">4 de mana se acertar e 2 se errar</span>, caso vc use com a expansão de domínio o cara toma a ult do 
                    franque e <span className="text-yellow-300">fica trincado</span> durante uma rodada.</p>
            </div>
        ),
        type: (
            <div>
                <span className="inline-block w-3 h-3 bg-green-500 rounded-full mr-1"></span>
                <span>Ação</span>
            </div>
        ),
        mana: (
            <div>
                <span className="inline-block w-3 h-3 bg-blue-500 rounded-full mr-1"></span>
                <span>4 ou 2-Mana</span>
            </div>
        ),
    },
    {
        name: 'Corte triplo',
        image: './image/corteTriploG.png',
        magic: 'Ação de Arma',
        description: (
            <div>
                <p>Guren usa sua espada para fazer um corte triplo no seu inimigo que causa <span className="text-yellow-300">3d10+Des de dano</span> em seu adversário.</p>
            </div>
        ),
        type: (
            <div>
                <span className="inline-block w-3 h-3 bg-green-500 rounded-full mr-1"></span>
                <span>Ação</span>
            </div>
        ),
        mana: (
            <div>
                <span className="inline-block w-3 h-3 bg-blue-500 rounded-full mr-1"></span>
                <span>5-Mana</span>
            </div>
        ),
    },
]