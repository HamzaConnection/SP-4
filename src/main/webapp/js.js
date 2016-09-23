/*
 console.log("print");// log besked før den bliver skrevet
 
 var message;
 message = "hello";
 console.log(message);
 console.log(typeof message);
 console.log(message.length);
 
 document.getElementById("header").style.backgroundColor='red';
 
 function myfirstfunction(p1,p2)
 {
 return "Argumentes= " + arguments[0] * arguments[2];
 }
 console.log(myfirstfunction(5, 20, 0));
 
 var mysecondfunction = new Function("a", "b" , "return a+ b");
 
 console.log(mysecondfunction(5,5));
 
 var testx = mysecondfunction(110,15);
 console.log(testx);
 
 //var Person1 = (FirstName "Billy")
 
 Person1.gender ="male";
 console.log(Person1.Firstname); 
 
 */

var myBoolean = true;
var myString = 'hey';
var myNumber = 1010;

var myArray = ["Saab", true, 34, person];

var person = {
    firstName: "John",
    lastName: "Doe",
    age: 50,
    eyeColor: "blue"
};

console.log(myBoolean, myString, myNumber, myArray);
console.log(myArray);
console.log(person.firstName + ' ' + person.lastName + ' ' + person.age + ' ' + person.eyeColor);

//console.log(typeof myArray[3]);

var arrayLength = myArray.length;
for (var i = 0; i < arrayLength; i++) {
    console.log(typeof myArray[i]);
}



function student(studentId, studentName)
{
    this.studentID = studentId;
    this.studentName = studentName;
    //this.toString = function(){return this.studentID + " " + this.studentName;};
}

//var studentobject = {studentID:'23' , studentName:'hamza'};

var studentarray = [new student(1, 'bob'), new student(2, 'Sabrina'), new student(3, 'Tom')];

function toString(studentarray)
{
    var arrayLength = studentarray.length;
    for (var i = 0; i < arrayLength; i++) {
        console.log(studentarray[i].studentID + ' ' + (studentarray[i].studentName));
    }
}


//toString(studentarray);
//console.log(new student(2222, 'studentName'));


function studentobject(name, age, isFemale)
{
    this.name = name;
    this.age = age;
    this.isFemale = isFemale;
    this.toString = function () {
        return this.name + " " + this.age;
        +" " + this.isFemale;
    };

}

var studentObjectArray = [new studentobject('hamza', 100, false), new studentobject('Sofie', 23, true), new studentobject('Mia', 18, true), new studentobject('kirsten', 65, false)];

function youngestStudent(list)
{
    this.list = list;
    var minimum = list[0].age;
    var youngest = list[0].name;
    for (var i = 0; i < list.length; i++) {

        if (list[i].age < minimum)
        {
            minimum = list[i].age;
            youngest = list[i].name;
        }

    }
    return 'The youngest student is ' + youngest + ' the person is ' + minimum + ' years old';
}

function femaleStudent(list)
{
    this.list = list;
    for (var i = 0; i < list.length; i++) {

        if (list[i].isFemale)
        {
            console.log(list[i].name);
        }
    }
}


femaleStudent(studentObjectArray);

console.log("The youngest student: " + youngestStudent(studentObjectArray));

function sortStudent(studentlist, student)
{

    this.studentlist = studentlist;
    this.student = student;

    for (var i = 0; i < studentlist.length; i++) {
        if (studentlist[i].name === student.name)
        {
            console.log('Removed ' + student.name);
            studentlist.splice(i, 1);


        }

    }
}

var student = new studentobject('hamza', 100, false);
sortStudent(studentObjectArray, student);

for (var i = 0; i < studentObjectArray.length; i++) {
    console.log(studentObjectArray[i]);
}

studentObjectArray.forEach(function (array)
{
    if (array.age > 30) {
        console.log('This person is over 30: ' + array.name);
    }


});

function max() // arguments is a keyword whick enables you to refer to the given number of arguments in the method. 
{
    var maxvalue = arguments[0];
    for (var i = 0; i < arguments.length; i++) {
        if (arguments[i] > maxvalue)
        {
            maxvalue = arguments[i];
        }
    }
    console.log(maxvalue);
}

max(2, 5, 434, 36);

var d = new Date();
var n = d.getDay();

var cars = [
    "Saab",
    "Volvo",
    "BMW"
];

