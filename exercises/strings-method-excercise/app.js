// function capitalAndLowercase(str){
//     var upperStr = str.toUpperCase();
//     var lowerStr = str.toLowerCase();
//     return upperStr + lowerStr;
// }
// console.log(capitalAndLowercase("Hello"));

// function findMiddleIndex(str){
//     return Math.floor(str.length/2);
// }
// console.log(findMiddleIndex("Hello World"));


// function returnFirstHalf (str){
//     return str.slice(0, str.length/2);
// }
// console.log(returnFirstHalf("Hello world"));

// function capitalAndLowercase (str){
//     var firstHalf = str.slice(0, str.length/2);
//     var secondHalf = str.slice(str.length/2);
//     var upperStr = firstHalf.toUpperCase();
//     var lowerStr = secondHalf.toLowerCase();
//     return upperStr + lowerStr;
// }
// console.log(capitalAndLowercase("Hello World"));

function capitalize(str){
    var words = str.split(' ');
    var capitalWords = [];
    for (var i = 0; i < words.length; i++){
        var capitalWord = words[i]
        capitalWord = capitalWord.charAt(0).toUpperCase() + capitalWord.slice(1);
        capitalWords.push(capitalWord);
        }
    var sentence = capitalWords.join(" ");
    return sentence;
}
console.log(capitalize("hey friends! practice practice practice!"));