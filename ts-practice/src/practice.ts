// let count = 0;
// count += 1;
// //count = "갑자기 분위기 문자열";

// const message: string = "hello world";

// const done: boolean = true;

// const numbers: number[] = [1, 2, 3];
// const messages: string[] = ["hello", "world"];

// //messages.push(1);

// let mightBeUndefined: string | undefined = undefined;
// let nullableNumber: number | null = null;

// let color: "red" | "orange" | "yellow" = "red";
// color = "yellow";
// //color = "green";

// function sum(x: number, y: number): number {
//   return x + y;
// }

// sum(1, 2);

// function sumArray(numbers: number[]): number {
//   return numbers.reduce((acc, current) => acc + current, 0);
// }

// const total = sumArray([1, 2, 3, 4, 5]);

// interface Shape {
//   getArea(): number;
// }

// class Circle implements Shape {
//   constructor(public radius: number) {
//     this.radius = radius;
//   }

//   getArea(): number {
//     return this.radius * this.radius * Math.PI;
//   }
// }

// class Rectangle implements Shape {
//   constructor(private width: number, private height: number) {
//     this.width = width;
//     this.height = height;
//   }

//   getArea(): number {
//     return this.width * this.height;
//   }
// }

// const circle = new Circle(5);
// const rectangle = new Rectangle(10, 5);

// console.log(circle.radius);
// //console.log(rectangle.width);

// const shapes: Shape[] = [new Circle(5), new Rectangle(10, 5)];

// shapes.forEach((shape) => {
//   console.log(shape.getArea());
// });

// interface Person {
//   name: string;
//   age?: number;
// }

// interface Developer extends Person {
//   skills: string[];
// }

// const person: Person = {
//   name: "김사람",
//   age: 20,
// };

// const expert: Developer = {
//   name: "김개발",
//   skills: ["javascript", "react"],
// };

// const people: Person[] = [person, expert];

type Person = {
  name: string;
  age?: number;
};

type Developer = Person & {
  skills: string[];
};

const person: Person = {
  name: "김사람",
};

const expert: Developer = {
  name: "김개발",
  skills: ["javascript", "react"],
};

type People = Person[];
const people: People = [person, expert];

type Color = "red" | "orange" | "yellow";
const color: Color = "red";
const colors: Color[] = ["red", "orange"];

class Queue<T> {
  list: T[] = [];
  get length() {
    return this.list.length;
  }
  enqueue(item: T) {
    this.list.push(item);
  }
  dequeue() {
    return this.list.shift();
  }
}

const queue = new Queue<number>();
queue.enqueue(0);
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
queue.enqueue(4);
console.log(queue.dequeue());
console.log(queue.dequeue());
console.log(queue.dequeue());
console.log(queue.dequeue());
console.log(queue.dequeue());
