document.getElementById("chooseCharacterButton").addEventListener("click", function() {
    var characterList = document.getElementById("characterList");
    characterList.classList.toggle("show");
});

document.addEventListener("DOMContentLoaded", function() {
    const mainHeading = document.getElementById("mainheading");
  
    mainHeading.addEventListener("mousemove", function(event) {
      const bloodSplat = document.createElement("div");
      bloodSplat.classList.add("blood-splat");
      bloodSplat.style.left = `${event.clientX - 50}px`;
      bloodSplat.style.top = `${event.clientY - 50}px`;
      mainHeading.appendChild(bloodSplat);
  
      setTimeout(() => {
        mainHeading.removeChild(bloodSplat);
      }, 1000);
    });
  });

  document.addEventListener("DOMContentLoaded", function() {
    const backgroundMusic = document.getElementById("backgroundMusic");
    
    // Start playing the background music
    backgroundMusic.play();
  });
  
  
  