const items = require('../../../pkg/items/itemsSchema');


exports.getAllItems = async (req, res) => {
    try {
        const allItems = await items.find();
        res.status(200).json({
            status: 'success',
            data: {
                allItems,
            }
        });
    }   catch (err){
        res.status(404).json({
            status: "fail",
            message: err,
        })
    };
};

exports.getOneItem = async (req,res) => {
    try {
        const oneItem = await items.findById(req.params.id);
        res.status(200).json ({
            status: 'success',
            data: {
                oneItem,
            }
        })

    }   catch (err){
        res.status(404).json({
            status: 'fail',
            message: err,
        });
    }
};

exports.createItems = async (req, res) => {
    try {
        const newItem = await items.create(req.body);
        res.status(201).json({
            status: 'success',
            data: {
                item: newItem, 
            }
        });
    } catch(err) {
        res.status(404).json({
            status: 'fail',
            message: err,
        });
    }
};

exports.updateItem = async (req, res) => {
    try {
        const updateItems = await items.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
            runValidators: true,
        });

        res.status(200).json({
            status: 'success',
            data: {
                updateItem,
            },
        });

    }   catch (err) {
        res.status(404).json({
            status: 'fail',
            message: err,
        });

    }
};

exports.deleteItem = async (req, res) => {
    try {
        await items.findByIdAndDelete(req.params.id);
        res.status(204).json({
            status: 'success',
            data: null,
        });

    }   catch (err) {
        res.status(404).json({
            status: 'fail',
            message: err,
        });
    }
};