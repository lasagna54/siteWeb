document.addEventListener('DOMContentLoaded', function() {
    const screens = document.querySelectorAll('div.screen');
  
    screens.forEach(function(screen){
        screen.classList.add('closed');
        console.log(screen.classList)
        screen.addEventListener('animationend', function(event) {
            if (event.animationName === "turn-on-animation" ){
            screen.classList.remove('closed');
            screen.classList.add('open');
            }
          });
    })
  
   
  });
  