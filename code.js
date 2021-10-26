
let rNbr=-1;
let choix=-1;
let resultat=-1;

lancerRoue()

function lancerRoue(){
  rNbr=Math.floor(Math.random()*37);
  return rNbr;
}

function miser(a){
  let red=[1,3,5,7,9,12,14,16,18,21,23,25,27,28,30,32,34,36];
  let black=[2,4,6,8,10,11,13,15,17,19,20,22,24,26,29,31,33,35];
  if (a==1) {
    document.getElementById("p1").innerHTML = "choix : 1 - 12";
    if(rNbr>0 && rNbr<13){
      resultat="gg";
    }
    else {
      resultat="ng";
    }
  }
  if (a==2) {
    document.getElementById("p1").innerHTML = "choix : 2 - 12";
    if(rNbr>12 && rNbr<25){
      resultat="gg";
    }
    else {
      resultat="ng";
    }
  }

  if (a==3) {
    document.getElementById("p1").innerHTML = "choix : 3 - 12";
    if(rNbr>24 && rNbr<37){
      resultat="gg";
    }
    else {
      resultat="ng";
    }
  }

  if (a==4) {
    document.getElementById("p1").innerHTML = "choix : 1 - 18";
    if(rNbr>0 && rNbr<19){
      resultat="gg";
    }
    else {
      resultat="ng";
    }
  }

  if (a==5) {
    document.getElementById("p1").innerHTML = "choix : pair";
    if(rNbr%2==0){
      resultat="gg";
    }
    else {
      resultat="ng";
    }
  }

  if (a==6) {
    document.getElementById("p1").innerHTML = "choix : rouge";
    for (var i = 0; i < red.length; i++) {
      if (rNbr==red[i]) {
        resultat="gg";
        break;
      }
      else {
        resultat="ng";
      }
    }

  }

  if (a==7) {
    document.getElementById("p1").innerHTML = "choix : noir";
    for (var i = 0; i < black.length; i++) {
      if (rNbr==black[i]) {
        resultat="gg";
        break;
      }
      else {
        resultat="ng";
      }
    }

  }

  if (a==8) {
    document.getElementById("p1").innerHTML = "choix : impair";
    if(rNbr%2!=0){
      resultat="gg";
    }
    else {
      resultat="ng";
    }

  }

  if (a==9) {
    document.getElementById("p1").innerHTML = "choix : 19 - 36";
    if(rNbr%2!=0){
      resultat="gg";
    }
    else {
      resultat="ng";
    }

  }

  if (a==10) {
    choix=prompt("Entrez votre nombre");
    document.getElementById("p1").innerHTML = `choix : ${choix}`;
    if (choix==rNbr) {
      resultat="gg";
    }
    else {
      resultat="ngg";
    }

  }

}

function demarrer(){
  if (resultat=="gg") {
    alert(`La bille s'est arrêté sur ${rNbr}, VOUS AVEZ GAGNE`);
  }
  else {
    alert(`La bille s'est arrêté sur ${rNbr}, VOUS AVEZ PERDU`);
  }
}
