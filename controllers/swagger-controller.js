const swaggerJSDoc = require("swagger-jsdoc");
const config =require("../service/config-service");

const swaggerDefinition = {
    openapi: "3.0.0",
    info: {
        title: "BasicAuthentication_01",
        version: "1.0.0",
        description: "Example 01 for Basic Authentication",
        contact: { name: "Your name" },
    },
    servers: [{ url: `http://${config.HOST}:` + config.PORT, },],
    components: {
        securitySchemes: {
            basicAuth: { type: "http", scheme: "basic", },
        },
    },
    security: [{ basicAuth: [] }],
};

const swaggerOptions = {
    swaggerDefinition,
    apis: ["./docs/**/*.yaml"],
};
const swaggerSpec = swaggerJSDoc(swaggerOptions);

module.exports = swaggerSpec ;