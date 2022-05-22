let bouton = document.getElementById('btn');
let firstPub = document.getElementById("first-pub");
let newPub = document.getElementById("new-pub");

let inputText = document.getElementById("inputText");
let textDescription = document.getElementById("description");
let btnNewPub = document.getElementById("btn-new-pub");

let newPost = document.getElementById("new-post");


// object publish

class Pulish {

    constructor(title, description){

        this.title = title;
        this.description = description;
    }
}

function retrieveText() {
    
    let pub = new Pulish(inputText.value, textDescription.value);
    newPublish(pub);
}

function newPublish(pub){

    // alert(textDescription.value);

    let h2 = document.createElement("h2");
    let p = document.createElement("p");

    newPost.appendChild(h2);
    newPost.appendChild(p);
    h2.textContent = pub.title;
    p.textContent = pub.description;

    firstPub.style.display = "block";
    newPub.style.display = "none";


}

btnNewPub.addEventListener("click", retrieveText);

function poster() {
    
    // alert("publication");
    firstPub.style.display = "none";
    newPub.style.display = "block";

    
}
bouton.addEventListener("click", poster);