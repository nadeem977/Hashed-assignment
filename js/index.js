
document.addEventListener("DOMContentLoaded", () => {
 
  const dropdownButtons = document.querySelectorAll(".dropdown-button");
  dropdownButtons.forEach(button => {
    const dropdownOptions = button.nextElementSibling;
    const selectedOptionDisplay = button.querySelector(".selected-option");

    button.addEventListener("click", (event) => {
      event.stopPropagation();
      dropdownOptions.classList.toggle("hidden");
    });

    document.addEventListener("click", (event) => {
      if (!button.contains(event.target) && !dropdownOptions.contains(event.target)) {
        dropdownOptions.classList.add("hidden");
      }
    });

    const dropdownItems = dropdownOptions.querySelectorAll(".dropdown-item");
    dropdownItems.forEach(item => {
      item.addEventListener("click", () => {
        selectedOptionDisplay.innerHTML = item.innerHTML;
        dropdownOptions.classList.add("hidden");
      });
    });
  });

  const menuButtons = document.querySelectorAll(".menu-button");
  menuButtons.forEach(button => {
    const dropdownMenu = button.nextElementSibling;

    button.addEventListener("click", (event) => {
      event.stopPropagation();
      dropdownMenu.classList.toggle("hidden");
    });

    document.addEventListener("click", (event) => {
      if (!button.contains(event.target) && !dropdownMenu.contains(event.target)) {
        dropdownMenu.classList.add("hidden");
      }
    });
  });
});
 

 const video = document.getElementById('custom-video');
 const playPauseBtn = document.getElementById('play-pause-btn');

 
 const togglePlayPause = () => {
   if (video.paused) {
     video.play();
     playPauseBtn.style.opacity = '0'; 
   } else {
     video.pause();
     playPauseBtn.style.opacity = '1';  
   }
 };

 
 playPauseBtn.addEventListener('click', () => {
   togglePlayPause();
 });

 
 video.addEventListener('click', () => {
   togglePlayPause();
 });

 
 video.addEventListener('pause', () => {
   playPauseBtn.style.opacity = '1';
 });

 
 video.addEventListener('play', () => {
   playPauseBtn.style.opacity = '0';
 });



 document.querySelectorAll('.dropdown-btn').forEach((btn) => {
  btn.addEventListener('click', function () {
      const menu = this.nextElementSibling;
      menu.classList.toggle('hidden');
  });
});

document.querySelectorAll('.dropdown-item').forEach((item) => {
  item.addEventListener('click', function () {
      const selectedText = this.textContent;
      const dropdownBtn = this.closest('.relative').querySelector('.dropdown-btn span');
      dropdownBtn.textContent = selectedText;
      this.closest('.dropdown-menu').classList.add('hidden');
  });
});


window.addEventListener('click', function (e) {
  document.querySelectorAll('.dropdown-menu').forEach(menu => {
      if (!menu.contains(e.target) && !menu.previousElementSibling.contains(e.target)) {
          menu.classList.add('hidden');
      }
  });
});



 
document.querySelectorAll('.heart').forEach(heart => {
  heart.addEventListener('click', () => {
    const isActive = heart.getAttribute('data-active') === 'true';

    if (isActive) {
      heart.src = "../assets/Heart.svg";
      heart.setAttribute('data-active', 'false');
    } else {
      heart.src = "../assets/activeH.png";
      heart.setAttribute('data-active', 'true');
    }
  });
});
 
document.querySelectorAll('.card').forEach(card => {
  const more = card.querySelector('.more');
  const show = card.querySelector('.show');

  more.addEventListener('mouseenter', () => {
    show.classList.remove('hidden');
  });

  more.addEventListener('mouseleave', () => {
    show.classList.add('hidden');
  });
});

 





document.addEventListener('DOMContentLoaded', () => {
  const section = document.querySelector('.count-section');
  const counters = document.querySelectorAll('.counter');
  let hasCounted = false;

  window.addEventListener('scroll', () => {
    if (section) {
      const sectionTop = section.getBoundingClientRect().top;
 
      if (sectionTop <= window.innerHeight && !hasCounted) {
        counters.forEach(counter => {
          const target = +counter.getAttribute('data-target');
          let current = 0;
          const increment = target / 100; 

          const counterInterval = setInterval(() => {
            current += increment; 
            counter.innerText = formatNumber(Math.ceil(current)); 
            if (current >= target) {
              clearInterval(counterInterval);
              counter.innerText = formatNumber(target); 
            }
          }, 10); 
        });

        hasCounted = true; 
      }
    } 
  });

  
  function formatNumber(number) {
    if (number >= 1000000) {
      return (number / 1000000).toFixed(1) + ' Million'; 
    } else if (number >= 1000) {
      return (number / 1000).toFixed(1) + ' K'; 
    } else {
      return number.toLocaleString();  
    }
  }
});


const menubtn = document.querySelector('.menu_nav');
const closebtn = document.getElementById('close-menu');
const menu = document.getElementById('manu_nav');
 
menubtn.addEventListener('click', () => {
  menu.classList.remove('top-[-25rem]');
  menu.classList.add('top-[0]');
});
 
closebtn.addEventListener('click', () => {
  menu.classList.remove('top-[0]');
  menu.classList.add('top-[-25rem]');
});

