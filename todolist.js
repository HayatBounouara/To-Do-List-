let btn=document.getElementById('boutton');

 btn.onclick=function () {
 let taches=document.getElementById('tache');
let tacheTexte=taches.value;
if(tacheTexte === "")
alert("entrer tache");

let ul=document.getElementById('ul');
let creerli=document.createElement('li');
let b=document.createElement('button');
let p=document.createElement('p');
b.innerHTML='<ion-icon name="ellipse-outline"></ion-icon>';
p.innerHTML=tacheTexte;


let modifier=document.createElement('button');
modifier.innerHTML='<ion-icon name="pencil-outline"></ion-icon>';
//modifier.style.backgroundColor="red";
   
let supprimer=document.createElement('button');
supprimer.innerHTML='<ion-icon name="trash-outline"></ion-icon>';

//supprimer.style.backgroundColor="yellow";

creerli.appendChild(b);
creerli.appendChild(p);
creerli.appendChild(modifier);
creerli.appendChild(supprimer);
ul.appendChild(creerli);

b.onclick=function(){
    b.innerHTML='<ion-icon name="checkmark-circle-outline"></ion-icon>';
    //b.style.backgroundColor="green";
    let pstricke=document.createTextNode('stricke');
  
    pstricke.appendChild(p);
    creerli.appendChild(pstricke);
    creerli.removeChild(p);

}

modifier.onclick=function(){
  p.innerHTML=prompt("entrer la nouvelle tache");
}


 supprimer.onclick=function(){
    ul.removeChild(creerli);

 }

}

