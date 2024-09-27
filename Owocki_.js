const jablka_cena = 3;
const gruszka_cena = 5;
const sliwka_cena = 2;
let jablka_ilosc = 100;
let gruszka_ilosc = 60;
let slwika_ilosc = 150;
let ogolnac_jablek = jablka_cena*jablka_ilosc;
let ogolnac_gruszek = gruszka_cena*gruszka_ilosc;
let ogolnac_sliwek = sliwka_cena*slwika_ilosc;
let cena_ogolna = ogolnac_sliwek+ogolnac_gruszek+ogolnac_jablek;

console.log("Informacje przed zmianą:");
console.log("Ogólna cena jablek: "+ ogolnac_jablek );
console.log("Ogólna cena gruszek: "+ ogolnac_gruszek);
console.log("Ogólna cena śliwek: "+ ogolnac_sliwek);
console.log("Cena ogólna produktów wynosi: "+ cena_ogolna);

jablka_ilosc = jablka_ilosc - 20;
gruszka_ilosc = gruszka_ilosc - 30;
ogolnac_jablek = jablka_cena*jablka_ilosc;
ogolnac_gruszek = gruszka_cena*gruszka_ilosc;
cena_ogolna = ogolnac_sliwek+ogolnac_gruszek+ogolnac_jablek;

console.log("Informacje po zmianie:")
console.log("Ogólna cena jablek: "+ ogolnac_jablek );
console.log("Ogólna cena gruszek: "+ ogolnac_gruszek);
console.log("Ogólna cena śliwek: "+ ogolnac_sliwek);
console.log("Cena ogólna produktów wynosi: "+ cena_ogolna);