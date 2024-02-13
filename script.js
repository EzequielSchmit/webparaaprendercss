// JavaScript para ajustar el desplazamiento al hacer clic en los enlaces del aside
document.querySelectorAll('aside a').forEach(anchor => {
  // if (anchor.classList.contains("link-interior")){

    anchor.addEventListener('click', function(e) {
      
      const targetId = this.getAttribute('href')
      if (targetId.startsWith("#")){
        // alert("IT DOES START WITH #")
        e.preventDefault();
        const targetElement = document.getElementById(targetId.substring(1));
        const headerHeight = document.querySelector('header').offsetHeight;
        const yOffset = -headerHeight; // Ajusta el desplazamiento según sea necesario
        // targetElement.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'nearest' });
        // window.scrollBy(0, yOffset);
        const scrollDistance = targetElement.getBoundingClientRect().top
        setTimeout(() => {
          window.scrollBy(0, scrollDistance + yOffset);
        }, 300); // Ajusta el valor según sea necesario
      }
    });
});