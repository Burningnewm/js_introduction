console.log("Exercices sur les types et opérateurs");

// Exercice 1 :
// Que se passe-t-il quand on fait "l'addition" d'un entier et d'un string ? Quel est le type du résultat ?
let a = 1+"1"
console.log(a);
console.log(typeof a);

// Même question avec toutes les combinaisons entre les types : number, string, undefined, boolean, function
let b = 1 + true;
console.log(b);
console.log(typeof b);
let z = true + 12;
console.log(z);
console.log(typeof z);
let c = "a" + false;
console.log(c);
console.log(typeof c);
let y =  false + "a";
console.log(y);
console.log(typeof y);
let d = 1 + undefined;
console.log(d);
console.log(typeof d);
let x = undefined + 1;
console.log(x);
console.log(typeof x);
let e = "a" + undefined;
console.log(e);
console.log(typeof e);
let f = undefined + "a";
console.log(f);
console.log(typeof f);
let w = undefined;
console.log(w);
console.log(typeof w);
let g = 1 + console.log;
console.log(g);
console.log(typeof g);
let h = console.log + "a";
console.log(h);
console.log(typeof h);
function myfunction(){
    console.log("Bonjour");
}
myfunction();
let i = myfunction + true;
console.log(i);
console.log(typeof i);
let j = undefined + Math.min;
console.log(j);
console.log(typeof j);

let tab = [1, "a", undefined, true, console.log]
function mysuperFunction(){
    for (let i = 0; i<tab.length; i++){
        for (let j=1; j<tab.length; j++){
            console.log(typeof (tab[i] + tab[j]))
        }
    }
}
mysuperFunction();
// Exercice 2 :
// - Créer une variable appelée n qui contient un nombre entier (celui que vous voulez).
let n = 7;
// - Créer une variable booléenne qui indique si ce nombre est pair (en utilisant la variable n).
let pair = n % 2 == 0 
console.log(typeof pair);

// - Créer une variable string contenant "J'ai choisi le nombre 77. Ce nombre est impair." (en utilisant les variable n, et pair).
var string  = "J'ai choisi le nombre " + n +". Ce nombre est "+ (pair ? 'paire' : 'impaire') +".";
console.log(string); 
// - Créer une fonction appelée affichage qui reçoit un nombre en entrée et qui affiche dans la console un message similaire à celui de la question précédente.
function affichage(nombre){
    let paire = nombre % 2 == 0 ? "pair" : "impaire";
    console.log("J'ai choisi le nombre " + nombre +". Ce nombre est "+ paire +".");
}
affichage(76);
// - Créer une variable appelée f qui contient la fonction créée précédemment.
var f = affichage;
// Identique à la ligne précédente
// - Afficher dans la console le type de la variable f.
console.log(typeof f);
// - Tester l'égalité de f et affichage.
console.log(f == affichage);
console.log(f === affichage);
// - Utiliser la fonction affichage et la variable n pour afficher le message correspondant.
affichage(n);
// - Même chose en utilisant les variables f et n.
f(n);