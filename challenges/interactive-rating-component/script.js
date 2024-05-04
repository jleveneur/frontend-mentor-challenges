const form = document.querySelector('.rating-form');

form.addEventListener('submit', (e) => {
  e.preventDefault();

  const formData = new FormData(form);

  const result = formData.get('rating');

  if (result) {
    document.querySelector('.rating-state').style.display = 'none';

    document.querySelector('.thank-you-state').style.display = 'flex';

    const selectedRate = document.querySelector('#selected-rating');

    selectedRate.innerHTML = result;
  }
});
