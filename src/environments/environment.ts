import { EnvironmentConfiguration } from "../app/models/environment-configuration";

const serverUrl='https://localhost:7025/api';

export const environment: EnvironmentConfiguration = {
    env_name: 'dev',
    production: true,
    apiUrl: serverUrl,
    apiEndpoints: {
        userProfile: 'user-profiles'
    },
    adb2cConfig: {
        chatHubUrl: "",
        clientId: "",
        readScopeUrl: "",
        scopeUrls: [],
        writeScopeUrl: "",
        apiEndpointUrl: ""
    },
    cacheTimeInMinutes: 0
}