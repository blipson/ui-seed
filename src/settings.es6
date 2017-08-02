const settings = {
    defaults: {
        APIEndpoint:   '',
        intercomAppID: '',
    },

    env: {
        local: {
            APIEndpoint: 'https://localhost:8090',
        },

        prod: {
            selectedEnv:   'prod',
            APIEndpoint:   '',
        },
    },
};

export default settings;
