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

let arrBlog = [];

if(localStorage.getItem("arrBlog") != null){

  arrBlog = JSON.parse(localStorage.getItem("arrBlog"));
}

function retrieveText() {
    
    let pub = new Pulish(inputText.value, textDescription.value);
    arrBlog.push(pub);
    localStorage.setItem("arrBlog", JSON.stringify(arrBlog));
    
    newPublish(pub);

}

function taskBlog(){

    for(let item of arrBlog){

        newPublish(item);
    }
}
taskBlog();

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
    inputText.value = "";
    textDescription.value = "";

    
}
bouton.addEventListener("click", poster);