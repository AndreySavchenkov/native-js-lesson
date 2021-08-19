function increaseAge(u: UserType) {
    u.age++;
}

test('big test', () => {

    type UserType = {
        name: string
        age: number
    }
    var user = {
        name: 'Andrew',
        age: 31
    }

    increaseAge(user);

    expect(user.age).toBe(33)

});