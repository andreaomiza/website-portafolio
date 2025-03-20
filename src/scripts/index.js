 onclick="document.getElementById('projects').scrollIntoView({ behavior: 'smooth' });"
 
  
 document.addEventListener("DOMContentLoaded", function () {
    const gallery = document.getElementById("project-gallery");
    const prevButton = document.getElementById("prev-btn");
    const nextButton = document.getElementById("next-btn");
  
    // Función para desplazar el carrusel
    function scrollCarousel(direction) {
      const scrollAmount = 250; // Cantidad de desplazamiento en píxeles
      gallery.scrollBy({ left: direction * scrollAmount, behavior: "smooth" });
    }
  
    // Eventos de los botones
    prevButton.addEventListener("click", () => scrollCarousel(-1));
    nextButton.addEventListener("click", () => scrollCarousel(1));
  });


// envio de formulario 


(function(){
    emailjs.init("JMrURzXhi7hPFXjLU"); // Reemplaza con tu ID de EmailJS
})();

document.querySelector("form").addEventListener("submit", function(event) {
    event.preventDefault();

    emailjs.send("service_bl02feb", "template_6ysztxs", {
        nombre: document.querySelector('input[type="text"]').value,
        email: document.querySelector('input[type="email"]').value,
        mensaje: document.querySelector('textarea').value
    })
    .then(() => {
        alert("Mensaje enviado con éxito");
    }, (error) => {
        console.log(error);
        alert("Error al enviar el mensaje");
    });
});


