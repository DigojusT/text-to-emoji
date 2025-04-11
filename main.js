const input = document.querySelector(".inputt");
const send = document.querySelector(".send");
const result = document.querySelector(".result");
const emoji = ["⬛", "⬜"];
const alphabet = {
    a: [emoji[0], emoji[1], emoji[1], emoji[0], emoji[1], emoji[0], emoji[0], emoji[1], emoji[1], emoji[1], emoji[1], emoji[1], emoji[1], emoji[0], emoji[0], emoji[1], emoji[1], emoji[0], emoji[0], emoji[1]],
    b: [emoji[1], emoji[1], emoji[1], emoji[0], emoji[1], emoji[0], emoji[0], emoji[1], emoji[1], emoji[1], emoji[1], emoji[0], emoji[1], emoji[0], emoji[0], emoji[1], emoji[1], emoji[1], emoji[1], emoji[0]],
    c: [emoji[1], emoji[1], emoji[1], emoji[1], emoji[1], emoji[0], emoji[0], emoji[0], emoji[1], emoji[0], emoji[0], emoji[0], emoji[1], emoji[0], emoji[0], emoji[0], emoji[1], emoji[1], emoji[1], emoji[1]],
    d: [emoji[1], emoji[1], emoji[1], emoji[0], emoji[1], emoji[0], emoji[0], emoji[1], emoji[1], emoji[0], emoji[0], emoji[1], emoji[1], emoji[0], emoji[0], emoji[1], emoji[1], emoji[1], emoji[1], emoji[0]],
    e: [emoji[1], emoji[1], emoji[1], emoji[1], emoji[1], emoji[0], emoji[0], emoji[0], emoji[1], emoji[1], emoji[1], emoji[0], emoji[1], emoji[0], emoji[0], emoji[0], emoji[1], emoji[1], emoji[1], emoji[1]],
    f: [emoji[1], emoji[1], emoji[1], emoji[1], emoji[1], emoji[0], emoji[0], emoji[0], emoji[1], emoji[1], emoji[1], emoji[0], emoji[1], emoji[0], emoji[0], emoji[0], emoji[1], emoji[0], emoji[0], emoji[0]],
    g: [emoji[1], emoji[1], emoji[1], emoji[1], emoji[1], emoji[0], emoji[0], emoji[0], emoji[1], emoji[0], emoji[1], emoji[1], emoji[1], emoji[0], emoji[0], emoji[1], emoji[1], emoji[1], emoji[1], emoji[1]],
    h: [emoji[1], emoji[0], emoji[0], emoji[1], emoji[1], emoji[0], emoji[0], emoji[1], emoji[1], emoji[1], emoji[1], emoji[1], emoji[1], emoji[0], emoji[0], emoji[1], emoji[1], emoji[0], emoji[0], emoji[1]],
    i: [emoji[0], emoji[1], emoji[1], emoji[0], emoji[0], emoji[1], emoji[1], emoji[0], emoji[0], emoji[1], emoji[1], emoji[0], emoji[0], emoji[1], emoji[1], emoji[0], emoji[0], emoji[1], emoji[1], emoji[0]],
    j: [emoji[0], emoji[0], emoji[0], emoji[1], emoji[0], emoji[0], emoji[0], emoji[1], emoji[0], emoji[0], emoji[0], emoji[1], emoji[1], emoji[0], emoji[0], emoji[1], emoji[1], emoji[1], emoji[1], emoji[1]],
    k: [emoji[1], emoji[0], emoji[0], emoji[1], emoji[1], emoji[0], emoji[1], emoji[0], emoji[1], emoji[1], emoji[0], emoji[0], emoji[1], emoji[0], emoji[1], emoji[0], emoji[1], emoji[0], emoji[0], emoji[1]],
    l: [emoji[1], emoji[0], emoji[0], emoji[0], emoji[1], emoji[0], emoji[0], emoji[0], emoji[1], emoji[0], emoji[0], emoji[0], emoji[1], emoji[0], emoji[0], emoji[0], emoji[1], emoji[1], emoji[1], emoji[1]],
    m: [emoji[1], emoji[0], emoji[0], emoji[1], emoji[1], emoji[1], emoji[1], emoji[1], emoji[1], emoji[0], emoji[0], emoji[1], emoji[1], emoji[0], emoji[0], emoji[1], emoji[1], emoji[0], emoji[0], emoji[1]],
    n: [emoji[1], emoji[0], emoji[0], emoji[1], emoji[1], emoji[1], emoji[0], emoji[1], emoji[1], emoji[0], emoji[1], emoji[1], emoji[1], emoji[0], emoji[0], emoji[1], emoji[1], emoji[0], emoji[0], emoji[1]],
    o: [emoji[1], emoji[1], emoji[1], emoji[1], emoji[1], emoji[0], emoji[0], emoji[1], emoji[1], emoji[0], emoji[0], emoji[1], emoji[1], emoji[0], emoji[0], emoji[1], emoji[1], emoji[1], emoji[1], emoji[1]],
    p: [emoji[1], emoji[1], emoji[1], emoji[0], emoji[1], emoji[0], emoji[0], emoji[1], emoji[1], emoji[1], emoji[1], emoji[0], emoji[1], emoji[0], emoji[0], emoji[0], emoji[1], emoji[0], emoji[0], emoji[0]],
    q: [emoji[1], emoji[1], emoji[1], emoji[1], emoji[1], emoji[0], emoji[0], emoji[1], emoji[1], emoji[0], emoji[0], emoji[1], emoji[1], emoji[0], emoji[1], emoji[1], emoji[1], emoji[1], emoji[1], emoji[1]],
    r: [emoji[1], emoji[1], emoji[1], emoji[0], emoji[1], emoji[0], emoji[0], emoji[1], emoji[1], emoji[1], emoji[1], emoji[0], emoji[1], emoji[0], emoji[1], emoji[0], emoji[1], emoji[0], emoji[0], emoji[1]],
    s: [emoji[1], emoji[1], emoji[1], emoji[1], emoji[1], emoji[0], emoji[0], emoji[0], emoji[1], emoji[1], emoji[1], emoji[1], emoji[0], emoji[0], emoji[0], emoji[1], emoji[1], emoji[1], emoji[1], emoji[1]],
    t: [emoji[1], emoji[1], emoji[1], emoji[1], emoji[0], emoji[1], emoji[0], emoji[0], emoji[0], emoji[1], emoji[0], emoji[0], emoji[0], emoji[1], emoji[0], emoji[0], emoji[0], emoji[1], emoji[0], emoji[0]],
    u: [emoji[1], emoji[0], emoji[0], emoji[1], emoji[1], emoji[0], emoji[0], emoji[1], emoji[1], emoji[0], emoji[0], emoji[1], emoji[1], emoji[0], emoji[0], emoji[1], emoji[1], emoji[1], emoji[1], emoji[1]],
    v: [emoji[1], emoji[0], emoji[0], emoji[1], emoji[1], emoji[0], emoji[0], emoji[1], emoji[1], emoji[0], emoji[0], emoji[1], emoji[0], emoji[1], emoji[1], emoji[0], emoji[0], emoji[0], emoji[1], emoji[0]],
    w: [emoji[1], emoji[0], emoji[0], emoji[1], emoji[1], emoji[0], emoji[0], emoji[1], emoji[1], emoji[0], emoji[0], emoji[1], emoji[1], emoji[1], emoji[1], emoji[1], emoji[1], emoji[0], emoji[0], emoji[1]],
    x: [emoji[1], emoji[0], emoji[0], emoji[1], emoji[0], emoji[1], emoji[1], emoji[0], emoji[0], emoji[0], emoji[1], emoji[0], emoji[0], emoji[1], emoji[1], emoji[0], emoji[1], emoji[0], emoji[0], emoji[1]],
    y: [emoji[1], emoji[0], emoji[0], emoji[1], emoji[0], emoji[1], emoji[1], emoji[0], emoji[0], emoji[0], emoji[1], emoji[0], emoji[0], emoji[0], emoji[1], emoji[0], emoji[0], emoji[0], emoji[1], emoji[0]],
    z: [emoji[1], emoji[1], emoji[1], emoji[1], emoji[0], emoji[0], emoji[1], emoji[0], emoji[0], emoji[1], emoji[0], emoji[0], emoji[1], emoji[0], emoji[0], emoji[0], emoji[1], emoji[1], emoji[1], emoji[1]],
    0: [emoji[1], emoji[1], emoji[1], emoji[1], emoji[1], emoji[0], emoji[0], emoji[1], emoji[1], emoji[0], emoji[0], emoji[1], emoji[1], emoji[0], emoji[0], emoji[1], emoji[1], emoji[1], emoji[1], emoji[1]],
    1: [emoji[0], emoji[0], emoji[1], emoji[0], emoji[0], emoji[1], emoji[1], emoji[0], emoji[0], emoji[0], emoji[1], emoji[0], emoji[0], emoji[0], emoji[1], emoji[0], emoji[0], emoji[1], emoji[1], emoji[1]],
    2: [emoji[1], emoji[1], emoji[1], emoji[1], emoji[0], emoji[0], emoji[0], emoji[1], emoji[0], emoji[1], emoji[1], emoji[1], emoji[1], emoji[0], emoji[0], emoji[0], emoji[1], emoji[1], emoji[1], emoji[1]],
    3: [emoji[1], emoji[1], emoji[1], emoji[1], emoji[0], emoji[0], emoji[0], emoji[1], emoji[0], emoji[1], emoji[1], emoji[1], emoji[0], emoji[0], emoji[0], emoji[1], emoji[1], emoji[1], emoji[1], emoji[1]],
    4: [emoji[1], emoji[0], emoji[0], emoji[1], emoji[1], emoji[0], emoji[0], emoji[1], emoji[1], emoji[1], emoji[1], emoji[1], emoji[0], emoji[0], emoji[0], emoji[1], emoji[0], emoji[0], emoji[0], emoji[1]],
    5: [emoji[1], emoji[1], emoji[1], emoji[1], emoji[1], emoji[0], emoji[0], emoji[0], emoji[1], emoji[1], emoji[1], emoji[1], emoji[0], emoji[0], emoji[0], emoji[1], emoji[1], emoji[1], emoji[1], emoji[1]],
    6: [emoji[1], emoji[1], emoji[1], emoji[1], emoji[1], emoji[0], emoji[0], emoji[0], emoji[1], emoji[1], emoji[1], emoji[1], emoji[1], emoji[0], emoji[0], emoji[1], emoji[1], emoji[1], emoji[1], emoji[1]],
    7: [emoji[1], emoji[1], emoji[1], emoji[1], emoji[0], emoji[0], emoji[0], emoji[1], emoji[0], emoji[0], emoji[1], emoji[0], emoji[0], emoji[1], emoji[0], emoji[0], emoji[0], emoji[1], emoji[0], emoji[0]],
    8: [emoji[1], emoji[1], emoji[1], emoji[1], emoji[1], emoji[0], emoji[0], emoji[1], emoji[1], emoji[1], emoji[1], emoji[1], emoji[1], emoji[0], emoji[0], emoji[1], emoji[1], emoji[1], emoji[1], emoji[1]],
    9: [emoji[1], emoji[1], emoji[1], emoji[1], emoji[1], emoji[0], emoji[0], emoji[1], emoji[1], emoji[1], emoji[1], emoji[1], emoji[0], emoji[0], emoji[0], emoji[1], emoji[1], emoji[1], emoji[1], emoji[1]],
    " ": [emoji[0], emoji[0], emoji[0], emoji[0], emoji[0], emoji[0], emoji[0], emoji[0], emoji[0], emoji[0], emoji[0], emoji[0]] 
};
const gap = [emoji[0], emoji[0], emoji[0], emoji[0]];

function percor(texto) {
    if (texto != "") {
        let arai = [];
        for (let i = 0; i < texto.length; i++) {
            arai.push(gap)
            arai.push(alphabet[texto[i].toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "")]); 
            arai.push(gap)

        }
        return result.textContent = String(arai).split(',').join('');
    } else {
        return result.textContent = "Digite algo...";
    }
    arai = [];
}

function sendtoseila() {
    percor(input.value);
}
