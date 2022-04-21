import Validator from '../Validator';

test('корректное имя', () => {
  const name = new Validator('Oleg');
  expect(name.validateUsername()).toBeTruthy();
});

test('корректное имя2', () => {
  const name = new Validator('Oleg-555_T');
  expect(name.validateUsername()).toBeTruthy();
});

test('некорректное имя - подряд более трёх цифр', () => {
  const name = new Validator('Oleg-5555_T');
  expect(name.validateUsername()).toBeFalsy();
});

test('некорректное имя - начинаться цифрами', () => {
  const name = new Validator('6Oleg');
  expect(name.validateUsername()).toBeFalsy();
});

test('некорректное имя - заканчиваться -', () => {
  const name = new Validator('Oleg-');
  expect(name.validateUsername()).toBeFalsy();
});

test('некорректное имя - заканчиваться _', () => {
  const name = new Validator('Oleg_');
  expect(name.validateUsername()).toBeFalsy();
});
