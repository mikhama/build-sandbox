export default class Calc {
  add(...args) {
    return args.reduce((sum, item) => sum + item, 0);
  }
}
