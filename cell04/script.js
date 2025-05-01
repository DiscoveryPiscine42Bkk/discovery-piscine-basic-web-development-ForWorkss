document.getElementById("home_button").addEventListener("click", function() {
   document.getElementById("home_section").scrollIntoView({behavior: "smooth"});
});

document.getElementById("about_button").addEventListener("click", function() {
   document.getElementById("about_section").scrollIntoView({behavior: "smooth"});
});

document.getElementById("skill_button").addEventListener("click", function() {
   document.getElementById("skills_section").scrollIntoView({behavior: "smooth"});
});

document.getElementById("contact_button").addEventListener("click", function() {
   document.getElementById("contact_section").scrollIntoView({behavior: "smooth"});
});

const sideContainer = document.querySelector('.side_container.popout');

function toggleMenu() {
   if (!sideContainer) return;
   sideContainer.classList.toggle('show');
}

function handleResize() {
   if (window.innerWidth >= 900) {
      sideContainer.classList.remove('show'); 
   } else {
      sideContainer.classList.remove('show'); 
   }
}

window.addEventListener('resize', handleResize);
window.addEventListener('DOMContentLoaded', handleResize)

