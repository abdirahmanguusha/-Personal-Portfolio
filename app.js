document.addEventListener('DOMContentLoaded', () => {
    const skills = [
        "⚡Frontend Enthusiast⚡",
        "From Security to Coding ",
        "Aspiring Web Developer"
      ];
      
          const titleElement = document.querySelector('.hero-skills-heading');
    let currentSkill = 0;
    let isDeleting = false;
    let text = '';
    const typingSpeed = 150;
    const deletingSpeed = 75;
    const pauseDuration = 1000;

    function typeWriter() {
        const currentFullText = skills[currentSkill];

        if (isDeleting) {
            text = currentFullText.substring(0, text.length - 1);
        } else {
            text = currentFullText.substring(0, text.length + 1);
        }

        titleElement.textContent = text;

        if (!isDeleting && text === currentFullText) {
            setTimeout(() => {
                isDeleting = true;
            }, pauseDuration);
        } else if (isDeleting && text === '') {
            isDeleting = false;
            currentSkill = (currentSkill + 1) % skills.length;
        }

        setTimeout(typeWriter, isDeleting ? deletingSpeed : typingSpeed);
    }

    typeWriter();
});

function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
  }
  
  function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
  }
  
  var header = document.getElementById("nav-menu");
var btns = header.getElementsByClassName("btn");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
  var current = document.getElementsByClassName("active");
  current[0].className = current[0].className.replace(" active", "");
  this.className += " active";
  });
}