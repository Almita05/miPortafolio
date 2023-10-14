// El DDM- Document object model modelo objeto del documento

// Objeto en javascript 


const nombre = "Alma"
const edad = "21"

const scoobyDoo = {
    raza: "Gran Danés",
    noPatas: 4,
    puedeHablar: true,
    color: "café con manchas"
}

// no funciona scoobyDoo = algo
// esto si funciona
//scoobyDoo = "café con manchas negras"

// alert("Hola mundo")
// console.log("Hola mundo")
// document.write("Hola mundo ")

//Animaciones
let app = document.getElementById('app');

let objetoDeLaBibliotecaTypewriter = new Typewriter(app, {
    loop: true
});

objetoDeLaBibliotecaTypewriter
    .pauseFor(1500)
    .typeString('<strong>¡Alma Lilia Martínez Landero!</strong>')
    .pauseFor(1500)
    .start();