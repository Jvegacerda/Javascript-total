precio = 90000

precioSpan = document.querySelector(".precio-inicial");
precioSpan.innerHTML = precio

const mas = document.querySelector('#mas')
const menos = document.querySelector('#menos') 
cantidad1 = document.querySelector(".cantidad")
totalSpan = document.querySelector(".valor-total")

let cantidad = 0
let total = 0
mas.addEventListener("click", ()=> {
    cantidad += 1
    cantidad1.innerHTML = cantidad
    total = cantidad * precio
    totalSpan.innerHTML = total
})

menos.addEventListener("click", ()=> {
    cantidad -= 1
    cantidad1.innerHTML = cantidad
    total = cantidad * precio
    totalSpan.innerHTML = total
})
