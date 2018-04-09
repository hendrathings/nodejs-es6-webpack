import { Fibonacci } from './fibonacci';
import { Sloth } from './sloth';

export default class App {
  run() {
    console.log("hello world");

    new Sloth().run();

    Fibonacci.calculate(10);
  }
}