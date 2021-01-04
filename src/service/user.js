export function login(login, password) {
    const requestOptions = {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        credentials: 'include',
        body: JSON.stringify({
            login: login,
            password: password
        })
    };

    return fetch('http://130.193.43.122:8081/users/login', requestOptions)
}


export function register(userToRegister) {
    const requestOptions = {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        credentials: 'include',
        body: JSON.stringify({
            name: userToRegister.firstName,
            login: userToRegister.login,
            password: userToRegister.password,
            email: userToRegister.email
        })
    };
    return fetch('http://130.193.43.122:8081/users', requestOptions)
}

export function registerAnon(name) {
    const requestOptions = {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        credentials: 'include',
        body: JSON.stringify({
            name: name
        })
    };
    return fetch('http://130.193.43.122:8081/users/anon', requestOptions)
}