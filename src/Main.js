import Modernizr from 'modernizr';
import InputMonth from './InputMonth';
import './Style/style.css';

function init() {
  const inputs = document.querySelectorAll('input:not(.input-month-polyfill)[type="month"]');
  inputs.forEach(i => new InputMonth(i));
}

window.onload = function () {
  if (!Modernizr.inputtypes.month) {
    const MutationObserver = window.MutationObserver || window.WebKitMutationObserver;
    if (MutationObserver) {
      var obs = new MutationObserver(function (mutations, observer) {
        init();
      });
      obs.observe(document.body, { childList: true, subtree: true });
    } else if (window.addEventListener) {
      document.body.addEventListener('DOMNodeInserted', init, false);
      document.body.addEventListener('DOMNodeRemoved', init, false);
    }
    init();
  }
}