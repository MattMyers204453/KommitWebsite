const express = require('express');
const path = require('path');

const app = express();

//app.use(express.static('public'))

app.use(express.static(__dirname+'/images'));
 
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'views/about.html'));
});

app.get('/about', function(req, res) {
    res.sendFile(path.join(__dirname, 'views/about.html'));
});

app.get('/download', function(req, res) {
    res.sendFile(path.join(__dirname, 'views/download.html'));
});

app.get('/members', function(req, res) {
    res.sendFile(path.join(__dirname, 'views/members.html'));
});

app.get('/tutorial', function(req, res) {
    res.sendFile(path.join(__dirname, 'views/tutorial.html'));
});
 
// Start the server
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
  console.log('Press Ctrl+C to quit.');
});