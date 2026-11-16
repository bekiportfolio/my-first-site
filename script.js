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
function jamihisob(soni, puli) {
    let hisob = soni * puli;
    console.log(hisob);
}
jamihisob(3, 5);
jamihisob(4, 6);
jamihisob(7, 9);
function kvadrad(son) {
    let n1 = son * son;
    console.log("salom");
    return n1;

}
kvadrad(3);
let natija = kvadrad(3);
console.log(natija);
console.log(kvadrad(3) + kvadrad(4));
let a;
console.log(a);
let mevalar= ["olma", "nok", "olcha"];
console.log(mevalar[0]);
console.log(mevalar[mevalar.length-1]);
mevalar.push("anor");
console.log(mevalar[0], mevalar[1], mevalar[2], mevalar[3], mevalar.length);
console.log(mevalar);
for(let i=1 ;i<=5; i++){
    console.log(i);
}
for(let i=0;i<mevalar.length;i++){
    console.log(i ,mevalar[i]);
}
    for(let i=2;i<=30;i+=2){
        console.log(i);
    }
for(let a=1;a<=30;a++){
    if(a%3==0){
        console.log(a);
    }
}
for(let x=1;x<=30;x++){
    if(x%3==0 || x%5==0){
        console.log(x);
    }
}