// xify - returns the same string, but with every character replaced by an 'x'
// * Examples:
// * xify('hello') -> 'xxxxx'
// xify('hi there') -> 'xxxxxxxx'

//console.log(xify("hi there"));

/* function xify(str){
     let strX = "";
     for (let count = 0; count < str.length; count++){
     strX += "x";
     }
     return strX;
} */

 
//Examples:
//yellingChars('goodness') -> 'g!o!o!d!n!e!s!s!'
//yellingChars('oh hello') -> 'o!h! !h!e!l!l!o!'/*

/*console.log(yellingChars("oh hello"));

function yellingChars(str){
    let strX = "";
    for (let i of str){
        strX += i
        strX += '!'
    }
        console.log (strX);
}*/

//indexedChars - adds the index of each character before that character in the given string
//Examples:
//indexedChars('hello') -> '0h1e2l3l4o'
//indexedChars('bye') -> '0b1y2e'
//Hints:
//We can add something BEFORE the current character as well!

    // let strX = "";
    // for (let count = 0; count < str.length; count++){
    // strX += "x";
    // }
    // return strX;


/*let hello = (indexof('0', 10));

    console.log(hello);
    console.log(indexof + 0);

let bye = (indexof('0', 6));

    console.log(bye);
    console.log(indexof + 0);*/



//numberedChars - adds the number of each character before that character in the given string
//Examples:
//numberedChars('hello') -> '(1)h(2)e(3)l(4)l(5)o'
//numberedChars('bye') -> '(1)b(2)y(3)e'
/*Hints: there's a simple relationship between the index and the number
... indices are 0-based counting and numbers are 1-based
... you'll figure it out!*/    

/*console.log(numChar("hello"));

function numChar(str) {
    let strx3 = ""

    for (let count = 0; count < str.length; count++) { 
        strx3 += (1) + count;
        strx3 += str[count];

    }
    return strx3;
}*/   


/*exclaim - returns the given sentence with every question mark or period changed to an exclamation point
Examples:
exclaim('What are you doing? Are you a fool?') -> 'What are you doing! Are you a fool!'
exclaim('This is fine.') -> 'This is fine!'*/

/*console.log(exclaim("What are you Doing? Are you a Fool? "));
console.log(exclaim("This is fine. "))

function exclaim(str){
    let strX = " ";
    for (let i = 0; i < str.length; i++){
        if (str[i] === '?' || str[i] === '.') {
            strX += '!';
        } 
        else strX += str[i];
    } 
    return strX;
}*/

/** `repeatIt` - returns the given string repeated `n` times, where `n` is the second parameter
  * Examples:
    * repeatIt('beetlejuice', 3) -> 'beetlejuicebeetlejuicebeetlejuice'
    * repeatIt('oh hi!', 8) -> 'oh hi!oh hi!oh hi!oh hi!oh hi!oh hi!oh hi!oh hi!'*/

/*function repeat (str, n){
    let newStr = "";
    for (i=0; i <= str.length; i++) {
        newStr += str.concat(str[i]);
    }
    for (k=0; k <= n; k++){
        newStr += newStr
    }
    return console.log(newStr)
}
repeat ("beetlejuice", 3);
repeat("oh hi", 8)*/


/*truncate - shortens a long string to 15 characters plus an ellipsis (...)
Examples:
truncate('The fault, dear Brutus, is not in our stars, but in ourselves.') -> 'The fault, dear...'
truncate("Well, that's just, like, your opinion man.") -> "Well, that's ju..."*/



/*ciEmailify - creates an email from a two-part name
Examples:
ciEmailify('colin jaffe') -> 'colin.jaffe@codeimmersives.com'
ciEmailify('Anthony DeRosa') -> 'anthony.derosa@codeimmersives.com'*/

/*function ciEmailify(str){

    let solution = " ";
    let email = "@codeimmersives.com";
    let period = ".";

    for(let i = 0; i < str.length; i++){
        if (str[i] === " "){
        solution += period
        }
        else {
            solution += str[i]
        }
    }
    return solution + email;
}
console.log(ciEmailify("colin jaffe"));
console.log(ciEmailify("Anthony DeRosa")); */



/*reverse - reverses the given string
Examples:
reverse('colin') -> 'niloc'
reverse('mesuara') -> 'arausem'*/

/*function reverse(str) {
    //Set variable for strA to empty string
    let strA = "";
    //Set count to start at the last character in the string, and count backwards logging each character in 'reverse' order.
    for (let count = str.length-1; count >= 0; count--) {
       strA = strA + str[count];
    }
    return console.log(strA);
}
reverse('colin');
reverse('mesuara'); */



/*onlyVowels - returns only the vowels from a word
Examples:
onlyVowels('Colin Jaffe') -> 'oiae'
onlyVowels('quickly') -> 'ui'
onlyVowels('Anthony DeRosa') -> 'Aoeoa'*/

/*function getCount(str) {
    var vowelsCount = 0
    const vowels = ['a', 'e', 'i', 'o', 'u']
    for (let char of str) {
      if (vowels.includes(char)){
        vowelsCount++
      }
    }
    return vowelsCount
  } */