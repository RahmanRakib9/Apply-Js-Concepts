//Find the largest element of an array OR:
//Find out the highest marks in your class on math

function getBigger(marks) {
    var max = 0;
    for (let i = 0; i < marks.length; i++) {
        const element = marks[i];
        if (element > max) {
            max = element;
        }
    }
    return max;
}
var highestMarks = [55, 77, 88, 95, 87, 83];
console.log(getBigger(highestMarks));
