import { EventEmitter } from "node:events"; //importing from node's event package

const task = new EventEmitter(); //object created for task

const sayHi = (name) => {
  console.log(`loggedin ${name}`);
};

task.on("greet", sayHi);

task.on("greet", (name) => {
  console.log(`${name} starts working`);
});

task.on("greet", (name) => {
  console.log(`${name} logged Out`);
});

task.once("greet", () => {
  console.log("System Started");
});

task.once("exit", (name) => {
  console.log(`system is shutting down by ${name}`);
});

task.emit("greet", "Apoorva saxena");
console.log();
task.emit("greet", "apoorva");
console.log();
// task.off("greet,sayHi");  //no command will work now
task.emit("greet", "apoorva saxena");
console.log();
task.emit("exit", "Manager"); //won't effect
console.log();
task.emit("exit", "Employee"); //execute only once
task.getMaxListeners();
console.log("total listener", task.listenerCount("greet"));
task.removeAllListeners("greet");
