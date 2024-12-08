const mulai = document.getElementById("mulai");

const tentang = document.getElementById("tentang");

const background = document.getElementById("background");

const area = document.getElementById("area");

const judul = document.getElementById("judul");

const music = document.getElementById("music");

const dibox = document.getElementById("dibox");

const sel = document.getElementById("sel");

const pintu = document.getElementById("pintu");

const breath = document.getElementById("breath");

const pel = document.getElementById("pel");

const ktw = document.getElementById("ktw");

const alat = document.getElementById("alat");

const scare = document.getElementById("scare");

const jatuh = document.getElementById("jatuh");

const end = document.getElementById("end");

const selimut = document.getElementById("selimut");

const splas = document.getElementById("splas");

const ui = document.getElementById("ui");

let clickCount =0;

mulai.addEventListener("click", () => {
    if(music.paused) {
        music.play();
        mulai.style.display ="none";
        tentang.style.display ="none";
        area.style.backgroundImage ="url('wc.png')";
        judul.style.display ="none";
        dibox.style.display ="block";
        splas.play();
    } else {
        music.paused();
    }
});

dibox.addEventListener("click", function() {
    
    clickCount++;
    
    if(clickCount === 1) {
        dibox.textContent ="hmm... orang tua ku pergi ke luar kota lagi, kerjaan terus yang di urus. jadi nya dirumah sendiri lagi.";
        ui.play();
    } else if (clickCount === 2) {
        dibox.textContent ="(berjalan ke kamar...)";
        walk.play();
        area.style.backgroundImage ="none";
    } else if (clickCount === 3) {
        dibox.textContent ="coba aja aku punya teman di rumah, huufth....";
        area.style.backgroundImage ="url('kamar1.png')";
        walk.pause();
        pintu.play();
    } else if (clickCount === 4) {
        dibox.textContent ="cuaca hari ini dingin juga. berangin lagi. dirumah sendiri tiga hari pasti membosankan.";
        pintu.pause();
        ui.play();
    } else if (clickCount === 5) {
        dibox.textContent ="udahlah, aku ngantuk mau langsung tidur aja.";
        ui.play();
    } else if (clickCount === 6) {
        dibox.textContent ="(tidur...)";
        area.style.backgroundImage ="none";
        selimut.play();
    } else if (clickCount === 7) {
        dibox.textContent ="...";
        selimut.pause();
        jatuh.play();
    } else if (clickCount === 8) {
        dibox.textContent =".....";
        jatuh.pause();
        ui.play();
    } else if (clickCount === 9) {
        dibox.textContent ="(terbangun...)";
        area.style.backgroundImage ="url('kamar1.png')";
        selimut.play();
    } else if (clickCount === 10) {
        dibox.textContent ="hah...! tadi itu suara apa?? kayak nya dari kamar mandi.";
        selimut.pause();
        ui.play();
    } else if (clickCount === 11) {
        dibox.textContent ="(ke kamar mandi...)";
        area.style.backgroundImage ="none";
        walk.play();
    } else if (clickCount === 12) {
        dibox.textContent ="...";
        walk.pause();
        pintu.play();
    } else if (clickCount === 13) {
        dibox.textContent ="HAHH!!";
        area.style.backgroundImage ="url('wc2.png')";
        pintu.pause();
        ui.play();
    } else if (clickCount === 14) {
        dibox.textContent ="kayak nya pipa berkarat dari atap udah bocor. udah ngantuk tapi malah ada kerjaan.";
        ui.play();
    } else if (clickCount === 15) {
        dibox.textContent ="(mengambil peralatan...)";
        area.style.backgroundImage ="none";
        alat.play();
    } else if (clickCount === 16) {
        dibox.textContent ="(membersihkan kotoran...)";
        alat.pause();
        pel.play();
    } else if (clickCount === 17) {
        dibox.textContent ="beres juga. udah ngantuk, capek lagi.";
        area.style.backgroundImage ="url('wc.png')";
        pel.pause();
        ui.play();
    } else if (clickCount === 18) {
        dibox.textContent ="(jalan ke kamar...)";
        area.style.backgroundImage ="none";
        walk.play();
    } else if (clickCount === 19) {
        dibox.textContent ="....";
        walk.pause();
        breath.play();
    } else if (clickCount === 20) {
        dibox.textContent ="......";
        pintu.play();
    } else if (clickCount === 21) {
        dibox.textContent ="anehh...";
        area.style.backgroundImage ="url('kamar1.png')";
        pintu.pause();
        ui.play();
    } else if (clickCount === 22) {
        dibox.textContent ="tapi..., udahlah";
        ui.play();
    } else if (clickCount === 23) {
        dibox.textContent ="(tidur...)";
        area.style.backgroundImage ="none";
        selimut.play();
    } else if (clickCount === 24) {
        dibox.textContent ="....";
        selimut.pause();
        music.pause();
    } else if (clickCount === 25) {
        dibox.textContent ="......";
    } else if (clickCount === 26) {
        dibox.textContent ="........";
    } else if (clickCount === 27) {
        dibox.textContent ="..........";
        ktw.play();
    } else if (clickCount === 28) {
        dibox.textContent ="...";
    } else if (clickCount === 29) {
        dibox.textContent =".....";
    } else if (clickCount === 30) {
        dibox.style.display ="none";
        sel.style.display ="none";
        area.style.backgroundImage ="url('jump1.gif')";
        area.style.animation ="0.6s out linear forwards";
        area.style.animationDelay ="0.6s";
        scare.play();
        setTimeout(function() {
            sel.style.display ="block";
            end.play();
        }, 4000);
    } 
});