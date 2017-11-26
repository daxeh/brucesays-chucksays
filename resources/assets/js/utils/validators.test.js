import { isValidFormat, mobileRegex } from './validators';

let mob;
let intMob;

beforeEach(() => {
  mob = '0411111111';
  intMob = '+61411111111';
});

test('can match mobile format', () => {
  const res = isValidFormat(mobileRegex, mob);
  expect(res).toBeTruthy();
});

test('can match international calling code format', () => {
  const res = isValidFormat(mobileRegex, intMob);
  expect(res).toBeTruthy();
});

test('it can reject invalid mobile format', () => {
  const res = isValidFormat(mobileRegex, '041a123dd');
  expect(res).toBeFalsy();
});

test('it can reject empty input', () => {
  const res = isValidFormat(mobileRegex, '') &&
    isValidFormat(mobileRegex, null) &&
    isValidFormat(mobileRegex);

  expect(isValidFormat(mobileRegex)).toBeFalsy();
  // ( F && F ) && F = F
  expect(res).toBeFalsy();
});
