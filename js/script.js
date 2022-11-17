const kikker = document.querySelector("#kikker")

function rotate() {
    kikker.style.transform = "rotate(90deg)"
}

kikker.addEventListener("click", rotate)

const computer = document.querySelector("#computer");

function del() {
    computer.style.display = "none";
}

computer.style.visibility = "hidden";

computer.addEventListener("click", del);

const head = document.querySelector("#header")

function popup() {
    alert("ÿdjeee");
}

head.addEventListener("click", popup)

const skills = document.querySelector("#skills")

function color() {
    skills.style.color = "orange"
}

skills.addEventListener("click", color)

function popup2() {
    alert("blabla");

}

const ditbenik = document.querySelector(".dit_ben_ik")
ditbenik.addEventListener("click", popup2)


const bal = document.querySelector("#bal")

function chanceimage() {
    bal.src = "img/computer.jpg"

}

bal.addEventListener("click", chanceimage)


const foto = document.querySelector("#foto")


function popup3() {
    alert("semenandy");
}

document.addEventListener("scroll", popup3);

function backgroundColor(e) {
    if (e.key == 'f') {
        let multiColor = ["red", "blue", "green", "#0077b3", "pink", "orange", "cyan", "lightblue", "black"]
        let arrayCount = multiColor.length

        let randNumber = Math.floor(Math.random() * arrayCount)

        document.body.style.backgroundColor = multiColor[randNumber];
    }
}

document.addEventListener("keydown", backgroundColor);

console.log("hoi");

document.querySelector("span").addEventListener("click", function () {
    document.querySelectorAll("p, h1, h2, a, i, label, input").forEach(function (item) {
        item.style.transform = "rotate(180deg)";
    })
})





