// Problem 1: Complete the secondLargest function which takes in an array of numbers in input and return the second biggest number in the array. (without using sort)?
function secondLargest(array) {
    // Write your code here
    let max = 0;
    let secMax =0;
  
    for( let i=0;i<array.length;i++)
    {
      if(array[i]> max)
      {
        secMax = max;
        max = array[i];
  
      }
      if(array[i]<max && array[i]>secMax)
      {
        secMax = array[i];
      }
    }
    return secMax;
  }
  
  // Problem 2: Complete the calculateFrequency function that takes lowercase string as input and returns frequency of all english alphabet. (using only array, no in-built function)
  function calculateFrequency(string) {
    // Write your code here
   let obj = {}
   for (let i=0; i<string.length; i++) {
     let character = string[i];
     if(character >= 'a' && character <= 'z'){
       if (obj[character]) {
         obj[character] += 1
       } else {
         obj[character] = 1
       }
     }
   }
    console.log(obj)
    return obj;
  }
  
  // Problem 3: Complete the flatten function that takes a JS Object, returns a JS Object in flatten format (compressed)
  function flatten(unflatObject) {
    // Write your code here
    var answer = {};
    for (var i in unflatObject) {
      if (!unflatObject.hasOwnProperty(i)) continue;
  
      if ((typeof unflatObject[i]) == 'object' && unflatObject[i] !== null) {
        var flatObject = flatten(unflatObject[i]);
        for (var x in flatObject) {
          if (!flatObject.hasOwnProperty(x)) continue;
  
          answer[i + '.' + x] = flatObject[x];
        }
      } else {
        answer[i] = unflatObject[i];
      }
    }
    return answer;
  }
  
  // Problem 4: Complete the unflatten function that takes a JS Object, returns a JS Object in unflatten format
  function unflatten(flatObject) {
    // Write your code here
     var result = {}
    for (var i in flatObject) {
      var keys = i.split('.')
      keys.reduce(function(r, e, j) {
        return r[e] || (r[e] = isNaN(Number(keys[j + 1])) ? (keys.length - 1 == j ? flatObject[i] : {}) : [])
      }, result)
    }
    return result;
  }
  