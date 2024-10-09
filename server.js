require('dotenv').config();

const express = require('express');
const sequelize = require('./core/connection');
//import path from 'path';
const cors = require('cors');
const UserRoutes = require('./routes/User');
const TaskRoutes = require('./routes/task');
const {APP_PORT, APP_SERVER_NAME} = require('./core/env');


const app = express();
const PORT = APP_PORT || 3000;

app.use(cors());
app.use(express.json());
app.use((req, res, next) => {
  res.status(404).json({ message: 'Route not found' });
});

app.use("/api/user", UserRoutes);
app.use("/api/task", TaskRoutes);


//app.listen(PORT, hostname, backlog);
const startServer = async () => {
  try {
    await sequelize.sync({alter: true});
    app.listen(PORT, () => {
      console.log(`Server is running on http://${APP_SERVER_NAME}:${PORT}`);
    });
    
  } catch (error) {
    console.log('Unable to start the server: ', error);
  }
}

startServer();
