// Quick Question #1

// { 1, 2, 3, 4 }




// Quick Question #2 

// 'ref'



// Quick Question #3

/* 0: {Array(3) => true}
   1: {Array(3) => false}
*/



// hasDuplicate

// const hasDuplicate = arr => new Set(arr).size !== arr.length;




// vowelCount

function isVowel(char) {
   return 'aeiou'.includes(char);
}

function vowelCount(str) {
   const vowelMap = new Map();
   for (let char of str) {
      let lowerCasrChar = char.toLowerCase();
      if (isVowel(lowerCasrChar)) {
         if (vowelMap.has(lowerCasrChar)) {
            vowelMap.set(lowerCasrChar, vowelMap.get(lowerCasrChar) +1);
         }
         else {
            vowelMap.set(lowerCasrChar, 1);
         }
      }
   }
   return vowelMap;
}