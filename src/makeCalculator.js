'use strict';

/**
 * @return {object}
 */
function makeCalculator() {
  const obj = {
    result: 0,

    operate(operation, value) {
      operation(value);

      return this;
    },

    add(value) {
      obj.result += value;
    },

    subtract(value) {
      obj.result -= value;
    },

    multiply(value) {
      obj.result *= value;
    },

    divide(value) {
      obj.result /= value;
    },

    reset() {
      this.result = 0;

      return this;
    },
  };

  return obj;
}

module.exports = makeCalculator;
