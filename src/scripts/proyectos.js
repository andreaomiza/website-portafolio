document.addEventListener("DOMContentLoaded", () => {
const proyectos = [
    { titulo: "Videojuego con Python", descripcion: "Un videojuego desarrollado utilizando Python y Pygame.", imagen: "/src/assets/projects-img/pygame.png" },
    { titulo: "Calculadora web", descripcion: "Una calculadora simple creada con HTML, CSS y JavaScript.", imagen: "/src/assets/projects-img/calculadoraweb.png" },
    { titulo: "Formulario", descripcion: "Un formulario interactivo con validación de datos en tiempo real.", imagen: "/src/assets/projects-img/formularioweb.png" },
    { titulo: "Banco Virtual", descripcion: "Una aplicación bancaria virtual con funcionalidades de transferencia y consulta de saldo.", imagen: "/src/assets/projects-img/appbanco.png" },
    { titulo: "Tienda online", descripcion: "Una tienda en línea con carrito de compras y pasarela de pago.", imagen: "/src/assets/projects-img/onlineshopping.png" },
    { titulo: "Blog Personal", descripcion: "Un blog personal donde se pueden publicar y comentar artículos.", imagen: "/src/assets/projects-img/blogpersonal.png" },
    { titulo: "Gestor de Tareas", descripcion: "Una aplicación para gestionar tareas diarias con opciones de prioridad y fecha límite.", imagen: "/src/assets/projects-img/listadetareas.png" },
    { titulo: "Aplicación de Clima", descripcion: "Una aplicación que muestra el clima actual y el pronóstico del tiempo.", imagen: "/src/assets/projects-img/clima.png" }
];
  
    const proyectosContainer = document.getElementById("proyectos");
  
    proyectos.forEach((proyecto, index) => {
      const div = document.createElement("div");
      div.className = `bg-white p-4 rounded-lg shadow-md transform transition-all duration-300 opacity-0 translate-y-4 
                       hover:scale-105 hover:shadow-lg`;
      
      div.innerHTML = `
        <img src="${proyecto.imagen}" alt="${proyecto.titulo}" class="w-full h-40 object-cover rounded-lg">
        <h3 class="text-lg font-bold mt-2">${proyecto.titulo}</h3>
        <p class="text-black">${proyecto.descripcion}</p>
      `;
  
      setTimeout(() => {
        div.classList.remove("opacity-0", "translate-y-4");
      }, index * 150); // Retrasa la animación para cada proyecto
  
      proyectosContainer.appendChild(div);
    });
  });
  

  
  
  