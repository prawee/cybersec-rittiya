module.exports = {
    documentation: {
        enabled: true,
        config: {
            openapi: '3.0.0',
            info: {
                version: '2.0.0',
                title: 'VMS Gateway',
                description: 'Rebuild as a service',
                // termOfService: 'YOUR_TERMS_OF_SERVICE_URL',
                contact: {
                    name: 'Snap Dragon Team of Teohong',
                    email: 'teohong.developer@gmail.com',
                    url: 'teohong.com'
                },
                license: {
                    name: 'Apache 2.0',
                    url: 'https://www.apache.org/licenses/LICENSE-2.0.html',
                },
            },
            'x-strapi-config': {
                plugins: [
                    // 'upload', 
                    'users-permissions',
                ],
                path: '/docs',
            },
            servers: [
                { 
                    url: 'http://localhost:1337/api',
                    description: 'Development Server',
                }
            ],
            externalDocs: {
                description: 'Find out more',
                url: 'https://docs.strapi.io/developer-docs/latest/getting-started/introduction.html',
            },
            security: [{ bearerAuth: [] }]
        },
    },
    graphql: {
        config: {
            endpoint: '/graphql',
            shadowCRUD: true,
            playgroundAlways: false,
            depthLimit: 7,
            amountLimit: 100,
            apolloServer: {
                tracking: false,
            },
        },
    },
};