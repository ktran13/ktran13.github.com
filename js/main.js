init();

function init() {
  setCurrentYear();
}

function setCurrentYear() {
  let yearElement = document.getElementById('copyright-year');
  let currentYear = new Date().getFullYear();
  yearElement.innerHTML = currentYear;
}
