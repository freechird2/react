"use strict";
// let count = 0;
// count += 1;
// //count = "갑자기 분위기 문자열";
const person = {
    name: "김사람",
};
const expert = {
    name: "김개발",
    skills: ["javascript", "react"],
};
const people = [person, expert];
const color = "red";
const colors = ["red", "orange"];
class Queue {
    constructor() {
        this.list = [];
    }
    get length() {
        return this.list.length;
    }
    enqueue(item) {
        this.list.push(item);
    }
    dequeue() {
        return this.list.shift();
    }
}
const queue = new Queue();
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
