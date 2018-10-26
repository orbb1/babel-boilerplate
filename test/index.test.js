import printHello from '../src/index';

describe('printHello', () => {
  beforeEach(() => {
    spyOn(console, 'log').and.callThrough();
  });

  it('should print "hello"', () => {
    printHello();

    expect(console.log).toHaveBeenCalledWith('Hello');
  });
});
