const Engineer = require('../class/engineer')

test('new Engineer will return user input name', () => {
    test = new Engineer('John', 3, 'portojohn77@gmail.com', 'DaBoyJohn');

    expect(test.getName()).toEqual("John");
})

test('new Engineer will return user input id', () => {
    test = new Engineer('John', 3, 'portojohn77@gmail.com', 'DaBoyJohn');

    expect(test.getName()).toEqual(3);
})

test('new Engineer will return user input email', () => {
    test = new Engineer('John', 3, 'portojohn77@gmail.com', 'DaBoyJohn');

    expect(test.getName()).toEqual("portojohn77@gmail.com");
})

test('new Engineer will return user input office number', () => {
    test = new Engineer('John', 3, 'portojohn77@gmail.com', 'DaBoyJohn');

    expect(test.getName()).toEqual('DaBoyJohn');
})

test('new Engineer will return user role', () => {
    test = new Engineer('John', 3, 'portojohn77@gmail.com', 'DaBoyJohn');

    expect(test.getName()).toBe("Engineer");
})