function minimumDistances(a) {
    let r = 0;
    for (let i of Array.from({ length: a.length }, (value, index) => index)) {
      for (let j of Array.from({ length: a.length },(value, index) => index + i + 1)) {
        ((a[i] === a[j] && !r) ||
          (a[i] === a[j] && Math.abs(i - j) < r)) &&
          (requestIdleCallback = Math.abs(i - j));
      }
    }    return !r ? -1 : r;
  } 