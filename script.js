// ----------FUnction program no 1 conditional-------------------
function programconditional1() {
    console.log("Conditional program no 1");
    let num1=parseInt(prompt("Please Enter number "))
    let num2=parseInt(prompt("Please Enter number "))
    let resultc1 = (num1 > num2) ? num1:"num1 is maximun"?num2:"num2 is maximun ";
    document.getElementById("programcon1").innerHTML = resultc1 ;   
}
// ----------FUnction program no 2 conditional-------------------
function programconditional2() {
    console.log("Conditional program no 2");
    let num1=parseInt(prompt("Please Enter number "))
    let num2=parseInt(prompt("Please Enter number "))
    let num3=parseInt(prompt("Please Enter number "))
     let max = (num1 > num2 && num1 > num3) ? num1 :
          (num2 > num3) ? num2 : num3;
    document.getElementById("programcon2").innerHTML = max ;   
}
// ----------FUnction program no 3 conditional-------------------
function programconditional3() {
    console.log("Conditional program no 3");
    let num=parseInt(prompt("Please Enter number "))
    let evenorodd =(num %2== 0) ? "That number is Even ":"That number is odd";
    document.getElementById("programcon3").innerHTML = evenorodd;   
}
// ----------FUnction program no 4 conditional-------------------
function programconditional4() {
    console.log("Conditional program no 4");
    let year=parseInt(prompt("Please Enter year "))
    let yearisleaf=(year %4==0) ? "That year is leaf ":"That year is not leaf";
    document.getElementById("programcon4").innerHTML = yearisleaf;   
}
// ----------FUnction program no 5 conditional-------------------
function programconditional5() {
    console.log("Conditional program no 5");
    let ch=prompt("Please Enter year ")
    let checkalpornot=(ch>='a' && ch<='z') || (ch>='A' && ch<='Z') 
     ? "User enter alphabat ":"User enter not alphabat";
    document.getElementById("programcon5").innerHTML = checkalpornot;   
}
 // ----------Program no 23 function---------------------------------
        function program23() {
            console.log("Program no 23 ");
            let day = parseInt(prompt("Enter a day number between 0-6"))
            // let day=4;
            switch (day) {
                case 0:
                    day = "Sunday";
                    break;
                case 1:
                    day = "Monday";
                    break;
                case 2:
                    day = "Tuesday";
                    break;
                case 3:
                    day = "Wednesday";
                    break;
                case 4:
                    day = "Thursday";
                    break;
                case 5:
                    day = "Friday";
                    break;
                case 6:
                    day = "Saturday";
                default:
                    day = "Kindly ENter Vaild day number";
            }
            program023.innerHTML = "user enter  day is :" + day;
            console.log("User enter that day :", day);
        }
        // ----------Program no 24 function---------------------------------
        function program24() {
            console.log("Program no 24 ");
            let month = parseInt(prompt("Enter a month number between 1-12"))
            switch (month) {
                case 1:
                case 3:
                case 5:
                case 7:
                case 8:
                case 10:
                case 12:
                    month = "days in which month are 31";
                    break;
                case 2:
                    month = "days in which month are 28 or 29 ";
                    break;
                case 4:
                case 6:
                case 9:
                case 11:
                    month = "days in which month are 30";
                    break;
                default:
                    day = "Kindly ENter Vaild month number";
            }
            program024.innerHTML = "user enter  month in which days are :" + month;
            console.log("User enter that Month :", month);
        }
        // ----------Program no 25 function---------------------------------
        function program25() {
            console.log("Program no 25 ");
            let ch = prompt("Enter a  Cheracter for check volwo or not:")
            switch (ch) {
                case 'a':
                case 'A':
                    ch = "User Enter vowel cheracter";
                    break;
                case 'e':
                case 'E':
                    ch = "User Enter vowel cheracter";
                    break;
                case 'i':
                case 'I':
                    ch = "User Enter vowel cheracter";
                    break;
                case 'o':
                case 'O':
                    ch = "User Enter vowel cheracter";
                    break;
                case 'u':
                case 'U':
                    ch = "User Enter vowel cheracter";
                    break;
                default:
                    ch = "User Enter consonant";
            }
            program025.innerHTML = "user enter  that cheracter" + ch;
            console.log("User enter that Cheracter", ch);
        }
        // ----------Program no 26 function---------------------------------
        function program26() {
            console.log("Program no 26 ");
            let num1 = parseInt(prompt("Enter frist number"))
            let num2 = parseInt(prompt("Enter second number"))
            switch (num1 > num2) {
                case 0:
                    console.log(num2, "is not greater");
                    program026.innerHTML = "Is not greater" + num2;
                    break;
                case 1:
                    console.log(num1, "is greater");
                    program026.innerHTML = "Is greater" + num1;
                    break;
                default:
                    console.log("Invail value Enter user");
            }

            console.log("User enter that value :", num1, num2);
        }