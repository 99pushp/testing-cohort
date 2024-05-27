import {describe, expect, test} from '@jest/globals';
import {multiply, sum} from '../index';

describe('sum module', () => {
  test('adds 1 + 2 to equal 3', () => {
    expect(sum(1, 2)).toBe(3);
  });
});

describe('multiply module' , () => {
    test('multiply 3 * 5 to equal 15',() => {
        expect(multiply(3,5)).toBe(15);
    })
})