const supplier = require('../../pkb/suppliers/suppliersSchema');


exports.getAll = async (req, res) => {
    try {
        const suppliers = await supplier.find();
        res.status(200).json({
            status: 'success',
            data: {
                suppliers,
            }
        });
    }   catch (err){
        res.status(404).json({
            status: "fail",
            message: err,
        })
    };
};

exports.getOne = async (req,res) => {
    try {
        const oneSupplier = await supplier.findById(req.params.id);
        res.status(200).json ({
            status: 'success',
            data: {
                oneSupplier,
            }
        })

    }   catch (err){
        res.status(404).json({
            status: 'fail',
            message: err,
        });
    }
};

exports.createSupplier = async (req, res) => {
    try {
        const newSupplier = await supplier.create(req.body); 
        res.status(201).json({
            status: 'success',
            data: {
                newSupplier,
            }
        });
    } catch(err) {
        res.status(404).json({
            status: 'fail',
            message: err,
        });
    }
};

exports.update = async (req, res) => {
    try {
        const updateSupplier = await supplier.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
            runValidators: true,
        });

        res.status(200).json({
            status: 'success',
            data: {
                updateSupplier,
            },
        });

    }   catch (err) {
        res.status(404).json({
            status: 'fail',
            message: err,
        });

    }
};

exports.delete = async (req, res) => {
    try {
        await supplier.findByIdAndDelete(req.params.id);
        res.status(204).json({
            status: 'succsess',
            data: null,
        });

    }   catch (err) {
        res.status(404).json({
            status: 'fail',
            message: err,
        });
    }
};