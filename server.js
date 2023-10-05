const express =  require('express');
const app = express();
const path = require('path');
const PORT = process.env.PORT || 3001;


// Middleware for parsing JSON and urlencoded form data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/api', api);

app.use(express.static('public'));

app.listen(PORT, () => {
    console.log(`App listening at http://localhost:${PORT}`);
  });