const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Quando você esquece de levar guarda-chuva e começa a chover, qual é a melhor solução imediata?",
        alternativas: [
            {
                texto: " Reclamar sem parar 😤!",
                afirmacao: "errado!. "
            },
            {
                texto: "Ignorar e continuar andando normalmente 🚶, pois não sou de açucar!",
                afirmacao: "certa a resposta!."
            }
        ]
    },
    {
        enunciado: "Se você derruba água no chão da cozinha, qual é a melhor ação imediata?",
        alternativas: [
            {
                texto: "Secar com um pano ou rodo 🧽",
                afirmacao: "certa a resposta!."
            },
            {
                texto: "Colocar mais água para disfarçar 🌊",
                afirmacao: "seria bom mas não é a certa!."
            }
        ]
    },
    {
        enunciado: "Você está em casa e a energia acaba. Qual é a melhor atitude inicial?",
        alternativas: [
            {
                texto: "Ver se os vizinhos também estão sem energia 👀",
                afirmacao: "acertou!."
            },
            {
                texto: "Acender velas imediatamente 🕯️",
                afirmacao: "errou!."
            }
        ]
    },
    {
        enunciado: "Você esquece o arroz no fogo e começa a sentir cheiro de queimado. O que fazer?",
        alternativas: [
            {
                texto: "Dizer que é “arroz defumado gourmet” 🍽️",
                afirmacao: "errou!."
            },
            {
                texto: "Abrir a panela e desligar o fogo 🔥",
                afirmacao: "acertou!."
            }
        ]
    },
    {
        enunciado: "O cachorro começa a latir sem parar durante a noite. Qual atitude ajuda mais?",
        alternativas: [
            {
                texto: "Latir junto para fazer companhia 🐶",
                afirmacao: "errou!."
            },
            {
                texto: "Ver se ele precisa de água ou comida 🥣",
                afirmacao: "acertou!."
            }
        ]
    },
];


let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "quantas você acertou?";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();
