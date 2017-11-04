//----------------------------------------------
// Imports
//----------------------------------------------
import WOW from './vendor/_wow.js';
import Rellax from './vendor/_rellax.js';
import Preview from './components/_preview.js';
import Tabs from './components/_tabs.js';

//----------------------------------------------
// Inits
//----------------------------------------------
document.addEventListener('DOMContentLoaded', () => {

  // WOW
  const wow = new WOW({
    animateClass: 'fade-in'
  });

  // Rellax
  if (document.getElementsByClassName('rellax').length) {
    const rellax = new Rellax('.rellax');
  }

  // Inits
  wow.init();
  Preview.init();
  Tabs.init();
});
