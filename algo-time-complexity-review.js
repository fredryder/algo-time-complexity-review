
// Constant: O(1) or O(c) - constant number of operations
// Linear: O(n) n is proportional to number of data points
// Quadratic: O(n^2) Number of operations are proportional to the square of the problem size
// Logarithmic: O(log n) Multiplying the problem size by constant adds the same number of operations. Q. How many times do i have to divide c by 2 to reach 1?
// Exponential: O(c^n) c - number of options, n - problem size



// How to determine n:
//   1. determine what variables represtent problem size (this is n)
//   2. Write numbers of operations in terms of n
//     - lines in series are added
//     - lines nested are multiplied
//   3. Find leading termn and drop coefficicents

// Native JS methods:
//   1. check the polyfill, how would you write it?
//   2. Recursive functions: draw a decision tree)


/////////// Prompt 1 ///////////
/////////// time complexity: 
function findMax(array){
  var max = -Infinity;
  for (var i = 0; i < array.length; i++){
    if (array[i] > max){
      max = array[i];
    }
  }
  return max; 
}

// (1(1+1)*n) + 1 + 1 =2n + 2 => O(n) or linear


/////////// Prompt 2 ///////////
/////////// time complexity: 
function contains(array, target){
  return array.indexOf(target) > -1; // n 
}

// indexOf -> iterates over an array 
// O(n) linear


/////////// Prompt 3 ///////////
/////////// time complexity: 
function partialContains(array, target, start){
  return array.slice(start).indexOf(target) > -1; // slice: n, indexOf: n 
}

// n is array length
// n + n becuase it's chained, not nested
// 2(n) -> O(n) linear


/////////// Prompt 4 ///////////
/////////// time complexity: 
function square(array){
  for (var i = 0; i < 3; i++){        // 3 or constant
    array[i] = array[i] * array[i];   // 1
  }
  return array; // 1
}

// n is array length - doesn't matter really as n is lost/irrelevant
// O(1), O(c) constant


/////////// Prompt 5 ///////////
/////////// time complexity: 
function repeat(array){
  var repeat = [];                  // 1
  for (var j = 0; j < 10; j++){     // 1
    repeat[j] = [];                 // 1
    for (var i = 0; i < array.length; i++){ // n linear
      repeat[j].push(array[i]); // 1
    }
  }
  return repeat; 
}
//what if we replace 10 with a parameter? 
// unshift is linear, but push is constant
// n is array length
// ((1 * n) + 1) * 10 --> O(n) linear


/////////// Prompt 6 ///////////
/////////// time complexity: 
function gcf(num1, num2){
  if (num1 > num2){ //this ensures num1 is the smaller number
    var temp = num1;  // 1...
    num1 = num2;
    num2 = temp;
  }
  for (var i = num1; i > 1; i--){             // n - dictated by size of num1
    if (num1 % i === 0 && num2 % i === 0){    // 2
      return i;
    }
  }
  return 1;
}

// n is the smaller of num1 or num2
// O(n) linear


/////////// Prompt 7 ///////////
/////////// time complexity: 
function countChar(string){
  var counts = {}; //1
  var currChar, currCharCount; //1
  for (var i = 0; i < string.length; i++){ // n
    currChar = string[i]; // 1
    currCharCount = 1; // 1
    for (var j = i+1; j < string.length; j++){ // n - j
      if (currChar === string[j]){ //1
        currCharCount++; //1
      }
    }
    if (!counts.hasOwnProperty(currChar)){ // 1
      counts[currChar] = currCharCount; //1
    }
  }
  return counts; //1
}

// n is string length
// 3 + (n - j)



/////////// Prompt 8 ///////////
/////////// time complexity: 
var factorial = function(num){
  if (num < 0){
    return;
  }
  if (num === 0 || num === 1){
    return 1; 
  } else {
    return num * factorial(num-1);
  }
}

// O(n) linear - depends on the the size of the number as to how many n


/////////// Prompt 9 ///////////
/////////// time complexity: 
function tournament(players){
  var results;
  if (players.length < 3){
    return players[0];
  } else {
    results = hotPotato(players); 
    //assume hotPotato is a function where sets of
    //three players are teleported simultaneously
    //to a room with a potato. at the end of 5 minutes, 
    //the player in each room holding the potato is the winner 
    //and all winners get teleported to the results array 
    return tournament(results);
  }
}

// O(log n) Logarithmic. Dividing by the same number each time. Tree


/////////// Prompt 10 ///////////
/////////// time complexity: 
function allPasswords(allowedChars, maxLength){
  var results = [];

  function findPassword(currentAttempt){
    if (currentAttempt.length > 0){
      results.push(currentAttempt.join(""));
    }
    if (currentAttempt.length <= maxLength){
      for (var i = 0; i < allowedChars.length; i++){
        findPassword(currentAttempt.concat(allowedChars[i]));
      }
    }
  }

  findPassword([]);
  return results;
}

// O(c^n) exponential
// c = number of characters in the alphabet
// n = max number of characters in password


/////////// Prompt 11 ///////////
/////////// time complexity: 
function findColor(quadTree, coordinates){
  //a quad tree is a tree where each node has 4 children 
  //or no children, usually used to divide a two-dimensional
  //space into coordinates
  //coordinates is an array [xpos, ypos]

  if (!Array.isArray(quadTree.color)){
    return quadTree.color;
  } else {
    var quadrant = findQuadrant(quadTree, coordinates); 
    if (quadrant === "NE") {
      return findColor(quadTree.color[0], coordinates);
    } 
    if (quadrant === "SE") {
      return findColor(quadTree.color[1], coordinates);
    }
    if (quadrant === "SW") {
      return findColor(quadTree.color[2], coordinates);
    } 
    if (quadrant === "NW") {
      return findColor(quadTree.color[3], coordinates);
    }
  }

  function findQuadrant(quadTree, coordinates){
    var y = (quadTree.coordinates.top + quadTree.coordinates.bottom)/2;
    var x = (quadTree.coordinates.left + quadTree.coordinates.right)/2;
    if (coordinates[0] > x){
      if (coordinates[1] > y){
        return "NE";
      } else {
        return "SE";
      }
    } else {
      if (coordinates[1] > y){
        return "NW";
      } else {
        return "SW";
      }
    }
  }
}

// log base 4


/////////// Bonus! ///////////
/////////// time complexity: 
//this will require some math to determine 

function tournamentRedux(players){
  var results;
  if (players.length < 3){
    return players[0];
  } else {
    for (i = 0; i < players.length; i = i + 3){
      results.push(hotPotato([players[i], players[i+1], players[i+2]])); 
      //assume hotPotato is a function where 
      //the three players at a time must play hot potato for 5 minutes. 
      //the player in the room holding the potato is the winner
      //and gets returned from the function 
    }
    return tournament(results);
  }
}







