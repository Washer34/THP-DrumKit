function playSound(e) {

  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`); //selectionne l'audio correspondant à la data-key de l'evenement "keydown"

  const key = document.querySelector(`.key[data-key="${e.keyCode}"]`); // selectionne la <div> correspondant a la data-key

  if(!audio) return; // stop la fonction pour les touches qui n'ont pas d'audio

  audio.currentTime = 0; // remet le son à 0 pour être rejoué si la même touche est pressée plusieurs fois de suite.

  audio.play();

  key.classList.add('playing');
};  
  
function removeTransition(e) {
  
  if (e.propertyName !== 'transform') return; //on ignore si ce n'est pas un transform
  
  this.classList.remove('playing');
};  
  
const keys = document.querySelectorAll('.key'); // On selectionne toutes les keys

keys.forEach(key => key.addEventListener('transitionend', removeTransition));  

window.addEventListener('keydown', playSound );
  