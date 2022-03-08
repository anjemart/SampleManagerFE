const express = require('express');
const path = require('path');
let app = express();

app.use(express.static('public'));
app.set('view engine', 'ejs');
app.listen(3000);

app.get('/', (req, res, next) => {
    res.render(path.join(__dirname, 'Home.ejs'));
});

app.get('/addSample', (req, res, next) => {
    res.render(path.join(__dirname, 'AddSample.ejs'));
});

app.get('/addSampleInfo', (req, res, next) => {
    res.render(path.join(__dirname, 'AddSampleInfo.ejs'));
});

app.get('/addCustomer', (req, res, next) => {
    res.render(path.join(__dirname, 'AddCustomer.ejs'));
});

app.get('/saveCustomer', (req, res, next) => {
    res.render(path.join(__dirname, 'SaveCustomer.ejs'));
});

app.get('/viewSamples', (req, res, next) => {
    res.render(path.join(__dirname, 'ViewSamples.ejs'));
});

app.get('/viewCustomers', (req, res, next) => {
    res.render(path.join(__dirname, 'ViewCustomers.ejs'));
});

app.get('/viewCheckedOutSamples', (req, res, next) => {
    res.render(path.join(__dirname, 'ViewCheckedOutSamples.ejs'));
});