document.addEventListener('DOMContentLoaded', function () { //Attend que la page soit chargée
  const screens = document.querySelectorAll('div.screen'); //Récupere tous les écrans

  screens.forEach(function (screen) {
    screen.classList.add('closed');

    //Ajoute au screen content la classe displayed qui permet d'éviter le fcicker d'allumage de se lancer aprés un
    const screenContent = screen.getElementsByClassName('screen-content')[0] //Un seul screen content donc [0] ok...
    screenContent.addEventListener('animationend', function (event) {
      //une fois l'annimation de flicker d'allumage terminée
      if (event.animationName === "turn-on-flicker") {
        screenContent.classList.add('displayed');
      }
    }
    )

    //Ajout de l'animation au click --
        //logique de flicker du content au click
        screenContent.addEventListener('animationend', function (event) {
          //une fois l'annimation d'ouverture terminée
          if (event.animationName === "flicker-on-click") {
            screenContent.classList.remove('flickering')
          }
        }
        )
    
    screen.addEventListener('animationend', function (event) {
      //une fois l'annimation d'ouverture terminée empeche l'animation d'ouverture de se relancer
      if (event.animationName === "turn-on-animation") {
        screen.classList.remove('closed');
        screen.classList.add('open');
        
        //lancement du flicker au moment du clic
        const screenOverlay = screen.getElementsByClassName('screen-overlay')[0]; //Un seul screen overlay donc [0] ok...
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
