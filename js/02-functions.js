// js and typescript differrence
// function demoFunction(someNum){
//     return someNum;
// }
// demoFunction(1);
// demoFunction('stuff');
// demoFunction(1, 'Stuff');
// function addNumbers(numOne: number, numTwo: number){
//     return numOne + numTwo;
// }
// // Works
// addNumbers(1,2);
// // Errors
// addNumbers(1,2,3);
// addNumbers(1,2,3, 'Foo');
// function fullName(firstName: string, LastName: string){
//     return firstName + ' ' + LastName;
// }
// console.log(fullName('Ricky', 'Bobby'));
// function sayHello(name: string) : string {
//     return name;
// }
// sayHello('Kenn'); // works
// sayHello(1); // error
// function practiceFunction(username: string, password: string) : boolean {
//     if (username === 'elevenfiftyuser' && password === 'Letmein1234!'){
//         return true
//     } else {
//         return false
//     }
// }
// console.log(practiceFunction('elevenfiftyuser', 'Letmein1234!'));
// console.log(practiceFunction('test', 'testing'));
// function addNumbersWithOptional (numOne: number, numTwo: number, someString?: string){
//     console.log(someString);
//     return numOne + numTwo;
// }
// addNumbersWithOptional(1,2);
// addNumbersWithOptional(1,2,'This is optional');
function fullNameTwo(first, last, middle) {
    if (middle !== undefined) {
        return first + " " + middle + " " + last;
    }
    else {
        return first + " " + last;
    }
}
console.log(fullNameTwo('test', 'name'));
console.log(fullNameTwo('test', 'testing', 'tester'));
//# sourceMappingURL=02-functions.js.map