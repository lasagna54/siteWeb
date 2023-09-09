document.addEventListener('DOMContentLoaded', function () { //Attend que la page soit chargée
  const screens = document.querySelectorAll('div.screen'); //Récupere tous les écrans

  screens.forEach(function (screen) {
    screen.classList.add('closed');
    screen.addEventListener('animationend', function (event) {
      //une fois l'annimation d'ouverture terminée
      if (event.animationName === "turn-on-animation") {
        screen.classList.remove('closed');
        screen.classList.add('open');
        //Ajout de l'animation au click --
        //logique de flicker du content
        const screenContent = screen.getElementsByClassName('screen-content')[0];
        screenContent.addEventListener('animationend', function (event) {
          //une fois l'annimation d'ouverture terminée
          if (event.animationName === "flicker-on-click") {
            screenContent.classList.remove('flickering')
          }
        }
        )
        //lancement du flciker
        const screenOverlay = screen.getElementsByClassName('screen-overlay')[0];//Un seul screen content donc [0] ok...
        screenOverlay.addEventListener("click", function () {

          //Ajoute la classe flickering
          screenContent.classList.add('flickering');
        }
        )
      }
    }
    )
  }
  )
}
)
