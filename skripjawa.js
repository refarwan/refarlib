const tombolTesRfPesan1 = document.querySelector("button");

tombolTesRfPesan1.onclick = function () {
    rf.pesan("Percobaan rf.pesan 1");
}

const tombolTesRfPesan2 = document.querySelectorAll("button")[1];
tombolTesRfPesan2.onclick = function () {
    rf.pesan("Percobaan rf.pesan 2", function () {
        alert("Tindakan Lanjutan")
    });
}