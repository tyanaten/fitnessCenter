const ACTIVE_BUTTON_CLASS = 'tabs-list__button--active';

const tabsList = document.querySelector('.subscriptions__tabs');
const tabsButtons = document.querySelectorAll('.tabs-list__button');

const subscriptionsLists = document.querySelectorAll('.subscriptions__list');

const showActiveList = () => {
  subscriptionsLists.forEach((list) => {
    list.style.display = 'grid';

    if (list.getAttribute('data-moth-list') !== activeTab.getAttribute('data-moth-tab')) {
      list.style.display = 'none';
    }
  });
};

let activeTab = document.querySelector('.' + ACTIVE_BUTTON_CLASS);

tabsList.classList.remove('visually-hidden');

subscriptionsLists.forEach((list) => {
  list.classList.add('options-list--with-js');
});

showActiveList();

tabsButtons.forEach((tab) => {
  tab.setAttribute('tabindex', 0);

  tab.addEventListener('click', () => {
    activeTab.classList.remove(ACTIVE_BUTTON_CLASS);
    tab.classList.add(ACTIVE_BUTTON_CLASS);

    activeTab = tab;
    showActiveList();
  });
});
