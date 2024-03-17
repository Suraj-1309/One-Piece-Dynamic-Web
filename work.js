document.addEventListener("DOMContentLoaded", function() {
    const mainHeading = document.getElementById("mainheading");
  
    mainHeading.addEventListener("mousemove", function(event) {
      const bloodDrop = document.createElement("div");
      bloodDrop.classList.add("blood-drop");
      bloodDrop.style.left = `${event.clientX}px`;
      mainHeading.appendChild(bloodDrop);
  
      setTimeout(() => {
        mainHeading.removeChild(bloodDrop);
      }, 2000);
    });
  });
  