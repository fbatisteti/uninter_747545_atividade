// LINKS GERAIS
const necrolocation_src = "https://itch.io/embed-upload/11893822?color=2d282a"
const necrolocation_href = "https://fabiobatisteti.itch.io/necrolocation"
const necrolocation_label = "Jogue Necrolocation no itch.io"

const carnavaromba_src = "https://itch.io/embed-upload/13038266?color=f191c1"
const carnavaromba_href = "https://fabiobatisteti.itch.io/carnavaromba"
const carnavaromba_label = "Jogue Carnavaromba no itch.io"

const whellinton_src = "https://itch.io/embed-upload/13516975?color=8f563b"
const whellinton_href = "https://fabiobatisteti.itch.io/clocklight"
const whellinton_label = "Jogue Whellinton Jones and The Crystal Clocklight no itch.io"

// Arruma a página para o jogo em questão
function getGame(){
    const url = window.location.href;
    const iframe = document.querySelector('iframe');

    let game = url.split("?")[1];

    switch (game) {
        case "necrolocation":
            iframe.src = necrolocation_src;
            iframe.querySelector('a').href = necrolocation_href
            iframe.querySelector('a').textContent = necrolocation_label
        
        case "carnavaromba":
            iframe.src = carnavaromba_src;
            iframe.querySelector('a').href = carnavaromba_href
            iframe.querySelector('a').textContent = carnavaromba_label

        case "whellinton":
            iframe.src = whellinton_src;
            iframe.querySelector('a').href = whellinton_href
            iframe.querySelector('a').textContent = whellinton_label

        default:
            break
    }
}