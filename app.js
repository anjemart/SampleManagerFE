const express = require('express');
const path = require('path');
let app = express();

//define public folder for static files
app.use(express.static('public'));

app.set('view engine', 'ejs');
app.listen(3000);


//home
app.get('/', (req, res, next) => {
    res.render(path.join(__dirname, 'Home.ejs'));
});

//add
app.get('/addSample', (req, res, next) => {
    res.render(path.join(__dirname, 'add', 'AddSample.ejs'));
});

app.get('/addSampleInfo', (req, res, next) => {
    res.render(path.join(__dirname, 'add', 'AddSampleInfo.ejs'));
});

app.get('/addCustomer', (req, res, next) => {
    res.render(path.join(__dirname, 'add', 'AddCustomer.ejs'));
});

app.get('/saveCustomer', (req, res, next) => {
    res.render(path.join(__dirname, 'add', 'SaveCustomer.ejs'));
});

//lookup
app.get('/viewSamples', (req, res, next) => {
    res.render(path.join(__dirname, 'lookup', 'ViewSamples.ejs'));
});

app.get('/viewCustomers', (req, res, next) => {
    res.render(path.join(__dirname, 'lookup', 'ViewCustomers.ejs'));
});

app.get('/viewCheckedOutSamples', (req, res, next) => {
    res.render(path.join(__dirname, 'lookup', 'ViewCheckedOutSamples.ejs'));
});

//checkout
app.get('/selectSamples', (req, res, next) => {
    res.render(path.join(__dirname, 'checkout', 'SelectSample.ejs'));
});

app.get('/selectCustomer', (req, res, next) => {
    res.render(path.join(__dirname, 'checkout', 'SelectCustomer.ejs'));
});