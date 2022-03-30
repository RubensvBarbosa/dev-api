const express = require("express");
const cors = require("cors");
const app = express();
const swaggerUi = require("swagger-ui-express");
const userRoutes = require('./routes/users-route');
const securedRoutes = require('./routes/secured-route');
const auth = require("./controllers/auth-controller");
const swaggerSpec = require("./controllers/swagger-controller")
const config =require("./service/config-service");

//Sequelize test
const sequelize = require('./database/db');
const User = require('./models/user-model');

app.use(cors());
app.use(express.json());
app.use(auth);
app.use("/docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

app.use('/users', userRoutes);
app.use('/secured', securedRoutes);


// start server
app.listen(config.PORT, function () {
    console.log(`app running on ${config.HOST}:${config.PORT}`);
});










