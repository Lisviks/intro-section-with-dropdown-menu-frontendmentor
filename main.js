const featuresBtn = document.querySelector('.features');
const companyBtn = document.querySelector('.company');
const menuBtn = document.querySelector('.menu-icon');
const nav = document.querySelector('nav');

featuresBtn.addEventListener('click', (e) => {
  const classlist = e.target.classList;
  if (classlist.contains('open-close-list') || classlist.contains('arrow')) {
    featuresBtn.classList.toggle('open');
  }
});

companyBtn.addEventListener('click', (e) => {
  const classlist = e.target.classList;
  if (classlist.contains('open-close-list') || classlist.contains('arrow')) {
    companyBtn.classList.toggle('open');
  }
});

menuBtn.addEventListener('click', () => {
  menuBtn.classList.toggle('open');
});
