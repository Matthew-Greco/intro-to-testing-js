// Unit tests for the helloWorld function
describe('helloWorld', function () {
    it('should be a defined function', function () {
        expect(typeof helloWorld).toBe('function');
    });
    it('should return a string when called', function () {
        expect(typeof helloWorld()).toBe("string");
    });
    it('should return the string "Hello, World!" when executed', function () {
        expect(helloWorld()).toBe("Hello, World!");
    });
    it("should never return 'undefined' when called", function () {
        expect(helloWorld()).not.toBe(undefined);
    });
});

describe('sum', function () {
    it('should be a defined function', function () {
        expect(typeof sum).toBe('function');


    });
    it('should return the number 4 when passed the numbers 2 and 2', function () {
    });

});

describe("sayHello", function () {
    it('should be a defined function', function () {
        expect(function () {

        })
    });
});

