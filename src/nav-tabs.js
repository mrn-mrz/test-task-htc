export default () => {
  const handle = (e) => {
    e.preventDefault();

    const targetTab = e.target;
    if (targetTab.classList.contains('active')) {
      return;
    }

    const targetTabId = targetTab.dataset.bsTarget;
    const targetTabContent = document.querySelector(targetTabId);

    const activeTab = document.querySelector('.active');
    const activeTabId = activeTab.dataset.bsTarget;
    const activeTabContent = document.querySelector(activeTabId);

    targetTab.classList.add('active');
    targetTabContent.classList.add('active');

    activeTab.classList.remove('active');
    activeTabContent.classList.remove('active');
  };

  const navs = document.querySelectorAll('.nav');
  navs.forEach((nav) => {
    const tabs = nav.querySelectorAll('[data-bs-toggle]');
    tabs.forEach((tab) => {
      tab.addEventListener('click', (event) => handle(event));
    });
  });
};
