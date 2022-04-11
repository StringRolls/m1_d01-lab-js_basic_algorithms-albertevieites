console.log("I'm ready!");
// Iteration 1: Names and Input
let hacker1 = "Michael";
console.log(`The driver's name is ${hacker1}.`);

let hacker2 = "Peter";
console.log(`The navigator's name is ${hacker2}.`);

// Iteration 2: Conditionals
if (hacker1.length > hacker2.length) {
  console.log(
    `The driver has the longest name, it has ${hacker1.length} characters.`
  );
} else if (hacker1.length > hacker2.length) {
  console.log(
    `It seems that the navigator has the longest name, it has ${hacker2} characters.`
  );
} else {
  console.log(`Wow, you both have equally long names, ${hacker1} characters!.`);
}
// Iteration 3: Loops
// Iteration 3.1 'Name' to 'N A M E'
let driverName = "";
for (let i = 0; i < hacker1.length; i++) {
  driverName = driverName.concat(hacker1[i].toUpperCase() + " ");
}

console.log(driverName);
// Iteration 3.2 'Name' to 'emaN'
let reversedName = "";
for (i = hacker2.length - 1; i >= 0; i--) {
  reversedName += hacker2[i];
}

console.log(reversedName);
// Iteration 3.3 Lexicographic order
if (hacker1 > hacker2) {
  console.log(`The driver's name goes first.`);
} else if (hacker2 > hacker1) {
  console.log(`Yo, the navigator goes first definitely.`);
} else if (hacker1 == hacker2) {
  console.log(`What?! You both have the same name?`);
}
// Bonus 1: Palindromes
const paragraphs =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In gravida mi sit amet ex suscipit mollis. Nullam et nunc vel orci fermentum volutpat. Phasellus tempus convallis auctor. Mauris nec velit varius massa commodo aliquam eu quis orci. Etiam volutpat ligula elementum risus maximus efficitur. Etiam eget eleifend nunc. Donec pellentesque purus metus, id iaculis orci luctus eget. Nam pretium mauris sed nunc dictum, tempus rhoncus leo ultrices. Nam posuere tellus mauris, a facilisis diam convallis fringilla. Aliquam vel nibh augue. Proin vestibulum nisi et nibh aliquet, sed egestas augue luctus. In non lorem sem.\
Aenean dignissim elit quis neque blandit pretium. Vestibulum faucibus, lorem vel auctor consequat, felis quam eleifend orci, sed pretium orci leo vitae est. Donec ex eros, ultricies et velit at, ultrices condimentum nulla. Nullam vel condimentum dui. Pellentesque in nulla cursus, consectetur augue vel, finibus ex. Pellentesque convallis lacinia odio, vel cursus lacus consequat nec. Vivamus sodales iaculis rutrum. Morbi laoreet mi vitae ultricies sagittis. Quisque a sagittis lorem. Praesent vestibulum sollicitudin metus nec luctus. Donec sapien purus, malesuada in placerat non, iaculis sit amet magna. Nulla interdum, dui id commodo vestibulum, odio quam consectetur tellus, non faucibus dolor augue vel arcu. Nullam elementum, lacus ac lobortis vehicula, urna nulla pretium nisl, eu elementum arcu eros vitae urna. Nam vitae diam nec quam tempor interdum in vel augue.\
Quisque viverra dolor turpis, porta posuere nulla sagittis volutpat. Nullam massa nunc, sollicitudin non maximus eget, cursus sit amet urna. Maecenas vulputate lacus eget nisl malesuada vulputate. Praesent lectus sapien, hendrerit ut dui condimentum, sodales fermentum magna. Fusce ultricies dolor in pulvinar feugiat. Curabitur accumsan est vitae eros lacinia sollicitudin. Maecenas sodales velit non lacus venenatis, id luctus dolor tempus.";

let words = paragraphs.split(" ");
console.log(words.length);

let etWord = words.toString().split("et");
console.log(etWord.length - 1);
// Bonus 2: Lorem ipsum counter
let phraseToCheck = "A man, a plan, a canal, Panama!";
let joinWords = phraseToCheck.replace(/[^0-9a-z]/gi, "").toLowerCase();

function checkPalindrome(str) {
    for (let i = 0; i < joinWords.length / 2; i++) {
        if (joinWords[i] !== joinWords[joinWords.length - 1 - i]) {
            return false;
        }
    }
        return true;
}

checkPalindrome(joinWords);
