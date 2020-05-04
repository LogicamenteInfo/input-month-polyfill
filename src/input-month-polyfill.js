import Modernizr from 'modernizr';
import Locales from './Locales';

const lang = 'pt-BR';

function drawMonthButtons(monthName, monthAbbr, monthNumber, input) {
  const monthButton = document.createElement('button');
  monthButton.classList.add('imp--month--button');
  monthButton.setAttribute('type', 'button');
  monthButton.setAttribute('data-month-name', monthName);
  monthButton.setAttribute('data-month-number', monthNumber);
  monthButton.innerHTML = monthAbbr;
  monthButton.addEventListener('click', (e) => {
    const sentence = input.value.match(/(.+) (.+)/);
    input.value = `${e.target.getAttribute('data-month-name')} ${sentence[2]}`;
    input.setAttribute('data-month', e.target.getAttribute('data-month-number'));
    input.dispatchEvent(new Event('change'));
  });
  return monthButton;
}

function drawYearButtons(startYear, viewer, input) {
  const yB = [];
  const prevButton = document.createElement('button');
  prevButton.classList.add('imp--year--button--prev');
  prevButton.setAttribute('type', 'button');
  prevButton.addEventListener('click', (e) => {
    viewer.textContent = '';
    drawYearButtons(startYear - 9, viewer, input).map(y => {
      viewer.appendChild(y);
    });
  });
  prevButton.innerHTML = '&lt;';
  const nextButton = document.createElement('button');
  nextButton.classList.add('imp--year--button--next');
  nextButton.setAttribute('type', 'button');
  nextButton.innerHTML = '&gt;';
  nextButton.addEventListener('click', (e) => {
    viewer.textContent = '';
    drawYearButtons(startYear + 9, viewer, input).map(y => {
      viewer.appendChild(y);
    });
  });
  yB.push(prevButton);
  yB.push(nextButton);
  for (let i = startYear; i < startYear + 9; i++) {
    const yearButton = document.createElement('button');
    yearButton.classList.add('imp--year--button');
    yearButton.setAttribute('type', 'button');
    yearButton.setAttribute('data-year', i);
    yearButton.innerHTML = i;
    yearButton.addEventListener('click', (e) => {
      const sentence = input.value.match(/(.+) (.+)/);
      input.value = `${sentence[1]} ${e.target.getAttribute('data-year')}`;
      input.setAttribute('data-year', e.target.getAttribute('data-year'));
      input.dispatchEvent(new Event('change'));
    });
    yB.push(yearButton);
  }
  return yB;
}

function drawInput(original) {
  const container = document.createElement('div');
  container.classList.add('imp--container');
  const input = document.createElement('input');
  input.classList.add('imp--input');
  original.classList.forEach(c => input.classList.add(c));
  input.setAttribute('readonly', original.getAttribute('readonly'));
  input.setAttribute('type', 'text');
  input.setAttribute('data-month', '');
  input.setAttribute('data-year', '');
  input.value = '---------- ----';
  input.addEventListener('change', (e) => {
    const month = e.target.getAttribute('data-month');
    const year = e.target.getAttribute('data-year');
    if (month !== '' && year !== '')
      original.value = `${year}-${month.toString().padStart(2, '0')}`;
    else
      original.value = '';
  });
  const monthViewer = document.createElement('div');
  monthViewer.classList.add('imp--month--viewer');
  monthViewer.appendChild(drawMonthButtons(Locales[lang].January, Locales[lang].ABBR_Jan, 1, input));
  monthViewer.appendChild(drawMonthButtons(Locales[lang].February, Locales[lang].ABBR_Feb, 2, input));
  monthViewer.appendChild(drawMonthButtons(Locales[lang].March, Locales[lang].ABBR_Mar, 3, input));
  monthViewer.appendChild(drawMonthButtons(Locales[lang].April, Locales[lang].ABBR_Apr, 4, input));
  monthViewer.appendChild(drawMonthButtons(Locales[lang].May, Locales[lang].ABBR_May, 5, input));
  monthViewer.appendChild(drawMonthButtons(Locales[lang].June, Locales[lang].ABBR_Jun, 6, input));
  monthViewer.appendChild(drawMonthButtons(Locales[lang].July, Locales[lang].ABBR_Jul, 7, input));
  monthViewer.appendChild(drawMonthButtons(Locales[lang].August, Locales[lang].ABBR_Aug, 8, input));
  monthViewer.appendChild(drawMonthButtons(Locales[lang].September, Locales[lang].ABBR_Sep, 9, input));
  monthViewer.appendChild(drawMonthButtons(Locales[lang].October, Locales[lang].ABBR_Oct, 10, input));
  monthViewer.appendChild(drawMonthButtons(Locales[lang].November, Locales[lang].ABBR_Nov, 11, input));
  monthViewer.appendChild(drawMonthButtons(Locales[lang].December, Locales[lang].ABBR_Dec, 12, input));
  const yearViewer = document.createElement('div');
  yearViewer.classList.add('imp--year--viewer');
  drawYearButtons(new Date().getFullYear() - 4, yearViewer, input).map(y => {
    yearViewer.appendChild(y);
  })
  container.appendChild(input);
  container.appendChild(monthViewer);
  container.appendChild(yearViewer);
  //original.style = 'display: none';
  original.parentNode.insertBefore(container, original.nextSibling);
}

function onInputClick(e) {
  const sentence = e.target.value.match(/(.+) (.+)/);
  if (e.target.selectionStart <= sentence[1].length) {
    e.target.selectionStart = 0;
    e.target.selectionEnd = sentence[1].length;
  }
  else {
    e.target.selectionStart = sentence[1].length + 1;
    e.target.selectionEnd = e.target.selectionStart + 4;
  }
}

window.onload = function () {
  if (!Modernizr.inputtypes.month) {
    const inputs = document.querySelectorAll('input[type="month"]');
    inputs.forEach(i => drawInput(i));
  }
}