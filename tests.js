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

describe('sayHello', function () {
    it('should be a defined function', function () {
        expect(typeof sayHello).toBe('function');
    });
    it('should return a string when called', function () {
        expect(typeof sayHello()).toBe("string");
    });
    it('should return the string "Hello" when executed', function () {
        expect(sayHello()).toBe("Hello");
    });
    it("should never return 'undefined' when called", function () {
        expect(sayHello()).not.toBe(undefined);
    });
    // it('should return the string "Hello, Jane!" when executed', function () {
    //     expect(sayHello("Jane")).toBe("Hello, Jane!");
    // });
    // it('should return the string "Hello Alex!" when executed', function () {
    //     expect(sayHello("Alex")).toBe("Hello, Alex!");
    // });
    // it('should return the string "Hello, Pat!" when executed', function () {
    //     expect(sayHello("Pat")).toBe("Hello, Pat!");
    // });
    // it('should return the string "Hello, World!" when no input is provided', function () {
    //     expect(sayHello()).toBe("Hello, World!");
    // });
    // it('should return "Hello, World!" if sayHello(true) is executed', function () {
    //     expect(sayHello(true)).toBe("Hello, World!");
    // });
    // it('should return "Hello, World!" id sayHello(false) is executed', function () {
    //     expect(sayHello(false)).toBe("Hello, World!");
    // });
    // it('should return "Hello World" if input is "null"', function () {
    //     expect(sayHello(null)).toBe("Hello, World!");
    // });
});


describe('sayHello2', function () {
    it('should be a defined function', function () {
        expect(typeof sayHello2).toBe('function');
    });
    it('should return a string when called', function () {
        expect(typeof sayHello2()).toBe("string");
    });
    it('should return the string "Hello, Jane!" when executed', function () {
        expect(sayHello2()).toBe("Hello, Jane!");
    });
    it("should never return 'undefined' when called", function () {
        expect(sayHello2()).not.toBe(undefined);
    });});
