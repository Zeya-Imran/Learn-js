/* Array */

// const language = ['c', 'c++', 'java', '.net', 'javaScript'];

// Find the length of an aaray
// let lengthOfArray = language.length;
// console.log(lengthOfArray);



// how to add new Element in tha existing array
// push method follow the LIFO rule
// language.push('python');
// console.log(language);



// how to delete last instered element form the existing array
//pop method follow the LIFO rule
// language.pop();
// console.log(language);



/* Loop on the Array */
// let actors = ['srk', 'salman', 'varun', 'sid', 'rahul']

// for (let index = 0; index < actors.length; index++) {
//     // var element = array[index] === 'rahul';
//     // console.log(`Actors Name is ${actors[index].toUpperCase()}`);
    
// }

/* lets take an example of array and object, in this object we are itreting the object basis on the 
   payment, we are deducting the some amount from payment
*/ 
// let actors = [

//     {
//         name: "actor1",
//         payment: 500
//     },
//     {
//         name: "actor2",
//         payment: 600
//     },
//     {
//         name: "actor3",
//         payment: 400
//     },
// ];


// for(let i=0; i<actors.length;i++){
//     actors[i].payment = actors[i].payment -50;
//     console.log(actors[i]);
// }


/**
 * here array an object student, 
 * we are adding the marks of every object as individual student
 * and printing in percentage
 */
let student = [

    {
        name: "student1",
        phy: 70,
        math:65,
        che:55
    },
    {
        name: "student2",
        phy: 70,
        math:55,
        che:55
    },
    {
        name: "student3",
        phy: 70,
        math:45,
    },
];

for (let i=0; i<student.length;i++)
{
    let total = (student[i].che+student[i].math+student[i].phy)/3;
    console.log(`${student[i].name} obtained marks is ${total.toFixed(2)}%`);
}

