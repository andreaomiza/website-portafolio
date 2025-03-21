document.addEventListener("DOMContentLoaded", () => {
    const habilidades = [
      { nombre: "HTML", nivel: "Intermedio", img: "./src/assets/skils-img/html.png" },
      { nombre: "CSS", nivel: "Intermedio", img: "./src/assets/skils-img/css.png" },
      { nombre: "JavaScript", nivel: "Avanzado", img: "./src/assets/skils-img/javascript.png" },
      { nombre: "React", nivel: "Intermedio", img: "./src/assets/skils-img/react.png" },
      { nombre: "Next.js", nivel: "Intermedio", img: "./src/assets/skils-img/next-js.png" },
      { nombre: "Node.js", nivel: "Intermedio", img: "./src/assets/skils-img/node-js.png" },
      { nombre: "Tailwind CSS", nivel: "Intermedio", img: "./src/assets/skils-img/tailwind-css.png" },
      { nombre: "MongoDB", nivel: "Intermedio", img: "./src/assets/skils-img/mongo-db.png" },
    ];
  
    const skillsContainer = document.getElementById("subjects_cards");
  
    if (!skillsContainer) {
      console.error("No se encontró el contenedor de habilidades (subjects_cards).");
      return;
    }
  
    // Limpiar el contenedor antes de agregar habilidades
    skillsContainer.innerHTML = "";
  
    habilidades.forEach((habilidad) => {
      const skillCard = document.createElement("div");
      skillCard.className = "skill-card text-center h-32 p-5 rounded-md bg-[#111827] shadow-md flex flex-col justify-center";
  
      skillCard.innerHTML = `
        <img src="${habilidad.img}" alt="${habilidad.nombre}" width="40" class="mx-auto">
        <p class="text-white text-sm mt-2">${habilidad.nombre}</p>
      `;
  
      skillsContainer.appendChild(skillCard);
    });
  
    console.log("✅ Habilidades cargadas correctamente.");
  });





