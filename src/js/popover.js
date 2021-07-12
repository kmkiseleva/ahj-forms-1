export default class Popover {
  constructor(container) {
    this.container = container;
  }

  init() {
    this.showPopover();
  }

  showPopover() {
    const popover = document.querySelector('.popover');
    const btn = document.querySelector('.btn');
    btn.addEventListener('click', () => {
      popover.classList.toggle('popover_inactive');
    });
  }
}
