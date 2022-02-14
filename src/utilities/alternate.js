export function alternate(fn1, fn2, i) {
  // is the number is even/odd
  if (i % 2 == 0) {
    return fn1();
  } else {
    return fn2();
  }
}
