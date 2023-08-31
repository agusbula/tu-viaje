console.log("hdaioghuaio");
const images = [
    'background_01.jpg',
    'background_02.jpg',
    'background_03.jpg',
]

var index = 0;
const max= images.length;

const containerElement = document.getElementById('slider');
const prevSlideButton = document.querySelector('.prevSlide');
const nextSlideButton = document.querySelector('.nextSlide');

prevSlideButton.addEventListener("click", function () {
    index--;
    index = setImageIndex(index);
    changeBackgroundImage(images[index], containerElement); 
});

nextSlideButton.addEventListener("click", function () {
    index++;
    index = setImageIndex(index);
    changeBackgroundImage(images[index], containerElement);
});


const historia ={ 
    "img":'<img src="./fiesta.webp" alt="testimonios">',
    "desc": "<p>¿Qué es Lorem Ipsum? Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen. No sólo sobrevivió 500 años, sino que tambien ingresó como texto de relleno en documentos electrónicos, quedando esencialmente igual al original. Fue popularizado en los 60s con la creación de las hojas , las cuales contenian pasajes de Lorem Ipsum, y más recientemente con software de autoedición, como por ejemplo Aldus PageMaker, el cual incluye versiones de Lorem Ipsum.</p>"
}
console.log(historia.img)
descElement=document.getElementById("desc");
imgElement= document.getElementById("img")

descElement.innerHTML=historia.desc;
imgElement.innerHTML=historia.img;





















function setImageIndex(index){
    if (index < 0) index = max - 1;
    if (index === max) index = 0;

    return index;
}

function changeBackgroundImage(backgroundImage, element){
    element.style.backgroundImage = "url("+backgroundImage+")";
}