const orders = require('../../../pkb/orders/orderSchema');



exports.getAllOrders = async (req, res) => {
    try {
        const allOrders = await orders.find();
        res.status(200).json({
            status: 'success',
            data: {
                allOrders,
            }
        });
    } catch (err) {
        res.status(404).json({
            status: "fail",
            message: err,
        });
    }
};

exports.getOneOrder = async (req, res) => {
    try {
        const oneOrder = await orders.findById(req.params.id);
        res.status(200).json({
            status: 'success',
            data: {
                oneOrder,
            }
        });

    } catch (err) {
        res.status(404).json({
            status: 'fail',
            message: err,
        });
    }
};

exports.getTotalOrderPrice = async (req, res) => {
    try {
      const price = (await orders.getTotalOrderPrice(req.auth.id)) || 0;
      return res.status(200).send({ totalPrice: price });
    } catch (err) {
      console.log(err);
      return res.status(500).send("Interval server error");
    }
  };

exports.createOrder = async (req, res) => {
    try {
        const newOrder = await orders.create(req.body);
        res.status(201).json({
            status: 'success',
            data: {
                newOrder,
            }
        });
    } catch (err) {
        res.status(404).json({
            status: 'fail',
            message: err,
        });
    }
};

exports.updateOrder = async (req, res) => {
    try {
        const updatedOrder = await orders.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
            runValidators: true,
        });

        res.status(200).json({
            status: 'success',
            data: {
                updatedOrder,
            },
        });

    } catch (err) {
        res.status(404).json({
            status: 'fail',
            message: err,
        });

    }
};