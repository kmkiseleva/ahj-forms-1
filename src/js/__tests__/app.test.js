import Popover from '../popover';

const main = document.getElementById('main');
const newPopover = new Popover(main);

test('demo', () => {
  newPopover.drawHTML();
  const popover = newPopover.querySelector('.popover');
  expect(popover.classList.contains('popover')).toBeTruthy();
});