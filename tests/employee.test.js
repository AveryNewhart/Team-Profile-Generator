const Employee = require('../class/employee')

test('new Employee will return user input name', () => {
    const test = new Employee('Alex', 1, 'lilalex88@icloud.com');

    expect(test.getName()).toEqual('Alex')
})

test('new Employee will return user input id', () => {
    const test = new Employee('Alex', 1, 'lilalex88@icloud.com');

    expect(test.getId()).toEqual(1);
})

test('new Employee will return user input email', () => {
    const test = new Employee('Alex', 1, 'lilalex88@icloud.com');

    expect(test.getEmail()).toEqual('lilalex88@icloud.com')
})

test('new Employee will return the role the of the employee', () => {
    const test = new Employee('Alex', 1, 'lilalex88@icloud.com');

    expect(test.getRole()).toBe('Employee')
})