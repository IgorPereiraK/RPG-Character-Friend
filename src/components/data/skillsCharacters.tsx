import { Skills } from "../types/Skills";

export const skillsGuren: Skills[] = [
    {
        name: 'Vontade do Guerreiro do Mar',
        image: './image/guerreiroG.png',
        magic: 'Passiva de Guerreiro',
        description: (
            <div>
                <p>A <span className="text-yellow-300">cada 3 acerto</span> Guren da <span className="text-yellow-300">true damage</span> ignorando habilidades 
                que tanka dano e <span className="text-yellow-300">ganha 12 de escudo</span> que decai em 6 em cada rodada.</p>
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
        name: 'Foco do Faraó',
        image: './image/faraoG.png',
        magic: 'Passiva de Guerreiro',
        description: (
            <div>
                <p>O foco do faraó te concede <span className="text-yellow-300">penetração de armadura em 10% </span>
                    Pode fazer <span className="text-yellow-300">um dado de acerto virar um crítico</span> durante uma luta.
                    Adversários com <span className="text-yellow-300">1/3 do seu nível</span> caem quando vc quiser.
                    <p><span className="text-yellow-300 underline underline-offset-4">Golpe atordoante:</span> esse golpe <span className="text-yellow-300">soma sua inteligência e 
                    sabedoria</span> em uma onda de choque onde pode deixar os <span className="text-yellow-300">adversários fora de jogo por 1d3 rodadas</span>, o recarregamento dessa habilidade e de <span className="text-yellow-300">4 rodadas</span>.</p>
                </p>
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
        name: 'Gladiador Imortal',
        image: './image/duelistaG.png',
        magic: 'Passiva de Duelista',
        description: (
            <div>
                <p>Por causa de seu talento de duelista em batalhas Guren <span className="text-yellow-300">curar 1d6 por golpe acertado</span> no seus adversário.</p>
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
        name: 'Mega Evolução Espiritual',
        image: './image/evolucaoG.png',
        magic: 'Transformação Espiritual',
        description: (
            <div>
                <p>A Mega evolução espiritual é uma transformação que deixa Guren mais forte dando a ele, <span className="text-yellow-300">+2 em força, destreza, constituição, sabedoria, inteligência</span>, <span className="text-yellow-300">1d8 de 
                    armadura mágica e física</span>, <span className="text-yellow-300">1dx de cura</span> por rodada, quanto mais <span className="text-yellow-300">espiritualidade o local</span> tiver, mais cura.</p>
            </div>
        ),
        type: (
            <div>
                <span className="inline-block w-3 h-3 bg-orange-500 rounded-full mr-1"></span>
                <span>Ação Bônus</span>
            </div>
        ),
    },
    {
        name: 'Armadura Darkin',
        image: './image/armorDarkinG.png',
        magic: 'Ação de Arma Mahiru',
        description: (
            <div>
                <p>Mahiru se transforma em uma Armadura envolvendo o Guren adicionando mais <span className="text-yellow-300">+2 de CA</span> gastando  <span className="text-blue-500">1 de mana por rodada</span> e  <span className="text-blue-500">2 de mana</span> <span className="text-yellow-300">por cada 1d6 de cura. </span>
                    <p><span className="text-yellow-300 underline underline-offset-4">Cura espiritual:</span> ao receber cura usando essa armadura o usuário ganha <span className="text-yellow-300">mais 1d6 de cura</span>.</p>
                </p>
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
                <span>1-Mana</span>
            </div>
        ),
    },
    {
        name: 'Quebra Onda',
        image: './image/quebraOndaG.png',
        magic: 'Ação de Arma Elemental',
        description: (
            <div>
                <p>Ao usar essa habilidade o adversário leva <span className="text-yellow-300">1d12+For de dano</span> e quebra partes da armadura do inimigo fazendo o mesmo <span className="text-yellow-300">perder CA proferida 
                    pela a armadura</span> pelo resto da batalha ou até a troca ou reparação da mesma, caso o inimigo não tenha armadura 
                    a <span className="text-yellow-300">CA do mesmo é reduzida em 20% por 2 rodadas</span>.</p>
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
                <span>6-Mana</span>
            </div>
        ),
    },
    {
        name: 'Fluxo da Água',
        image: './image/fluxoAguaG.png',
        magic: 'Ação de Arma Elemental',
        description: (
            <div>
                <p>Com essa habilidade ativada Guren eleva seus sentidos ao limite, fazendo que ele tenha um possível <span className="text-yellow-300">contra ataque </span> 
                    se caso o teste que o <span className="text-yellow-300">jogador jogar (1d20+Des)</span> for maior ou igual ao dado de <span className="text-yellow-300">acerto do inimigo</span> Guren reflete o ataque 
                    fazendo que <span className="text-yellow-300">ataques corpo a corpo são refletidos com 50% do dano total</span> e <span className="text-yellow-300">ataques de média e longa distância em 50% de dano total</span>, essa habilidade dura por <span className="text-yellow-300">4 rodadas</span>.</p>
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
                <span>6-Mana</span>
            </div>
        ),
    },
    {
        name: 'Made in Hell',
        image: './image/madeHellG.png',
        magic: 'Magia de Evocação',
        description: (
            <div>
                <p>Ao ativar a ult as tatuagens no braço de guren são "sugadas" para dentro da espada e surge outras tatuagens no corpo de 
                Guren (as do sukuna) em seguida o mesmo faz um corte com a espada no tecido do espaço que <span className="text-yellow-300">faz surgir uma espécie de portal (Guren obrigatoriamente tem que estar tocando a mahiru para ativar a ult)</span>.
                O Guren pode fazer o portal perseguir o alvo e fazer que ele se estique para mandar um alvo grande ou um grupo de pessoas, 
                <span className="text-yellow-300"> o portal fica ativado por 2 turnos se até lá guren não conseguir acertar o alvo o portal se fecha</span> caso guren tenha sucesso em capturar o seu alvo ele 
                entra na sua expansão de domínio. Guren ao entrar no seu domínio ganha mais <span className="text-yellow-300">4 de bônus em todos os seus atributos</span> e ganha uma nova habilidade que se chama <span className="text-orange-800 underline underline-offset-4">Purgatório </span> 
                uma maldição que <span className="text-yellow-300">"trava" uma habilidade do inimigo</span> fazendo que ele não utilize essa habilidade até sair do domínio, a duração do domínio são <span className="text-yellow-300">4 rodadas</span>.</p>
            </div>
        ),
        type: (
            <div>
                <span className="inline-block w-3 h-3 bg-green-500 rounded-full mr-1"></span>
                <span>Ação</span>
            </div>
        ),
    },
    {
        name: 'Sábio da Meia Lua',
        image: './image/sabioLuaG.png',
        magic: 'Ação de Guerreiro',
        description: (
            <div>
                <p>Durante <span className="text-yellow-300">3 rodadas</span> o adversário terá que tacar <span className="text-yellow-300">dois dados para te acertar</span>, se ele acertar 1, vai ter que tacar outro para acertar o 2 e finalmente te 
                    dar dano, com a ult ativa vc tem <span className="text-yellow-300">1d6 a mais de dano</span> em todas as suas habilidades.</p>
            </div>
        ),
        type: (
            <div>
                <span className="inline-block w-3 h-3 bg-green-500 rounded-full mr-1"></span>
                <span>Ação</span>
            </div>
        ),
    },
]