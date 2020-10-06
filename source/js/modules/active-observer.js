export default () => {
  const observedElements = document.querySelectorAll(`.js-observed`);
  const content = document.querySelector(`.page-content`);
  const observers = [];
  observedElements.forEach((observedElement) => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.intersectionRatio === 1) {
          entry.target.classList.add(`--active`);
        } else {
          entry.target.classList.remove(`--active`);
        }
      });
    }, {root: content, threshold: [0, 1]});
    observers.push(observer);
    observer.observe(observedElement);
  });
  window.addEventListener(`beforeunload`, () => {
    observers.forEach((observer) => observer.disconnect());
  });
};
