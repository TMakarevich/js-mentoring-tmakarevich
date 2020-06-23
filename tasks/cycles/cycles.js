/**
 * Write the function that will calculate the amount of discount
 * considering the redemption amount
 * Rules are the following:
 * - 0    - 350:  0%
 * - 351  - 1350: 15%
 * - 1351 - 2700: 30%
 * - 2701 - 6500: 45%
 * @param {number} redemption amount (0 - 9999)
 * @returns {number} discount in percent
 */
{
  /**What does it mean 'write the function'? */
  const redemption = 2701;
  let discount;
  if (redemption <= 350) {
    discount = 0;
  } else if (redemption > 350 && redemption <= 1350) {
    discount = 15;
  } else if (redemption > 1350 && redemption <= 2700) {
    discount = 30;
  } else if (redemption > 2700 && redemption <= 6500) {
    discount = 45;
  }
  console.log(discount + '%');
}

/** TODO
 * implement factorial algorithm using for, while, do..while operators
 */
{
  const i = 9; //10! = 3628800

  let z = 1;
  for (let n = 1; n <= i; n++) {
    z = z * n;
  }
  console.log(z);

  let n = 1;
  let y = 1;
  while (n <= i) {
    y = y * n;
    n++;
  }
  console.log(y);

  let a = 1;
  let b = 1;
  do {
    b = b * a;
    a++;
  }
  while (a <= i);
  console.log(b);
}

/**
 * return concatenated string from an array of substring
 */
{
  const substr = ["I", " love", " JS"];
  let str = ' '; /**How can I define empty string without displaying of null/undefined and without 'space'? */
  for (i = 0; i < substr.length; i++) {
    str = str + substr[i];
  }
  console.log(str);
}

/**
 * calculate a total of income of certain person
 */
{
  const personIncomes = {
    salary: 1985,
    rent: -600,
    interestOnDeposit: 250,
    otherExpences: -300
  };

  let total = 0;
  for (let type in personIncomes) {
    total = total + personIncomes[type];
  }
  console.log(total);
}