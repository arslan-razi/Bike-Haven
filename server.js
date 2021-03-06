const express = require('express');
const path = require('path');
const routes = require('./controllers');
require('dotenv').config();
//db
const sequelize = require('./config/connection');
// Handlebars helper functions
//const helpers = require('./utils/helpers');
// Handlebars
const exphbs = require('express-handlebars');
const hbs = exphbs.create({  }); // Setup handlebars with helper functions
// Session / cookie
const session = require('express-session');
const SequelizeStore = require('connect-session-sequelize')(session.Store);
const sess = {
  secret: process.env.SESSION_SECRET, // store in .env folder, used to check if session is modified
  cookie: {},
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize
  })
};
const app = express();
const PORT = process.env.PORT || 3001;
// Setup view engine
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');
app.use(session(sess));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));
// Turn on routes, all done in the routes directory
app.use(routes);
// connect to mysql server, sync means taking config and connecting to associted database tables, creates on if not found
// force means to recreated all of the tables on startup if there are changes
sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () =>
    console.log(`Now listening on http://localhost:${PORT}`)
  );
});