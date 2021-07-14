import Popover from '../popover';

test('Throwing an error', () => {
  expect(() => new Popover(15)).toThrow();
});

// test('demo', () => {
//   const main = document.getElementById('main');
//   const newPopover = new Popover(main);
//   newPopover.drawHTML();
//   const popover = newPopover.querySelector('.popover');
//   expect(popover.classList.contains('popover')).toBeTruthy();
// });
