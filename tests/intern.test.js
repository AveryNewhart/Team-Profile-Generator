const Intern = require('../class/intern')

test('new Intern will return user input name', () => {
    const test = new Intern('Joe', 4, 'cupofjoe55@gmail.com', 'Penn State');

    expect(test.getName()).toBe('Joe');
})

test('new Intern will return user input id', () => {
    const test = new Intern('Joe', 4, 'cupofjoe55@gmail.com', 'Penn State');

    expect(test.getId()).toBe(4);
})

test('new Intern will return user input email', () => {
    const test = new Intern('Joe', 4, 'cupofjoe55@gmail.com', 'Penn State');

    expect(test.getEmail()).toBe('cupofjoe55@gmail.com');
})

test('new Intern will return user input office number', () => {
    const test = new Intern('Joe', 4, 'cupofjoe55@gmail.com', 'Penn State');

    expect(test.getSchool()).toBe('Penn State');
})

test('new Intern will return user role', () => {
    const test = new Intern('Joe', 4, 'cupofjoe55@gmail.com', 'Penn State');

    expect(test.getRole()).toBe("Intern");
})