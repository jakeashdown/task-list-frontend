import { NewTask } from './new-task';

describe('NewTask', () => {
  it('should create an instance', () => {
    expect(new NewTask("some tile", "some description")).toBeTruthy();
  });
});
