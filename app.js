import m from "./modules/loadMains.js";
import carrito from "./storage/carrito.js"
const content = document.querySelector("#content");
const sideMenu = document.querySelector(".side-menu")

addEventListener("DOMContentLoaded", async () => {
    let currentPage = "todos"
    m[`${currentPage}Main`](content)
    const res = await carrito.getAll()
    sideMenu.insertAdjacentHTML("beforeend", `
	<li><a id="btnCarritos" href="#carritos"><i class='bx bx-cart-alt icon'></i>Carritos<span class="car-number">${res.length}</span></a></li>
    `)
    const pages = document.querySelectorAll("a[id]")
    pages.forEach(btn => {
        btn.addEventListener("click", () => {
            document.querySelector("main").remove();
            currentPage = btn.getAttribute("id").substring(3).toLowerCase()
            m[`${currentPage}Main`](content)
        })
    })
});