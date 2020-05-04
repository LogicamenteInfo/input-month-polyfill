import Modernizr from 'modernizr';
import InputMonth from './InputMonth';
import './Style/style.css';

window.onload = function () {
  if (!Modernizr.inputtypes.month) {
    const inputs = document.querySelectorAll('input[type="month"]');
    inputs.forEach(i => new InputMonth(i));
  }
}