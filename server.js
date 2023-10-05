const express =  require('express');
const app = express();
const PORT = process.env.PORT || 3001;
const apiRoutes = require('./routes/apiRoute');
const htmlRoutes = require('./routes/htmlRoute');


// Middleware for parsing JSON and urlencoded form data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api', apiRoutes);
app.use(htmlRoutes);

app.use(express.static('public'));

app.listen(PORT, () => {
    console.log(`App listening at http://localhost:${PORT}`);
  });