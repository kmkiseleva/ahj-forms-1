export default class Popover {
  constructor(container) {
    this.container = container;
  }

  init() {
    this.drawHTML();
    this.showPopover();
  }

  drawHTML() {
    this.container.insertAdjacentHTML(
      'beforeend',
      `
      <div class="popover popover_inactive">
        <div class="popover__title">You clicked the button</div>
        <div class="popover__text">Make a wish!</div>
      </div>
      <button type="button" class="btn" data-content="Make a wish!">Magic button</button>`
    );
  }

  showPopover() {
    const popover = document.querySelector('.popover');
    const btn = document.querySelector('.btn');
    btn.addEventListener('click', () => {
      popover.classList.toggle('popover_inactive');
    });
  }
}
