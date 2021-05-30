//Find max of two values, find max of three values
// var business = n;
// var minister = n;
// var doctor = n;

// if (business > minister) {
//     if (business > doctor) {
//         console.log('businee is bigger');
//     }
//     else {
//         console.log('doctor is bigger');
//     }
// }
// else {
//     if (minister > doctor) {
//         console.log('minister is bigger');
//     }
//     else {
//         console.log('doctor is bigger');
//     }
// }
//OR
// var res=Math.max(business,minister,doctor);
// console.log(res);



//Remove duplicate item from an array

// function removeDuplicate(numbers){
//     var unique=[];
//     for (let i = 0; i < numbers.length; i++) {
//         const element = numbers[i];
//         var index=unique.indexOf(element);
//         if(index==-1){
//             unique.push(element);
//         }   
//     }
//     return unique;
// }


//Count the number of words in a string
// var speech = "text";
// var count = 0;
// for (var i = 0; i < speech.length; i++) {
//     var element = speech[i];
//     if (element == ' ' && speech[i - 1] != ' ') {
//         count++;
//     }
// }
// count++;