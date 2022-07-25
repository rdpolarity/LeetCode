function romanToInt(s: string): number {
  const romanMap = {
      "I": 1,
      "V": 5,
      "X": 10,
      "L": 50,
      "C": 100,
      "D": 500,
      "M": 1000,
  }
  let result = 0;


  for (let index = 0; index < s.length; index++) {
    const char = s.charAt(index);
    const after = s.charAt?.(index + 1);
    const before = s.charAt?.(index - 1);
    if (char == 'I' && after == 'V') result += 4;
    else if (char == 'V' && before == 'I') continue;
    
    else if (char == 'I' && after == 'X') result += 9;
    else if (char == 'X' && before == 'I') continue;

    else if (char == 'X' && after == 'L') result += 40;
    else if (char == 'L' && before == 'X') continue;

    else if (char == 'X' && after == 'C') result += 90;
    else if (char == 'C' && before == 'X') continue;
    
    else if (char == 'C' && after == 'D') result += 400;
    else if (char == 'D' && before == 'C') continue;

    else if (char == 'C' && after == 'M') result += 900;
    else if (char == 'M' && before == 'C') continue;

    else result += (romanMap as any)[char];
  }
  return result;
};

console.log(romanToInt('IV'));