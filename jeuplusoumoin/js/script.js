$proposition = document.getElementById("proposition");
$bouton = document.getElementById("bouton");
$resultat = document.getElementById("resultat");
reponse = Math.ceil(Math.random() * 100)
function verifier() {
    if ($proposition.value < reponse) {
        $resultat.innerHTML = "Insuffisant !";
    }
    else if ($proposition.value > reponse) {
        $resultat.innerHTML = "Trop !";
    }
    else {
        $resultat.innerHTML = "Juste ce qu'il faut";
    }
}


$bouton.onclick = verifier();