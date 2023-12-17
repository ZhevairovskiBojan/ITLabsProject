const orders = require('../../../pkb/orders/orderSchema');
const items = require('../../../pkb/orders/orderSchema');


exports.getAllOrders = async (req, res) => {
    try {
        const allOrders = await orders.find();
        res.status(200).json({
            status: 'success',
            data: {
                allOrders,
            }
        });
    }   catch (err){
        res.status(404).json({
            status: "fail",
            message: err,
        })
    };
};

exports.getOneOrder = async (req,res) => {
    try {
        const oneOrder = await items.findById(req.params.id);
        res.status(200).json ({
            status: 'success',
            data: {
                oneOrder,
            }
        })

    }   catch (err){
        res.status(404).json({
            status: 'fail',
            message: err,
        });
    }
};

exports.createOrder = async (req, res) => {
    try {
        const newOrder = await items.create(req.body); 
        res.status(201).json({
            status: 'success',
            data: {
                newOrder,
            }
        });
    } catch(err) {
        res.status(404).json({
            status: 'fail',
            message: err,
        });
    }
};

exports.updateOrder = async (req, res) => {
    try {
        const updateOrders = await orders.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
            runValidators: true,
        });

        res.status(200).json({
            status: 'success',
            data: {
                updateOrders,
            },
        });

    }   catch (err) {
        res.status(404).json({
            status: 'fail',
            message: err,
        });

    }
};

