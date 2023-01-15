const mainSectionButton = document.querySelector('.main-section__button');
const subscriptionsSection = document.querySelector('.subscriptions__wrapper');

mainSectionButton.addEventListener('click', () => {
  subscriptionsSection.scrollIntoView({
    behavior: 'smooth',
    block: 'start',
  });
});
