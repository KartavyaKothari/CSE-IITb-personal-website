// Code by Kartavya kothari
// cse.iitb.ac.in/~kartavya

var domElements;

mastiMachaDo = () => {
    domElements = document.querySelectorAll("div");

    randomDOMElement().style.backgroundColor = "rgb("+Math.floor(Math.random()*255)+","+Math.floor(Math.random()*255)+","+Math.floor(Math.random()*255)+")";
    randomDOMElement().style.color = "rgb("+Math.floor(Math.random()*255)+","+Math.floor(Math.random()*255)+","+Math.floor(Math.random()*255)+")";
    randomDOMElement().style.display="block";

    setTimeout( function() {
        mastiMachaDo();
    }, 50);
}

randomDOMElement=()=>{
    var random = Math.random();
    random = Math.floor(random*domElements.length);
    
    return domElements[random];
}