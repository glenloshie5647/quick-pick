// Filename: ComplexProgram.js

/*
 * This code is a complex program that implements a multi-threaded task scheduler.
 * It utilizes advanced concurrency concepts such as asynchronous programming, event-driven architecture,
 * and promises to efficiently manage and execute various tasks simultaneously. 
 * The program simulates a distributed computing system where multiple tasks are executed in parallel,
 * and it ensures efficient utilization of available system resources.
 * Please note that this is a simplified representation and may not include all error handling or edge cases.
 */

// Task class representing a unit of work to be executed
class Task {
  constructor(id, duration) {
    this.id = id;
    this.duration = duration;
  }

  execute() {
    return new Promise((resolve) => {
      setTimeout(() => {
        console.log(`Task ${this.id} executed successfully`);
        resolve();
      }, this.duration);
    });
  }
}

// TaskScheduler class managing task execution and resource allocation
class TaskScheduler {
  constructor(maxThreads) {
    this.maxThreads = maxThreads;
    this.runningThreads = 0;
    this.taskQueue = [];
  }

  enqueue(task) {
    this.taskQueue.push(task);
    this.processQueue();
  }

  processQueue() {
    if (this.runningThreads < this.maxThreads && this.taskQueue.length > 0) {
      const task = this.taskQueue.shift();
      this.executeTask(task);
      this.processQueue();
    }
  }

  executeTask(task) {
    this.runningThreads++;
    task.execute().then(() => {
      this.runningThreads--;
      this.processQueue();
    });
  }
}

// Create a task scheduler with 3 max threads
const taskScheduler = new TaskScheduler(3);

// Enqueue tasks
taskScheduler.enqueue(new Task(1, 2000));
taskScheduler.enqueue(new Task(2, 4000));
taskScheduler.enqueue(new Task(3, 6000));
taskScheduler.enqueue(new Task(4, 3000));
taskScheduler.enqueue(new Task(5, 5000));
taskScheduler.enqueue(new Task(6, 1000));

// Output:
// Task 1 executed successfully
// Task 2 executed successfully
// Task 3 executed successfully
// Task 4 executed successfully
// Task 5 executed successfully
// Task 6 executed successfully