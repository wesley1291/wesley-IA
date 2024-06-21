const caixaPrincipal =document.querySelector('caixa-principal');
const caixaPerguntas =document.querySelector('caixa-perguntas');
const caixaAlternativa =document.querySelector('caixa-alternativas');
const caixaResultado =document.querySelector('caixa-resultado');
const textoResultado =document.querySelector('texto-resultado');

const perguntas = [
{
    enunciado: "assim que saiu da escola voce depara com uma nova tecnologia, um chat que consegue responder todas as dúvidas que uma pessoa pode ter, ele tambem gera imagems e audios iper-realistas qual o primeiro pensamento?",
    alternativas: ["isso e assustador","isso e maravilhoso!"]
},  
{
    enunciado: "Insira o enunciado da Pergunta 2",
    alternativas: ["Alternativa 1","Alternativa 2"],
 
   
        enunciado: "pergunta 2 ",
        alternativas: [
            "alternativas 1",
            "alternativas 2",
        ]
    }
]
let atual = 0;
let perguntaAtual;

function mostraPergunta (){
    perguntaAtual = perguntas[atual];
    caixaPerguntas. textContent = perguntaAtual.enunciado;
    mostraAlternativas();
}
