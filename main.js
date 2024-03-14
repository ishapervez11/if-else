//used of if, else if, and else statement 
//marksheet
var studentMark = 88;
//if the score is 90 or above , return "A"
if (studentMark >= 90 && studentMark <= 99) {
    console.log("student got A grade");
    //if the score is between 80 and 89 (inclusive), return "B"
}
else if (studentMark >= 80 && studentMark <= 89) {
    console.log("student got B grade");
    //if the score is between 70 and 79 (inclusive), return "C"
}
else if (studentMark >= 70 && studentMark <= 79) {
    console.log("student got C grade");
    //if the score is between 60 and 69 (inclusive) return "D"
}
else if (studentMark >= 60 && studentMark <= 69) {
    console.log("student got D grade");
    //if the score is below the 60, return "F"
}
else {
    console.log("student got F grade");
}
