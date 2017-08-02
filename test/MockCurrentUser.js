class MockCurrentUser {
    details = {
        first_name: 'Testy',
        last_name:  'McTestface',
    };
    token = 'MYSECRETT0KEN'
    
    whenReady() {
        return Promise.resolve();
    }
}

export default MockCurrentUser;
