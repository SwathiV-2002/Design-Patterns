class Task {
    constructor(public name: string, public completed: boolean = false) {}
  }
  interface Iterator<T> {
    next(): T;
    hasNext(): boolean;
  }
  interface Aggregate<T> {
    createIterator(): Iterator<T>;
  }
  class TaskIterator implements Iterator<Task> {
    private index: number = 0;
  
    constructor(private tasks: Task[]) {}
  
    public next(): Task {
      return this.tasks[this.index++];
    }
  
    public hasNext(): boolean {
      return this.index < this.tasks.length;
    }
  }
  class TaskList implements Aggregate<Task> {
    private tasks: Task[] = [];
  
    public addTask(task: Task): void {
      this.tasks.push(task);
    }
  
    public createIterator(): Iterator<Task> {
      return new TaskIterator(this.tasks);
    }
  }
// Client Code
const taskList = new TaskList();
taskList.addTask(new Task("Buy groceries"));
taskList.addTask(new Task("Pay bills"));
taskList.addTask(new Task("Clean the house"));

const iterator = taskList.createIterator();

while (iterator.hasNext()) {
  const task = iterator.next();
  console.log(`Task: ${task.name}, Completed: ${task.completed}`);
}
          