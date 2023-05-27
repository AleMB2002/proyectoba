console.log("proyectoba");

const slider = document.querySelector ("#slider");
let sliderSection = document.querySelectorAll(".slider__section");
let sliderSectionLast = sliderSection [sliderSection.leght -1];

const btnLeft = document.querySelector ("#btn-left");
const btnRight= document.querySelector ("#btn-right");

slider.insertAdjacentElement('afterbegin', sliderSectionLast); /*PREGUNTAR A RO PORQUE LA CONSOLA NO ME ACEPTA ESTE METODO Y PORQUE NO DEJA IR PARA LA DER4CHA */

function moverDerecha() {
    let sliderSectionFirst = document.querySelectorAll (".slider__section")[0];
    slider.style.margingLeft = "-200%";
    slider.style.transition = "all 0.5s";
    setTimeout(function() {
        slider.style.transition = "none";
        slider.insertAdjacentElement('beforeend', sliderSectionFirst);
        slider.style.margingLeft = "-100%";
    }, 500);
}

function moverIzquierda() {
    let sliderSection = document.querySelectorAll (".slider__section");
    let sliderSectionLast = sliderSection [sliderSection.lenght -1];
    slider.style.margingLeft = "0";
    slider.style.transition = "all 0.5s";
    setTimeout(function() {
        slider.style.transition = "none";
        slider.insertAdjacentElement('afterbegin', sliderSectionLast);
        slider.style.margingLeft = "-100%";
    }, 500);
}

btnRight.addEventListener('click', function(){
    moverDerecha();
})

btnLeft.addEventListener('click', function(){
    moverIzquierda();
})



/* querySelector: Devuelve el primer elemento del documento (utilizando un recorrido primero en profundidad pre ordenado de los nodos del documento) que coincida con el grupo especificado de selectores, aca se usa como un selector de css 
sliderSection:cada una de las variables lo modifico ahi
sliderSection.leght -1: con esto obtengo siempre la ultima imagen
insertAdjacentElement: obtener el ultimo elemento y colocarlo en el slider, en el orde que quiera*/