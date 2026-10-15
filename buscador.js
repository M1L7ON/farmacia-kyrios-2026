function buscarProductos() {
    const buscador = document.getElementById("buscarProducto");
    const texto = buscador.value
        .toLowerCase()
        .trim()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "");
    const productos = document.querySelectorAll(".producto");
    productos.forEach(function(producto) {
        const nombre = producto
            .querySelector("h3")
            .textContent
            .toLowerCase()
            .normalize("NFD")
            .replace(/[\u0300-\u036f]/g, "");
        const descripcion = producto.querySelector("p")
            ?.textContent.toLowerCase() || "";
        const coincide = nombre.includes(texto) ||
                         descripcion.includes(texto);
        producto.style.display = coincide ? "" : "none";
    });
}