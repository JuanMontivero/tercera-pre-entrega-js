function agregarLibro(evento) {
    evento.preventDefault();
  
    let titulo = document.getElementById("titulo").value;
    let autor = document.getElementById("autor").value;
    let añoPublicacion = document.getElementById("año-publicacion").value;
  
    let nuevoLibro = {titulo, autor, añoPublicacion};
    let libros = JSON.parse(localStorage.getItem("libros") || "[]");
    libros.push(nuevoLibro);
    localStorage.setItem("libros", JSON.stringify(libros));
  
    document.getElementById("titulo").value = "";
    document.getElementById("autor").value = "";
    document.getElementById("año-publicacion").value = "";
  
    actualizarLista();
  }
  
  function actualizarLista() {
    let listaLibros = document.getElementById("lista-libros");
    listaLibros.innerHTML = "";
  
    let libros = JSON.parse(localStorage.getItem("libros") || "[]");
    libros.forEach(function(libro) {
      let li = document.createElement("li");
      li.textContent = `${libro.titulo} por ${libro.autor}, publicado en ${libro.añoPublicacion}`;
      listaLibros.appendChild(li);
    });
  }
  
  actualizarLista();
  
  let form = document.querySelector("form");
  form.addEventListener("submit", agregarLibro);
  
  let botonMostrarLibros = document.getElementById("mostrar-libros");
  botonMostrarLibros.addEventListener("click", function() {
    let listaLibros = document.getElementById("lista-libros");
    listaLibros.style.display = "block";
  });
  
  let botonOcultarLibros = document.getElementById("ocultar-libros");
  botonOcultarLibros.addEventListener("click", function() {
    let listaLibros = document.getElementById("lista-libros");
    listaLibros.style.display = "none";
  });
  