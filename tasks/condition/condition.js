//conditional

/** TODO
 * Task - rewrite IF..ELSE to ternary operator
 */
{
  const a = 3,
    b = 2;

  (a + b < 4) ? console.log('wrong'): console.log('too much');
}


/** TODO
 * The system receives two params x and y.
 * Implement the logic when z equal to sum of x and y in case both of them less than 10 or multiplication in case of greater or equal than 10
 * Task 1 - if else
 * Task 2 - ternary operator
 */
{
  const x = 10;
  const y = 2;

  if (x < 10 && y < 10) {
    z = x + y;
  } else
    z = x * y;

  console.log(z);

  (x < 10 && y < 10) ? console.log(z = x + y): console.log(z = x * y);
}

/** TODO
 * The system receives 3 params - x, y, operator.
 * Operator can pass 4 possible values - "add", "subtract", "multiply", "divide".
 * Implement the logic when the system does appropriate operation based on passed operator param.
 */

{
  const x = 35;
  const y = 7;
  const operator = 'divide';
  switch (operator) {
    case 'add':
      console.log(z = x + y);
      break;
    case 'substract':
      console.log(z = x - y);
      break;
    case 'multiply':
      console.log(z = x * y);
      break;
    case 'divide':
      console.log(z = x / y);
      break;
    default:
      console.log('Default behaviour');
      break;
  }


}