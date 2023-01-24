const Engineer = require('../class/engineer')

test('new Engineer will return user input name', () => {
    const test = new Engineer('John', 3, 'portojohn77@gmail.com', 'DaBoyJohn')

    expect(test.getName()).toBe('John')
})

test('new Engineer will return user input id', () => {
    const test = new Engineer('John', 3, 'portojohn77@gmail.com', 'DaBoyJohn')

    expect(test.getId()).toBe(3)
})

test('new Engineer will return user input email', () => {
   const test = new Engineer('John', 3, 'portojohn77@gmail.com', 'DaBoyJohn')

    expect(test.getEmail()).toBe('portojohn77@gmail.com')
})

test('new Engineer will return user input office number', () => {
    const test = new Engineer('John', 3, 'portojohn77@gmail.com', 'DaBoyJohn')

    expect(test.getGithub()).toBe('DaBoyJohn')
})

test('new Engineer will return user role', () => {
    const test = new Engineer('John', 3, 'portojohn77@gmail.com', 'DaBoyJohn')

    expect(test.getRole()).toBe("Engineer")
})