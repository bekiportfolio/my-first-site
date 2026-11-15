let ism = "Bekzod";
let yosh = 20;
console.log(ism, yosh);
console.log("5" + 3);
console.log(5 + 3);
console.log("salom" - 3);
let soni = 3;
let narxi = 5;
console.log(jami = soni * narxi);
let sarlavha = document.getElementById("yangi");
console.log(sarlavha);
sarlavha.textContent = "salom ";
sarlavha.style.color = "red";
let qism = document.getElementById("tana");
console.log(qism);
qism.style.backgroundColor = "brown";
let pin = document.getElementById("tugma");
pin.addEventListener("click", function () {
    console.log(qism.style.backgroundColor);
    if (qism.style.backgroundColor === "brown") {
        qism.style.backgroundColor = "blue";
    } else if (qism.style.backgroundColor === "blue") {
        qism.style.backgroundColor = "brown";
    }
});
function salomlash(ism) {
    console.log("Salom, " + ism);
}
salomlash("Bekzod");
salomlash("Vali");
salomlash("Ali");
function jamihisob(soni, puli){
    let hisob = soni * puli;
    console.log(hisob);
}
jamihisob(3,5);
jamihisob(4, 6);
jamihisob(7, 9);
