const Manager = require('../class/manager')

test('new Manager will return user input name', () => {
    const test = new Manager('Drew', 2, 'bigdrew99@gmail.com', 8);

    expect(test.getName()).toBe('Drew');
})

test('new Manager will return user input id', () => {
    const test = new Manager('Drew', 2, 'bigdrew99@gmail.com', 8);

    expect(test.getId()).toBe(2);
})

test('new Manager will return user input email', () => {
    const test = new Manager('Drew', 2, 'bigdrew99@gmail.com', 8);

    expect(test.getEmail()).toBe('bigdrew99@gmail.com');
})

test('new Manager will return user input office number', () => {
    const test = new Manager('Drew', 2, 'bigdrew99@gmail.com', 8);

    expect(test.getOffice()).toBe(8);
})

test('new Manager will return user role', () => {
    const test = new Manager('Drew', 2, 'bigdrew99@gmail.com', 8);

    expect(test.getRole()).toBe("Manager");
})

