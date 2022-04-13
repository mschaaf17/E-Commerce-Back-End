const express = require('express');
const routes = require('./routes');
// import sequelize connection
const sequelize = require('./config/connection')

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//turn on the routes
app.use(routes);


//turn on connect to db and server
// sync sequelize models to the database, then turn on the server
sequelize.sync({ force: true }).then(() => {
app.listen(PORT, () => console.log('Now listening'))
})


//code provided
// app.listen(PORT, () => {
//   console.log(`App listening on port ${PORT}!`);
// });
