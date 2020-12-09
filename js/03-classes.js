// class Person {
//     firstName: string;
//     lastName: string;
//     sayHello(){
//         console.log('Hello', this.firstName);
//     }
//     sayHelloToFullname(){
//         console.log('Hello', this.firstName, this.lastName);
//     }
// }
// let phil: Person = new Person();
// phil.firstName = 'Phil';
// phil.lastName = 'Donahue';
// let kenn: Person = new Person();
// kenn.firstName = 'Kenn';
// // kenn.sayHello();
// let sheriff: Person = new Person();
// sheriff.firstName = 'Sheriff';
// sheriff.lastName = 'Holler';
// sheriff.sayHelloToFullname();
// class Game {
//     constructor(name: string, maker: string){
//         this.gameName = name;
//         this.gameMaker = maker;
//     }
//     gameName: string;
//     gameMaker: string;
// }
// let battleship: Game = new Game('Battleship', 'Hasbro');
// class Vehicle {
//     type: string;
//     make: string;
//     model: string;
//     manufactureYear: number;
//     runs: boolean;
//     topSpeed: number;
// }
// class Automobile extends Vehicle {
//     isSelfDriving: boolean;
// }
// let myCar: Automobile = new Automobile();
// myCar.isSelfDriving = false;
// myCar.topSpeed = 200;
// myCar.make = 'Volvo';
// class Motorcycle extends Vehicle {
//     easyToDoWheelie: boolean
// }
// let myMotorcycle: Motorcycle = new Motorcycle();
// myMotorcycle.easyToDoWheelie = true;
// myMotorcycle.topSpeed = 180;
// class Animal {
//     type: string;
//     appendages: number;
//     fur: boolean;
// }
// class Lion extends Animal {
//     gender: string;
//     weight: number;
// }
// let myLion: Lion = new Lion()
// myLion.type = 'Lion';
// myLion.appendages = 4;
// myLion.fur = true;
// myLion.gender = 'male';
// myLion.weight = 280
// // console.log(myLion)
// class Deer extends Animal {
//     antlers: boolean;
//     location: string;
// }
// let myDeer: Deer = new Deer()
// myDeer.type = 'Deer';
// myDeer.appendages = 4;
// myDeer.fur = true;
// myDeer.antlers = true;
// myDeer.location = 'indiana'
// class Store {
//     constructor(public name: string, public city: string){}
// }
// let ikea: Store = new Store('Ikea', 'Fishers');
// class Employee extends Person{
//     private _salary: number;
//     getSalary(): string{
//         return this._salary.toString();
//     }
//     setSalary(newSalary: number){
//         this._salary = newSalary;
//     }
// }
// let newEmployee: Employee = new Employee();
// newEmployee.setSalary(30000);
// let salaryResult: string = newEmployee.getSalary();
// console.log('The salary is:', salaryResult);
//# sourceMappingURL=03-classes.js.map