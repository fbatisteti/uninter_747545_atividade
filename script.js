/* ACCORDION
Para fazer a função de accordion funcionar, os menus onde abre um e fecha os demais

- Encontra os containers (que são o todo) e os accordions (que são só o "cabeçalho")
- Depois itera nos accordions para adicionar um "onclick" genérico
- Este onclick fecha todos os containers e abre o container do accordion clicado

E no primeiro load garante que o primeiro container esteja aberto
já que por padrão nenhum container é renderizado como aberto
*/

var containers = document.getElementsByClassName("accordion-container");
var accordions = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < accordions.length; i++) {
    // adiciona um "onclick" em cada accordion
    accordions[i].addEventListener("click", function() {
        var clickedContainer = this.parentNode;
        
        // fecha tudo
        for (var j = 0; j < containers.length; j++) {
            containers[j].classList.remove("active");
        }
        
        // abre o clicado
        clickedContainer.classList.add("active");
    });
}

// garante a priomeira aba aberta, ou que seja a da URL
const url = window.location.href;
let page = url.split("?")[1];

switch (page) {
    case "1":
        containers[0].classList.add("active");
        break;

    case "2":
        containers[1].classList.add("active");
        break;

    case "3":
        containers[2].classList.add("active");
        break;
    
    case "4":
        containers[3].classList.add("active");
        break;

    default:
        containers[0].classList.add("active");
        break;
}

/* FLUFF
Funções acessórisa para dar vida à pagina

- highlight(): pega o texto com a classe "especial1" e faz ela piscar por 3 segundos
- translateJapanese(): traduz o texto japonês para português durante mouseover
- sendEmail(): envia um email com o assunto e corpo preenchidos no formulário
*/
function highlight() {
    let highlightText = document.querySelectorAll(".especial1");

    // cores do arco-íris, em literal mesmo
    const colors = ["red", "orange", "yellow", "green", "blue", "indigo", "violet"];
    let i = 0;

    // pisca
    const interval = setInterval(() => {
        highlightText.forEach(el => {
                el.style.color = colors[i % colors.length];
        });
        i++;
    }, 100); // ms

    // volta para a cor original
    setTimeout(() => {
        clearInterval(interval);
        highlightText.forEach(el => {
                el.style.color = "";
            });
    }, 3000); // ms
}

function translateJapanese(translate) {
    var textoJapones = document.getElementById("japones");
    
    if (translate) {
        textoJapones.innerText = "tinha que fazer um bazilhão de conexões mentais para entender aquele bando de desenhinho.";
    } else {
        textoJapones.innerText = "そして、そのたくさんの小さな絵を理解するために、私は無数の精神的なつながりを作らなければなりませんでした。";
    }
}

function sendEmail(event) {
    event.preventDefault(); // isso evita o form de só atualizar a página e não realizar a função

    let sender = document.getElementById("sender").value;
    let subject = document.getElementById("subject").value;
    let body = document.getElementById("email-body").value;

    // converte em "código" a mensagem (ex.: espaço vira %20)
    subject = encodeURIComponent(sender + " - " + subject);
    body = encodeURIComponent(body);

    let send = `mailto:dev.batisteti@gmail.com?subject=${subject}&body=${body}`;
    window.location.href = send;
}