import { Task } from './task';

describe('Task', () => {
  it('should create an instance', () => {
    expect(new Task(123, "some tile", "some description")).toBeTruthy();
  });
});
