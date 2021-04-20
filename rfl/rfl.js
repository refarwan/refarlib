let rfl = {};
let hoverPenuh = document.createElement("div");
hoverPenuh.classList.add("hover-penuh");
rfl.pesan = function (pesan, tidakanLanjutan) {
    let body = document.querySelector("body");
    body.appendChild(hoverPenuh);
    let popUp = document.createElement("div");
    popUp.classList.add("pop-up");
    let wadahPesan = document.createElement("div");
    wadahPesan.innerHTML = pesan;
    wadahPesan.classList.add("wadah-pesan");
    popUp.appendChild(wadahPesan);
    hoverPenuh.appendChild(popUp);
}