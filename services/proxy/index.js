const express = require('express');
const proxy = require('express-http-proxy');
const cors = require('cors');

const app = express();

app.use(cors());

const authProxy = proxy('http://localhost:9001', {
    proxyReqPathResolver: (req) => {
        return `/api/v1/auth${req.url}`;
    }
});

const categoryProxy = proxy ("http://localhost:9003", {
    proxyReqPathResolver: (req) => {
        return `/api/v1/category${req.url}`;
    }
});

const itemsProxy = proxy('http://localhost:9004', {
    proxyReqPathResolver: (req) => {
        return `/api/v1/items${req.url}`;
    }
});

const ordersProxy = proxy('http://localhost:9005', {
    proxyReqPathResolver: (req) => {
        return `/api/v1/orders${req.url}`;
    }
});

app.use('/api/v1/auth', authProxy);
app.use('/api/v1/category', categoryProxy);
app.use('/api/v1/items', itemsProxy);
app.use('/api/v1/orders', ordersProxy);



app.listen(process.env.PORTPROXY, (err) => {
    if (err) {
        return console.log(err)
    }
    console.log('Proxy service started on port 9002');
});



