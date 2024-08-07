const nodoPadre = document.getElementById("nodoPadre")
document.addEventListener('DOMContentLoaded', () => {
    const toggleButton = document.getElementById('dark-mode-toggle');

    toggleButton.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');
    }); 
});


const productosForrajeria = [
    {
        img: "",
        nombre: "Comida para Perros",
        descripcion: "Bolsa de 10kg de alimento seco.",
        precio: 46000
    },

    {
        img: "",
        nombre: "Juguete para Gatos",
        descripcion: "Ratón de peluche con catnip.",
        precio: 7500
    },
    {
        img: "",
        nombre: "Pecera de Vidrio",
        descripcion: "Pecera de 20 litros con tapa.",
        precio: 30000
    },
    {
        img: "",
        nombre: "Cama para Mascotas",
        descripcion: "Cama acolchada de 70cm.",
        precio: 26000
    },
    {
        img: "",
        nombre: "Correa Extensible",
        descripcion: "Correa de 5 metros para perros.",
        precio: 15200
    },
    {
        img: "",
        nombre: "Comedero Automático",
        descripcion: "Dispensador automático de comida.",
        precio: 40000
    },
    {
        img: "",
        nombre: "Rascador para Gatos",
        descripcion: "Rascador de 1 metro de altura.",
        precio: 50000
    },
    {
        img: "",
        nombre: "Acuario con Filtro",
        descripcion: "Acuario de 50 litros con filtro.",
        precio: 120000
    },
    {
        img: "",
        nombre: "Transportadora",
        descripcion: "Transportadora mediana para mascotas.",
        precio: 35000
    },
    {
        img: "",
        nombre: "Arena para Gatos",
        descripcion: "Bolsa de 5kg de arena.",
        precio: 10000
    }
]

let carrito = []

productosForrajeria.forEach((el) => {
    nodoPadre.innerHTML += `<div class="producto">
<h2>${el.nombre}</h2>
<img src="${el.img}"/>
<p class="descipcion">${el.descripcion}</p>
<p class="precio">${"$"+el.precio}</p>
<button type="button" class="boton">Agregar al carrito</button>
</div>`
})

