const textoCompleto = `
Nos registros esquecidos do tempo,
ergueu-se uma presença impossível de ignorar.

No ano de 2025,
nasceu um reinado diferente de todos os outros.

Não por conquista.
Mas por essência.

Portadora do Sorriso Flamejante.
Senhora do Olhar que Incendeia.
Guardião oficial do coração de Lukas.
`;

let i = 0;
const velocidade = 35;

/* ================= INICIAR ================= */

function iniciar() {

    telaCheia();
    efeitoRevelacao();

    const ato1 = document.getElementById("ato1");
    const ato2 = document.getElementById("ato2");

    document.body.classList.add("tremor");
    setTimeout(() => document.body.classList.remove("tremor"), 300);

    const audio = document.getElementById("audioFogo");
    if (audio) audio.play().catch(() => {});

    setTimeout(() => {
        ato1.classList.remove("ativo");
        ato2.classList.add("ativo");
        escreverTexto();
    }, 600);
}

/* ================= TEXTO ================= */

function escreverTexto() {

    const elemento = document.getElementById("texto");
    const botao = document.getElementById("btnJuramento");

    elemento.innerHTML = "";
    i = 0;

    function digitar() {
        if (i < textoCompleto.length) {
            elemento.innerHTML += textoCompleto.charAt(i);
            i++;
            setTimeout(digitar, velocidade);
        } else {
            botao.classList.remove("hidden");
            vibrarImpacto();
        }
    }

    digitar();
}

/* ================= JURAMENTO ================= */

function irParaJuramento() {

    const ato2 = document.getElementById("ato2");
    const ato3 = document.getElementById("ato3");

    distorcerTela();
    vibrarImpacto();

    ato2.classList.remove("ativo");
    ato3.classList.add("ativo");
}

/* ================= CONTADOR ================= */

const dataInicio = new Date("2025-12-19");

function atualizarContador() {
    const agora = new Date();
    const diferenca = agora - dataInicio;

    const dias = Math.floor(diferenca / (1000 * 60 * 60 * 24));
    const horas = Math.floor((diferenca / (1000 * 60 * 60)) % 24);
    const minutos = Math.floor((diferenca / (1000 * 60)) % 60);
    const segundos = Math.floor((diferenca / 1000) % 60);

    document.getElementById("contador").innerText =
        `${dias} dias, ${horas} horas, ${minutos} minutos e ${segundos} segundos`;
}

setInterval(atualizarContador, 1000);
atualizarContador();

/* ================= PARTÍCULAS ================= */

document.addEventListener("DOMContentLoaded", () => {

    const container = document.getElementById("particulas-container");

    for (let j = 0; j < 40; j++) {
        const particula = document.createElement("div");
        particula.classList.add("particula");

        particula.style.left = Math.random() * 100 + "vw";
        particula.style.animationDuration = (3 + Math.random() * 5) + "s";
        particula.style.animationDelay = Math.random() * 5 + "s";

        container.appendChild(particula);
    }
});

/* ================= TOUCH IMPACTO ================= */

document.addEventListener("touchstart", function(e) {

    const toque = e.touches[0];

    for (let k = 0; k < 15; k++) {
        const faísca = document.createElement("div");
        faísca.classList.add("particula");

        faísca.style.position = "fixed";
        faísca.style.left = toque.clientX + "px";
        faísca.style.top = toque.clientY + "px";
        faísca.style.animationDuration = "1s";

        document.body.appendChild(faísca);

        setTimeout(() => faísca.remove(), 1000);
    }
});

/* ================= EFEITOS ================= */
function efeitoRevelacao() {
    const overlay = document.createElement("div");
    overlay.style.position = "fixed";
    overlay.style.inset = "0";
    overlay.style.background = "black";
    overlay.style.opacity = "1";
    overlay.style.transition = "opacity 2s ease";
    overlay.style.zIndex = "9999";

    document.body.appendChild(overlay);

    setTimeout(() => {
        overlay.style.opacity = "0";
        setTimeout(() => overlay.remove(), 2000);
    }, 500);
}

function distorcerTela() {
    document.body.classList.add("distorcao");
    setTimeout(() => {
        document.body.classList.remove("distorcao");
    }, 800);
}

