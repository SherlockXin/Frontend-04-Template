function kmp(source, pattern) {
  const table = new Array(pattern.length).fill(0);

  {
    let i = 1;
    let j = 0;
    debugger;
    while (i < pattern.length) {
      if (pattern[i] === pattern[j]) {
        i += 1;
        j += 1;
        table[i] = j;
      } else {
        if (j > 0) {
          j = table[j];
        } else {
          i += 1;
        }
      }
    }
  }

  {
    let i = 0; // sourceIndex
    let j = 0; // patternIndex
    while(i < source.length) {
      if (source[i] === pattern[j]) {
        i += 1;
        j += 1;
      } else {
        if (j > 0) {
          j = pattern[j];
        } else {
          i += 1;
        }
      }
      if (j === pattern.length) {
        return true;
      }
    }
    return false;
  }
}

// a a b a a a e d
// 0 1 2 3 4 5 6 7
//     1 
console.log(kmp('abnncdabce', 'abcdabce'));