var weekday = new Array();
weekday[0] = "Sunday";
weekday[1] = "Monday";
weekday[2] = "Tuesday";
weekday[3] = "Wednesday";
weekday[4] = "Thursday";
weekday[5] = "Friday";
weekday[6] = "Saturday";


console.log(weekday[n]);



//Javascript 2:Exercises

var x = document.getElementsByTagName("div");
x[0].style.backgroundColor = "red";
x[1].style.backgroundColor = "white";
x[2].style.backgroundColor = "purple";

function person2(n, l, p, e)
{
    this.name = n;
    this.lastname = l;
    this.phone = p;
    this.email = e;
}

var person2array = [new person2('hamza', 'laroussi', 26932431, 'hamzaconnection@hotmail.com'), new person2('bob', 'billy', 23453215, 'billy@hotmail.com'),
    new person2('Swag', 'Santha', 23463242, 'swag@hotmail.com')];

for (var i = 0; i < person2array.length; i++) {

    var table = document.getElementById("Perstable");
    var row = table.insertRow(i+1);
    var cellname = row.insertCell(0);
    var celllastname = row.insertCell(1);
    var cellphone = row.insertCell(2);
    var cellmail = row.insertCell(3);
    
    cellname.innerHTML = person2array[i].name;
    celllastname.innerHTML = person2array[i].lastname;
    cellphone.innerHTML = person2array[i].phone;
    cellmail.innerHTML = person2array[i].email;
    
    
}
// x variable is the same as document.getElementsByTagName("div");

     x[0].addEventListener("click", clickMe);
     x[1].addEventListener("click", clickMe2);
     x[2].addEventListener("click", clickMe3);


function clickMe() {
    x[0].innerHTML = "YOU CLICKED ME!";
    x[0].style.backgroundColor = "blue";
    console.log("Clicked 0");
}
function clickMe2() {
    
    x[1].innerHTML = "YOU CLICKED ME!";
    x[1].style.backgroundColor = "white";
    console.log("Clicked 1");
}
function clickMe3() {
    
    x[2].innerHTML = "YOU CLICKED ME!";
    x[2].style.backgroundColor = "yellow";
    console.log("Clicked 2");
}


x[3].addEventListener("mouseover", mouseover);
x[4].addEventListener("mouseover", mouseover2);
x[5].addEventListener("mouseover", mouseover3);

x[3].addEventListener("mouseout", mouseNOTover);
x[4].addEventListener("mouseout", mouseNOTover2);
x[5].addEventListener("mouseout", mouseNOTover3);


function mouseover()
{
    x[3].innerHTML = "YOU MOUSED OVER ME!";
    x[3].style.backgroundColor = "yellow";
    
}

function mouseover2()
{
    x[4].innerHTML = "YOU MOUSED OVER ME!";
    x[4].style.backgroundColor = "blue";
    
}

function mouseover3()
{
    x[5].innerHTML = "YOU MOUSED OVER ME!";
    x[5].style.backgroundColor = "Purple";
    
}

function mouseNOTover()
{
    x[3].innerHTML = "";
    x[3].style.backgroundColor = "";
    
}

function mouseNOTover2()
{
    x[4].innerHTML = "";
    x[4].style.backgroundColor = "";
    
}
function mouseNOTover3()
{
    x[5].innerHTML = "";
    x[5].style.backgroundColor = "";
    
}

//var firstname = new FormData(document.getElementById("firstname").value);

document.getElementById("form").addEventListener("submit", submit);

function submit(e)
{
 
    console.log( document.getElementById("firstname").value);
    console.log( document.getElementById("lastname").value);
    console.log( document.getElementById("yes").value);
    console.log( document.getElementById("single").value);
    console.log( document.getElementById("hernumber").value);
    
    
    var table = document.getElementById("formtable");
    var row = table.insertRow(1);
    var cellname = row.insertCell(0);
    var celllastname = row.insertCell(1);
    var cellphone = row.insertCell(2);
    var cellmail = row.insertCell(3);
    var cellnum = row.insertCell(4);
    
    cellname.innerHTML = document.getElementById("firstname").value;
    celllastname.innerHTML = document.getElementById("lastname").value;
    cellphone.innerHTML = document.getElementById("yes").value;
    cellmail.innerHTML = document.getElementById("single").value;
    cellnum.innerHTML = document.getElementById("hernumber").value;
    
    
    e.preventDefault();
}






















