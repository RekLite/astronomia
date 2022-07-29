function changeImageM1(url, nom) {
    bTag.innerHTML = nom;
    imgTag.src = url;
    console.log("DEBUG : changeImageM1 : url = "+url+", nom = "+nom);

}

function changeImageM2(id_url, id_nom, url, nom) {
    document.getElementById('id_image').src = url;
    document.getElementById('id_quoi').innerHTML = nom;
  console.log("DEBUG : changeImageM2 : id_url = " + id_url + ", id_nom = " + id_nom
              +", url = " + url + ", nom = " + nom);
}

function changeImageM3(url, nom) {
    document.querySelector(".image").src = url;
    document.querySelector(".nom").innerHTML = nom;
  console.log("DEBUG : changeImageM3 : url = "+url+", nom = "+nom);

}
