const featuresBtn = document.querySelector('.features');
const companyBtn = document.querySelector('.company');

featuresBtn.addEventListener('click', () => {
  featuresBtn.classList.toggle('open');
});

companyBtn.addEventListener('click', () => {
  companyBtn.classList.toggle('open');
});
