document.addEventListener('DOMContentLoaded', function() {
  document.querySelector('#prenotazioneForm').addEventListener('submit', function(e) {
      e.preventDefault();

      const nome = document.querySelector('input[placeholder="Nome"]').value;
      const email = document.querySelector('input[placeholder="Email"]').value;
      const data = document.querySelector('input[type="date"]').value;
      const ora = document.querySelector('input[type="time"]').value;
      const persone = document.querySelector('select').value;

      const prenotazione = {
          nome: nome,
          email: email,
          data: data,
          ora: ora,
          persone: persone
      };

      fetch('/prenota', {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json'
          },
          body: JSON.stringify(prenotazione)
      })
      .then(response => response.json())
      .then(data => {
          if (data.success) {
              alert(data.message);
          } else {
              alert('Errore nella prenotazione. Riprova.');
          }
      })
      .catch(error => console.error('Errore:', error));
  });
});

function modificaPrenotazione(event) {
    event.preventDefault();

    
    const nome = document.querySelector('input[placeholder="Nome"]').value;
    const email = document.querySelector('input[placeholder="Email"]').value;
    const data = document.querySelector('input[type="date"]').value;
    const ora = document.querySelector('input[type="time"]').value;
    const persone = document.querySelector('select').value;

    const prenotazione = {
      nome: nome,
      email: email,
      data: data,
      ora: ora,
      persone: persone
    };

    fetch('/modifica', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(prenotazione)
    })
    .then(response => response.json())
    .then(data => {
      if (data.success) {
        alert(data.message);
      } else {
        alert('Errore nella modifica della prenotazione. Riprova.');
      }
    })
    .catch(error => console.error('Errore:', error));
}

function cancellaPrenotazione(event) {
  event.preventDefault();

  const form = document.getElementById('modificaForm')
  const nome = document.querySelector('input[placeholder="Nome"]').value;
  const email = document.querySelector('input[placeholder="Email"]').value;

  const prenotazione = {
      nome: nome,
      email: email
  };

  fetch('/cancella', {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json'
      },
      body: JSON.stringify(prenotazione)
  })
  .then(response => response.json())
  .then(data => {
      if (data.success) {
          alert(data.message);
      } else {
          alert('Errore nella cancellazione della prenotazione. Riprova.');
      }
  })
  .catch(error => console.error('Errore:', error));
}


//Slideshow

let slideIndex = 1; 

document.addEventListener("DOMContentLoaded", function() {
  showSlides(slideIndex);
});

// Controllo prossima e precedente
function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("slide");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}