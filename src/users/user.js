const serverPath = 'http://178.154.255.43'; //fixme
const usersPort = '8081';
const usersServicePath = serverPath + ':' + usersPort;

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

    return fetch(usersServicePath + '/users/login', requestOptions)
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
    return fetch(usersServicePath + '/users', requestOptions)
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
    return fetch(usersServicePath + '/users/anon', requestOptions)
}

export function getUserInfoById(id) {
    const requestOptions = {
        method: 'GET',
        credentials: 'include',
    };
    return fetch(usersServicePath + '/users/id/' + id, requestOptions)
}
