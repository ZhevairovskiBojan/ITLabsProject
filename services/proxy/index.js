const express = require('express');
const proxy = require('express-http-proxy');
const cors = require('cors');

const app = express();

app.use(cors());

const authProxy = proxy('http://localhost:9010', {
    proxyReqPathResolver: (req) => {
        return `/api/v1/auth${req.url}`;
    }
});

const categoryProxy = proxy ("http://localhost:9030", {
    proxyReqPathResolver: (req) => {
        return `/api/v1/category${req.url}`;
    }
});

const itemsProxy = proxy('http://localhost:9040', {
    proxyReqPathResolver: (req) => {
        return `/api/v1/items${req.url}`;
    }
});

const ordersProxy = proxy('http://localhost:9050', {
    proxyReqPathResolver: (req) => {
        return `/api/v1/orders${req.url}`;
    }
});

const suppliersProxy = proxy("http://localhost:9060", {
    proxyReqPathResolver: (req) => {
        return `/api/v1/suppliers${req.url}`;
    }
});

const activityProxy = proxy("http://localhost:9070", {
    proxyReqPathResolver: (req) => {
        return `/api/v1/recentActivity${req.url}`;
    }
});

app.use('/api/v1/auth', authProxy);
app.use('/api/v1/category', categoryProxy);
app.use('/api/v1/items', itemsProxy);
app.use('/api/v1/orders', ordersProxy);
app.use('/api/v1/suppliers', suppliersProxy);
app.use('/api/v1/recentActivity', activityProxy)



app.listen(9002, (err) => {
    if (err) {
        return console.log('Error starting proxy server:', err);
    }
    console.log('Proxy service started on port 9002');
});



