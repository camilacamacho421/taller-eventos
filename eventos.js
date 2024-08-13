const div = document.querySelector("div");
const button = div.querySelector("button");

div.addEventListener("click", () => {
    alert("Hola! Soy el div");
})

button.addEventListener("click", (event) => {
    event.stopPropagation(); // Evita que el evento se propague al div
    alert("Hola!");
});