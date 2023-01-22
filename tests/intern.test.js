const Intern = require('../class/intern')

test('new Intern will return user input name', () => {
    test = new Intern('Joe', 4, 'cupofjoe55@gmail.com', 'Penn State');

    expect(test.getName()).toEqual("Joe");
})

test('new Intern will return user input id', () => {
    test = new Intern('Joe', 4, 'cupofjoe55@gmail.com', 'Penn State');

    expect(test.getName()).toEqual(4);
})

test('new Intern will return user input email', () => {
    test = new Intern('Joe', 4, 'cupofjoe55@gmail.com', 'Penn State');

    expect(test.getName()).toEqual("cupofjoe55@gmail.com");
})

test('new Intern will return user input office number', () => {
    test = new Intern('Joe', 4, 'cupofjoe55@gmail.com', 'Penn State');

    expect(test.getName()).toEqual('Penn State');
})

test('new Intern will return user role', () => {
    test = new Intern('Joe', 4, 'cupofjoe55@gmail.com', 'Penn State');

    expect(test.getName()).toBe("Intern");
})