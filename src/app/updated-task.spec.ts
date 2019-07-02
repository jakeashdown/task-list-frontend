import { UpdatedTask } from './updated-task';

describe('UpdatedTask', () => {
  it('should create an instance', () => {
    expect(new UpdatedTask("some tile", "some description")).toBeTruthy();
  });
});
