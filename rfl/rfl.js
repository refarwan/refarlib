let rf = {};
let hoverPenuh = document.createElement("div");
hoverPenuh.classList.add("hover-penuh");

rf.pesan = function (pesan, tidakanLanjutan) {
    let body = document.querySelector("body");
    if (!body.contains(body.querySelector(".hover-penuh"))) {
        body.appendChild(hoverPenuh);

        let popUp = document.createElement("div");
        popUp.classList.add("pop-up");

        let wadahPesan = document.createElement("div");
        wadahPesan.innerHTML = pesan;
        wadahPesan.classList.add("wadah-pesan");
        popUp.appendChild(wadahPesan);

        let tombolOke = document.createElement("button");
        tombolOke.innerHTML = "Oke";
        tombolOke.classList.add("tombol-oke");
        popUp.appendChild(tombolOke);
        tombolOke.onclick = function () {
            hoverPenuh.remove();
            tombolOke.remove();
            wadahPesan.remove();
            popUp.remove();
            if (tidakanLanjutan) tidakanLanjutan();
        }
        hoverPenuh.appendChild(popUp);
        tombolOke.focus();
    }

}

rf.konf = function (pesan, tindakanOke, tindakanBatal) {
    let body = document.querySelector("body");
    if (!body.contains(body.querySelector(".hover-penuh"))) {
        body.appendChild(hoverPenuh);

        let popUp = document.createElement("div");
        popUp.classList.add("pop-up");

        let wadahPesan = document.createElement("div");
        wadahPesan.innerHTML = pesan;
        wadahPesan.classList.add("wadah-pesan");
        popUp.appendChild(wadahPesan);

        let tombolOke = document.createElement("button");
        tombolOke.innerHTML = "Oke";
        tombolOke.classList.add("tombol-oke");
        popUp.appendChild(tombolOke);

        let tombolBatal = document.createElement("button");
        tombolBatal.innerHTML = "Batal";
        tombolBatal.classList.add("tombol-batal");
        popUp.appendChild(tombolBatal);

        function tutup() {
            hoverPenuh.remove();
            tombolOke.remove();
            wadahPesan.remove();
            popUp.remove();
        }

        tombolOke.onclick = function () {
            tutup();
            if (tindakanOke) tindakanOke();
        }

        tombolBatal.onclick = function () {
            tutup();
            if (tindakanBatal) tindakanBatal();
        }
        hoverPenuh.appendChild(popUp);
        tombolOke.focus();
    }
}

rf.isian = function (pesan, tindakanOke, tindakanBatal) {
    let body = document.querySelector("body");
    if (!body.contains(body.querySelector(".hover-penuh"))) {
        body.appendChild(hoverPenuh);

        let popUp = document.createElement("div");
        popUp.classList.add("pop-up");

        let wadahPesan = document.createElement("div");
        wadahPesan.innerHTML = pesan;
        wadahPesan.classList.add("wadah-pesan");
        popUp.appendChild(wadahPesan);

        let isian = document.createElement("input");
        popUp.appendChild(isian);
        isian.onkeyup = function (e) {
            if (e.keyCode == 13) {
                tombolOke.click();
            }
        }

        let tombolOke = document.createElement("button");
        tombolOke.innerHTML = "Oke";
        tombolOke.classList.add("tombol-oke");
        popUp.appendChild(tombolOke);

        let tombolBatal = document.createElement("button");
        tombolBatal.innerHTML = "Batal";
        tombolBatal.classList.add("tombol-batal");
        popUp.appendChild(tombolBatal);

        function tutup() {
            hoverPenuh.remove();
            tombolOke.remove();
            wadahPesan.remove();
            popUp.remove();
        }

        tombolOke.onclick = function () {
            tutup();
            if (tindakanOke) tindakanOke(isian.value);
        }

        tombolBatal.onclick = function () {
            tutup();
            if (tindakanBatal) tindakanBatal(isian.value);
        }
        hoverPenuh.appendChild(popUp);
        hoverPenuh.appendChild(popUp);
        isian.focus();
    }

}