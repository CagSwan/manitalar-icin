const button = document.getElementById("moveButton");
const trueButton = document.getElementById("trueButton");
const content = document.getElementById("content");

function getRandomPosition() {
    const x = Math.random() * (window.innerWidth - button.offsetWidth - 10);
    const y = Math.random() * (window.innerHeight - button.offsetHeight - 10);
    return { 
        x: Math.max(10, x), 
        y: Math.max(10, y) 
    };
}

button.addEventListener("mouseover", () => {
    const { x, y } = getRandomPosition();
    button.style.left = `${x}px`;
    button.style.top = `${y}px`;
});

trueButton.addEventListener("click", () => {
    content.innerHTML = `
        <video class="yasasinVideo" controls autoplay>
            <source src="kiss.mp4" type="video/mp4">
            Tarayıcınız video etiketini desteklemiyor.
        </video>
        <p class="yasasinText">YAŞASIINNN</p>
        <p id="seviom">SENİ ÇOK SEVİYOMMM<3333</p>
    `;
});
