const canvas = document.querySelector('canvas'); // trazer canvas pro js

canvas.width = window.innerWidth; // largura do canvas é a da janela
canvas.height = window.innerHeight; // altura do canvas é a da janela

const button = document.getElementsByTagName('button');
let grossura = 1;
const grossura_display = document.getElementById('numero');
const canvasHeight = canvas.height;
const canvasWidth = canvas.width;
const tipo = 0;
let vclick = false; // verificar click
let xa = undefined; // ponto em x antes
let ya = undefined; // ponto em y antes
const c = canvas.getContext('2d'); // deixar 2d
let r = 1; // raio do circulo
let x = 0; // ponto em x
let y = 0; // ponto em y
let cor = "black"; // cor da linha/bola

// variavel mouse pra saber onde tá o mouse
const mouse = {
    x: undefined, // ponto x do mouse
    y: undefined  // ponto y do mouse
}

window.onload = () => {
    grossura_display.innerHTML = grossura;
}

if (tipo === 0) {
    window.addEventListener('resize', () => {
        canvas.width = window.innerWidth; // largura do canvas é a da janela
        canvas.height = window.innerHeight; // altura do canvas é a da janela
    });

    // evento do click do mouse sobre a janela
    window.addEventListener('mousedown', () => {
        vclick = true; // verificar click true = mouse pressionando
    });

    // evento de mover o mouse
    window.addEventListener("mousemove", (event) => {
        mouse.x = event.x + 1; // saber ponto x
        mouse.y = event.y + 5; // saber ponto y

        // desenhar apenas quando o mouse está pressionando 
        if (vclick) {
            x = mouse.x;
            y = mouse.y;

            c.beginPath(); // desenhar bola
            c.arc(x, y, r, 0, 2 * Math.PI, false);
            c.fillStyle = cor;
            c.fill();

            c.beginPath(); // desenhar linha entre as bolas
            c.moveTo(xa, ya);
            c.lineTo(x, y);
            c.lineWidth = r * 2;
            c.strokeStyle = cor;
            c.stroke();

            xa = x; // x antes fica igual ao x de agora pra ser usado como x antes depois
            ya = y; // mesmo que o x
        }
    });

    // evento para terminar a pressão, e deixar os x, y antes em indefinidos
    window.addEventListener("click", () => {
        vclick = false;
        xa = undefined;
        ya = undefined;
        c.closePath();
    });
}

button[0].onclick = () => {
    r += 0.2; // aumentar grossura da linha, pressionando +
    grossura++;
    grossura_display.innerHTML = grossura;
}

button[1].onclick = () => {
    r -= 0.2; // diminuir grossura da linha, pressionando -
    grossura--;
    grossura_display.innerHTML = grossura;
}

// função para pressão de tecla
window.onkeydown = (event) => {
    if (event.key === '+') {
        r += 0.2; // aumentar grossura da linha, pressionando +
        grossura++;
        grossura_display.innerHTML = grossura;
    }
    if (event.key === '-' && r > 0) {
        r -= 0.2; // diminuir grossura da linha, pressionando -
        grossura--;
        grossura_display.innerHTML = grossura;
    }
    if (event.key === 'e') {
        c.clearRect(0, 0, canvasWidth, canvasHeight); // limpar a tela apertando e
    }
}

// Código DaviSVC com jQuery
const colorInput = $('.color input');

$('.color input').blur(() => {
    const color = $('.color input').val();
    cor = color;
});
