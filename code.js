let rNbr=-1;
let choixNbr=-1;
let resultat=-1;
let choix=-1;
let solde=100;
let mise=-1;

function genererNombre(){
  rNbr=Math.floor(Math.random()*37);
  return rNbr;
}

function choisir(a){
  if (a==1) {
    document.getElementById("p1").innerHTML = "choix : 1 - 12";
    choix=1;
  }
  if (a==2) {
    document.getElementById("p1").innerHTML = "choix : 13 - 24";
    choix=2;
  }
  if (a==3) {
    document.getElementById("p1").innerHTML = "choix : 25 - 36";
    choix=3;
  }
  if (a==4) {
    document.getElementById("p1").innerHTML = "choix : 1 - 18";
    choix=4;
  }
  if (a==5) {
    document.getElementById("p1").innerHTML = "choix : pair";
    choix=5;
  }
  if (a==6) {
    document.getElementById("p1").innerHTML = "choix : rouge";
    choix=6;
  }
  if (a==7) {
    document.getElementById("p1").innerHTML = "choix : noir";
    choix=7;
  }
  if (a==8) {
    document.getElementById("p1").innerHTML = "choix : impair";
    choix=8;
  }
  if (a==9) {
    document.getElementById("p1").innerHTML = "choix : 19 - 36";
    choix=9;
  }
  if (a==10) {
    choixNbr=prompt("Entrez votre nombre");
    choix=10;
    document.getElementById("p1").innerHTML = `choix : ${choixNbr}`;
  }
}

function miser(){
  mise=+prompt('Entrez votre mise');
  if (mise<=solde && mise>0 && isNaN(mise)==false){
    document.getElementById("p2").innerHTML = `mise : ${mise}$`;
    document.getElementById("p3").innerHTML = `solde : ${solde}$`;

  }
  else {
    mise=-1;
    alert("Pas assez d'argent disponible / entrez une mise correcte");
  }
}

function verifier(a){
  let red=[1,3,5,7,9,12,14,16,18,21,23,25,27,28,30,32,34,36];
  let black=[2,4,6,8,10,11,13,15,17,19,20,22,24,26,29,31,33,35];
  if (a==1) {
    if(rNbr>0 && rNbr<13){
      resultat=1;
    }
    else {
      resultat=0;
    }
  }
  if (a==2) {
    if(rNbr>12 && rNbr<25){
      resultat=1;
    }
    else {
      resultat=0;
    }
  }
  if (a==3) {
    if(rNbr>24 && rNbr<37){
      resultat=1;
    }
    else {
      resultat=0;
    }
  }
  if (a==4) {
    if(rNbr>0 && rNbr<19){
      resultat=1;
    }
    else {
      resultat=0;
    }
  }
  if (a==5) {
    if(rNbr%2==0){
      resultat=1;
    }
    else {
      resultat=0;
    }
  }
  if (a==6) {
    for (var i = 0; i < red.length; i++) {
      if (rNbr==red[i]) {
        resultat=1;
        break;
      }
      else {
        resultat=0;
      }
    }
  }
  if (a==7) {
    for (var i = 0; i < black.length; i++) {
      if (rNbr==black[i]) {
        resultat=1;
        break;
      }
      else {
        resultat=0;
      }
    }
  }
  if (a==8) {
    if(rNbr%2!=0){
      resultat=1;
    }
    else {
      resultat=0;
    }
  }
  if (a==9) {
    if(rNbr%2!=0){
      resultat=1;
    }
    else {
      resultat=0;
    }
  }

  if (a==10) {
    if (choixNbr==rNbr) {
      resultat=1;
    }
    else {
      resultat=0;
    }
  }
}

function demarrer(){
  let coef=-1;
  if (choix==-1 || mise==-1 || mise==0) {
    document.getElementById("p4").innerHTML =`Choisisez d'abord une mise`;
  }
  else if (solde<=0) {
    alert("BANQUEROUTE");
  }
  else {
    solde-=mise;
    genererNombre();
    verifier(choix);
    if (resultat) {
      if (choix>=1 && choix<=3) {
        coef=3;
      }
      if (choix>=4 && choix<=9){
        coef=2;
      }
      if (choix==10){
        coef=37;
      }
      document.getElementById("p4").innerHTML =`La bille s'est arrêté sur ${rNbr}, VOUS AVEZ GAGNE ${mise*coef-mise}$`;
      solde+=mise*coef;
    }
    else {
      document.getElementById("p4").innerHTML =`La bille s'est arrêté sur ${rNbr}, VOUS AVEZ PERDU`;
    }
    document.getElementById("p3").innerHTML = `solde : ${solde}$`;
  }
}
