var test = require('tape').test;

test('basic arithmetic', function (t) {
  t.plan(3);

  t.equal(2 + 3, 5, 'Sum opearation');
  t.equal(7 * 8 + 9, 65, 'Order of operators');
  t.equal(3 - 1, 2, 'Substraction');
});
