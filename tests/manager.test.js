const Manager = require('../class/manager')

test('new Manager will return user input name', () => {
    test = new Manager('Drew', 2, 'bigdrew99@gmail.com', 8);

    expect(test.getName()).toEqual("Drew");
})

test('new Manager will return user input id', () => {
    test = new Manager('Drew', 2, 'bigdrew99@gmail.com', 8);

    expect(test.getName()).toEqual(2);
})

test('new Manager will return user input email', () => {
    test = new Manager('Drew', 2, 'bigdrew99@gmail.com', 8);

    expect(test.getName()).toEqual("bigdrew99@gmail.com");
})

test('new Manager will return user input office number', () => {
    test = new Manager('Drew', 2, 'bigdrew99@gmail.com', 8);

    expect(test.getName()).toEqual(8);
})

test('new Manager will return user role', () => {
    test = new Manager('Drew', 2, 'bigdrew99@gmail.com', 8);

    expect(test.getName()).toBe("Manager");
})

